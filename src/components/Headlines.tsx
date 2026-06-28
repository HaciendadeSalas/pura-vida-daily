import { SectionHeader } from "./VolcanoWatch";

const headlines = [
  {
    category: "Economy",
    categoryColor: "var(--green-jungle)",
    headline: "Costa Rica Signs Historic Green Energy Accord with EU, Aims for 100% Renewables by 2030",
    summary: "The agreement will funnel €240 million into solar and geothermal infrastructure, reinforcing CR's reputation as a global environmental leader.",
    source: "La Nación",
    time: "6:30 AM",
    emoji: "⚡",
  },
  {
    category: "Tourism",
    categoryColor: "var(--blue-ocean)",
    headline: "Guanacaste Airport Breaks Record with 1.2 Million Passengers in Q2 2026",
    summary: "The Daniel Oduber International Airport saw a 34% year-over-year increase, driven by new direct routes from the US and Canada.",
    source: "The Tico Times",
    time: "7:15 AM",
    emoji: "✈️",
  },
  {
    category: "Nature",
    categoryColor: "var(--green-leaf)",
    headline: "Leatherback Sea Turtle Nesting Season Sees Highest Numbers in Two Decades",
    summary: "Scientists at Playa Grande recorded over 3,400 nesting events this season — a sign that conservation efforts are paying off.",
    source: "CRHoy",
    time: "8:00 AM",
    emoji: "🐢",
  },
  {
    category: "Politics",
    categoryColor: "var(--brown-coffee)",
    headline: "President Signs New Digital Nomad Visa Extension Law — Up to 2 Years Allowed",
    summary: "The legislation extends the popular digital nomad permit to 24 months, with simplified renewal requirements for remote workers earning over $3,000/month.",
    source: "Inside Costa Rica",
    time: "9:30 AM",
    emoji: "🛂",
  },
  {
    category: "Culture",
    categoryColor: "var(--gold-sun)",
    headline: "Cartago's Basílica de los Ángeles Celebrates 340 Years with Record Pilgrimage",
    summary: "An estimated 2 million pilgrims made the journey to Cartago this August 2nd, honoring La Negrita in one of Latin America's largest religious events.",
    source: "La Nación",
    time: "10:00 AM",
    emoji: "⛪",
  },
];

export default function Headlines() {
  return (
    <section className="mb-8">
      <SectionHeader label="Top CR Headlines" icon="📰" tagline="Curated news from across Costa Rica" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        {headlines.map((item, i) => (
          <div
            key={item.headline}
            className="flex gap-4 p-4 items-start"
            style={{ borderBottom: i < headlines.length - 1 ? "1px solid var(--border-aged)" : undefined }}
          >
            {/* Emoji icon */}
            <div
              className="text-2xl w-10 h-10 flex items-center justify-center rounded flex-shrink-0"
              style={{ background: "var(--bg-parchment)" }}
            >
              {item.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-body font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ background: item.categoryColor, color: "white" }}
                >
                  {item.category}
                </span>
                <span className="text-xs font-body" style={{ color: "var(--ink-light)" }}>
                  {item.source} · {item.time}
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
              href="#"
              className="text-xs font-body font-semibold flex-shrink-0 underline"
              style={{ color: "var(--blue-ocean)" }}
            >
              Read →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
