"use client";

const cards = [
  {
    icon: "🌦",
    label: "Weather",
    sublabel: "San José (SJO)",
    main: "26°C / 79°F",
    detail: "Partly Cloudy",
    extra: "Humidity 72% · Wind 12 km/h NE",
    color: "var(--blue-sky)",
  },
  {
    icon: "🌅",
    label: "Sunrise & Sunset",
    sublabel: "Costa Rica",
    main: "5:32 AM · 6:08 PM",
    detail: "Daylight: 12h 36m",
    extra: "Golden Hour: 5:08 – 5:35 PM",
    color: "var(--gold-sun)",
  },
  {
    icon: "🌊",
    label: "Tides",
    sublabel: "Guanacaste Pacific",
    main: "High: 2.4m @ 10:14 AM",
    detail: "Low: 0.3m @ 4:28 PM",
    extra: "Next High: 11:02 PM",
    color: "var(--blue-ocean)",
  },
  {
    icon: "💵",
    label: "Exchange Rate",
    sublabel: "USD → CRC",
    main: "₡ 515.40",
    detail: "per 1 US Dollar",
    extra: "Updated: 6:00 AM today",
    color: "var(--green-jungle)",
  },
];

export default function InfoGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8 rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
      {cards.map((card, i) => (
        <div
          key={card.label}
          className="p-4 flex flex-col gap-1"
          style={{
            background: "var(--bg-cream)",
            borderRight: i < 3 ? `1px solid var(--border-aged)` : undefined,
            borderBottom: i < 2 ? `1px solid var(--border-aged)` : undefined,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{card.icon}</span>
            <div>
              <div className="font-headline text-xs font-bold uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
                {card.label}
              </div>
              <div className="text-xs font-body" style={{ color: "var(--ink-light)", opacity: 0.7 }}>
                {card.sublabel}
              </div>
            </div>
          </div>

          <div className="font-headline text-lg font-bold leading-tight" style={{ color: card.color }}>
            {card.main}
          </div>
          <div className="font-editorial italic text-sm" style={{ color: "var(--ink-medium)" }}>
            {card.detail}
          </div>
          <div className="font-body text-xs mt-1 pt-1" style={{ color: "var(--ink-light)", borderTop: "1px solid var(--border-aged)" }}>
            {card.extra}
          </div>
        </div>
      ))}
    </section>
  );
}
