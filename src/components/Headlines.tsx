import Image from "next/image";
import Parser from "rss-parser";
import { SectionHeader } from "./VolcanoWatch";

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

type Headline = {
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

  return (
    <section className="mb-8">
      <SectionHeader label="Top CR Headlines" icon="📰" tagline="Live from The Tico Times · Updated daily" />

      {headlines ? (
        <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
          {headlines.map((item, i) => (
            <div
              key={item.url}
              className="flex gap-4 p-4 items-start group"
              style={{ borderBottom: i < headlines.length - 1 ? "1px solid var(--border-aged)" : undefined }}
            >
              {/* Thumbnail (falls back to a plain icon when the feed has no image) */}
              <div className="relative overflow-hidden text-2xl w-10 h-10 flex items-center justify-center rounded flex-shrink-0" style={{ background: "var(--bg-parchment)" }}>
                {item.image ? (
                  <Image src={item.image} alt="" fill sizes="40px" className="object-cover" />
                ) : (
                  "📰"
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-xs font-body font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{ background: item.categoryColor, color: "white" }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs font-body" style={{ color: "var(--ink-light)" }}>
                    The Tico Times{item.date ? ` · ${item.date}` : ""}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-base leading-snug mb-1" style={{ color: "var(--ink-dark)" }}>
                  {item.headline}
                </h3>

                <p className="font-editorial italic text-base leading-relaxed" style={{ color: "var(--ink-medium)" }}>
                  {item.summary}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body font-semibold flex-shrink-0 underline hover:no-underline"
                style={{ color: "var(--blue-ocean)" }}
              >
                Read →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded overflow-hidden border p-5 text-center" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
          <p className="font-editorial italic" style={{ color: "var(--ink-medium)" }}>
            📰 Headlines unavailable right now — please check back soon.
          </p>
        </div>
      )}

      <p className="text-xs font-body mt-2 ml-1" style={{ color: "var(--ink-light)" }}>
        ℹ️ Headlines are pulled live from The Tico Times RSS feed and refresh daily. Sources: <a href="https://ticotimes.net" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>The Tico Times</a> · <a href="https://crhoy.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>CRHoy</a> · <a href="https://www.nacion.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>La Nación</a>
      </p>
    </section>
  );
}
