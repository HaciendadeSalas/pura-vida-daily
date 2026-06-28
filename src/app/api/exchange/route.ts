import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    if (data?.result !== "success") throw new Error("API error");
    const rate = data?.rates?.CRC;
    if (!rate) throw new Error("CRC rate missing");
    return NextResponse.json({ rate: rate.toFixed(2) });
  } catch {
    return NextResponse.json({ rate: null, error: true });
  }
}
