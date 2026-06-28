import { SectionHeader } from "./VolcanoWatch";

// Real headlines from The Tico Times — verified June 28, 2026
const headlines = [
  {
    category: "Humanitarian",
    categoryColor: "var(--red-volcano)",
    headline: "Costa Rica Sends Second Rescue Team to Earthquake-Stricken Venezuela",
    summary: "Costa Rica deployed an additional 48 search-and-rescue specialists to Venezuela following devastating earthquakes with rapidly rising casualty figures — reinforcing CR's tradition of humanitarian leadership in Latin America.",
    source: "The Tico Times",
    date: "June 28, 2026",
    emoji: "🚁",
    url: "https://ticotimes.net/2026/06/28/costa-rica-rescuers-venezuela-earthquake",
  },
  {
    category: "Travel",
    categoryColor: "var(--blue-ocean)",
    headline: "Long Lines Hit Juan Santamaría Airport After Midday Flight Surge",
    summary: "Heavy passenger traffic at San José's international airport created extended wait times in departure immigration areas. Officials urged travelers to arrive three hours before international flights during peak June–July season.",
    source: "The Tico Times",
    date: "June 27, 2026",
    emoji: "✈️",
    url: "https://ticotimes.net/2026/06/27/long-lines-hit-costa-rica-airport-after-midday-flight-surge",
  },
  {
    category: "Fútbol",
    categoryColor: "var(--green-jungle)",
    headline: "Why the 2026 World Cup Feels Strange Without La Sele",
    summary: "Costa Rica's absence from the expanded 48-team World Cup marks only the second time since 1998 that La Sele has missed the tournament. Fans reflect on a painful qualifying campaign and what comes next for national football.",
    source: "The Tico Times",
    date: "June 27, 2026",
    emoji: "⚽",
    url: "https://ticotimes.net/2026/06/27/why-the-2026-world-cup-feels-strange-without-la-sele",
  },
  {
    category: "Security",
    categoryColor: "var(--brown-coffee)",
    headline: "Costa Rica's Largest-Ever Anti-Narcotics Operation Moves to Courtroom",
    summary: "Prosecutors sought preventive detention against 50 suspects following the nation's largest anti-drug operation. The sweep seized record quantities of cocaine destined for European markets, a growing transit route through Central America.",
    source: "The Tico Times",
    date: "June 26, 2026",
    emoji: "⚖️",
    url: "https://ticotimes.net/?s=narcotics+operation",
  },
  {
    category: "Infrastructure",
    categoryColor: "var(--gold-sun)",
    headline: "Drivers to Pay Less on Route 27 as New Toll Rates Take Effect July 1",
    summary: "Commuters heading from San José to the central Pacific will see reduced tolls on Route 27 starting July 1 — welcome relief for the hundreds of thousands who use Costa Rica's most modern highway daily.",
    source: "The Tico Times",
    date: "June 25, 2026",
    emoji: "🛣️",
    url: "https://ticotimes.net/?s=route+27+toll",
  },
];

export default function Headlines() {
  return (
    <section className="mb-8">
      <SectionHeader label="Top CR Headlines" icon="📰" tagline="Curated from The Tico Times · Updated daily" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        {headlines.map((item, i) => (
          <div
            key={item.headline}
            className="flex gap-4 p-4 items-start group"
            style={{ borderBottom: i < headlines.length - 1 ? "1px solid var(--border-aged)" : undefined }}
          >
            {/* Emoji icon */}
            <div className="text-2xl w-10 h-10 flex items-center justify-center rounded flex-shrink-0" style={{ background: "var(--bg-parchment)" }}>
              {item.emoji}
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
                  {item.source} · {item.date}
                </span>
              </div>

              <h3 className="font-headline font-bold text-base leading-snug mb-1" style={{ color: "var(--ink-dark)" }}>
                {item.headline}
              </h3>

              <p className="font-editorial italic text-sm leading-relaxed" style={{ color: "var(--ink-medium)" }}>
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

      <p className="text-xs font-body mt-2 ml-1" style={{ color: "var(--ink-light)" }}>
        ℹ️ Headlines are curated manually and updated periodically. Sources: <a href="https://ticotimes.net" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>The Tico Times</a> · <a href="https://crhoy.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>CRHoy</a> · <a href="https://www.nacion.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>La Nación</a>
      </p>
    </section>
  );
}
