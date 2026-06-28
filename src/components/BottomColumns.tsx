"use client";

import { useEffect, useState } from "react";
import { SectionHeader } from "./VolcanoWatch";

interface DrivePhoto {
  id: string;
  name: string;
  src: string;
  fullSrc: string;
}

// ─── Coffee Corner ────────────────────────────────────────────────
function CoffeeCorner() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-center py-5 rounded" style={{ background: "linear-gradient(160deg, #6b3d2e, #4a3728)" }}>
        <div className="text-4xl mb-2">☕</div>
        <div className="font-headline text-white font-bold text-base">Hacienda Alsacia</div>
        <div className="font-editorial italic text-white/70 text-xs mt-0.5">Starbucks' Only Farm · La Garita, Alajuela</div>
      </div>

      <div
        className="rounded p-3 text-sm font-editorial italic leading-relaxed"
        style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--brown-coffee)" }}
      >
        In 2013, Starbucks purchased Hacienda Alsacia — the only coffee farm the company owns in the world. Located in La Garita, Alajuela, it serves as both a working farm and a living laboratory for sustainable coffee growing.
      </div>

      <div className="space-y-1.5">
        {[
          { label: "Farm Size", value: "240 hectares" },
          { label: "Altitude", value: "1,200–1,500 masl" },
          { label: "Varietals", value: "Caturra, Catuaí, Gesha" },
          { label: "Founded", value: "1994 (acquired 2013)" },
          { label: "Tours", value: "Open to visitors year-round" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
            <span className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{item.label}</span>
            <span className="font-headline font-bold" style={{ color: "var(--brown-coffee)" }}>{item.value}</span>
          </div>
        ))}
      </div>

      <div
        className="rounded p-3 text-xs font-editorial italic leading-relaxed"
        style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--gold-sun)" }}
      >
        ✨ <strong>Café Britt</strong>, founded in Heredia in 1985, was the first company to roast and export gourmet CR coffee for international tourists — transforming how the world saw Costa Rican beans.
      </div>

      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        🌱 CR law (since 1988) mandates all exported coffee be 100% pure Arabica — no robusta blends allowed. A cup of Tarrazú is one of the world's finest.
      </p>
    </div>
  );
}

// ─── Culture & History ────────────────────────────────────────────
function CultureHistory() {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="rounded p-4 text-center"
        style={{ background: "linear-gradient(160deg, #4a3728, #2c1810)" }}
      >
        <div className="text-4xl mb-1">🎭</div>
        <div className="font-headline text-white font-bold text-base">Teatro Nacional</div>
        <div className="font-editorial italic text-white/70 text-xs mt-0.5">San José · Built 1897 · Financed by Coffee</div>
      </div>

      <div
        className="rounded p-3 text-sm font-editorial italic leading-relaxed"
        style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--brown-bark)" }}
      >
        In 1890, Costa Rican coffee barons taxed themselves to fund a world-class opera house after the touring company of Adelina Patti refused to stop in San José. The Teatro Nacional opened in 1897 — still the most beautiful building in Central America.
      </div>

      <div className="space-y-1.5">
        {[
          { label: "Built", value: "1891–1897" },
          { label: "Funded by", value: "Coffee export tax" },
          { label: "Style", value: "Neo-Renaissance" },
          { label: "Famous for", value: "Allegory of Coffee mural" },
          { label: "Location", value: "Plaza de la Cultura, SJO" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
            <span className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{item.label}</span>
            <span className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{item.value}</span>
          </div>
        ))}
      </div>

      <div
        className="rounded p-3 text-xs font-editorial italic leading-relaxed"
        style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--green-jungle)" }}
      >
        🛺 The <strong>Ox Cart (Carreta)</strong> of Sarchí is UNESCO Intangible Heritage — each cart hand-painted with unique geometric mandalas. The tradition began in the 1800s when oxen carried coffee to Puntarenas.
      </div>

      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        🏛️ Costa Rica abolished its army in 1948 — redirecting military spending to education and healthcare. CR now has one of the highest literacy rates in Latin America.
      </p>
    </div>
  );
}

// ─── Football / Liga Deportiva ────────────────────────────────────
function FootballSection() {
  const matches = [
    { home: "Saprissa", away: "Alajuelense", date: "Jul 5", time: "3:00 PM", venue: "Est. Saprissa" },
    { home: "Herediano", away: "Pérez Zeledón", date: "Jul 6", time: "1:00 PM", venue: "Est. Fello Meza" },
    { home: "Cartaginés", away: "Santos FC", date: "Jul 7", time: "5:00 PM", venue: "Est. José Cubero" },
  ];
  const standings = [
    { pos: 1, team: "Saprissa", pts: 42, emoji: "🟣", note: "Morado" },
    { pos: 2, team: "Alajuelense", pts: 38, emoji: "🔴", note: "Liga" },
    { pos: 3, team: "Herediano", pts: 35, emoji: "🟡", note: "Team de Provincia" },
    { pos: 4, team: "Cartaginés", pts: 29, emoji: "🔵", note: "Brumosos" },
    { pos: 5, team: "Pérez Zeledón", pts: 21, emoji: "⚫", note: "Los Guerreros" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div
        className="rounded p-3 text-center"
        style={{ background: "linear-gradient(160deg, #1a5276, #2d5a27)" }}
      >
        <div className="text-3xl mb-1">⚽</div>
        <div className="font-headline text-white font-bold text-base">UNAFUT · Apertura 2026</div>
        <div className="font-editorial italic text-white/70 text-xs">Primera División de Costa Rica</div>
      </div>

      <div className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>Upcoming Fixtures</div>
      <div className="space-y-1.5">
        {matches.map((m) => (
          <div key={m.home} className="rounded p-2 text-xs" style={{ background: "var(--bg-parchment)", border: "1px solid var(--border-aged)" }}>
            <div className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{m.home} vs {m.away}</div>
            <div className="mt-0.5" style={{ color: "var(--ink-light)" }}>📅 {m.date} · {m.time} · {m.venue}</div>
          </div>
        ))}
      </div>

      <div className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>Standings</div>
      <div className="space-y-1">
        {standings.map((s) => (
          <div key={s.team} className="flex items-center gap-2 text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
            <span className="font-body" style={{ color: "var(--ink-light)", minWidth: 14 }}>{s.pos}.</span>
            <span>{s.emoji}</span>
            <span className="font-headline font-bold flex-1" style={{ color: "var(--ink-dark)" }}>{s.team}</span>
            <span className="font-body font-semibold" style={{ color: "var(--green-jungle)" }}>{s.pts} pts</span>
          </div>
        ))}
      </div>

      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        ⚽ Standings are illustrative. Live data via UNAFUT API coming soon.
      </p>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────
function Countdown() {
  const target = new Date("2026-10-01T00:00:00-06:00");
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const [photos, setPhotos] = useState<DrivePhoto[]>([]);
  const [photoStatus, setPhotoStatus] = useState<"loading" | "ready" | "unconfigured" | "error">("loading");

  useEffect(() => {
    fetch("/api/drive-photos")
      .then((r) => r.json())
      .then((data) => {
        if (data.error === "Drive API not configured") {
          setPhotoStatus("unconfigured");
        } else if (data.photos?.length > 0) {
          setPhotos(data.photos.slice(0, 6));
          setPhotoStatus("ready");
        } else {
          setPhotoStatus("error");
        }
      })
      .catch(() => setPhotoStatus("error"));
  }, []);

  const milestones = [
    { label: "Guanacaste Sunsets", done: false },
    { label: "Coffee on the Patio", done: false },
    { label: "Swim in the Pacific", done: false },
    { label: "First Pura Vida Said", done: false },
    { label: "Volcano Hike", done: false },
    { label: "Fresh Ceviche", done: false },
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* Big countdown */}
      <div className="rounded overflow-hidden" style={{ background: "linear-gradient(160deg, #2d5a27, #1a5276)" }}>
        <div className="p-4 text-center">
          <div className="font-body text-white/70 text-xs uppercase tracking-widest mb-1">Arriving in</div>
          <div className="font-headline text-white font-black text-5xl leading-none">{days}</div>
          <div className="font-body text-white/80 text-sm mt-1">
            days · {hours}h · {mins}m
          </div>
          <div className="font-editorial italic text-white/60 text-xs mt-2">October 1, 2026 · ¡Pura Vida! 🇨🇷</div>
        </div>
        <div className="h-1.5" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full transition-all"
            style={{
              width: `${Math.min(100, Math.max(0, ((365 - days) / 365) * 100))}%`,
              background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))",
            }}
          />
        </div>
      </div>

      {/* Photo grid */}
      <div className="flex items-center justify-between">
        <div className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
          Your Photos
        </div>
        <div className="text-xs font-body" style={{ color: "var(--ink-light)" }}>📁 Google Drive</div>
      </div>

      {photoStatus === "ready" && (
        <div className="grid grid-cols-3 gap-1.5">
          {photos.map((p) => (
            <a
              key={p.id}
              href={p.fullSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded overflow-hidden block"
              style={{ border: "1px solid var(--border-aged)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      )}

      {photoStatus === "loading" && (
        <div className="grid grid-cols-3 gap-1.5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded animate-pulse"
              style={{ background: "var(--border-aged)" }}
            />
          ))}
        </div>
      )}

      {(photoStatus === "unconfigured" || photoStatus === "error") && (
        <div className="grid grid-cols-3 gap-1.5">
          {["🏖️", "🌋", "🦜", "☕", "🌿", "🌅"].map((emoji, i) => (
            <div
              key={i}
              className="aspect-square rounded flex items-center justify-center text-2xl"
              style={{ background: "var(--bg-parchment)", border: "1px dashed var(--border-aged)" }}
            >
              {emoji}
            </div>
          ))}
        </div>
      )}

      <p className="font-body text-xs text-center" style={{ color: "var(--ink-light)" }}>
        {photoStatus === "ready"
          ? `${photos.length} photos from your Drive folder`
          : photoStatus === "unconfigured"
          ? "⚙️ Add GOOGLE_DRIVE_API_KEY to enable"
          : photoStatus === "loading"
          ? "Loading your photos…"
          : "Your Drive photos will appear here"}
      </p>

      {/* Bucket list */}
      <div className="text-xs font-body uppercase tracking-widest mb-1" style={{ color: "var(--ink-light)" }}>Costa Rica Bucket List</div>
      <div className="space-y-1">
        {milestones.map((m) => (
          <div key={m.label} className="flex items-center gap-2 text-xs font-body" style={{ color: "var(--ink-medium)" }}>
            <span>{m.done ? "✅" : "⬜"}</span>
            <span>{m.label}</span>
          </div>
        ))}
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
          { title: "Culture & History", icon: "🎭", component: <CultureHistory /> },
          { title: "Liga Deportiva", icon: "⚽", component: <FootballSection /> },
          { title: "Countdown", icon: "🗓️", component: <Countdown /> },
        ].map((col, i) => (
          <div
            key={col.title}
            className="p-4 flex flex-col"
            style={{ borderRight: i < 3 ? "1px solid var(--border-aged)" : undefined }}
          >
            <div className="flex items-center gap-2 pb-2 mb-3" style={{ borderBottom: "2px solid var(--ink-dark)" }}>
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
