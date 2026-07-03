"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
      <div className="relative rounded overflow-hidden" style={{ minHeight: "110px" }}>
        <Image src="https://images.unsplash.com/photo-1612668196612-70262cad2ad7?w=800&q=85&fit=crop" alt="Costa Rica coffee farm" fill className="object-cover" sizes="25vw" />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
          <div className="font-headline text-white font-bold text-base">Hacienda Alsacia</div>
          <div className="font-editorial italic text-white/70 text-xs mt-0.5">Starbucks' Only Farm · La Garita, Alajuela</div>
        </div>
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
interface StandingRow {
  rank: number;
  team: string;
  logo: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
}

interface FootballData {
  standings: StandingRow[];
  lastUpdated: string | null;
  error?: string;
  stale?: boolean;
}

function FootballSection() {
  const [data, setData] = useState<FootballData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    fetch("/api/unafut")
      .then((r) => r.json())
      .then((d: FootballData) => {
        if (d.standings?.length > 0) {
          setData(d);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  const lastUpdatedLabel = data?.lastUpdated
    ? new Date(data.lastUpdated).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : null;

  return (
    <div className="flex flex-col gap-3">
      <div className="relative rounded overflow-hidden" style={{ minHeight: "110px" }}>
        <Image src="https://images.unsplash.com/photo-1705593973313-75de7bf95b56?w=800&q=85&fit=crop" alt="Costa Rica football stadium crowd" fill className="object-cover" style={{ objectPosition: "center 78%" }} sizes="25vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(26,82,118,0.35), rgba(45,90,39,0.35))" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
          <div className="font-headline text-white font-bold text-base">UNAFUT · Primera División</div>
          <div className="font-editorial italic text-white/70 text-xs">Primera División de Costa Rica</div>
        </div>
      </div>
      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        <a href="https://unsplash.com/@igorvw" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Photo by Igor Batista on Unsplash
        </a>
      </p>

      <div className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>Standings</div>

      {status === "ready" && data ? (
        <div className="space-y-1">
          {data.standings.slice(0, 5).map((s) => (
            <div key={s.team} className="flex items-center gap-2 text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
              <span className="font-body" style={{ color: "var(--ink-light)", minWidth: 14 }}>{s.rank}.</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.logo} alt={s.team} className="w-4 h-4 object-contain" />
              <span className="font-headline font-bold flex-1" style={{ color: "var(--ink-dark)" }}>{s.team}</span>
              <span className="font-body font-semibold" style={{ color: "var(--green-jungle)" }}>{s.points} pts</span>
            </div>
          ))}
        </div>
      ) : status === "loading" ? (
        <div className="space-y-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse rounded" style={{ height: "18px", background: "var(--border-aged)" }} />
          ))}
        </div>
      ) : (
        <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
          ⚽ Standings unavailable right now — check back later.
        </p>
      )}

      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        ⚽ Live standings, updated daily{lastUpdatedLabel ? ` · Last updated ${lastUpdatedLabel}` : ""}.
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
      <div className="rounded overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1629221731259-4f0760e3ee89?w=800&q=85&fit=crop" alt="Costa Rica airport" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(45,90,39,0.82), rgba(26,82,118,0.82))" }} />
        <div className="relative p-4 text-center">
          <div className="font-body text-white/70 text-xs uppercase tracking-widest mb-1">Arriving in</div>
          <div className="font-headline text-white font-black text-5xl leading-none">{days}</div>
          <div className="font-body text-white/80 text-sm mt-1">
            days · {hours}h · {mins}m
          </div>
          <div className="font-editorial italic text-white/60 text-xs mt-2">October 1, 2026 · ¡Pura Vida! 🇨🇷</div>
        </div>
        <div className="relative h-1.5" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full transition-all"
            style={{
              width: `${Math.min(100, Math.max(0, ((365 - days) / 365) * 100))}%`,
              background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))",
            }}
          />
        </div>
      </div>

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

// ─── Drive Photo Gallery ──────────────────────────────────────────
export function DrivePhotoGallery() {
  const [photos, setPhotos] = useState<DrivePhoto[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "unconfigured" | "error">("loading");

  useEffect(() => {
    fetch("/api/drive-photos")
      .then((r) => r.json())
      .then((data) => {
        if (data.error === "Drive API not configured") {
          setStatus("unconfigured");
        } else if (data.photos?.length > 0) {
          setPhotos(data.photos);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  // Pick photo by hours-since-epoch so it rotates every hour
  const hourIndex = Math.floor(Date.now() / 3600000);
  const photo = photos.length > 0 ? photos[hourIndex % photos.length] : null;

  return (
    <section>
      <SectionHeader label="Your Photos" icon="🖼️" tagline="Your Costa Rica · Google Drive · Updated as you upload" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        {status === "ready" && photo ? (
          <>
            <a
              href={photo.fullSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
              style={{ height: "208px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src.replace("sz=w600", "sz=w1600")}
                alt={photo.name}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-body text-white/50 text-xs uppercase tracking-widest">📁 Google Drive · Click to open</p>
              </div>
            </a>
            <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid var(--border-aged)" }}>
              <p className="font-editorial italic text-sm" style={{ color: "var(--ink-medium)" }}>
                Photo {(hourIndex % photos.length) + 1} of {photos.length} · rotates hourly
              </p>
              <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>{photo.name}</p>
            </div>
          </>
        ) : status === "loading" ? (
          <div className="animate-pulse" style={{ height: "208px", background: "var(--border-aged)" }} />
        ) : (
          <div
            className="flex flex-col items-center justify-center gap-3 text-center"
            style={{ minHeight: "208px", background: "var(--bg-parchment)" }}
          >
            <div className="text-5xl">📷</div>
            <p className="font-headline font-bold text-lg" style={{ color: "var(--ink-dark)" }}>Your Costa Rica photos will appear here</p>
            <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
              {status === "unconfigured"
                ? "⚙️ Add GOOGLE_DRIVE_API_KEY to .env.local to enable"
                : "Add photos to your Google Drive folder to get started"}
            </p>
          </div>
        )}
      </div>
    </section>
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
