"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionHeader, TabStrip } from "./VolcanoWatch";

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
  subtitle: string;
  photo: string | null; // null = no real photo yet, render placeholder gradient
  photoFit?: "cover" | "contain-blur"; // "contain-blur" letterboxes portrait photos over a blurred copy instead of cropping them
  gradient: string; // used for placeholder background
  paragraph: string;
  stats: { label: string; value: string }[];
}

function PlaceholderPhoto({ icon, gradient }: { icon: string; gradient: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: gradient }}>
      <span className="text-3xl opacity-80">{icon}</span>
      <span
        className="absolute bottom-1 right-1.5 font-body text-[9px] uppercase tracking-widest px-1 rounded"
        style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
      >
        photo pending
      </span>
    </div>
  );
}

function SlideCarousel({ slides, accent }: { slides: CarouselSlide[]; accent: string }) {
  const [active, setActive] = useState(0);
  const s = slides[active];
  const isContainBlur = !!s.photo && s.photoFit === "contain-blur";

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="rounded overflow-hidden flex flex-col" style={{ height: "88px" }}>
        {isContainBlur ? (
          <>
            {/* Image area is flex-1 so it only ever occupies the space left over after the
                text band below claims its (content-sized) height — the photo can never sit
                behind or under the band. */}
            <div className="relative flex-1 min-h-0">
              <Image
                src={s.photo as string}
                alt=""
                aria-hidden
                fill
                className="object-cover scale-110 blur-xl brightness-50"
                sizes="25vw"
              />
              <Image src={s.photo as string} alt={s.title} fill className="object-contain" sizes="25vw" />
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
            </div>
            <div className="shrink-0 text-center px-2 py-1" style={{ background: "rgba(0,0,0,0.75)" }}>
              <div className="font-headline text-white font-bold text-[10px] leading-tight truncate">{s.title}</div>
              <div className="font-editorial italic text-white/70 text-[8px] leading-tight truncate">{s.subtitle}</div>
            </div>
          </>
        ) : (
          <div className="relative flex-1">
            {s.photo ? (
              <>
                <Image src={s.photo} alt={s.title} fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
              </>
            ) : (
              <PlaceholderPhoto icon={s.icon} gradient={s.gradient} />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
              <div className="font-headline text-white font-bold text-sm leading-tight">{s.title}</div>
              <div className="font-editorial italic text-white/70 text-[10px] mt-0.5 leading-tight">{s.subtitle}</div>
            </div>
          </div>
        )}
      </div>

      <p
        className="font-editorial italic leading-snug"
        style={{ color: "var(--ink-medium)", fontSize: "11.5px", display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}
      >
        {s.paragraph}
      </p>

      <div className="flex flex-wrap gap-x-2 gap-y-0.5" style={{ borderTop: "1px solid var(--border-aged)", paddingTop: "4px" }}>
        {s.stats.map((stat) => (
          <span key={stat.label} className="font-body text-[10px]" style={{ color: "var(--ink-light)" }}>
            <span className="uppercase tracking-wide">{stat.label}:</span>{" "}
            <span className="font-headline font-bold" style={{ color: accent }}>{stat.value}</span>
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
    subtitle: "Starbucks' Only Farm · La Garita, Alajuela",
    photo: "https://images.unsplash.com/photo-1612668196612-70262cad2ad7?w=800&q=85&fit=crop",
    gradient: "linear-gradient(160deg, var(--brown-coffee), var(--ink-dark))",
    paragraph: "In 2013, Starbucks purchased Hacienda Alsacia — the only coffee farm the company owns in the world. Located in La Garita, Alajuela, it serves as both a working farm and a living laboratory for sustainable coffee growing.",
    stats: [
      { label: "Founded", value: "1994 (acquired 2013)" },
      { label: "Altitude", value: "1,200–1,500 masl" },
      { label: "Farm Size", value: "240 hectares" },
    ],
  },
  {
    key: "cafe-britt",
    icon: "✨",
    title: "Café Britt",
    subtitle: "Heredia · Founded 1985",
    photo: "/images/coffee/cafe-britt.png",
    gradient: "linear-gradient(160deg, var(--gold-sun), var(--brown-bark))",
    paragraph: "Café Britt, founded in Heredia in 1985, was the first company to roast and export gourmet CR coffee for international tourists — transforming how the world saw Costa Rican beans.",
    stats: [
      { label: "Founded", value: "1985" },
      { label: "Location", value: "Heredia" },
      { label: "First to", value: "Export gourmet CR coffee" },
    ],
  },
  {
    key: "arabica-law",
    icon: "⚖️",
    title: "The Arabica Law",
    subtitle: "National Coffee Policy",
    photo: "/images/coffee/arabica-law.png",
    gradient: "linear-gradient(160deg, var(--green-jungle), var(--ink-dark))",
    paragraph: "In 1989, Costa Rica banned growing Robusta coffee anywhere in the country, betting the industry on quality over yield. A 2018 exception opened a few lowland zones unsuited to Arabica, but nearly everything grown here is still 100% Arabica.",
    stats: [
      { label: "Passed", value: "1989" },
      { label: "Eased", value: "2018" },
      { label: "Today", value: "Still 90%+ Arabica" },
    ],
  },
  {
    key: "tarrazu-shb",
    icon: "⛰️",
    title: "Tarrazú & the SHB Grade",
    subtitle: "Top Grade Region",
    photo: "/images/coffee/tarrazu-shb.png",
    gradient: "linear-gradient(160deg, var(--brown-bark), var(--brown-sand))",
    paragraph: "Costa Rica's most prized coffee region sits above 1,200 meters south of San José, where cooler air slows the cherries down and concentrates flavor. Beans grown at that altitude earn the \"Strictly Hard Bean\" grade, the country's top classification.",
    stats: [
      { label: "Region", value: "Tarrazú" },
      { label: "Altitude", value: "1,200–1,700m" },
      { label: "Grade", value: "SHB" },
    ],
  },
  {
    key: "honey-process",
    icon: "🍯",
    title: "The Honey Process",
    subtitle: "Invented 2006",
    photo: "/images/coffee/honey-process.png",
    gradient: "linear-gradient(160deg, var(--gold-light), var(--gold-sun))",
    paragraph: "In 2006, Costa Rican producer Juan Ramón Alvarado won the national coffee competition with a method that leaves sticky fruit pulp on the bean while it dries instead of washing it off. Now called \"honey processed,\" it has since spread worldwide.",
    stats: [
      { label: "Invented", value: "2006" },
      { label: "Origin", value: "Costa Rica" },
      { label: "Now", value: "Used worldwide" },
    ],
  },
  {
    key: "chorreador",
    icon: "🫖",
    title: "The Chorreador",
    subtitle: "Traditional Manual Brewer",
    photo: "/images/coffee/chorreador.jpg",
    gradient: "linear-gradient(160deg, var(--ink-medium), var(--brown-coffee))",
    paragraph: "Long before espresso machines and pour-over kits, Costa Ricans brewed coffee with a chorreador — a wooden stand holding a cloth sock filter that hot water is poured through by hand. It's older, slower, and still found in kitchens across the country today.",
    stats: [
      { label: "Type", value: "Manual brewer" },
      { label: "Method", value: "Cloth filter" },
      { label: "Still common", value: "Yes" },
    ],
  },
  {
    key: "grano-de-oro",
    icon: "👑",
    title: "The Grano de Oro Era",
    subtitle: "Late 1800s · \"Golden Bean\"",
    photo: "/images/coffee/grano-de-oro.jpg",
    gradient: "linear-gradient(160deg, var(--gold-sun), var(--ink-dark))",
    paragraph: "In the 19th century, coffee exports made a small group of Costa Rican growers rich enough to be called the \"coffee barons.\" Their wealth literally built the country's most famous landmark: the Teatro Nacional.",
    stats: [
      { label: "Era", value: "Late 1800s" },
      { label: "Nickname", value: "Grano de Oro" },
      { label: "Funded", value: "Teatro Nacional" },
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
    subtitle: "San José · Built 1897",
    photo: "/images/culture/teatro-nacional.png",
    gradient: "linear-gradient(160deg, #4a3728, #2c1810)",
    paragraph: "In 1890, Costa Rican coffee barons taxed themselves to fund a world-class opera house after the touring company of Adelina Patti refused to stop in San José. The Teatro Nacional opened in 1897 — still the most beautiful building in Central America.",
    stats: [
      { label: "Built", value: "1891–1897" },
      { label: "Funded by", value: "Coffee export tax" },
      { label: "Style", value: "Neo-Renaissance" },
    ],
  },
  {
    key: "sarchi-oxcarts",
    icon: "🛺",
    title: "Painted Oxcarts of Sarchí",
    subtitle: "UNESCO Heritage · 2005",
    photo: "/images/culture/sarchi-oxcart.jpg",
    gradient: "linear-gradient(160deg, var(--red-volcano), var(--gold-sun))",
    paragraph: "Each carreta is hand-painted with intricate geometric mandalas, and no two workshops use quite the same pattern. What began as a practical way to mark ownership on rural roads became a folk-art tradition, recognized by UNESCO in 2005.",
    stats: [
      { label: "Town", value: "Sarchí" },
      { label: "UNESCO", value: "2005" },
      { label: "Style", value: "Hand-painted mandalas" },
    ],
  },
  {
    key: "guanacaste-bullriding",
    icon: "🐂",
    title: "Guanacaste Cattle Country",
    subtitle: "Fiestas Patronales",
    photo: "/images/culture/guanacaste-cattle.png",
    gradient: "linear-gradient(160deg, var(--brown-sand), var(--brown-bark))",
    paragraph: "During Guanacaste's patron saint festivals, \"topes\" and improvised bullrings (redondeles) draw crowds to watch local riders attempt to stay on for a few wild seconds — no professional rodeo circuit, just small-town courage and a good excuse for a party.",
    stats: [
      { label: "Region", value: "Guanacaste" },
      { label: "Setting", value: "Fiestas patronales" },
      { label: "Style", value: "Amateur, community-run" },
    ],
  },
  {
    key: "figueres",
    icon: "🕊️",
    title: "José Figueres Ferrer",
    subtitle: "Army Abolished 1948",
    photo: "/images/culture/jose-figueres.jpg",
    photoFit: "contain-blur",
    gradient: "linear-gradient(160deg, var(--blue-ocean), var(--green-jungle))",
    paragraph: "After leading the winning side of Costa Rica's 1948 civil war, Figueres abolished the army entirely, by choice — redirecting military spending toward education and healthcare, a decision that still defines Costa Rica today.",
    stats: [
      { label: "Civil War", value: "1948" },
      { label: "Army abolished", value: "1948" },
      { label: "Later", value: "3x President" },
    ],
  },
  {
    key: "gold-artifacts",
    icon: "🪙",
    title: "Gold Artifacts of the Early Inhabitants",
    subtitle: "Pre-Columbian Era",
    photo: "/images/culture/gold-artifacts.jpg",
    photoFit: "contain-blur",
    gradient: "linear-gradient(160deg, var(--gold-sun), var(--ink-medium))",
    paragraph: "Long before Spanish colonization, skilled goldsmiths in what is now Costa Rica crafted intricate pendants and ornaments using techniques advanced enough to rival much larger civilizations. Many pieces are now housed in San José's Museo del Oro.",
    stats: [
      { label: "Era", value: "Pre-Columbian" },
      { label: "Materials", value: "Gold, tumbaga" },
      { label: "Displayed", value: "Museo del Oro" },
    ],
  },
  {
    key: "machete-peon",
    icon: "🔪",
    title: "The Machete-Wielding Peon",
    subtitle: "Rural Workforce",
    photo: "/images/culture/machete-peon.png",
    gradient: "linear-gradient(160deg, var(--green-leaf), var(--brown-bark))",
    paragraph: "For generations, the machete was the defining tool of Costa Rica's rural workforce — clearing land, harvesting coffee and sugarcane, and building the country's agricultural economy. It remains a practical, everyday tool on farms across Costa Rica.",
    stats: [
      { label: "Era", value: "Early 1900s+" },
      { label: "Primary use", value: "Agriculture" },
      { label: "Status", value: "Still everyday use" },
    ],
  },
  {
    key: "gallo-pinto",
    icon: "🍚",
    title: "Gallo Pinto",
    subtitle: "The National Breakfast",
    photo: "/images/culture/gallo-pinto.jpg",
    gradient: "linear-gradient(160deg, var(--green-light), var(--gold-light))",
    paragraph: "Costa Rica's national breakfast: rice and beans cooked together with onion, pepper, and cilantro, plated alongside eggs, fresh fruit, and bread with natilla (a thick, tangy Costa Rican sour cream). It's the meal most Ticos grow up starting the day with.",
    stats: [
      { label: "Meal", value: "Breakfast" },
      { label: "Core", value: "Rice & beans" },
      { label: "Sides", value: "Eggs, fruit, pan con natilla" },
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
      <div className="relative rounded overflow-hidden" style={{ minHeight: "110px" }}>
        <Image src="https://images.unsplash.com/photo-1705593973313-75de7bf95b56?w=800&q=85&fit=crop" alt="Costa Rica football stadium crowd" fill className="object-cover" style={{ objectPosition: "center 78%" }} sizes="25vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(26,82,118,0.35), rgba(45,90,39,0.35))" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
          <div className="font-headline text-white font-bold text-base">UNAFUT · Primera División</div>
          <div className="font-editorial italic text-white/70 text-xs">Primera División de Costa Rica</div>
        </div>
      </div>
      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        <a href="https://unsplash.com/@igorvw" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Photo by Igor Batista on Unsplash
        </a>
      </p>

      <div className="text-xs font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>Standings</div>

      {status === "ready" && data ? (
        <div className="space-y-1">
          {data.standings.slice(0, 5).map((s) => (
            <div key={s.team} className="flex items-center gap-2 text-xs" style={{ borderBottom: "1px solid var(--border-aged)", paddingBottom: "3px" }}>
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
        <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
          ⚽ Standings unavailable right now — check back later.
        </p>
      )}

      <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>
        ⚽ Live standings, updated daily{lastUpdatedLabel ? ` · Last updated ${lastUpdatedLabel}` : ""}.
      </p>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────
function Countdown() {
  const target = new Date("2026-10-01T00:00:00-06:00");
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const milestones = [
    { label: "Take a finance-related course at UCR", icon: "🎓", done: false },
    { label: "Visit Hacienda Alsacia", icon: "☕", done: false },
    { label: "Explore the Osa Peninsula", icon: "🌴", done: false },
    { label: "See Rincón de la Vieja Volcano", icon: "🌋", done: false },
    { label: "Network with Costa Ricans in the Central Valley", icon: "🤝", done: false },
    { label: "Build fences and do farm work with Jafet", icon: "🚜", done: false },
    { label: "Join a local soccer team and play lots of fútbol", icon: "⚽", done: false },
    { label: "Be part of a local church", icon: "⛪", done: false },
    { label: "Attend a Liga Deportiva Alajuelense match", icon: "🏟️", done: false },
    { label: "Shadow Tío Wilmar doing construction work", icon: "🔨", done: false },
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
          <div className="font-body text-white/70 text-xs uppercase tracking-widest mb-1">Arriving in</div>
          <div className="font-headline text-white font-black text-5xl leading-none">{days}</div>
          <div className="font-body text-white/80 text-sm mt-1">
            days · {hours}h · {mins}m
          </div>
          <div className="font-editorial italic text-white/60 text-xs mt-2">October 1, 2026 · ¡Pura Vida! 🇨🇷</div>
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
      <div className="text-xs font-body uppercase tracking-widest mb-1" style={{ color: "var(--ink-light)" }}>Costa Rica Bucket List</div>
      <div className="space-y-1">
        {milestones.map((m) => (
          <div key={m.label} className="flex items-center gap-2 text-xs font-body" style={{ color: "var(--ink-medium)", opacity: m.done ? 0.5 : 1 }}>
            <span>{m.icon}</span>
            <span className={m.done ? "line-through" : undefined}>{m.label}</span>
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
      <SectionHeader label="Your Photos" icon="🖼️" tagline="Your Costa Rica · Google Drive · Updated as you upload" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        {status === "ready" && photo ? (
          <>
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
                <p className="font-body text-white/50 text-xs uppercase tracking-widest">📁 Google Drive · Click to open</p>
              </div>
            </a>
            <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: "1px solid var(--border-aged)" }}>
              <p className="font-editorial italic text-sm" style={{ color: "var(--ink-medium)" }}>
                Photo {(hourIndex % photos.length) + 1} of {photos.length} · rotates hourly
              </p>
              <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>{photo.name}</p>
            </div>
          </>
        ) : status === "loading" ? (
          <div className="animate-pulse" style={{ height: "208px", background: "var(--border-aged)" }} />
        ) : (
          <div
            className="flex flex-col items-center justify-center gap-3 text-center"
            style={{ minHeight: "208px", background: "var(--bg-parchment)" }}
          >
            <div className="text-5xl">📷</div>
            <p className="font-headline font-bold text-lg" style={{ color: "var(--ink-dark)" }}>Your Costa Rica photos will appear here</p>
            <p className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
              {status === "unconfigured"
                ? "⚙️ Add GOOGLE_DRIVE_API_KEY to .env.local to enable"
                : "Add photos to your Google Drive folder to get started"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────
export default function BottomColumns() {
  return (
    <section className="mb-8">
      <SectionHeader label="Around the Finca" icon="🌺" tagline="Coffee · Culture · Fútbol · Your Journey" />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded overflow-hidden border"
        style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
      >
        {[
          { title: "Coffee Corner", icon: "☕", component: <CoffeeCorner /> },
          { title: "Culture & History", icon: "🎭", component: <CultureHistory /> },
          { title: "Liga Deportiva", icon: "⚽", component: <FootballSection /> },
          { title: "Countdown", icon: "🗓️", component: <Countdown /> },
        ].map((col, i) => (
          <div
            key={col.title}
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
