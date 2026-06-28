import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const regions = [
  {
    id: "guanacaste",
    name: "Guanacaste",
    subtitle: "Pacific Coast · Dry Tropics · Beach Towns",
    color: "#d4a017",
    svgColor: "#d4a017",
    photo: "https://images.unsplash.com/photo-1714319001328-2383617c51d2?w=1200&q=85&fit=crop",
    photoCredit: "Tamarindo, Guanacaste",
    facts: [
      { label: "Capital", value: "Liberia" },
      { label: "Climate", value: "Tropical Dry" },
      { label: "Best Season", value: "Nov – Apr" },
      { label: "Known For", value: "Beaches, Cowboys, Volcanos" },
      { label: "Airport", value: "Daniel Oduber (LIR)" },
    ],
    quote: "High season runs December through April — expect warm, dry days with brilliant sunsets over the Pacific.",
    quoteIcon: "🌞",
  },
  {
    id: "central",
    name: "Central Valley",
    subtitle: "San José · Coffee Farms · Universities",
    color: "#4a8c3f",
    svgColor: "#4a8c3f",
    photo: "https://images.unsplash.com/photo-1658604872041-172a440e6d78?w=1200&q=85&fit=crop",
    photoCredit: "Central Valley, Alajuela",
    facts: [
      { label: "Capital", value: "San José" },
      { label: "Altitude", value: "1,000–1,500 masl" },
      { label: "Climate", value: "Spring-like year round" },
      { label: "Known For", value: "Coffee, Theatres, Museums" },
      { label: "Airport", value: "Juan Santamaría (SJO)" },
    ],
    quote: "The Central Valley produces some of the world's finest Arabica coffee — the volcanic soil and cool nights create ideal conditions.",
    quoteIcon: "☕",
  },
  {
    id: "caribbean",
    name: "Caribbean Coast",
    subtitle: "Tortuguero · Cahuita · Jungle Canals",
    color: "#2e86ab",
    svgColor: "#2e86ab",
    photo: "https://images.unsplash.com/photo-1611223157314-18a252c20228?w=1200&q=85&fit=crop",
    photoCredit: "Caribbean Jungle, Costa Rica",
    facts: [
      { label: "Main Town", value: "Puerto Limón" },
      { label: "Climate", value: "Wet, lush year-round" },
      { label: "Best Season", value: "Sept–Oct (drier)" },
      { label: "Known For", value: "Turtles, Canals, Afro-CR culture" },
      { label: "Access", value: "Road & small aircraft" },
    ],
    quote: "Tortuguero receives one of the world's largest green sea turtle nestings — up to 30,000 females arriving by night from June to October.",
    quoteIcon: "🐢",
  },
  {
    id: "southern",
    name: "Southern Zone",
    subtitle: "Chirripó · Osa Peninsula · Corcovado",
    color: "#6b3d2e",
    svgColor: "#6b3d2e",
    photo: "https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?w=1200&q=85&fit=crop",
    photoCredit: "Southern Zone, Costa Rica",
    facts: [
      { label: "Highlight", value: "Corcovado NP" },
      { label: "Biodiversity", value: "Most intense on Earth" },
      { label: "Chirripó", value: "3,821 m — highest peak" },
      { label: "Known For", value: "Jaguars, Tapirs, Whales" },
      { label: "Access", value: "Drake Bay by boat or air" },
    ],
    quote: "National Geographic called Corcovado 'the most biologically intense place on Earth' — 2.5% of the world's species live here.",
    quoteIcon: "🌿",
  },
  {
    id: "northern",
    name: "Northern Lowlands",
    subtitle: "Arenal · La Fortuna · Sarapiquí",
    color: "#7fb069",
    svgColor: "#4a8c3f",
    photo: "https://images.unsplash.com/photo-1664532869454-53ac5942d959?w=1200&q=85&fit=crop",
    photoCredit: "Arenal Volcano, Alajuela",
    facts: [
      { label: "Icon", value: "Arenal Volcano" },
      { label: "Lake Arenal", value: "CR's largest lake" },
      { label: "Climate", value: "Wet, lush year-round" },
      { label: "Known For", value: "Hot Springs, Zip Lines, Rafting" },
      { label: "Access", value: "3 hrs from San José" },
    ],
    quote: "Lake Arenal is Costa Rica's largest lake and a world-class windsurfing destination — while Arenal's perfect cone looms above.",
    quoteIcon: "🌋",
  },
];

function getDayRegion() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return regions[dayOfYear % regions.length];
}

function CRMapSVG({ highlighted }: { highlighted: string }) {
  const colors: Record<string, string> = {
    guanacaste: "#d4a017",
    northern: "#7fb069",
    central: "#4a8c3f",
    caribbean: "#2e86ab",
    southern: "#6b3d2e",
  };

  const regionPaths = [
    { id: "guanacaste", d: "M 90 60 L 130 50 L 160 65 L 155 100 L 130 115 L 100 110 L 85 90 Z", label: "Guanacaste", cx: 122, cy: 85 },
    { id: "northern", d: "M 155 65 L 210 55 L 230 75 L 220 105 L 190 115 L 155 100 Z", label: "Northern", cx: 192, cy: 88 },
    { id: "central", d: "M 155 100 L 220 105 L 235 130 L 220 160 L 185 165 L 155 150 L 140 125 Z", label: "Central Valley", cx: 187, cy: 135 },
    { id: "caribbean", d: "M 230 75 L 285 70 L 295 100 L 280 145 L 255 160 L 235 130 L 220 105 Z", label: "Caribbean", cx: 258, cy: 115 },
    { id: "southern", d: "M 155 150 L 220 160 L 255 160 L 245 200 L 210 220 L 170 215 L 148 185 Z", label: "Southern Zone", cx: 200, cy: 190 },
  ];

  return (
    <svg viewBox="0 0 400 260" className="w-full max-w-sm" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.2))" }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ocean */}
      <rect width="400" height="260" fill="#6db3d4" rx="10" />
      <text x="38" y="195" fill="white" fontSize="9" fontStyle="italic" opacity="0.6">Pacific Ocean</text>
      <text x="308" y="110" fill="white" fontSize="9" fontStyle="italic" opacity="0.6" textAnchor="middle">Caribbean</text>

      {/* Region fills */}
      {regionPaths.map((r) => {
        const isHighlighted = r.id === highlighted;
        return (
          <g key={r.id}>
            <path
              d={r.d}
              fill={colors[r.id] ?? "#7fb069"}
              stroke="white"
              strokeWidth={isHighlighted ? 2.5 : 1.5}
              opacity={isHighlighted ? 1 : 0.65}
              filter={isHighlighted ? "url(#glow)" : undefined}
            />
            <text
              x={r.cx}
              y={r.cy}
              fill="white"
              fontSize={isHighlighted ? 9.5 : 8}
              fontWeight={isHighlighted ? "bold" : "normal"}
              textAnchor="middle"
              opacity={isHighlighted ? 1 : 0.85}
            >
              {r.label}
            </text>
          </g>
        );
      })}

      {/* Compass rose */}
      <g transform="translate(360, 32)">
        <circle r="14" fill="white" opacity="0.9" />
        <text textAnchor="middle" y="-3" fontSize="7" fill="#2c1810" fontWeight="bold">N</text>
        <line x1="0" y1="-1" x2="0" y2="-9" stroke="#2c1810" strokeWidth="1.5" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke="#2c1810" strokeWidth="0.8" opacity="0.4" />
      </g>
    </svg>
  );
}

export default function MapSection() {
  const region = getDayRegion();

  return (
    <section className="mb-8">
      <SectionHeader label="Region of the Day" icon="🗺️" tagline="Exploring Costa Rica province by province" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero photo with SVG inset */}
        <div className="relative min-h-72 overflow-hidden">
          <Image
            src={region.photo}
            alt={region.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.55) 100%)" }} />

          {/* Left: text */}
          <div className="absolute bottom-0 left-0 p-6 max-w-xs">
            <div className="font-body text-white/60 text-xs uppercase tracking-widest mb-1">Region of the Day</div>
            <h3 className="font-headline text-3xl font-bold text-white leading-tight">{region.name}</h3>
            <p className="font-editorial italic text-white/75 text-sm mt-1">{region.subtitle}</p>
            <p className="font-body text-white/50 text-xs mt-2">📸 {region.photoCredit}</p>
          </div>

          {/* Right: SVG map inset */}
          <div className="absolute top-4 right-4 w-48 hidden sm:block" style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}>
            <CRMapSVG highlighted={region.id} />
          </div>
        </div>

        {/* Facts bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x"
          style={{ background: "var(--bg-cream)", borderTop: `3px solid ${region.color}`, divideColor: "var(--border-aged)" }}
        >
          {region.facts.map((f) => (
            <div key={f.label} className="px-4 py-3 text-center" style={{ borderRight: "1px solid var(--border-aged)" }}>
              <div className="font-body text-xs uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{f.label}</div>
              <div className="font-headline font-bold text-sm mt-0.5" style={{ color: "var(--ink-dark)" }}>{f.value}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="px-5 py-4" style={{ background: "var(--bg-parchment)", borderTop: "1px solid var(--border-aged)" }}>
          <p className="font-editorial italic text-sm" style={{ color: "var(--ink-medium)" }}>
            {region.quoteIcon} {region.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
