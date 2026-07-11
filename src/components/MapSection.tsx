import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const regions = [
  {
    id: "guanacaste",
    name: "Guanacaste",
    subtitle: "Pacific Coast · Dry Tropics · Beach Towns",
    color: "#d4a017",
    lat: 10.4806,
    lng: -85.5832,
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
    lat: 9.9281,
    lng: -84.0907,
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
    lat: 10.4354,
    lng: -83.9857,
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
    lat: 8.7026,
    lng: -83.6018,
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
    lat: 10.4631,
    lng: -84.6433,
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

export default function MapSection() {
  const region = getDayRegion();

  return (
    <section className="mb-8">
      <SectionHeader label="Region of the Day" icon="🗺️" tagline="Exploring Costa Rica province by province" />

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
              <div className="font-body text-white/60 text-sm uppercase tracking-widest mb-1">Region of the Day</div>
              <h3 className="font-headline text-3xl font-bold text-white leading-tight">{region.name}</h3>
              <p className="font-editorial italic text-white/75 text-sm mt-1">{region.subtitle}</p>
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
              <div className="font-body text-sm uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{f.label}</div>
              <div className="font-headline font-bold text-sm mt-0.5" style={{ color: "var(--ink-dark)" }}>{f.value}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="px-5 py-4" style={{ background: "var(--bg-parchment)", borderTop: "1px solid var(--border-aged)" }}>
          <p className="font-editorial italic text-base" style={{ color: "var(--ink-medium)" }}>
            {region.quoteIcon} {region.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
