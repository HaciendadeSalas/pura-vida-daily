import { NextResponse } from "next/server";

export const revalidate = 21600; // 6 hours

export async function GET() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!apiKey || !folderId) {
    return NextResponse.json({ photos: [], error: "Drive API not configured" });
  }

  try {
    const query = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/' and trashed = false`);
    const fields = encodeURIComponent("files(id,name,imageMediaMetadata)");
    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}&orderBy=name&pageSize=1000&key=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 21600 } });

    if (!res.ok) {
      const err = await res.text();
      console.error("Drive API error:", err);
      return NextResponse.json({ photos: [], error: "Drive API request failed" });
    }

    const data = await res.json();
    const files: Array<{ id: string; name: string }> = data.files ?? [];

    const photos = files.map((f) => ({
      id: f.id,
      name: f.name,
      // Google Drive thumbnail endpoint — works for publicly shared files
      src: `https://drive.google.com/thumbnail?id=${f.id}&sz=w600`,
      fullSrc: `https://drive.google.com/file/d/${f.id}/view`,
    }));

    return NextResponse.json({ photos });
  } catch (err) {
    console.error("Drive fetch error:", err);
    return NextResponse.json({ photos: [], error: "Fetch failed" });
  }
}
