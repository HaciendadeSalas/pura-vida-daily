"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionHeader, TabStrip } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";

interface DrivePhoto {
  id: string;
  name: string;
  src: string;
  fullSrc: string;
}

// ─── Shared slide-carousel card (Volcano Watch tab-switcher, compact variant) ──
interface CarouselSlide {
  key: string;
  icon: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  photo: string | null; // null = no real photo yet, render placeholder gradient
  imagePosition?: string; // CSS object-position value, defaults to center
  gradient: string; // used for placeholder background
  paragraph: string;
  paragraphEs: string;
  stats: { label: string; labelEs: string; value: string; valueEs: string }[];
}

function PlaceholderPhoto({ icon, gradient }: { icon: string; gradient: string }) {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: gradient }}>
      <span className="text-3xl opacity-80">{icon}</span>
      <span
        className="absolute bottom-1 right-1.5 font-body text-[9px] uppercase tracking-widest px-1 rounded"
        style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
      >
        {t("bottomColumns.photoPending")}
      </span>
    </div>
  );
}

function SlideCarousel({ slides, accent }: { slides: CarouselSlide[]; accent: string }) {
  const [active, setActive] = useState(0);
  const { language } = useTranslation();
  const s = slides[active];
  const title = language === "en" ? s.title : s.titleEs;
  const subtitle = language === "en" ? s.subtitle : s.subtitleEs;
  const paragraph = language === "en" ? s.paragraph : s.paragraphEs;

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="relative rounded overflow-hidden" style={{ aspectRatio: "1.7 / 1" }}>
        {s.photo ? (
          <>
            <Image
              src={s.photo}
              alt={s.title}
              fill
              className="object-cover"
              style={s.imagePosition ? { objectPosition: s.imagePosition } : undefined}
              sizes="25vw"
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          </>
        ) : (
          <PlaceholderPhoto icon={s.icon} gradient={s.gradient} />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
          <div className="font-headline text-white font-bold text-sm leading-tight">{title}</div>
          <div className="font-editorial italic text-white/70 text-sm mt-0.5 leading-tight">{subtitle}</div>
        </div>
      </div>

      <p
        className="font-editorial italic text-base leading-snug"
        style={{ color: "var(--ink-medium)" }}
      >
        {paragraph}
      </p>

      <div className="flex flex-wrap gap-x-2 gap-y-0.5" style={{ borderTop: "1px solid var(--border-aged)", paddingTop: "4px" }}>
        {s.stats.map((stat) => (
          <span key={stat.label} className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
            <span className="uppercase tracking-widest">{language === "en" ? stat.label : stat.labelEs}:</span>{" "}
            <span className="font-headline font-bold" style={{ color: accent }}>{language === "en" ? stat.value : stat.valueEs}</span>
          </span>
        ))}
      </div>

      <div className="mt-auto rounded overflow-hidden" style={{ border: "1px solid var(--border-aged)" }}>
        <TabStrip
          compact
          items={slides.map((slide) => ({ key: slide.key, icon: slide.icon }))}
          active={active}
          onSelect={setActive}
        />
      </div>
    </div>
  );
}

// ─── Coffee Corner ────────────────────────────────────────────────
const coffeeSlides: CarouselSlide[] = [
  {
    key: "hacienda-alsacia",
    icon: "☕",
    title: "Hacienda Alsacia",
    titleEs: "Hacienda Alsacia",
    subtitle: "Starbucks' Only Farm · La Garita, Alajuela",
    subtitleEs: "Única Finca de Starbucks · La Garita, Alajuela",
    photo: "https://images.unsplash.com/photo-1612668196612-70262cad2ad7?w=800&q=85&fit=crop",
    gradient: "linear-gradient(160deg, var(--brown-coffee), var(--ink-dark))",
    paragraph: "In 2013, Starbucks purchased Hacienda Alsacia — the only coffee farm the company owns in the world. Located in La Garita, Alajuela, it serves as both a working farm and a living laboratory for sustainable coffee growing.",
    paragraphEs: "En 2013, Starbucks compró la Hacienda Alsacia — la única finca de café que la empresa posee en el mundo. Ubicada en La Garita, Alajuela, funciona como una finca productiva y un laboratorio vivo para el cultivo sostenible de café.",
    stats: [
      { label: "Founded", labelEs: "Fundada", value: "1994 (acquired 2013)", valueEs: "1994 (adquirida en 2013)" },
      { label: "Altitude", labelEs: "Altitud", value: "1,200–1,500 masl", valueEs: "1.200–1.500 msnm" },
      { label: "Farm Size", labelEs: "Tamaño", value: "240 hectares", valueEs: "240 hectáreas" },
    ],
  },
  {
    key: "cafe-britt",
    icon: "✨",
    title: "Café Britt",
    titleEs: "Café Britt",
    subtitle: "Heredia · Founded 1985",
    subtitleEs: "Heredia · Fundada en 1985",
    photo: "/images/coffee/cafe-britt.png",
    gradient: "linear-gradient(160deg, var(--gold-sun), var(--brown-bark))",
    paragraph: "Café Britt, founded in Heredia in 1985, was the first company to roast and export gourmet CR coffee for international tourists — transforming how the world saw Costa Rican beans.",
    paragraphEs: "Café Britt, fundada en Heredia en 1985, fue la primera empresa en tostar y exportar café gourmet costarricense para turistas internacionales — transformando cómo el mundo veía el grano tico.",
    stats: [
      { label: "Founded", labelEs: "Fundada", value: "1985", valueEs: "1985" },
      { label: "Location", labelEs: "Ubicación", value: "Heredia", valueEs: "Heredia" },
      { label: "First to", labelEs: "Pionera en", value: "Export gourmet CR coffee", valueEs: "Exportar café gourmet costarricense" },
    ],
  },
  {
    key: "arabica-law",
    icon: "⚖️",
    title: "The Arabica Law",
    titleEs: "La Ley del Arábica",
    subtitle: "National Coffee Policy",
    subtitleEs: "Política Nacional del Café",
    photo: "/images/coffee/arabica-law.png",
    gradient: "linear-gradient(160deg, var(--green-jungle), var(--ink-dark))",
    paragraph: "In 1989, Costa Rica banned growing Robusta coffee anywhere in the country, betting the industry on quality over yield. A 2018 exception opened a few lowland zones unsuited to Arabica, but nearly everything grown here is still 100% Arabica.",
    paragraphEs: "En 1989, Costa Rica prohibió el cultivo de café Robusta en todo el país, apostando por la calidad sobre el rendimiento. Una excepción en 2018 abrió algunas zonas bajas no aptas para el Arábica, pero casi todo lo que se cultiva aquí sigue siendo 100% Arábica.",
    stats: [
      { label: "Passed", labelEs: "Aprobada", value: "1989", valueEs: "1989" },
      { label: "Eased", labelEs: "Flexibilizada", value: "2018", valueEs: "2018" },
      { label: "Today", labelEs: "Hoy", value: "Still 90%+ Arabica", valueEs: "Aún más del 90% Arábica" },
    ],
  },
  {
    key: "tarrazu-shb",
    icon: "⛰️",
    title: "Tarrazú & the SHB Grade",
    titleEs: "Tarrazú y el Grado SHB",
    subtitle: "Top Grade Region",
    subtitleEs: "Región de Grado Superior",
    photo: "/images/coffee/tarrazu-shb.png",
    gradient: "linear-gradient(160deg, var(--brown-bark), var(--brown-sand))",
    paragraph: "Costa Rica's most prized coffee region sits above 1,200 meters south of San José, where cooler air slows the cherries down and concentrates flavor. Beans grown at that altitude earn the \"Strictly Hard Bean\" grade, the country's top classification.",
    paragraphEs: "La región cafetalera más apreciada de Costa Rica se encuentra a más de 1.200 metros al sur de San José, donde el aire más frío ralentiza la maduración de las cerezas y concentra su sabor. Los granos cultivados a esa altitud obtienen la clasificación \"Strictly Hard Bean\", la categoría más alta del país.",
    stats: [
      { label: "Region", labelEs: "Región", value: "Tarrazú", valueEs: "Tarrazú" },
      { label: "Altitude", labelEs: "Altitud", value: "1,200–1,700m", valueEs: "1.200–1.700m" },
      { label: "Grade", labelEs: "Grado", value: "SHB", valueEs: "SHB" },
    ],
  },
  {
    key: "honey-process",
    icon: "🍯",
    title: "The Honey Process",
    titleEs: "El Proceso Honey",
    subtitle: "Invented 2006",
    subtitleEs: "Inventado en 2006",
    photo: "/images/coffee/honey-process.png",
    gradient: "linear-gradient(160deg, var(--gold-light), var(--gold-sun))",
    paragraph: "In 2006, Costa Rican producer Juan Ramón Alvarado won the national coffee competition with a method that leaves sticky fruit pulp on the bean while it dries instead of washing it off. Now called \"honey processed,\" it has since spread worldwide.",
    paragraphEs: "En 2006, el productor costarricense Juan Ramón Alvarado ganó el concurso nacional de café con un método que deja la pulpa pegajosa de la fruta sobre el grano mientras se seca en lugar de lavarla. Hoy conocido como \"proceso honey\", se ha extendido por todo el mundo.",
    stats: [
      { label: "Invented", labelEs: "Inventado", value: "2006", valueEs: "2006" },
      { label: "Origin", labelEs: "Origen", value: "Costa Rica", valueEs: "Costa Rica" },
      { label: "Now", labelEs: "Hoy", value: "Used worldwide", valueEs: "Usado en todo el mundo" },
    ],
  },
  {
    key: "chorreador",
    icon: "🫖",
    title: "The Chorreador",
    titleEs: "El Chorreador",
    subtitle: "Traditional Manual Brewer",
    subtitleEs: "Colador Tradicional Manual",
    photo: "/images/coffee/chorreador.jpg",
    gradient: "linear-gradient(160deg, var(--ink-medium), var(--brown-coffee))",
    paragraph: "Long before espresso machines and pour-over kits, Costa Ricans brewed coffee with a chorreador — a wooden stand holding a cloth sock filter that hot water is poured through by hand. It's older, slower, and still found in kitchens across the country today.",
    paragraphEs: "Mucho antes de las máquinas de espresso y los kits de goteo, los costarricenses preparaban café con un chorreador — un soporte de madera que sostiene un filtro de tela por el que se vierte agua caliente a mano. Es más antiguo, más lento, y todavía se encuentra en cocinas de todo el país.",
    stats: [
      { label: "Type", labelEs: "Tipo", value: "Manual brewer", valueEs: "Colador manual" },
      { label: "Method", labelEs: "Método", value: "Cloth filter", valueEs: "Filtro de tela" },
      { label: "Still common", labelEs: "Aún común", value: "Yes", valueEs: "Sí" },
    ],
  },
  {
    key: "grano-de-oro",
    icon: "👑",
    title: "The Grano de Oro Era",
    titleEs: "La Era del Grano de Oro",
    subtitle: "Late 1800s · \"Golden Bean\"",
    subtitleEs: "Finales del siglo XIX · \"Grano de Oro\"",
    photo: "/images/coffee/grano-de-oro.jpg",
    gradient: "linear-gradient(160deg, var(--gold-sun), var(--ink-dark))",
    paragraph: "In the 19th century, coffee exports made a small group of Costa Rican growers rich enough to be called the \"coffee barons.\" Their wealth literally built the country's most famous landmark: the Teatro Nacional.",
    paragraphEs: "En el siglo XIX, las exportaciones de café hicieron lo suficientemente ricos a un pequeño grupo de productores costarricenses como para ser llamados los \"barones del café\". Su riqueza literalmente construyó el monumento más famoso del país: el Teatro Nacional.",
    stats: [
      { label: "Era", labelEs: "Época", value: "Late 1800s", valueEs: "Finales del siglo XIX" },
      { label: "Nickname", labelEs: "Apodo", value: "Grano de Oro", valueEs: "Grano de Oro" },
      { label: "Funded", labelEs: "Financió", value: "Teatro Nacional", valueEs: "Teatro Nacional" },
    ],
  },
];

function CoffeeCorner() {
  return <SlideCarousel slides={coffeeSlides} accent="var(--brown-coffee)" />;
}

// ─── Culture & History ────────────────────────────────────────────
const cultureSlides: CarouselSlide[] = [
  {
    key: "teatro-nacional",
    icon: "🎭",
    title: "Teatro Nacional",
    titleEs: "Teatro Nacional",
    subtitle: "San José · Built 1897",
    subtitleEs: "San José · Construido en 1897",
    photo: "/images/culture/teatro-nacional.png",
    gradient: "linear-gradient(160deg, #4a3728, #2c1810)",
    paragraph: "In 1890, Costa Rican coffee barons taxed themselves to fund a world-class opera house after the touring company of Adelina Patti refused to stop in San José. The Teatro Nacional opened in 1897 — still the most beautiful building in Central America.",
    paragraphEs: "En 1890, los barones del café costarricenses se autoimpusieron un impuesto para financiar un teatro de ópera de clase mundial, después de que la compañía itinerante de Adelina Patti se negara a presentarse en San José. El Teatro Nacional abrió en 1897 — todavía el edificio más hermoso de Centroamérica.",
    stats: [
      { label: "Built", labelEs: "Construido", value: "1891–1897", valueEs: "1891–1897" },
      { label: "Funded by", labelEs: "Financiado por", value: "Coffee export tax", valueEs: "Impuesto a la exportación de café" },
      { label: "Style", labelEs: "Estilo", value: "Neo-Renaissance", valueEs: "Neorrenacentista" },
    ],
  },
  {
    key: "sarchi-oxcarts",
    icon: "🛺",
    title: "Painted Oxcarts of Sarchí",
    titleEs: "Carretas Pintadas de Sarchí",
    subtitle: "UNESCO Heritage · 2005",
    subtitleEs: "Patrimonio UNESCO · 2005",
    photo: "/images/culture/sarchi-oxcart.jpg",
    gradient: "linear-gradient(160deg, var(--red-volcano), var(--gold-sun))",
    paragraph: "Each carreta is hand-painted with intricate geometric mandalas, and no two workshops use quite the same pattern. What began as a practical way to mark ownership on rural roads became a folk-art tradition, recognized by UNESCO in 2005.",
    paragraphEs: "Cada carreta se pinta a mano con intrincados mandalas geométricos, y no hay dos talleres que usen exactamente el mismo patrón. Lo que comenzó como una forma práctica de marcar la propiedad en caminos rurales se convirtió en una tradición de arte popular, reconocida por la UNESCO en 2005.",
    stats: [
      { label: "Town", labelEs: "Pueblo", value: "Sarchí", valueEs: "Sarchí" },
      { label: "UNESCO", labelEs: "UNESCO", value: "2005", valueEs: "2005" },
      { label: "Style", labelEs: "Estilo", value: "Hand-painted mandalas", valueEs: "Mandalas pintados a mano" },
    ],
  },
  {
    key: "guanacaste-bullriding",
    icon: "🐂",
    title: "Guanacaste Cattle Country",
    titleEs: "Tierra Ganadera de Guanacaste",
    subtitle: "Fiestas Patronales",
    subtitleEs: "Fiestas Patronales",
    photo: "/images/culture/guanacaste-cattle.png",
    imagePosition: "center 40%",
    gradient: "linear-gradient(160deg, var(--brown-sand), var(--brown-bark))",
    paragraph: "During Guanacaste's patron saint festivals, \"topes\" and improvised bullrings (redondeles) draw crowds to watch local riders attempt to stay on for a few wild seconds — no professional rodeo circuit, just small-town courage and a good excuse for a party.",
    paragraphEs: "Durante las fiestas patronales de Guanacaste, los \"topes\" y los redondeles improvisados atraen multitudes para ver a jinetes locales intentar mantenerse montados por unos segundos salvajes — sin circuito profesional de rodeo, solo valor de pueblo y una buena excusa para la fiesta.",
    stats: [
      { label: "Region", labelEs: "Región", value: "Guanacaste", valueEs: "Guanacaste" },
      { label: "Setting", labelEs: "Contexto", value: "Fiestas patronales", valueEs: "Fiestas patronales" },
      { label: "Style", labelEs: "Estilo", value: "Amateur, community-run", valueEs: "Amateur, organizado por la comunidad" },
    ],
  },
  {
    key: "figueres",
    icon: "🕊️",
    title: "José Figueres Ferrer",
    titleEs: "José Figueres Ferrer",
    subtitle: "Army Abolished 1948",
    subtitleEs: "Ejército Abolido en 1948",
    photo: "/images/culture/jose-figueres.jpg",
    imagePosition: "center 5%",
    gradient: "linear-gradient(160deg, var(--blue-ocean), var(--green-jungle))",
    paragraph: "After leading the winning side of Costa Rica's 1948 civil war, Figueres abolished the army entirely, by choice — redirecting military spending toward education and healthcare, a decision that still defines Costa Rica today.",
    paragraphEs: "Tras liderar el bando ganador de la guerra civil de 1948 en Costa Rica, Figueres abolió el ejército por completo, por elección propia — redirigiendo el gasto militar hacia la educación y la salud, una decisión que todavía define a Costa Rica hoy.",
    stats: [
      { label: "Civil War", labelEs: "Guerra Civil", value: "1948", valueEs: "1948" },
      { label: "Army abolished", labelEs: "Ejército abolido", value: "1948", valueEs: "1948" },
      { label: "Later", labelEs: "Después", value: "3x President", valueEs: "Presidente 3 veces" },
    ],
  },
  {
    key: "gold-artifacts",
    icon: "🪙",
    title: "Gold Artifacts of the Early Inhabitants",
    titleEs: "Objetos de Oro de los Primeros Habitantes",
    subtitle: "Pre-Columbian Era",
    subtitleEs: "Época Precolombina",
    photo: "/images/culture/gold-artifacts.jpg",
    gradient: "linear-gradient(160deg, var(--gold-sun), var(--ink-medium))",
    paragraph: "Long before Spanish colonization, skilled goldsmiths in what is now Costa Rica crafted intricate pendants and ornaments using techniques advanced enough to rival much larger civilizations. Many pieces are now housed in San José's Museo del Oro.",
    paragraphEs: "Mucho antes de la colonización española, hábiles orfebres en lo que hoy es Costa Rica crearon intrincados colgantes y adornos con técnicas lo suficientemente avanzadas como para rivalizar con civilizaciones mucho más grandes. Muchas piezas hoy se exhiben en el Museo del Oro de San José.",
    stats: [
      { label: "Era", labelEs: "Época", value: "Pre-Columbian", valueEs: "Precolombina" },
      { label: "Materials", labelEs: "Materiales", value: "Gold, tumbaga", valueEs: "Oro, tumbaga" },
      { label: "Displayed", labelEs: "Se exhibe en", value: "Museo del Oro", valueEs: "Museo del Oro" },
    ],
  },
  {
    key: "machete-peon",
    icon: "🔪",
    title: "The Machete-Wielding Peon",
    titleEs: "El Peón del Machete",
    subtitle: "Rural Workforce",
    subtitleEs: "Mano de Obra Rural",
    photo: "/images/culture/machete-peon.png",
    imagePosition: "center 40%",
    gradient: "linear-gradient(160deg, var(--green-leaf), var(--brown-bark))",
    paragraph: "For generations, the machete was the defining tool of Costa Rica's rural workforce — clearing land, harvesting coffee and sugarcane, and building the country's agricultural economy. It remains a practical, everyday tool on farms across Costa Rica.",
    paragraphEs: "Durante generaciones, el machete fue la herramienta que definió a la mano de obra rural de Costa Rica — despejando terrenos, cosechando café y caña de azúcar, y construyendo la economía agrícola del país. Sigue siendo una herramienta práctica y cotidiana en las fincas de todo Costa Rica.",
    stats: [
      { label: "Era", labelEs: "Época", value: "Early 1900s+", valueEs: "Principios del siglo XX en adelante" },
      { label: "Primary use", labelEs: "Uso principal", value: "Agriculture", valueEs: "Agricultura" },
      { label: "Status", labelEs: "Estado", value: "Still everyday use", valueEs: "Aún de uso cotidiano" },
    ],
  },
  {
    key: "gallo-pinto",
    icon: "🍚",
    title: "Gallo Pinto",
    titleEs: "Gallo Pinto",
    subtitle: "The National Breakfast",
    subtitleEs: "El Desayuno Nacional",
    photo: "/images/culture/gallo-pinto.jpg",
    gradient: "linear-gradient(160deg, var(--green-light), var(--gold-light))",
    paragraph: "Costa Rica's national breakfast: rice and beans cooked together with onion, pepper, and cilantro, plated alongside eggs, fresh fruit, and bread with natilla (a thick, tangy Costa Rican sour cream). It's the meal most Ticos grow up starting the day with.",
    paragraphEs: "El desayuno nacional de Costa Rica: arroz y frijoles cocinados juntos con cebolla, chile dulce y cilantro, servidos junto a huevos, fruta fresca y pan con natilla (una crema agria costarricense espesa y ligeramente ácida). Es la comida con la que la mayoría de los ticos crecen empezando el día.",
    stats: [
      { label: "Meal", labelEs: "Comida", value: "Breakfast", valueEs: "Desayuno" },
      { label: "Core", labelEs: "Base", value: "Rice & beans", valueEs: "Arroz y frijoles" },
      { label: "Sides", labelEs: "Acompañantes", value: "Eggs, fruit, pan con natilla", valueEs: "Huevos, fruta, pan con natilla" },
    ],
  },
];

function CultureHistory() {
  return <SlideCarousel slides={cultureSlides} accent="var(--ink-dark)" />;
}

// ─── Football / Liga Deportiva ────────────────────────────────────
interface StandingRow {
  rank: number;
  team: string;
  logo: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
}

interface FootballData {
  standings: StandingRow[];
  lastUpdated: string | null;
  error?: string;
  stale?: boolean;
}

function FootballSection() {
  const [data, setData] = useState<FootballData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/api/unafut")
      .then((r) => r.json())
      .then((d: FootballData) => {
        if (d.standings?.length > 0) {
          setData(d);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  const lastUpdatedLabel = data?.lastUpdated
    ? new Date(data.lastUpdated).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : null;

  return (
    <div className="flex flex-col gap-3">
      <div className="relative rounded overflow-hidden" style={{ aspectRatio: "1.7 / 1" }}>
        <Image src="https://images.unsplash.com/photo-1705593973313-75de7bf95b56?w=800&q=85&fit=crop" alt="Costa Rica football stadium crowd" fill className="object-cover" style={{ objectPosition: "center 78%" }} sizes="25vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(26,82,118,0.35), rgba(45,90,39,0.35))" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
          <div className="font-headline text-white font-bold text-sm">{t("football.title")}</div>
          <div className="font-editorial italic text-white/70 text-sm">{t("football.subtitle")}</div>
        </div>
      </div>
      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        <a href="https://unsplash.com/@igorvw" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Photo by Igor Batista on Unsplash
        </a>
      </p>

      <div className="text-sm font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{t("football.standingsLabel")}</div>

      {status === "ready" && data ? (
        <div className="space-y-1">
          {data.standings.slice(0, 5).map((s) => (
            <div key={s.team} className="flex items-center gap-2 text-sm" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
              <span className="font-body" style={{ color: "var(--ink-light)", minWidth: 14 }}>{s.rank}.</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.logo} alt={s.team} className="w-4 h-4 object-contain" />
              <span className="font-headline font-bold flex-1" style={{ color: "var(--ink-dark)" }}>{s.team}</span>
              <span className="font-body font-semibold" style={{ color: "var(--green-jungle)" }}>{s.points} pts</span>
            </div>
          ))}
        </div>
      ) : status === "loading" ? (
        <div className="space-y-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse rounded" style={{ height: "18px", background: "var(--border-aged)" }} />
          ))}
        </div>
      ) : (
        <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
          {t("football.unavailable")}
        </p>
      )}

      <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
        {t("football.liveUpdated")}{lastUpdatedLabel ? `${t("football.lastUpdatedPrefix")}${lastUpdatedLabel}` : ""}.
      </p>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────
function Countdown() {
  const { t, language } = useTranslation();
  const target = new Date("2026-10-01T00:00:00-06:00");
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const milestones = [
    { label: "Take a finance-related course at UCR", labelEs: "Tomar un curso relacionado con finanzas en la UCR", icon: "🎓", done: false },
    { label: "Visit Hacienda Alsacia", labelEs: "Visitar Hacienda Alsacia", icon: "☕", done: false },
    { label: "Build fences and do farm work with Jafet", labelEs: "Construir cercas y hacer trabajo de finca con Jafet", icon: "🚜", done: false },
    { label: "Join a local soccer team and play lots of fútbol", labelEs: "Unirme a un equipo de fútbol local y jugar mucho fútbol", icon: "⚽", done: false },
    { label: "Be part of a local church", labelEs: "Ser parte de una iglesia local", icon: "⛪", done: false },
    { label: "Attend a Liga Deportiva Alajuelense match", labelEs: "Asistir a un partido de la Liga Deportiva Alajuelense", icon: "🏟️", done: false },
    { label: "Shadow Tío Wilmar doing construction work", labelEs: "Acompañar a Tío Wilmar haciendo trabajo de construcción", icon: "🔨", done: false },
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* Big countdown */}
      <div className="rounded overflow-hidden relative">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1629221731259-4f0760e3ee89?w=800&q=85&fit=crop" alt="Costa Rica airport" fill className="object-cover" sizes="25vw" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(45,90,39,0.82), rgba(26,82,118,0.82))" }} />
        <div className="relative p-4 text-center">
          <div className="font-body text-white/70 text-sm uppercase tracking-widest mb-1">{t("countdown.arrivingIn")}</div>
          <div className="font-headline text-white font-black text-5xl leading-none">{days}</div>
          <div className="font-body text-white/80 text-sm mt-1">
            {t("countdown.daysLabel")} · {hours}h · {mins}m
          </div>
          <div className="font-editorial italic text-white/60 text-sm mt-2">{t("countdown.dateCaption")}</div>
        </div>
        <div className="relative h-1.5" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full transition-all"
            style={{
              width: `${Math.min(100, Math.max(0, ((365 - days) / 365) * 100))}%`,
              background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))",
            }}
          />
        </div>
      </div>

      {/* Bucket list */}
      <div className="text-sm font-body uppercase tracking-widest mb-1" style={{ color: "var(--ink-light)" }}>{t("countdown.bucketListTitle")}</div>
      <div className="space-y-1">
        {milestones.map((m) => (
          <div key={m.label} className="flex items-center gap-2 text-sm font-body" style={{ color: "var(--ink-medium)", opacity: m.done ? 0.5 : 1 }}>
            <span>{m.icon}</span>
            <span className={m.done ? "line-through" : undefined}>{language === "en" ? m.label : m.labelEs}</span>
            {m.done && <span>✅</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Drive Photo Gallery ──────────────────────────────────────────
export function DrivePhotoGallery() {
  const [photos, setPhotos] = useState<DrivePhoto[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "unconfigured" | "error">("loading");
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/api/drive-photos")
      .then((r) => r.json())
      .then((data) => {
        if (data.error === "Drive API not configured") {
          setStatus("unconfigured");
        } else if (data.photos?.length > 0) {
          setPhotos(data.photos);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  // Pick photo by hours-since-epoch so it rotates every hour
  const hourIndex = Math.floor(Date.now() / 3600000);
  const photo = photos.length > 0 ? photos[hourIndex % photos.length] : null;

  return (
    <section>
      <SectionHeader label={t("driveGallery.title")} icon="🖼️" tagline={t("driveGallery.tagline")} />

      <div className="rounded overflow-hidden border flex flex-col" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        {status === "ready" && photo ? (
          <a
            href={photo.fullSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden"
            style={{ height: "208px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src.replace("sz=w600", "sz=w1600")}
              alt={photo.name}
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)" }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-body text-white/50 text-xs uppercase tracking-widest">{t("driveGallery.clickToOpen")}</p>
            </div>
          </a>
        ) : status === "loading" ? (
          <div className="animate-pulse" style={{ height: "208px", background: "var(--border-aged)" }} />
        ) : (
          <div
            className="flex flex-col items-center justify-center gap-3 text-center"
            style={{ height: "208px", background: "var(--bg-parchment)" }}
          >
            <div className="text-5xl">📷</div>
            <p className="font-headline font-bold text-lg" style={{ color: "var(--ink-dark)" }}>{t("driveGallery.placeholderTitle")}</p>
            <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
              {status === "unconfigured"
                ? "⚙️ Add GOOGLE_DRIVE_API_KEY to .env.local to enable"
                : t("driveGallery.addPhotos")}
            </p>
          </div>
        )}

        <div className="p-5 flex items-center justify-center" style={{ minHeight: "110px", borderTop: "1px solid var(--border-aged)" }}>
          <p className="font-editorial italic text-base text-center leading-relaxed" style={{ color: "var(--ink-medium)" }}>
            {t("driveGallery.missionStatement")}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────
export default function BottomColumns() {
  const { t } = useTranslation();

  return (
    <section className="mb-8">
      <SectionHeader label={t("bottomColumns.title")} icon="🌺" tagline={t("bottomColumns.tagline")} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded overflow-hidden border"
        style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
      >
        {[
          { id: "coffee", title: t("bottomColumns.columnTitle.coffee"), icon: "☕", component: <CoffeeCorner /> },
          { id: "culture", title: t("bottomColumns.columnTitle.culture"), icon: "🎭", component: <CultureHistory /> },
          { id: "football", title: t("bottomColumns.columnTitle.football"), icon: "⚽", component: <FootballSection /> },
          { id: "countdown", title: t("bottomColumns.columnTitle.countdown"), icon: "🗓️", component: <Countdown /> },
        ].map((col, i) => (
          <div
            key={col.id}
            className="p-4 flex flex-col"
            style={{ borderRight: i < 3 ? "1px solid var(--border-aged)" : undefined }}
          >
            <div className="flex items-center gap-2 pb-2 mb-3" style={{ borderBottom: "2px solid var(--ink-dark)" }}>
              <span>{col.icon}</span>
              <span className="font-headline font-bold text-sm uppercase tracking-wide" style={{ color: "var(--ink-dark)" }}>
                {col.title}
              </span>
            </div>
            {col.component}
          </div>
        ))}
      </div>
    </section>
  );
}
