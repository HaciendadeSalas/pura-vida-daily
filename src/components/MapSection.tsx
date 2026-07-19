"use client";

import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";

const regions = [
  {
    id: "guanacaste",
    name: "Guanacaste",
    subtitle: "Pacific Coast · Dry Tropics · Beach Towns",
    subtitleEs: "Costa Pacífica · Trópico Seco · Pueblos de Playa",
    color: "#d4a017",
    lat: 10.4806,
    lng: -85.5832,
    photo: "https://images.unsplash.com/photo-1714319001328-2383617c51d2?w=1200&q=85&fit=crop",
    photoCredit: "Tamarindo, Guanacaste",
    facts: [
      { label: "Capital", labelEs: "Capital", value: "Liberia", valueEs: "Liberia" },
      { label: "Climate", labelEs: "Clima", value: "Tropical Dry", valueEs: "Tropical Seco" },
      { label: "Best Season", labelEs: "Mejor Temporada", value: "Nov – Apr", valueEs: "Nov – Abr" },
      { label: "Known For", labelEs: "Conocido Por", value: "Beaches, Cowboys, Volcanos", valueEs: "Playas, Sabaneros, Volcanes" },
      { label: "Airport", labelEs: "Aeropuerto", value: "Daniel Oduber (LIR)", valueEs: "Daniel Oduber (LIR)" },
    ],
    quote: "High season runs December through April — expect warm, dry days with brilliant sunsets over the Pacific.",
    quoteEs: "La temporada alta va de diciembre a abril — espera días cálidos y secos con atardeceres espectaculares sobre el Pacífico.",
    quoteIcon: "🌞",
  },
  {
    id: "central",
    name: "Central Valley",
    subtitle: "San José · Coffee Farms · Universities",
    subtitleEs: "San José · Fincas de Café · Universidades",
    color: "#4a8c3f",
    lat: 9.9281,
    lng: -84.0907,
    photo: "https://images.unsplash.com/photo-1658604872041-172a440e6d78?w=1200&q=85&fit=crop",
    photoCredit: "Central Valley, Alajuela",
    facts: [
      { label: "Capital", labelEs: "Capital", value: "San José", valueEs: "San José" },
      { label: "Altitude", labelEs: "Altitud", value: "1,000–1,500 masl", valueEs: "1.000–1.500 msnm" },
      { label: "Climate", labelEs: "Clima", value: "Spring-like year round", valueEs: "Clima primaveral todo el año" },
      { label: "Known For", labelEs: "Conocido Por", value: "Coffee, Theatres, Museums", valueEs: "Café, Teatros, Museos" },
      { label: "Airport", labelEs: "Aeropuerto", value: "Juan Santamaría (SJO)", valueEs: "Juan Santamaría (SJO)" },
    ],
    quote: "The Central Valley produces some of the world's finest Arabica coffee — the volcanic soil and cool nights create ideal conditions.",
    quoteEs: "El Valle Central produce uno de los mejores cafés Arábica del mundo — el suelo volcánico y las noches frescas crean condiciones ideales.",
    quoteIcon: "☕",
  },
  {
    id: "caribbean",
    name: "Caribbean Coast",
    subtitle: "Tortuguero · Cahuita · Jungle Canals",
    subtitleEs: "Tortuguero · Cahuita · Canales de la Selva",
    color: "#2e86ab",
    lat: 10.4354,
    lng: -83.9857,
    photo: "https://images.unsplash.com/photo-1611223157314-18a252c20228?w=1200&q=85&fit=crop",
    photoCredit: "Caribbean Jungle, Costa Rica",
    facts: [
      { label: "Main Town", labelEs: "Ciudad Principal", value: "Puerto Limón", valueEs: "Puerto Limón" },
      { label: "Climate", labelEs: "Clima", value: "Wet, lush year-round", valueEs: "Húmedo y exuberante todo el año" },
      { label: "Best Season", labelEs: "Mejor Temporada", value: "Sept–Oct (drier)", valueEs: "Sept–Oct (más seco)" },
      { label: "Known For", labelEs: "Conocido Por", value: "Turtles, Canals, Afro-CR culture", valueEs: "Tortugas, Canales, Cultura Afro-CR" },
      { label: "Access", labelEs: "Acceso", value: "Road & small aircraft", valueEs: "Carretera y avioneta" },
    ],
    quote: "Tortuguero receives one of the world's largest green sea turtle nestings — up to 30,000 females arriving by night from June to October.",
    quoteEs: "Tortuguero recibe uno de los mayores desoves de tortuga verde del mundo — hasta 30.000 hembras llegan por la noche entre junio y octubre.",
    quoteIcon: "🐢",
  },
  {
    id: "southern",
    name: "Southern Zone",
    subtitle: "Chirripó · Osa Peninsula · Corcovado",
    subtitleEs: "Chirripó · Península de Osa · Corcovado",
    color: "#6b3d2e",
    lat: 8.7026,
    lng: -83.6018,
    photo: "https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?w=1200&q=85&fit=crop",
    photoCredit: "Southern Zone, Costa Rica",
    facts: [
      { label: "Highlight", labelEs: "Lo Más Destacado", value: "Corcovado NP", valueEs: "PN Corcovado" },
      { label: "Biodiversity", labelEs: "Biodiversidad", value: "Most intense on Earth", valueEs: "La más intensa de la Tierra" },
      { label: "Chirripó", labelEs: "Chirripó", value: "3,821 m — highest peak", valueEs: "3.821 m — el pico más alto" },
      { label: "Known For", labelEs: "Conocido Por", value: "Jaguars, Tapirs, Whales", valueEs: "Jaguares, Dantas, Ballenas" },
      { label: "Access", labelEs: "Acceso", value: "Drake Bay by boat or air", valueEs: "Bahía Drake en bote o avioneta" },
    ],
    quote: "National Geographic called Corcovado 'the most biologically intense place on Earth' — 2.5% of the world's species live here.",
    quoteEs: "National Geographic llamó a Corcovado 'el lugar biológicamente más intenso de la Tierra' — el 2.5% de las especies del mundo viven aquí.",
    quoteIcon: "🌿",
  },
  {
    id: "northern",
    name: "Northern Lowlands",
    subtitle: "Arenal · La Fortuna · Sarapiquí",
    subtitleEs: "Arenal · La Fortuna · Sarapiquí",
    color: "#7fb069",
    lat: 10.4631,
    lng: -84.6433,
    photo: "https://images.unsplash.com/photo-1664532869454-53ac5942d959?w=1200&q=85&fit=crop",
    photoCredit: "Arenal Volcano, Alajuela",
    facts: [
      { label: "Icon", labelEs: "Ícono", value: "Arenal Volcano", valueEs: "Volcán Arenal" },
      { label: "Lake Arenal", labelEs: "Lago Arenal", value: "CR's largest lake", valueEs: "El lago más grande de CR" },
      { label: "Climate", labelEs: "Clima", value: "Wet, lush year-round", valueEs: "Húmedo y exuberante todo el año" },
      { label: "Known For", labelEs: "Conocido Por", value: "Hot Springs, Zip Lines, Rafting", valueEs: "Aguas Termales, Canopy, Rafting" },
      { label: "Access", labelEs: "Acceso", value: "3 hrs from San José", valueEs: "3 horas desde San José" },
    ],
    quote: "Lake Arenal is Costa Rica's largest lake and a world-class windsurfing destination — while Arenal's perfect cone looms above.",
    quoteEs: "El Lago Arenal es el lago más grande de Costa Rica y un destino de clase mundial para windsurf — mientras el cono perfecto del Arenal se alza sobre él.",
    quoteIcon: "🌋",
  },
];

function getDayRegion() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return regions[dayOfYear % regions.length];
}

export default function MapSection() {
  const region = getDayRegion();
  const { t, language } = useTranslation();
  const subtitle = language === "en" ? region.subtitle : region.subtitleEs;
  const quote = language === "en" ? region.quote : region.quoteEs;

  return (
    <section className="mb-8">
      <SectionHeader label={t("mapSection.title")} icon="🗺️" tagline={t("mapSection.tagline")} />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* 50/50 split: map left, photo right */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "320px" }}>

          {/* LEFT — Google Maps iframe */}
          <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
            <iframe
              src={`https://www.google.com/maps?q=${region.lat},${region.lng}&z=10&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              loading="lazy"
              title={`Map of ${region.name}`}
            />
          </div>

          {/* RIGHT — landscape photo + text overlay */}
          <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
            <Image
              src={region.photo}
              alt={region.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 p-6">
              <div className="font-body text-white/60 text-sm uppercase tracking-widest mb-1">{t("mapSection.title")}</div>
              <h3 className="font-headline text-3xl font-bold text-white leading-tight">{region.name}</h3>
              <p className="font-editorial italic text-white/75 text-sm mt-1">{subtitle}</p>
              <p className="font-body text-white/50 text-xs mt-2">📸 {region.photoCredit}</p>
            </div>
          </div>

        </div>

        {/* Facts bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x"
          style={{ background: "var(--bg-cream)", borderTop: `3px solid ${region.color}` }}
        >
          {region.facts.map((f) => (
            <div key={f.label} className="px-4 py-3 text-center" style={{ borderRight: "1px solid var(--border-aged)" }}>
              <div className="font-body text-sm uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{language === "en" ? f.label : f.labelEs}</div>
              <div className="font-headline font-bold text-sm mt-0.5" style={{ color: "var(--ink-dark)" }}>{language === "en" ? f.value : f.valueEs}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="px-5 py-4" style={{ background: "var(--bg-parchment)", borderTop: "1px solid var(--border-aged)" }}>
          <p className="font-editorial italic text-base" style={{ color: "var(--ink-medium)" }}>
            {region.quoteIcon} {quote}
          </p>
        </div>
      </div>
    </section>
  );
}
