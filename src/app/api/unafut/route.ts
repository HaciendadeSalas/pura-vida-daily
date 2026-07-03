import { NextResponse } from "next/server";

export const revalidate = 86400; // refresh once a day

// Costa Rica Primera División standings, scraped from UNAFUT's own site.
// API-Football's free plan only covers seasons 2022-2024 (not the current
// season), but UNAFUT server-renders a live standings table built on the
// SportsPress WordPress plugin, so we parse that instead. No official API —
// see parseStandings() for how fragile this is and what would need to
// change if it breaks.
const SOURCE_URL = "https://www.unafut.com/posiciones/";
const USER_AGENT = "PuraVidaDaily/1.0 (personal dashboard; contact: robertson.d.lindsay@gmail.com)";

type StandingRow = {
  rank: number;
  team: string;
  logo: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
};

type UnafutData = {
  standings: StandingRow[];
  lastUpdated: string; // ISO timestamp of the last successful scrape
};

// Last known-good result, kept in memory so a failed scrape (site down,
// markup changed) can still serve real data instead of breaking the card.
let lastGood: UnafutData | null = null;

function parseStandings(html: string): StandingRow[] {
  const tableMarker = html.indexOf("sp-league-table");
  if (tableMarker === -1) throw new Error("sp-league-table not found in UNAFUT page — markup may have changed");

  const tableStart = html.lastIndexOf("<table", tableMarker);
  const tableEnd = html.indexOf("</table>", tableMarker);
  if (tableStart === -1 || tableEnd === -1) throw new Error("Could not locate table boundaries around sp-league-table");

  const table = html.slice(tableStart, tableEnd + "</table>".length);
  const rowChunks = table.split('<tr class="sp-row-no-').slice(1);

  const standings: StandingRow[] = rowChunks.map((chunk, i) => {
    const rank = chunk.match(/data-rank colorlabel"\s*data-label="Pos">(\d+)</)?.[1];
    const team = chunk.match(/data-name has-logo"[\s\S]*?<\/span>\s*([^<\n]+?)\s*\n/)?.[1]?.trim();
    const logo = chunk.match(/<img[^>]*src="([^"]+)"/)?.[1];
    const played = chunk.match(/data-p" data-label="PJ">(\d+)</)?.[1];
    const won = chunk.match(/data-w" data-label="G">(\d+)</)?.[1];
    const drawn = chunk.match(/data-d" data-label="E">(\d+)</)?.[1];
    const lost = chunk.match(/data-l" data-label="P">(\d+)</)?.[1];
    const points = chunk.match(/data-pts" data-label="Pts">(\d+)</)?.[1];

    if (!rank || !team || !played || !won || !drawn || !lost || !points) {
      throw new Error(`Row ${i} missing expected fields (rank/team/played/won/drawn/lost/points)`);
    }

    return {
      rank: Number(rank),
      team,
      logo: logo ?? "",
      points: Number(points),
      played: Number(played),
      won: Number(won),
      drawn: Number(drawn),
      lost: Number(lost),
    };
  });

  if (standings.length === 0) throw new Error("Parsed zero standings rows from UNAFUT table");
  return standings;
}

export async function GET() {
  try {
    const res = await fetch(SOURCE_URL, {
      headers: { "User-Agent": USER_AGENT },
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error(`UNAFUT request failed: ${res.status}`);

    const html = await res.text();
    const standings = parseStandings(html);

    lastGood = { standings, lastUpdated: new Date().toISOString() };
    return NextResponse.json(lastGood);
  } catch (err) {
    console.error("UNAFUT scrape error:", err);
    if (lastGood) {
      return NextResponse.json({ ...lastGood, stale: true });
    }
    return NextResponse.json({ standings: [], lastUpdated: null, error: "Standings unavailable" });
  }
}
