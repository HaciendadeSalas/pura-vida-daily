"use client";

import { useState } from "react";
import Image from "next/image";

// Photo IDs sourced from Unsplash (free license, no attribution required)
const volcanos = [
  {
    name: "Arenal",
    region: "Alajuela Province",
    elevation: "1,670 m",
    status: "Active – Low Activity",
    statusColor: "var(--gold-sun)",
    fact: "One of the world's most perfectly cone-shaped volcanos, Arenal was intensely active from 1968 to 2010 and remains closely monitored. Lake Arenal at its base is Costa Rica's largest lake.",
    photo: "https://images.unsplash.com/photo-1664532869454-53ac5942d959?w=1200&q=85&fit=crop",
    emoji: "🌋",
  },
  {
    name: "Poás",
    region: "Alajuela Province",
    elevation: "2,708 m",
    status: "Active – Monitoring",
    statusColor: "var(--red-volcano)",
    fact: "Home to one of the world's most active and acidic crater lakes — a surreal turquoise lagoon of sulfuric acid. Eruptions in 2017 and 2019 temporarily closed the national park.",
    photo: "https://images.unsplash.com/photo-1580094333632-438bdc04f79f?w=1200&q=85&fit=crop",
    emoji: "🌋",
  },
  {
    name: "Irazú",
    region: "Cartago Province",
    elevation: "3,432 m",
    status: "Dormant",
    statusColor: "var(--green-leaf)",
    fact: "Costa Rica's highest volcano. On a rare clear day, you can see both the Pacific Ocean and the Caribbean Sea from its summit. Its green crater lake is strikingly mineral-blue.",
    photo: "https://images.unsplash.com/photo-1611223156134-07ade11dfe6a?w=1200&q=85&fit=crop",
    emoji: "🏔️",
  },
  {
    name: "Rincón de la Vieja",
    region: "Guanacaste Province",
    elevation: "1,916 m",
    status: "Active – Erupting",
    statusColor: "var(--red-volcano)",
    fact: "Named 'Old Woman's Corner' in indigenous legend, this volcano features bubbling mud pots, thermal pools, and fumaroles. It has erupted dozens of times since 2011.",
    photo: "https://images.unsplash.com/photo-1745208746272-8d3b979d5f92?w=1200&q=85&fit=crop",
    emoji: "🌋",
  },
  {
    name: "Tenorio",
    region: "Guanacaste Province",
    elevation: "1,916 m",
    status: "Dormant",
    statusColor: "var(--green-leaf)",
    fact: "Birthplace of the legendary Río Celeste, whose impossibly turquoise waters are caused by a chemical reaction where two colorless rivers meet on the volcano's flank.",
    photo: "https://images.unsplash.com/photo-1658604872041-172a440e6d78?w=1200&q=85&fit=crop",
    emoji: "🏔️",
  },
  {
    name: "Turrialba",
    region: "Cartago Province",
    elevation: "3,340 m",
    status: "Active – Alert Level 2",
    statusColor: "var(--gold-sun)",
    fact: "Costa Rica's most recently active major volcano. Ash falls from Turrialba have periodically closed Juan Santamaría International Airport in San José.",
    photo: "https://images.unsplash.com/photo-1526596184130-13e95dc7561d?w=1200&q=85&fit=crop",
    emoji: "🌋",
  },
];

export default function VolcanoWatch() {
  const [active, setActive] = useState(0);
  const v = volcanos[active];

  return (
    <section className="mb-8">
      <SectionHeader label="Volcano Watch" icon="🌋" tagline="Live status across Costa Rica's volcanic belt" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero photo */}
        <div className="relative min-h-56 overflow-hidden">
          <Image
            src={v.photo}
            alt={`${v.name} Volcano, Costa Rica`}
            fill
            className="object-cover transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={active === 0}
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-widest px-2.5 py-1 rounded"
              style={{ background: "rgba(0,0,0,0.55)", color: v.statusColor, border: `1px solid ${v.statusColor}` }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: v.statusColor }} />
              {v.status}
            </span>
          </div>

          {/* Name + facts overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-headline text-4xl font-black text-white leading-none">{v.name}</h3>
            <p className="text-white/70 text-sm font-body mt-0.5">{v.region} · {v.elevation}</p>
            <p className="font-editorial italic text-sm mt-2 text-white/85 max-w-lg leading-snug">"{v.fact}"</p>
          </div>
        </div>

        {/* Tabs */}
        <TabStrip
          items={volcanos.map((vol) => ({ key: vol.name, icon: vol.emoji, label: vol.name }))}
          active={active}
          onSelect={setActive}
        />
      </div>
    </section>
  );
}

// Shared clickable tab-switcher strip — the Volcano Watch pattern, reused by any slide carousel.
export interface TabStripItem {
  key: string;
  icon: string;
  label?: string;
}

export function TabStrip({
  items,
  active,
  onSelect,
  compact = false,
}: {
  items: TabStripItem[];
  active: number;
  onSelect: (i: number) => void;
  compact?: boolean;
}) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
        background: "var(--bg-cream)",
        borderTop: "1px solid var(--border-aged)",
      }}
    >
      {items.map((item, i) => (
        <button
          key={item.key}
          onClick={() => onSelect(i)}
          className={`text-center transition-colors ${compact ? "py-1.5 px-0.5" : "py-3 px-1"}`}
          style={{
            borderRight: i < items.length - 1 ? `1px solid var(--border-aged)` : undefined,
            background: i === active ? "var(--ink-dark)" : undefined,
            color: i === active ? "white" : "var(--ink-medium)",
          }}
        >
          <div className={compact ? "text-sm leading-none" : "text-base"}>{item.icon}</div>
          {item.label && (
            <div className="font-headline text-xs font-bold leading-tight mt-0.5">{item.label}</div>
          )}
        </button>
      ))}
    </div>
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
