"use client";

import { useEffect, useState } from "react";

const quotes = [
  { text: "The earth is the Lord's, and everything in it, the world, and all who live in it.", ref: "Psalm 24:1", type: "bible" },
  { text: "Pura vida isn't just a saying — it's a way of being.", ref: "Costa Rican proverb", type: "cr" },
  { text: "He makes me lie down in green pastures, he leads me beside quiet waters.", ref: "Psalm 23:2", type: "bible" },
  { text: "In Costa Rica, we don't say goodbye. We say 'hasta luego' — until the next time.", ref: "Tico wisdom", type: "cr" },
  { text: "The heavens declare the glory of God; the skies proclaim the work of his hands.", ref: "Psalm 19:1", type: "bible" },
  { text: "Caminante, son tus huellas el camino y nada más. — Traveler, your footsteps are the path and nothing more.", ref: "Antonio Machado", type: "cr" },
];

const toucans = ["🦜", "🐦", "🦜", "🐦"];
const toucangPhrases = ["¡Pura Vida!", "¡Qué Rico!", "¡Tico Tico!", "¡Mae, mae!"];

export default function Footer() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [toucaIdx, setToucaIdx] = useState(0);

  useEffect(() => {
    // Rotate quote daily based on day of year
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    setQuoteIdx(dayOfYear % quotes.length);

    // Rotate toucan phrase
    const interval = setInterval(() => {
      setToucaIdx((i) => (i + 1) % toucangPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const q = quotes[quoteIdx];

  return (
    <footer style={{ borderTop: "3px double var(--ink-dark)", background: "var(--bg-cream)" }}>
      {/* Quote bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1" style={{ borderTop: "1px solid var(--border-aged)" }} />
          <span className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
            {q.type === "bible" ? "✝ Today's Verse" : "🌿 Pura Vida Wisdom"}
          </span>
          <div className="flex-1" style={{ borderTop: "1px solid var(--border-aged)" }} />
        </div>

        <blockquote className="font-editorial italic text-lg max-w-2xl mx-auto mb-1" style={{ color: "var(--ink-medium)" }}>
          "{q.text}"
        </blockquote>
        <cite className="font-body text-xs uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
          — {q.ref}
        </cite>
      </div>

      {/* Bottom bar */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border-aged)" }}
      >
        <div className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
          © 2026 Pura Vida Daily · San José, Costa Rica 🇨🇷
        </div>

        {/* Toucan mascot */}
        <div className="flex items-center gap-2">
          <div
            className="font-editorial italic text-sm px-3 py-1 rounded"
            style={{ background: "var(--bg-parchment)", color: "var(--green-jungle)", border: "1px solid var(--border-aged)" }}
          >
            {toucangPhrases[toucaIdx]}
          </div>
          <div className="text-3xl" title="Tito the Toucan">🦜</div>
        </div>

        <div className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
          Vol. I · Est. 2026
        </div>
      </div>

      {/* Color stripe */}
      <div
        className="h-1.5"
        style={{
          background: "linear-gradient(90deg, var(--green-jungle), var(--blue-ocean), var(--brown-coffee), var(--gold-sun), var(--green-leaf))",
        }}
      />
    </footer>
  );
}
