import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=CRC", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    const rate = data?.rates?.CRC;
    return NextResponse.json({ rate: rate ? rate.toFixed(2) : null });
  } catch {
    return NextResponse.json({ rate: null });
  }
}
