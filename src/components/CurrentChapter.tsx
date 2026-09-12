"use client";

import { getCountdown } from "@/lib/countdown";

// This card is a client component (unlike the rest of the About page) so the
// day count reflects the visitor's own clock instead of getting frozen for
// up to 24h by the page's ISR cache (see revalidate in app/about/page.tsx).
export default function CurrentChapter() {
  const { arrived, dayNumber, days } = getCountdown(new Date());

  return (
    <div
      className="rounded overflow-hidden border flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-5"
      style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
    >
      <div
        className="font-headline font-black leading-none"
        style={{ fontSize: "4rem", color: "var(--green-jungle)" }}
      >
        {arrived ? dayNumber : days}
      </div>
      <div className="text-center sm:text-left">
        <div
          className="font-body text-sm uppercase tracking-widest"
          style={{ color: "var(--ink-light)" }}
        >
          {arrived ? "Days in Costa Rica" : "Days Until Arrival"}
        </div>
        <p className="font-editorial italic text-base mt-1" style={{ color: "var(--ink-medium)" }}>
          {arrived
            ? "Building the next chapter, one day at a time."
            : "The countdown to Costa Rica is on."}
        </p>
      </div>
      <div
        className="flex-1 hidden sm:block h-1 rounded"
        style={{ background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))" }}
      />
    </div>
  );
}
