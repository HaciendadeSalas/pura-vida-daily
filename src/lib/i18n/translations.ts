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
  "bottomColumns.title": { en: "Around the Finca", es: "Alrededor de la Finca" },
  "bottomColumns.tagline": {
    en: "Coffee · Culture · Fútbol · Your Journey",
    es: "Café · Cultura · Fútbol · Tu Viaje",
  },
  "bottomColumns.columnTitle.coffee": { en: "Coffee Corner", es: "Rincón del Café" },
  "bottomColumns.columnTitle.culture": { en: "Culture & History", es: "Cultura e Historia" },
  "bottomColumns.columnTitle.football": { en: "Liga Deportiva", es: "Liga Deportiva" },
  "bottomColumns.columnTitle.countdown": { en: "Countdown", es: "Cuenta Regresiva" },
  "bottomColumns.photoPending": { en: "photo pending", es: "foto pendiente" },
  "football.title": { en: "UNAFUT · Primera División", es: "UNAFUT · Primera División" },
  "football.subtitle": { en: "Primera División de Costa Rica", es: "Primera División de Costa Rica" },
  "football.standingsLabel": { en: "Standings", es: "Tabla de Posiciones" },
  "football.unavailable": {
    en: "⚽ Standings unavailable right now — check back later.",
    es: "⚽ Tabla no disponible en este momento — vuelve pronto.",
  },
  "football.liveUpdated": {
    en: "⚽ Live standings, updated daily",
    es: "⚽ Tabla en vivo, actualizada diariamente",
  },
  "football.lastUpdatedPrefix": {
    en: " · Last updated ",
    es: " · Última actualización ",
  },
  "countdown.arrivingIn": { en: "Arriving in", es: "Llegada en" },
  "countdown.daysLabel": { en: "days", es: "días" },
  "countdown.dateCaption": {
    en: "October 1, 2026 · ¡Pura Vida! 🇨🇷",
    es: "1 de octubre de 2026 · ¡Pura Vida! 🇨🇷",
  },
  "countdown.bucketListTitle": { en: "Costa Rica Bucket List", es: "Lista de Deseos de Costa Rica" },
  "driveGallery.title": { en: "Your Photos", es: "Tus Fotos" },
  "driveGallery.tagline": {
    en: "Your Costa Rica · Google Drive · Updated as you upload",
    es: "Tu Costa Rica · Google Drive · Se actualiza al subir fotos",
  },
  "driveGallery.clickToOpen": { en: "📁 Google Drive · Click to open", es: "📁 Google Drive · Clic para abrir" },
  "driveGallery.placeholderTitle": {
    en: "Your Costa Rica photos will appear here",
    es: "Tus fotos de Costa Rica aparecerán aquí",
  },
  "driveGallery.addPhotos": {
    en: "Add photos to your Google Drive folder to get started",
    es: "Agrega fotos a tu carpeta de Google Drive para comenzar",
  },
  "photoOfTheDay.title": { en: "Photo of the Day", es: "Foto del Día" },
  "photoOfTheDay.tagline": {
    en: "The beauty of Costa Rica, captured",
    es: "La belleza de Costa Rica, capturada",
  },
  "animalOfTheDay.title": { en: "Animal of the Day", es: "Animal del Día" },
  "animalOfTheDay.tagline": {
    en: "Costa Rica's extraordinary biodiversity, one creature at a time",
    es: "La extraordinaria biodiversidad de Costa Rica, una criatura a la vez",
  },
  "animalOfTheDay.didYouKnow": { en: "Did you know?", es: "¿Sabías que?" },
  "driveGallery.missionStatement": {
    en: "To see the world, to stand where the mountains meet the clouds, to cross rivers, surf oceans, and walk beneath the rainforest canopy; to draw closer, to find each other, and to feel deeply. That is the purpose of life. That is pura vida.",
    es: "Ver el mundo, pararse donde las montañas se encuentran con las nubes, cruzar ríos, surfear océanos y caminar bajo el dosel de la selva; acercarse, encontrarse unos a otros, y sentir profundamente. Ese es el propósito de la vida. Eso es pura vida.",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function useTranslation() {
  const { language } = useLanguage();
  const t = (key: TranslationKey): string => translations[key][language];
  return { t, language };
}
