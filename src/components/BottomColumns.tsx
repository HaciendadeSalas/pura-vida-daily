"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";

interface DrivePhoto {
  id: string;
  name: string;
  src: string;
  fullSrc: string;
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
  const { t } = useTranslation();

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
      <div className="relative rounded overflow-hidden" style={{ aspectRatio: "1.7 / 1" }}>
        <Image src="https://images.unsplash.com/photo-1705593973313-75de7bf95b56?w=800&q=85&fit=crop" alt="Costa Rica football stadium crowd" fill className="object-cover" style={{ objectPosition: "center 78%" }} sizes="25vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(26,82,118,0.35), rgba(45,90,39,0.35))" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
          <div className="font-headline text-white font-bold text-sm">{t("football.title")}</div>
          <div className="font-editorial italic text-white/70 text-sm">{t("football.subtitle")}</div>
        </div>
      </div>
      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        <a href="https://unsplash.com/@igorvw" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Photo by Igor Batista on Unsplash
        </a>
      </p>

      <div className="text-sm font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{t("football.standingsLabel")}</div>

      {status === "ready" && data ? (
        <div className="space-y-1">
          {data.standings.slice(0, 5).map((s) => (
            <div key={s.team} className="flex items-center gap-2 text-sm" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
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
        <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
          {t("football.unavailable")}
        </p>
      )}

      <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
        {t("football.liveUpdated")}{lastUpdatedLabel ? `${t("football.lastUpdatedPrefix")}${lastUpdatedLabel}` : ""}.
      </p>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────
// Costa Rica sits at a fixed UTC-6 offset year-round (no DST), so the
// arrival threshold and the CR calendar date can both be computed with
// a plain 6-hour shift instead of a timezone library.
const CR_OFFSET_MS = 6 * 60 * 60 * 1000;
function crCalendarDayMs(d: Date) {
  const crWall = new Date(d.getTime() - CR_OFFSET_MS);
  return Date.UTC(crWall.getUTCFullYear(), crWall.getUTCMonth(), crWall.getUTCDate());
}

const COUNTDOWN_TARGET = new Date("2026-10-05T12:00:00-06:00");
function isArrived(now: Date) {
  return now.getTime() >= COUNTDOWN_TARGET.getTime();
}
// Day 1 = the CR calendar date of arrival (Oct 5), even though landing
// itself happens mid-day — so this counts calendar days, not 24h windows
// since the noon threshold.
function calcDayNumber(now: Date) {
  return Math.floor((crCalendarDayMs(now) - crCalendarDayMs(COUNTDOWN_TARGET)) / (1000 * 60 * 60 * 24)) + 1;
}

function Countdown() {
  const { t, language } = useTranslation();
  const target = COUNTDOWN_TARGET;
  const now = new Date();
  const arrived = isArrived(now);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const milestones = [
    { label: "Take a finance-related course at UCR", labelEs: "Tomar un curso relacionado con finanzas en la UCR", icon: "🎓", done: false },
    { label: "Visit Hacienda Alsacia", labelEs: "Visitar Hacienda Alsacia", icon: "☕", done: false },
    { label: "Build fences and do farm work with Jafet", labelEs: "Construir cercas y hacer trabajo de finca con Jafet", icon: "🚜", done: false },
    { label: "Join a local soccer team and play lots of fútbol", labelEs: "Unirme a un equipo de fútbol local y jugar mucho fútbol", icon: "⚽", done: false },
    { label: "Be part of a local church", labelEs: "Ser parte de una iglesia local", icon: "⛪", done: false },
    { label: "Attend a Liga Deportiva Alajuelense match", labelEs: "Asistir a un partido de la Liga Deportiva Alajuelense", icon: "🏟️", done: false },
    { label: "Shadow Tío Wilmar doing construction work", labelEs: "Acompañar a Tío Wilmar haciendo trabajo de construcción", icon: "🔨", done: false },
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* Big countdown */}
      <div className="rounded overflow-hidden relative">
        {arrived ? (
          <video
            src="/videos/papi.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1629221731259-4f0760e3ee89?w=800&q=85&fit=crop" alt="Costa Rica airport" fill className="object-cover" sizes="25vw" />
          </div>
        )}
        {!arrived && (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(45,90,39,0.82), rgba(26,82,118,0.82))" }}
          />
        )}
        {arrived ? (
          <div className="relative" style={{ minHeight: "168px" }} />
        ) : (
          <div className="relative p-4 text-center" style={{ minHeight: "168px" }}>
            <div className="font-body text-white/70 text-sm uppercase tracking-widest mb-1">{t("countdown.arrivingIn")}</div>
            <div className="font-headline text-white font-black text-5xl leading-none">{days}</div>
            <div className="font-body text-white/80 text-sm mt-1">
              {t("countdown.daysLabel")} · {hours}h · {mins}m
            </div>
            <div className="font-editorial italic text-white/60 text-sm mt-2">{t("countdown.dateCaption")}</div>
          </div>
        )}
        <div className="relative h-1.5" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full transition-all"
            style={{
              width: arrived ? "100%" : `${Math.min(100, Math.max(0, ((365 - days) / 365) * 100))}%`,
              background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))",
            }}
          />
        </div>
      </div>

      {/* Bucket list */}
      <div className="text-sm font-body uppercase tracking-widest mb-1" style={{ color: "var(--ink-light)" }}>{t("countdown.bucketListTitle")}</div>
      <div className="space-y-1">
        {milestones.map((m) => (
          <div key={m.label} className="flex items-center gap-2 text-sm font-body" style={{ color: "var(--ink-medium)", opacity: m.done ? 0.5 : 1 }}>
            <span>{m.icon}</span>
            <span className={m.done ? "line-through" : undefined}>{language === "en" ? m.label : m.labelEs}</span>
            {m.done && <span>✅</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Drive Photo Gallery ──────────────────────────────────────────
// Small-caps card-header treatment (paired with Countdown in "Around the Finca").
function DrivePhotoCard() {
  const [photos, setPhotos] = useState<DrivePhoto[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "unconfigured" | "error">("loading");
  const { t } = useTranslation();

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
    <div className="flex flex-col gap-3">
      <div className="rounded overflow-hidden relative" style={{ aspectRatio: "1 / 1" }}>
        {status === "ready" && photo ? (
          <a href={photo.fullSrc} target="_blank" rel="noopener noreferrer" className="absolute inset-0 block">
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
            <div className="absolute bottom-0 left-0 p-3">
              <p className="font-body text-white/50 text-xs uppercase tracking-widest">{t("driveGallery.clickToOpen")}</p>
            </div>
          </a>
        ) : status === "loading" ? (
          <div className="absolute inset-0 animate-pulse" style={{ background: "var(--border-aged)" }} />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
            style={{ background: "var(--bg-parchment)" }}
          >
            <div className="text-4xl">📷</div>
            <p className="font-headline font-bold text-sm" style={{ color: "var(--ink-dark)" }}>{t("driveGallery.placeholderTitle")}</p>
            <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
              {status === "unconfigured"
                ? "⚙️ Add GOOGLE_DRIVE_API_KEY to .env.local to enable"
                : t("driveGallery.addPhotos")}
            </p>
          </div>
        )}
      </div>

      <p className="font-editorial italic text-sm leading-relaxed" style={{ color: "var(--ink-medium)" }}>
        {t("driveGallery.missionStatement")}
      </p>
    </div>
  );
}

// ─── Liga Deportiva (standalone) ───────────────────────────────────
// Matches What's in Season / Church of the Day's SectionHeader treatment,
// now that it sits alongside them in the photo-cluster row.
export function LigaDeportivaSection() {
  const { t } = useTranslation();
  return (
    <section>
      <SectionHeader label={t("bottomColumns.columnTitle.football")} icon="⚽" tagline={t("football.tagline")} />
      <div
        className="rounded overflow-hidden border p-4 flex flex-col"
        style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
      >
        <FootballSection />
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────
export default function BottomColumns() {
  const { t } = useTranslation();
  const countdownArrived = isArrived(new Date());
  const countdownDayNumber = countdownArrived ? calcDayNumber(new Date()) : null;

  const columns = [
    { id: "photos", title: t("driveGallery.title"), icon: "🖼️", component: <DrivePhotoCard /> },
    {
      id: "countdown",
      title: countdownArrived ? (
        <>
          {t("bottomColumns.columnTitle.daysInCostaRica")}:{" "}
          <span className="text-lg font-black" style={{ color: "var(--green-jungle)" }}>
            {countdownDayNumber}
          </span>
        </>
      ) : (
        t("bottomColumns.columnTitle.countdown")
      ),
      icon: "🗓️",
      component: <Countdown />,
    },
  ];

  return (
    <section className="mb-8">
      <SectionHeader label={t("bottomColumns.title")} icon="🌺" tagline={t("bottomColumns.tagline")} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded overflow-hidden border"
        style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
      >
        {columns.map((col, i) => (
          <div
            key={col.id}
            className="p-4 flex flex-col"
            style={{ borderRight: i < columns.length - 1 ? "1px solid var(--border-aged)" : undefined }}
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
