"use client";

import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";

const fruits = [
  {
    name: "Carambola", spanish: "Averrhoa carambola · Starfruit", months: "August–December", monthsEs: "Agosto–Diciembre",
    emoji: "⭐", bgGradient: "linear-gradient(135deg, #d4a017, #a8881a)",
    photo: "/images/fruits/fruit-carambola.jpg",
    blurb: "Sliced crosswise, carambola reveals its perfect star shape — tart to mildly sweet, and common from August through December.",
    blurbEs: "Cortada transversalmente, la carambola revela su forma perfecta de estrella — de sabor ácido a ligeramente dulce, y común de agosto a diciembre.",
  },
  {
    name: "Cas", spanish: "Psidium friedrichsthalianum", months: "Year-round · Peak Jan–Feb", monthsEs: "Todo el año · Pico Ene–Feb",
    emoji: "🍈", bgGradient: "linear-gradient(135deg, #4a8c3f, #7fb069)",
    photo: "/images/fruits/fruit-cas.jpg",
    blurb: "Cousin of the guava, intensely sour and green — crushed into refrescos naturales at nearly every soda in the country.",
    blurbEs: "Prima de la guayaba, intensamente ácida y verde — se machaca para hacer refrescos naturales en casi todas las sodas del país.",
  },
  {
    name: "Coco", spanish: "Cocos nucifera · Coconut", months: "Year-round", monthsEs: "Todo el año",
    emoji: "🥥", bgGradient: "linear-gradient(135deg, #8b5e3c, #4a3728)",
    photo: "/images/fruits/fruit-coconut.jpg",
    blurb: "Sold roadside with the top machete-hacked off for its water, then split open for the sweet white meat inside.",
    blurbEs: "Se vende al borde de la carretera, abierto a machetazos para su agua, y luego partido para disfrutar de su dulce pulpa blanca.",
  },
  {
    name: "Granadilla", spanish: "Passiflora ligularis · Sweet Passion Fruit", months: "September–November", monthsEs: "Septiembre–Noviembre",
    emoji: "🟡", bgGradient: "linear-gradient(135deg, #d4a017, #e8c84a)",
    photo: "/images/fruits/fruit-granadilla.png",
    blurb: "A round orange-yellow shell cracks open to reveal sweet, gelatinous seed-pulp, eaten straight from the shell with a spoon.",
    blurbEs: "Una cáscara redonda de color naranja-amarillo se abre para revelar una pulpa dulce y gelatinosa con semillas, que se come directo de la cáscara con cuchara.",
  },
  {
    name: "Guanábana", spanish: "Annona muricata · Soursop", months: "July–October", monthsEs: "Julio–Octubre",
    emoji: "🌵", bgGradient: "linear-gradient(135deg, #4a8c3f, #2d6a27)",
    photo: "/images/fruits/fruit-guanabana.jpg",
    blurb: "A large spiky green fruit with white, fibrous flesh that's sweet and tart at once — usually blended into rich batidos.",
    blurbEs: "Una gran fruta verde y espinosa con pulpa blanca y fibrosa, dulce y ácida a la vez — normalmente se licúa en batidos espesos.",
  },
  {
    name: "Jocote", spanish: "Spondias purpurea", months: "May–August", monthsEs: "Mayo–Agosto",
    emoji: "🍒", bgGradient: "linear-gradient(135deg, #922b21, #6b2d7a)",
    photo: "/images/fruits/fruit-jocote.jpg",
    blurb: "Small plum-like fruits eaten green with salt when tart, or ripe and sweet as they turn red — sold by the bag at markets nationwide.",
    blurbEs: "Pequeñas frutas parecidas a la ciruela que se comen verdes con sal cuando están ácidas, o maduras y dulces al tornarse rojas — se venden por bolsa en mercados de todo el país.",
  },
  {
    name: "Mamón Chino", spanish: "Nephelium lappaceum · Rambutan", months: "June–September", monthsEs: "Junio–Septiembre",
    emoji: "🦔", bgGradient: "linear-gradient(135deg, #c0392b, #e8841a)",
    photo: "/images/fruits/fruit-mamonchino.jpg",
    blurb: "Peel back the spiky red shell to find translucent, lychee-like flesh — sweet, juicy, and a favorite roadside snack.",
    blurbEs: "Al pelar la cáscara roja y espinosa se encuentra una pulpa translúcida parecida al lichi — dulce, jugosa y un bocadillo favorito junto a la carretera.",
  },
  {
    name: "Mango", spanish: "Mangifera indica", months: "February–June · Peak March–April", monthsEs: "Febrero–Junio · Pico Marzo–Abril",
    emoji: "🥭", bgGradient: "linear-gradient(135deg, #d4a017, #e8841a)",
    photo: "/images/fruits/fruit-mango.jpg",
    blurb: "From February, mango trees across Guanacaste and the Pacific burst with fruit, piled roadside by the bagful.",
    blurbEs: "Desde febrero, los árboles de mango en Guanacaste y el Pacífico se llenan de fruta, apilada en bolsas al borde de la carretera.",
  },
  {
    name: "Marañón", spanish: "Anacardium occidentale · Cashew Apple", months: "February–May", monthsEs: "Febrero–Mayo",
    emoji: "🍑", bgGradient: "linear-gradient(135deg, #e8841a, #c0392b)",
    photo: "/images/fruits/fruit-maranon.jpg",
    blurb: "The juicy, astringent pseudofruit attached to the cashew nut — yellow or red, and a Guanacaste roadside staple.",
    blurbEs: "El jugoso y astringente pseudofruto unido a la semilla de marañón — amarillo o rojo, y un clásico de las carreteras de Guanacaste.",
  },
  {
    name: "Nance", spanish: "Byrsonima crassifolia", months: "Peak May–August", monthsEs: "Pico Mayo–Agosto",
    emoji: "🟠", bgGradient: "linear-gradient(135deg, #d4a017, #8b5e3c)",
    photo: "/images/fruits/fruit-nance.jpg",
    blurb: "Small yellow berries with a pungent, slightly fermented sweetness — eaten fresh, in nance en guaro, or as a syrup over ice.",
    blurbEs: "Pequeñas bayas amarillas de sabor intenso y ligeramente fermentado — se comen frescas, en nance en guaro, o como jarabe sobre hielo.",
  },
  {
    name: "Pejibaye", spanish: "Bactris gasipaes · Peach Palm", months: "March–June", monthsEs: "Marzo–Junio",
    emoji: "🌴", bgGradient: "linear-gradient(135deg, #c0392b, #922b21)",
    photo: "/images/fruits/fruit-pejibaye.jpg",
    blurb: "Orange-red palm fruits boiled in salted water and sold at roadside stands — starchy, nutty, and deeply Costa Rican.",
    blurbEs: "Frutos de palma de color naranja-rojizo hervidos en agua con sal y vendidos en puestos de carretera — harinosos, con sabor a nuez y profundamente costarricenses.",
  },
  {
    name: "Sandía", spanish: "Citrullus lanatus · Watermelon", months: "Year-round · Peak dry season", monthsEs: "Todo el año · Pico en época seca",
    emoji: "🍉", bgGradient: "linear-gradient(135deg, #c0392b, #4a8c3f)",
    photo: "/images/fruits/fruit-watermelon.jpg",
    blurb: "A refreshing dry-season staple sold whole or pre-cut from roadside stands and beach vendors across the country.",
    blurbEs: "Un refrescante clásico de la época seca, vendido entera o ya cortada en puestos de carretera y vendedores de playa en todo el país.",
  },
  {
    name: "Zapote", spanish: "Pouteria sapota · Mamey Sapote", months: "October–January", monthsEs: "Octubre–Enero",
    emoji: "🟤", bgGradient: "linear-gradient(135deg, #8b4513, #c77729)",
    photo: "/images/fruits/fruit-zapote.jpg",
    blurb: "Rough brown skin hides vibrant salmon-orange flesh, rich and creamy with a sweetness like sweet potato and pumpkin.",
    blurbEs: "Su cáscara marrón y rugosa esconde una pulpa vibrante color salmón, rica y cremosa, con un dulzor que recuerda al camote y al ayote.",
  },
];

function getDayIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return dayOfYear % fruits.length;
}

export default function WhatInSeason() {
  const item = fruits[getDayIndex()];
  const { t, language } = useTranslation();
  const months = language === "en" ? item.months : item.monthsEs;
  const blurb = language === "en" ? item.blurb : item.blurbEs;

  return (
    <section>
      <SectionHeader label={t("whatInSeason.title")} icon="🌿" tagline={t("whatInSeason.tagline")} />
      <div className="rounded overflow-hidden border flex flex-col" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        <div className="relative overflow-hidden" style={{ height: "208px" }}>
          {item.photo ? (
            <>
              <Image src={item.photo} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: item.bgGradient }}>
              <div className="text-7xl">{item.emoji}</div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{item.name}</div>
            <div className="font-editorial italic text-white/70 text-sm mt-0.5">{months}</div>
          </div>
        </div>

        <div className="p-5 flex flex-col gap-2 justify-center" style={{ minHeight: "171px", borderTop: "1px solid var(--border-aged)" }}>
          <p className="font-editorial italic text-sm" style={{ color: "var(--ink-light)" }}>{item.spanish}</p>
          <p className="font-body text-base leading-relaxed" style={{ color: "var(--ink-medium)" }}>{blurb}</p>
        </div>
      </div>
    </section>
  );
}
