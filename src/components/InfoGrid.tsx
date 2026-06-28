"use client";

import { useEffect, useState } from "react";
import { getSunriseSunset } from "@/lib/sunCalc";

type SunData = { sunrise: string; sunset: string; daylight: string; goldenHour: string } | null;

export default function InfoGrid() {
  const [rate, setRate] = useState<string | null>(null);
  const [sun, setSun] = useState<SunData>(null);

  useEffect(() => {
    setSun(getSunriseSunset(new Date()));
    fetch("/api/exchange")
      .then((r) => r.json())
      .then((d) => setRate(d.rate))
      .catch(() => setRate(null));
  }, []);

  const cards = [
    {
      icon: "🌦",
      label: "Weather",
      sublabel: "Juan Santamaría (SJO)",
      main: "26°C / 79°F",
      detail: "Partly Cloudy",
      extra: "Humidity 72% · Wind 14 km/h NE",
      color: "var(--blue-sky)",
      note: "⚙️ Add OpenWeatherMap key to enable live weather",
    },
    {
      icon: "🌅",
      label: "Sunrise & Sunset",
      sublabel: "San José, Costa Rica",
      main: sun ? `${sun.sunrise} · ${sun.sunset}` : "Calculating…",
      detail: sun ? `Daylight: ${sun.daylight}` : "",
      extra: sun ? `Golden Hour: ${sun.goldenHour}` : "",
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
      note: "⚙️ Add WorldTides API key to enable live tides",
    },
    {
      icon: "💵",
      label: "Exchange Rate",
      sublabel: "USD → CRC",
      main: rate ? `₡ ${Number(rate).toLocaleString("en-US", { minimumFractionDigits: 2 })}` : "Loading…",
      detail: "per 1 US Dollar",
      extra: rate ? "Live · Frankfurter API" : "Fetching live rate…",
      color: "var(--green-jungle)",
    },
  ];

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
          {"note" in card && card.note && (
            <div className="text-xs mt-1 font-body" style={{ color: "var(--brown-sand)", fontStyle: "italic" }}>
              {card.note}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
