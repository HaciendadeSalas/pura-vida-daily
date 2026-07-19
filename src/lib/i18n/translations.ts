"use client";

import { useLanguage } from "./LanguageContext";

export const translations = {
  "header.estBar": {
    en: "Est. 2026 · Santa Ana, Costa Rica",
    es: "Fundado en 2026 · Santa Ana, Costa Rica",
  },
  "header.tagline": {
    en: "🌿 Pura Vida · Aventura · Elegance · Community",
    es: "🌿 Pura Vida · Aventura · Elegancia · Comunidad",
  },
  "footer.verseLabel": {
    en: "✝ Today's Verse",
    es: "✝ Versículo de Hoy",
  },
  "footer.wisdomLabel": {
    en: "🌿 Pura Vida Wisdom",
    es: "🌿 Sabiduría Pura Vida",
  },
  "footer.copyright": {
    en: "© 2026 Pura Vida Daily · Los Ángeles de Grecia, Costa Rica 🇨🇷",
    es: "© 2026 Pura Vida Daily · Los Ángeles de Grecia, Costa Rica 🇨🇷",
  },
  "footer.volume": {
    en: "Vol. I · Est. 2026",
    es: "Vol. I · Fundado en 2026",
  },
  "footer.toucanTitle": {
    en: "Tito the Toucan",
    es: "Tito el Tucán",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function useTranslation() {
  const { language } = useLanguage();
  const t = (key: TranslationKey): string => translations[key][language];
  return { t, language };
}
