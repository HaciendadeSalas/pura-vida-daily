import { SectionHeader } from "./VolcanoWatch";

// Real listings sourced from Encuentra24.com — verified June 2026
const properties = [
  {
    title: "Family Home — Vacation or Permanent Residence",
    location: "Liberia, Guanacaste",
    price: "$149,500",
    beds: 3,
    baths: 5,
    sqm: 158,
    desc: "Well-maintained home ideal for a full-time residence or vacation base. Close to shops, restaurants, and just 15 minutes from Liberia International Airport.",
    tags: ["Liberia", "Family Home", "Near Airport"],
    emoji: "🏡",
    distFrom: "15 min from LIR Airport",
    gradient: "linear-gradient(135deg, #d4a017, #8b5e3c)",
    url: "https://www.encuentra24.com/costa-rica-en/real-estate-for-sale-houses-homes/family-home-for-sale-ideal-for-vacation-or-permanent-residence/28866813",
    source: "Encuentra24",
  },
  {
    title: "Home in Prime Location",
    location: "Liberia, Guanacaste",
    price: "$325,000",
    beds: 3,
    baths: 2,
    sqm: 360,
    desc: "Spacious home near Plaza Santa Rosa in central Liberia. Large lot with fruit trees, covered parking, and excellent access to all of Guanacaste's amenities.",
    tags: ["Central Liberia", "Large Lot", "Fruit Trees"],
    emoji: "🌳",
    distFrom: "10 min from LIR Airport",
    gradient: "linear-gradient(135deg, #4a8c3f, #2d5a27)",
    url: "https://www.encuentra24.com/costa-rica-en/real-estate-for-sale-houses-homes/home-in-prime-location-in-liberia/32410466",
    source: "Encuentra24",
  },
  {
    title: "House in Parque del Encino",
    location: "Liberia, Guanacaste",
    price: "$440,000",
    beds: 4,
    baths: 2,
    sqm: 248,
    desc: "Elegant 2-story home in the gated community of Parque del Encino. Spacious open-plan living, modern finishes, pool access, and 24-hour security.",
    tags: ["Gated Community", "Secure", "Pool Access"],
    emoji: "🏘️",
    distFrom: "20 min from LIR Airport",
    gradient: "linear-gradient(135deg, #8b5e3c, #4a3728)",
    url: "https://www.encuentra24.com/costa-rica-en/real-estate-for-sale-houses-homes/house-for-sale-in-parque-del-encino-condominium-liberia/32503052",
    source: "Encuentra24",
  },
  {
    title: "Luxury Beachfront Condo",
    location: "Playa Tamarindo, Guanacaste",
    price: "$779,000",
    beds: 2,
    baths: 2,
    sqm: 135,
    desc: "Modern 2-bedroom beachfront residence with ocean views, resort amenities, rooftop pool, and direct beach access. Strong vacation rental income potential.",
    tags: ["Beachfront", "Ocean View", "Rental Income"],
    emoji: "🌊",
    distFrom: "45 min from LIR Airport",
    gradient: "linear-gradient(135deg, #2e86ab, #1a5276)",
    url: "https://www.encuentra24.com/costa-rica-en/real-estate-for-sale-beachfront-homes-and-lots/luxury-beach-condos-modern-2-bedroom-residences-in-playa-tamarindo/32435775",
    source: "Encuentra24",
  },
];

export default function PropertyWatch() {
  return (
    <section className="mb-8">
      <SectionHeader label="Property Watch" icon="🏘️" tagline="Real listings within 2 hours of Liberia (LIR) & San José — updated June 2026" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((p) => (
          <div
            key={p.title}
            className="rounded overflow-hidden border flex flex-col"
            style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
          >
            {/* Image placeholder */}
            <div className="h-32 flex items-center justify-center text-5xl relative" style={{ background: p.gradient }}>
              {p.emoji}
              <div className="absolute top-2 right-2 text-xs font-body font-bold px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.55)", color: "white" }}>
                {p.price}
              </div>
              <div className="absolute bottom-2 left-2 text-xs font-body px-1.5 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.8)" }}>
                {p.source}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
              <div>
                <h3 className="font-headline font-bold text-base leading-tight" style={{ color: "var(--ink-dark)" }}>{p.title}</h3>
                <p className="font-body text-xs mt-0.5" style={{ color: "var(--ink-light)" }}>📍 {p.location}</p>
              </div>

              <div className="flex gap-3 text-xs font-body" style={{ color: "var(--ink-medium)" }}>
                <span>🛏 {p.beds} bed</span>
                <span>🚿 {p.baths} bath</span>
                <span>📐 {p.sqm} m²</span>
              </div>

              <p className="font-editorial italic text-xs leading-relaxed" style={{ color: "var(--ink-medium)" }}>{p.desc}</p>

              <div className="flex flex-wrap gap-1 mt-auto">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-1.5 py-0.5 rounded font-body" style={{ background: "var(--bg-parchment)", color: "var(--green-jungle)", border: "1px solid var(--border-aged)" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-2 pt-2" style={{ borderTop: "1px solid var(--border-aged)" }}>
                <span className="text-xs font-body" style={{ color: "var(--ink-light)" }}>🚗 {p.distFrom}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-body font-semibold px-3 py-1 rounded transition-opacity hover:opacity-80"
                  style={{ background: "var(--green-jungle)", color: "white" }}
                >
                  View →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
