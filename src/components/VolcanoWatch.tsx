"use client";

import { useState } from "react";

const volcanos = [
  {
    name: "Arenal",
    region: "Alajuela Province",
    elevation: "1,670 m",
    status: "Active – Low Activity",
    statusColor: "var(--gold-sun)",
    fact: "One of the world's most active volcanos until 2010, Arenal's perfect cone shape makes it iconic.",
    emoji: "🌋",
    bgGradient: "linear-gradient(135deg, #2d5a27 0%, #1a3a15 50%, #4a3728 100%)",
  },
  {
    name: "Poás",
    region: "Alajuela Province",
    elevation: "2,708 m",
    status: "Active – Monitoring",
    statusColor: "var(--red-volcano)",
    fact: "Home to one of the world's largest and most acidic crater lakes — a surreal turquoise blue.",
    emoji: "🌋",
    bgGradient: "linear-gradient(135deg, #1a5276 0%, #2d5a27 50%, #2c1810 100%)",
  },
  {
    name: "Irazú",
    region: "Cartago Province",
    elevation: "3,432 m",
    status: "Dormant",
    statusColor: "var(--green-leaf)",
    fact: "Costa Rica's highest volcano. On a clear day, you can see both the Pacific Ocean and the Caribbean Sea from its summit.",
    emoji: "🏔️",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #2d5a27 50%, #1a3a15 100%)",
  },
  {
    name: "Rincón de la Vieja",
    region: "Guanacaste Province",
    elevation: "1,916 m",
    status: "Active – Erupting",
    statusColor: "var(--red-volcano)",
    fact: "Named 'Old Woman's Corner', this volcano features bubbling mud pots, hot springs, and fumaroles.",
    emoji: "🌋",
    bgGradient: "linear-gradient(135deg, #6b3d2e 0%, #8b1a1a 30%, #2d5a27 100%)",
  },
  {
    name: "Tenorio",
    region: "Guanacaste Province",
    elevation: "1,916 m",
    status: "Dormant",
    statusColor: "var(--green-leaf)",
    fact: "Birthplace of the stunning Río Celeste, whose milky turquoise waters look painted by the gods.",
    emoji: "🏔️",
    bgGradient: "linear-gradient(135deg, #2e86ab 0%, #2d5a27 50%, #1a5276 100%)",
  },
  {
    name: "Turrialba",
    region: "Cartago Province",
    elevation: "3,340 m",
    status: "Active – Alert Level 2",
    statusColor: "var(--gold-sun)",
    fact: "Recent eruptions have periodically closed San José's international airport with ash fall.",
    emoji: "🌋",
    bgGradient: "linear-gradient(135deg, #4a3728 0%, #8b1a1a 40%, #2c1810 100%)",
  },
];

export default function VolcanoWatch() {
  const [active, setActive] = useState(0);
  const v = volcanos[active];

  return (
    <section className="mb-8">
      <SectionHeader label="Volcano Watch" icon="🌋" tagline="Live status across Costa Rica's volcanic belt" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero display */}
        <div
          className="relative p-8 flex flex-col justify-end min-h-48"
          style={{ background: v.bgGradient }}
        >
          <div className="absolute top-4 right-4 text-4xl opacity-60">{v.emoji}</div>
          <div
            className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest px-2 py-0.5 rounded mb-3 w-fit"
            style={{ background: "rgba(0,0,0,0.4)", color: v.statusColor, border: `1px solid ${v.statusColor}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: v.statusColor }} />
            {v.status}
          </div>
          <h3 className="font-headline text-4xl font-black text-white leading-none">{v.name}</h3>
          <p className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
            {v.region} · {v.elevation}
          </p>
          <p className="font-editorial italic text-sm mt-3 max-w-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            "{v.fact}"
          </p>
        </div>

        {/* Selector tabs */}
        <div className="grid grid-cols-6" style={{ background: "var(--bg-cream)", borderTop: "1px solid var(--border-aged)" }}>
          {volcanos.map((vol, i) => (
            <button
              key={vol.name}
              onClick={() => setActive(i)}
              className="py-3 px-1 text-center transition-all"
              style={{
                borderRight: i < 5 ? `1px solid var(--border-aged)` : undefined,
                background: i === active ? "var(--ink-dark)" : undefined,
                color: i === active ? "white" : "var(--ink-medium)",
              }}
            >
              <div className="text-lg">{vol.emoji}</div>
              <div className="font-headline text-xs font-bold leading-tight mt-0.5">{vol.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ label, icon, tagline }: { label: string; icon: string; tagline?: string }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <h2 className="font-headline text-2xl font-bold" style={{ color: "var(--ink-dark)" }}>{label}</h2>
        <div className="flex-1 h-px" style={{ background: "var(--border-aged)" }} />
      </div>
      {tagline && (
        <p className="font-editorial italic text-sm mt-0.5 ml-9" style={{ color: "var(--ink-light)" }}>{tagline}</p>
      )}
    </div>
  );
}
