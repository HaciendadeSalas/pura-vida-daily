import Parser from "rss-parser";
import HeadlinesContent from "./HeadlinesContent";

const FEED_URL = "https://ticotimes.net/feed";
const TOP_HEADLINE_COUNT = 3;
const CR_TIMEZONE = "America/Costa_Rica";

const CATEGORY_COLORS = [
  "var(--red-volcano)",
  "var(--blue-ocean)",
  "var(--green-jungle)",
  "var(--brown-coffee)",
  "var(--gold-sun)",
];

// Every item is tagged "News" and often "Featured" — skip those in favor of a more specific topic when one exists.
const GENERIC_CATEGORIES = new Set(["Featured", "News"]);

export type Headline = {
  category: string;
  categoryColor: string;
  headline: string;
  summary: string;
  date: string;
  image?: string;
  url: string;
};

function extractImage(html: string | undefined): string | undefined {
  return html?.match(/<img[^>]+src="([^"]+)"/)?.[1];
}

function summarize(text: string | undefined, maxLength = 220): string {
  if (!text) return "";
  const trimmed = text.trim();
  return trimmed.length > maxLength ? `${trimmed.slice(0, maxLength).trimEnd()}…` : trimmed;
}

async function getHeadlines(): Promise<Headline[] | null> {
  try {
    // `revalidate` here is redundant with the Home route's own `export const revalidate = 86400`,
    // but set explicitly so this fetch is cached/refreshed daily regardless of route config.
    // A browser-like User-Agent is required — ticotimes.net returns 403 for the default fetch UA.
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PuraVidaDailyBot/1.0)" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`Feed request failed with status ${res.status}`);

    const xml = await res.text();
    const feed = await new Parser().parseString(xml);

    return feed.items.slice(0, TOP_HEADLINE_COUNT).map((item, i) => ({
      category: item.categories?.find((c) => !GENERIC_CATEGORIES.has(c)) ?? item.categories?.[0] ?? "News",
      categoryColor: CATEGORY_COLORS[i % CATEGORY_COLORS.length],
      headline: item.title ?? "Untitled",
      summary: summarize(item.contentSnippet),
      date: item.isoDate
        ? new Date(item.isoDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: CR_TIMEZONE })
        : "",
      image: extractImage(item.content),
      url: item.link ?? FEED_URL,
    }));
  } catch (err) {
    console.error("Failed to load Tico Times RSS feed:", err);
    return null;
  }
}

export default async function Headlines() {
  const headlines = await getHeadlines();
  return <HeadlinesContent headlines={headlines} />;
}
