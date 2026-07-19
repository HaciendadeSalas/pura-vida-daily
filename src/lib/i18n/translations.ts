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
  "infoGrid.weather.label": { en: "Weather", es: "Clima" },
  "infoGrid.weather.sublabel": { en: "Juan Santamaría (SJO)", es: "Juan Santamaría (SJO)" },
  "infoGrid.sunrise.label": { en: "Sunrise & Sunset", es: "Amanecer y Atardecer" },
  "infoGrid.sunrise.sublabel": { en: "San José, Costa Rica", es: "San José, Costa Rica" },
  "infoGrid.tides.label": { en: "Tides", es: "Mareas" },
  "infoGrid.tides.sublabel": { en: "Guanacaste Pacific", es: "Pacífico de Guanacaste" },
  "infoGrid.exchange.label": { en: "Exchange Rate", es: "Tipo de Cambio" },
  "infoGrid.exchange.sublabel": { en: "USD → CRC", es: "USD → CRC" },
  "infoGrid.calculating": { en: "Calculating…", es: "Calculando…" },
  "infoGrid.daylightPrefix": { en: "Daylight: ", es: "Luz del día: " },
  "infoGrid.goldenHourPrefix": { en: "Golden Hour: ", es: "Hora Dorada: " },
  "infoGrid.perDollar": { en: "per 1 US Dollar", es: "por 1 dólar estadounidense" },
  "headlines.title": { en: "Top CR Headlines", es: "Titulares de CR" },
  "headlines.tagline": {
    en: "Live from The Tico Times · Updated daily",
    es: "En vivo desde The Tico Times · Actualizado diariamente",
  },
  "headlines.readMore": { en: "Read →", es: "Leer →" },
  "headlines.unavailable": {
    en: "📰 Headlines unavailable right now — please check back soon.",
    es: "📰 Titulares no disponibles en este momento — vuelve pronto.",
  },
  "headlines.explainerPrefix": {
    en: "ℹ️ Headlines are pulled live from The Tico Times RSS feed and refresh daily. Sources: ",
    es: "ℹ️ Los titulares se obtienen en vivo del feed RSS de The Tico Times y se actualizan diariamente. Fuentes: ",
  },
  "volcanoWatch.title": { en: "Volcano Watch", es: "Vigilancia Volcánica" },
  "volcanoWatch.tagline": {
    en: "Live status across Costa Rica's volcanic belt",
    es: "Estado en vivo del cinturón volcánico de Costa Rica",
  },
  "mapSection.title": { en: "Region of the Day", es: "Región del Día" },
  "mapSection.tagline": {
    en: "Exploring Costa Rica province by province",
    es: "Explorando Costa Rica provincia por provincia",
  },
  "churchOfTheDay.title": { en: "Church of the Day", es: "Iglesia del Día" },
  "churchOfTheDay.tagline": {
    en: "Faith & architecture across Costa Rica",
    es: "Fe y arquitectura en toda Costa Rica",
  },
  "whatInSeason.title": { en: "What's in Season", es: "Qué Está en Temporada" },
  "whatInSeason.tagline": {
    en: "Costa Rican harvest · rotating daily",
    es: "Cosecha costarricense · rotación diaria",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function useTranslation() {
  const { language } = useLanguage();
  const t = (key: TranslationKey): string => translations[key][language];
  return { t, language };
}
