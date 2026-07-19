"use client";

import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";

const CR_TIMEZONE = "America/Costa_Rica";

const churches = [
  // Sunday
  {
    name: "Basílica de los Ángeles",
    location: "Cartago",
    locationEs: "Cartago",
    caption:
      "The Basílica de los Ángeles in Cartago, home to La Negrita — Costa Rica's patron saint and the country's most important pilgrimage site since 1635.",
    captionEs:
      "La Basílica de los Ángeles en Cartago, hogar de La Negrita — la santa patrona de Costa Rica y el sitio de peregrinación más importante del país desde 1635.",
    photo: "/images/churches/church-sun-basilica-cartago.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #4a3728, #8b1a1a)",
  },
  // Monday
  {
    name: "Grecia's Metal Church",
    location: "Grecia, Alajuela",
    locationEs: "Grecia, Alajuela",
    caption:
      "Grecia's Metal Church — built entirely from Belgian sheet steel in 1897, painted red, and still the town's defining landmark.",
    captionEs:
      "La Iglesia de Metal de Grecia — construida enteramente con láminas de acero belgas en 1897, pintada de rojo, y todavía el ícono que define al pueblo.",
    photo: "/images/churches/church-mon-metalchurch-grecia.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #8b1a1a, #c0392b)",
  },
  // Tuesday
  {
    name: "Iglesia de Orosi",
    location: "Orosi Valley, Cartago",
    locationEs: "Valle de Orosi, Cartago",
    caption:
      "The colonial-era church of Orosi, one of the oldest still standing in Costa Rica, set against the Orosi Valley's coffee hills.",
    captionEs:
      "La iglesia colonial de Orosi, una de las más antiguas que aún se mantienen en pie en Costa Rica, enmarcada por las colinas cafetaleras del Valle de Orosi.",
    photo: "/images/churches/church-tue-orosi-cartago.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #4a8c3f, #2d5a27)",
  },
  // Wednesday
  {
    name: "Ruinas de Santiago Apóstol",
    location: "Cartago",
    locationEs: "Cartago",
    caption:
      "The ruins of Santiago Apóstol in Cartago — left unrestored after earthquake damage, now a quiet historic park in the old capital.",
    captionEs:
      "Las ruinas de Santiago Apóstol en Cartago — dejadas sin restaurar tras los daños de un terremoto, hoy un tranquilo parque histórico en la antigua capital.",
    photo: "/images/churches/church-wed-santiagoruins.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #8b5e3c, #4a3728)",
  },
  // Thursday
  {
    name: "Iglesia de Zarcero",
    location: "Zarcero, Alajuela",
    locationEs: "Zarcero, Alajuela",
    caption:
      "Zarcero's hilltop parish, framed by the town's famously whimsical topiary gardens.",
    captionEs:
      "La parroquia de Zarcero, en lo alto de una colina, enmarcada por los famosos y caprichosos jardines de topiario del pueblo.",
    photo: "/images/churches/church-thu-zarcero-alajuela.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #4a8c3f, #7fb069)",
  },
  // Friday
  {
    name: "Tamarindo Beach Church",
    location: "Tamarindo, Guanacaste",
    locationEs: "Tamarindo, Guanacaste",
    caption: "A small beachside church in Tamarindo, steps from the Pacific surf.",
    captionEs: "Una pequeña iglesia junto a la playa en Tamarindo, a pasos del oleaje del Pacífico.",
    photo: "/images/churches/church-fri-tamarindo-guanacaste.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #2e86ab, #d4a017)",
  },
  // Saturday
  {
    name: "Catedral de Puntarenas",
    location: "Puntarenas",
    locationEs: "Puntarenas",
    caption: "The cathedral of Puntarenas, anchoring the port city on the Pacific coast.",
    captionEs: "La catedral de Puntarenas, el ancla de la ciudad portuaria en la costa del Pacífico.",
    photo: "/images/churches/church-sat-catedral-puntarenas.jpg",
    emoji: "⛪",
    bgGradient: "linear-gradient(135deg, #1a5276, #2e86ab)",
  },
];

function getDayOfWeek() {
  const now = new Date();
  const [year, month, day] = now
    .toLocaleDateString("en-CA", { timeZone: CR_TIMEZONE })
    .split("-")
    .map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export default function ChurchOfTheDay() {
  const church = churches[getDayOfWeek()];
  const { t, language } = useTranslation();
  const location = language === "en" ? church.location : church.locationEs;
  const caption = language === "en" ? church.caption : church.captionEs;

  return (
    <section>
      <SectionHeader label={t("churchOfTheDay.title")} icon="⛪" tagline={t("churchOfTheDay.tagline")} />
      <div className="rounded overflow-hidden border flex flex-col" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        <div className="relative overflow-hidden" style={{ height: "208px" }}>
          {church.photo ? (
            <>
              <Image src={church.photo} alt={church.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: church.bgGradient }}>
              <div className="text-7xl">{church.emoji}</div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{church.name}</div>
            <div className="font-editorial italic text-white/70 text-sm mt-0.5">📍 {location}</div>
          </div>
        </div>

        <div className="p-5 flex items-center" style={{ minHeight: "171px", borderTop: "1px solid var(--border-aged)" }}>
          <p className="font-editorial italic text-base leading-relaxed" style={{ color: "var(--ink-medium)" }}>
            {caption}
          </p>
        </div>
      </div>
    </section>
  );
}
