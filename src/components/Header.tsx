"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTranslation } from "@/lib/i18n/translations";

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

function formatCRDate(date: Date): { dayOfWeek: string; dateStr: string } {
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
  return { dayOfWeek, dateStr };
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
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

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

  const { dayOfWeek, dateStr } = formatCRDate(now);
  const timeStr = formatCRTime(now);
  const hour = getCRHour(now);
  const greeting = getGreeting(hour);
  const greetingText = language === "en" ? greeting.english : greeting.spanish;

  return (
    <header className="paper-texture" style={{ borderBottom: "4px double var(--ink-dark)" }}>
      {/* Top bar */}
      <div
        className="rule-double px-4 py-1.5 flex items-center justify-between text-xs font-body tracking-widest uppercase"
        style={{ color: "var(--ink-light)", borderBottom: "1px solid var(--border-aged)" }}
      >
        <span>{t("header.estBar")}</span>
        <span className="hidden sm:block">{t("header.tagline")}</span>
        <span>{timeStr} (CR Time)</span>
      </div>

      {/* Main masthead */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4 text-center">
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

        {/* Date / Greeting / Language row */}
        <div
          className="flex flex-wrap items-center justify-center sm:justify-between gap-x-3 gap-y-2 sm:gap-4 py-3"
          style={{ borderTop: "1px solid var(--border-aged)", borderBottom: "1px solid var(--border-aged)" }}
        >
          {/* Date — left */}
          <div
            className="font-body text-xs sm:text-sm sm:flex-1 text-center sm:text-left whitespace-nowrap"
            style={{ color: "var(--ink-medium)" }}
          >
            <span className="font-semibold">{dayOfWeek}</span>, {dateStr}
          </div>

          {/* Greeting — center */}
          <div
            className="font-headline text-xl sm:text-2xl font-bold px-6 py-1 rounded flex-shrink-0 max-w-[260px] sm:max-w-none sm:whitespace-nowrap text-center"
            style={{ color: "var(--green-jungle)", letterSpacing: "0.01em" }}
          >
            {greeting.emoji} {greetingText}, Danny!
          </div>

          {/* Language toggle — right */}
          <div className="flex sm:flex-1 justify-center sm:justify-end">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="flex items-center gap-1.5 sm:gap-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              aria-label={
                language === "en"
                  ? "Toca aquí para cambiar a español"
                  : "Tap here to switch to English"
              }
            >
              <span className="h-[72px] w-[72px] sm:h-24 sm:w-24 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/mascot/cuzuco-full.png"
                  alt="Cuzuco"
                  width={192}
                  height={192}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col items-end gap-1">
                <span
                  className="hidden lg:inline font-body text-[11px] tracking-wide uppercase whitespace-nowrap"
                  style={{ color: "var(--ink-light)" }}
                >
                  {language === "en"
                    ? "Toca aquí para cambiar a español"
                    : "Tap here to switch to English"}
                </span>
                <span
                  className="flex items-center rounded-full overflow-hidden text-[18px] font-bold tracking-wide leading-none flex-shrink-0"
                  style={{ border: "2px solid var(--ink-light)" }}
                >
                  <span
                    className="px-4 py-2 rounded-full"
                    style={{
                      background: language === "en" ? "var(--green-jungle)" : "transparent",
                      color: language === "en" ? "var(--paper-cream, #fdf6e9)" : "var(--ink-light)",
                    }}
                  >
                    EN
                  </span>
                  <span
                    className="px-4 py-2 rounded-full"
                    style={{
                      background: language === "es" ? "var(--green-jungle)" : "transparent",
                      color: language === "es" ? "var(--paper-cream, #fdf6e9)" : "var(--ink-light)",
                    }}
                  >
                    ES
                  </span>
                </span>
              </span>
            </button>
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
