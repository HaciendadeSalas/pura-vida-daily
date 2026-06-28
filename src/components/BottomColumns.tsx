"use client";

import { SectionHeader } from "./VolcanoWatch";

// ─── Coffee Corner ────────────────────────────────────────────────
function CoffeeCorner() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-center py-6 rounded" style={{ background: "linear-gradient(160deg, #6b3d2e, #4a3728)" }}>
        <div className="text-5xl mb-2">☕</div>
        <div className="font-headline text-white font-bold text-lg">Café Chorreado</div>
        <div className="font-editorial italic text-white/70 text-xs mt-1">The traditional Costa Rican brew</div>
      </div>
      <div
        className="rounded p-3 text-sm font-editorial italic leading-relaxed"
        style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--brown-coffee)" }}
      >
        Costa Rica is the only country in the world with a constitutional provision protecting the environment. Its coffee, grown between 800–1,600m altitude, is singular in character — bright, clean, and full of fruit.
      </div>
      <div className="space-y-2">
        {[
          { label: "Today's Origin", value: "Tarrazú Region" },
          { label: "Altitude", value: "1,800 masl" },
          { label: "Process", value: "Honey Process" },
          { label: "Tasting Notes", value: "Peach · Brown Sugar · Bright Acidity" },
          { label: "Roast", value: "Medium Light" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "4px" }}>
            <span className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{item.label}</span>
            <span className="font-headline font-bold" style={{ color: "var(--brown-coffee)" }}>{item.value}</span>
          </div>
        ))}
      </div>
      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        🌱 CR law mandates all coffee be 100% pure — no blending allowed. A cup of Tarrazú is genuinely one of the world's finest.
      </p>
    </div>
  );
}

// ─── Culture & History ────────────────────────────────────────────
function CultureHistory() {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="rounded p-5 text-center"
        style={{ background: "linear-gradient(160deg, #4a3728, #2c1810)" }}
      >
        <div className="text-5xl mb-2">🛺</div>
        <div className="font-headline text-white font-bold text-lg">The Ox Cart</div>
        <div className="font-editorial italic text-white/70 text-xs mt-1">UNESCO Intangible Cultural Heritage</div>
      </div>
      <div
        className="rounded p-3 text-sm font-editorial italic leading-relaxed"
        style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--brown-bark)" }}
      >
        In the late 19th century, brightly painted ox carts (carretas) carried coffee down from the Central Valley to Puntarenas. Each region developed its own geometric patterns — a family's cart was as unique as a fingerprint.
      </div>
      <div className="space-y-2">
        {[
          { label: "Origin", value: "Sarchí, Alajuela" },
          { label: "UNESCO Status", value: "Since 2005" },
          { label: "Symbol of", value: "Tico Work Ethic & Pride" },
          { label: "Festival", value: "Día del Boyero – March" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "4px" }}>
            <span className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{item.label}</span>
            <span className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{item.value}</span>
          </div>
        ))}
      </div>
      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        🎨 The artisans of Sarchí still paint intricate mandala-like designs by hand — every single cart one of a kind.
      </p>
    </div>
  );
}

// ─── Football / Liga Deportiva ────────────────────────────────────
function FootballSection() {
  const matches = [
    { home: "Deportivo Saprissa", away: "LD Alajuelense", date: "Jul 5", time: "3:00 PM", venue: "Estadio Saprissa" },
    { home: "Herediano", away: "Pérez Zeledón", date: "Jul 6", time: "1:00 PM", venue: "Estadio Fello Meza" },
    { home: "Cartaginés", away: "Santos FC", date: "Jul 7", time: "5:00 PM", venue: "Estadio José Cubero" },
  ];
  const standings = [
    { pos: 1, team: "Saprissa", pts: 42, emoji: "🟣" },
    { pos: 2, team: "Alajuelense", pts: 38, emoji: "🔴" },
    { pos: 3, team: "Herediano", pts: 35, emoji: "🟡" },
    { pos: 4, team: "Cartaginés", pts: 29, emoji: "🔵" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div
        className="rounded p-4 text-center"
        style={{ background: "linear-gradient(160deg, #1a5276, #2d5a27)" }}
      >
        <div className="text-4xl mb-1">⚽</div>
        <div className="font-headline text-white font-bold text-lg">Liga Deportiva Alajuelense</div>
        <div className="font-editorial italic text-white/70 text-xs">UNAFUT · Primera División 2026</div>
      </div>

      <div className="text-xs font-body uppercase tracking-widest mb-1" style={{ color: "var(--ink-light)" }}>Upcoming Fixtures</div>
      <div className="space-y-1.5">
        {matches.map((m) => (
          <div key={m.home} className="rounded p-2 text-xs" style={{ background: "var(--bg-parchment)", border: "1px solid var(--border-aged)" }}>
            <div className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{m.home} vs {m.away}</div>
            <div style={{ color: "var(--ink-light)" }}>📅 {m.date} · {m.time} · {m.venue}</div>
          </div>
        ))}
      </div>

      <div className="text-xs font-body uppercase tracking-widest mt-2 mb-1" style={{ color: "var(--ink-light)" }}>Standings</div>
      <div className="space-y-1">
        {standings.map((s) => (
          <div key={s.team} className="flex items-center gap-2 text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
            <span className="font-body" style={{ color: "var(--ink-light)", width: 14 }}>{s.pos}.</span>
            <span>{s.emoji}</span>
            <span className="font-headline font-bold flex-1" style={{ color: "var(--ink-dark)" }}>{s.team}</span>
            <span className="font-body font-semibold" style={{ color: "var(--green-jungle)" }}>{s.pts} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────
function Countdown() {
  const target = new Date("2026-10-01T00:00:00-06:00");
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  const photos = ["🏖️", "🌋", "🦜", "☕", "🌿", "🌅"];

  return (
    <div className="flex flex-col gap-3">
      {/* Big countdown */}
      <div
        className="rounded p-5 text-center"
        style={{ background: "linear-gradient(160deg, #2d5a27, #1a5276)" }}
      >
        <div className="font-body text-white/70 text-xs uppercase tracking-widest mb-1">Arriving in</div>
        <div className="font-headline text-white font-black text-6xl leading-none">{days}</div>
        <div className="font-body text-white/80 text-sm mt-1">days · {hours} hours</div>
        <div className="font-editorial italic text-white/60 text-xs mt-2">October 1, 2026 · Costa Rica 🇨🇷</div>
      </div>

      {/* Photo grid placeholder */}
      <div className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
        Your Photos · Google Drive
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {photos.map((p, i) => (
          <div
            key={i}
            className="aspect-square rounded flex items-center justify-center text-3xl"
            style={{ background: "var(--bg-parchment)", border: "1px dashed var(--border-aged)" }}
          >
            {p}
          </div>
        ))}
      </div>
      <p className="font-body text-xs text-center" style={{ color: "var(--ink-light)" }}>
        📁 Real photos will load from your Google Drive folder
      </p>

      <div
        className="rounded p-3 text-sm font-editorial italic text-center"
        style={{ background: "var(--bg-parchment)", color: "var(--green-jungle)", border: "1px solid var(--border-aged)" }}
      >
        "Adventure is calling — and it speaks Spanish." 🌺
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────
export default function BottomColumns() {
  return (
    <section className="mb-8">
      <SectionHeader label="Around the Finca" icon="🌺" tagline="Coffee · Culture · Fútbol · Your Journey" />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded overflow-hidden border"
        style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
      >
        {[
          { title: "Coffee Corner", icon: "☕", component: <CoffeeCorner /> },
          { title: "Culture & History", icon: "🛺", component: <CultureHistory /> },
          { title: "Liga Deportiva", icon: "⚽", component: <FootballSection /> },
          { title: "Countdown", icon: "🗓️", component: <Countdown /> },
        ].map((col, i) => (
          <div
            key={col.title}
            className="p-4 flex flex-col"
            style={{ borderRight: i < 3 ? "1px solid var(--border-aged)" : undefined }}
          >
            <div
              className="flex items-center gap-2 pb-2 mb-3"
              style={{ borderBottom: "2px solid var(--ink-dark)" }}
            >
              <span>{col.icon}</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wide" style={{ color: "var(--ink-dark)" }}>
                {col.title}
              </span>
            </div>
            {col.component}
          </div>
        ))}
      </div>
    </section>
  );
}
