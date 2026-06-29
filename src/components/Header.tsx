"use client";

import { useEffect, useState } from "react";

const CR_TIMEZONE = "America/Costa_Rica";

type GreetingConfig = {
  spanish: string;
  english: string;
  emoji: string;
};

function getGreeting(hour: number): GreetingConfig {
  if (hour >= 5 && hour < 7) {
    return { spanish: "Buenos Días", english: "Early Bird", emoji: "🌅" };
  } else if (hour >= 7 && hour < 12) {
    return { spanish: "Buenos Días", english: "Good Morning", emoji: "☀️" };
  } else if (hour >= 12 && hour < 14) {
    return { spanish: "Buen Provecho", english: "Lunchtime", emoji: "🌮" };
  } else if (hour >= 14 && hour < 17) {
    return { spanish: "Buenas Tardes", english: "Good Afternoon", emoji: "🌤️" };
  } else if (hour >= 17 && hour < 19) {
    return { spanish: "Disfruta la Hora Dorada", english: "Enjoy Golden Hour", emoji: "🌇" };
  } else if (hour >= 19 && hour < 21) {
    return { spanish: "Buenas Noches", english: "Good Evening", emoji: "🌙" };
  } else {
    return { spanish: "Pura Vida", english: "Late Night Vibes", emoji: "⭐" };
  }
}

function formatCRDate(date: Date): { dayOfWeek: string; dateStr: string; edition: string } {
  const dayOfWeek = date.toLocaleDateString("en-US", {
    timeZone: CR_TIMEZONE,
    weekday: "long",
  });
  const dateStr = date.toLocaleDateString("en-US", {
    timeZone: CR_TIMEZONE,
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  // Edition number: days since launch (Jan 1 2026)
  const launch = new Date("2026-01-01T00:00:00-06:00");
  const edition = Math.floor((date.getTime() - launch.getTime()) / 86400000) + 1;
  return { dayOfWeek, dateStr, edition: String(Math.max(1, edition)).padStart(3, "0") };
}

function formatCRTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    timeZone: CR_TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function getCRHour(date: Date): number {
  const hourStr = date.toLocaleString("en-US", {
    timeZone: CR_TIMEZONE,
    hour: "numeric",
    hour12: false,
  });
  return parseInt(hourStr, 10);
}

export default function Header() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    // SSR placeholder — no flash
    return (
      <header className="paper-texture border-b-4" style={{ borderColor: "var(--ink-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 py-6" />
      </header>
    );
  }

  const { dayOfWeek, dateStr, edition } = formatCRDate(now);
  const timeStr = formatCRTime(now);
  const hour = getCRHour(now);
  const greeting = getGreeting(hour);

  return (
    <header className="paper-texture" style={{ borderBottom: "4px double var(--ink-dark)" }}>
      {/* Top bar */}
      <div
        className="rule-double px-4 py-1.5 flex items-center justify-between text-xs font-body tracking-widest uppercase"
        style={{ color: "var(--ink-light)", borderBottom: "1px solid var(--border-aged)" }}
      >
        <span>Est. 2026 · Los Ángeles de Grecia, Costa Rica</span>
        <span className="hidden sm:block">
          🌿 Pura Vida · Eco · Elegance · Community
        </span>
        <span>{timeStr} (CR Time)</span>
      </div>

      {/* Main masthead */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4 text-center">
        {/* Decorative rule */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-px" style={{ background: "var(--ink-medium)" }} />
          <span className="text-xs tracking-widest font-body uppercase" style={{ color: "var(--ink-light)" }}>
            ✦ The Finest Costa Rica Morning Read ✦
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--ink-medium)" }} />
        </div>

        {/* Newspaper name */}
        <h1
          className="font-headline text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight mb-1"
          style={{ color: "var(--ink-dark)" }}
        >
          Pura Vida Daily
        </h1>

        {/* Tagline */}
        <p
          className="font-editorial italic text-base sm:text-lg mt-2 mb-4"
          style={{ color: "var(--green-jungle)" }}
        >
          "La Vida Es Bella" — Your Morning Window to Paradise
        </p>

        {/* Lower rule */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1" style={{ borderTop: "3px double var(--ink-dark)" }} />
          <div className="flex-1" style={{ borderTop: "3px double var(--ink-dark)" }} />
        </div>

        {/* Date / Edition / Greeting row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="font-body" style={{ color: "var(--ink-medium)" }}>
            <span className="font-semibold">{dayOfWeek}</span>, {dateStr}
          </div>

          {/* Greeting — center */}
          <div
            className="font-headline text-xl sm:text-2xl font-bold px-6 py-1 rounded"
            style={{ color: "var(--green-jungle)", letterSpacing: "0.01em" }}
          >
            {greeting.emoji} {greeting.spanish}, Danny!
          </div>

          <div className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--ink-light)" }}>
            Vol. I · Edition No. {edition}
          </div>
        </div>
      </div>

      {/* Bottom accent stripe */}
      <div
        className="h-1.5"
        style={{
          background: `linear-gradient(90deg, var(--green-jungle), var(--blue-ocean), var(--brown-coffee), var(--gold-sun), var(--green-leaf))`,
        }}
      />
    </header>
  );
}
