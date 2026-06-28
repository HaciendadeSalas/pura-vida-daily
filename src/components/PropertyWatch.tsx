import { SectionHeader } from "./VolcanoWatch";

const properties = [
  {
    title: "Hacienda-Style Villa",
    location: "Tamarindo, Guanacaste",
    price: "$485,000",
    beds: 4, baths: 3,
    sqm: 380,
    desc: "Spanish colonial architecture with Pacific views, infinity pool, and 2 acres of mango grove.",
    tags: ["Ocean View", "Pool", "Fruit Trees"],
    emoji: "🏡",
    distFrom: "45 min from Liberia (LIR)",
    gradient: "linear-gradient(135deg, #d4a017, #8b5e3c)",
  },
  {
    title: "Coffee Farm Retreat",
    location: "Naranjo, Central Valley",
    price: "$320,000",
    beds: 3, baths: 2,
    sqm: 240,
    desc: "Working 12-acre coffee farm with farmhouse, drying patios, and sweeping valley views.",
    tags: ["Coffee Farm", "Mountain", "Investment"],
    emoji: "☕",
    distFrom: "1h 20min from San José",
    gradient: "linear-gradient(135deg, #6b3d2e, #4a3728)",
  },
  {
    title: "Beachfront Casita",
    location: "Playa Hermosa, Guanacaste",
    price: "$198,000",
    beds: 2, baths: 1,
    sqm: 120,
    desc: "Steps from the beach, this charming casita is fully furnished and generating rental income.",
    tags: ["Beachfront", "Rental Income", "Furnished"],
    emoji: "🌊",
    distFrom: "30 min from Liberia (LIR)",
    gradient: "linear-gradient(135deg, #2e86ab, #1a5276)",
  },
  {
    title: "Jungle Eco-Lodge",
    location: "Bijagua, Alajuela",
    price: "$550,000",
    beds: 5, baths: 4,
    sqm: 460,
    desc: "Boutique eco-lodge bordering Tenorio Volcano NP. Sustainable build, solar power, 8 bungalows.",
    tags: ["Eco-Lodge", "Business", "Volcano View"],
    emoji: "🌿",
    distFrom: "1h 45min from Liberia (LIR)",
    gradient: "linear-gradient(135deg, #2d5a27, #1a3a15)",
  },
  {
    title: "City Penthouse",
    location: "Escazú, San José",
    price: "$265,000",
    beds: 3, baths: 2,
    sqm: 185,
    desc: "Modern penthouse in the Beverly Hills of Costa Rica. Rooftop terrace, gym, concierge.",
    tags: ["Penthouse", "City", "Modern"],
    emoji: "🏙️",
    distFrom: "15 min from San José",
    gradient: "linear-gradient(135deg, #4a3728, #2c1810)",
  },
];

export default function PropertyWatch() {
  return (
    <section className="mb-8">
      <SectionHeader label="Property Watch" icon="🏘️" tagline="Curated listings within 2 hours of Liberia & San José" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((p) => (
          <div
            key={p.title}
            className="rounded overflow-hidden border flex flex-col"
            style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
          >
            {/* Image placeholder */}
            <div className="h-32 flex items-center justify-center text-5xl relative" style={{ background: p.gradient }}>
              {p.emoji}
              <div className="absolute top-2 right-2 text-xs font-body font-bold px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.5)", color: "white" }}>
                {p.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <div>
                <h3 className="font-headline font-bold text-base leading-tight" style={{ color: "var(--ink-dark)" }}>{p.title}</h3>
                <p className="font-body text-xs" style={{ color: "var(--ink-light)" }}>📍 {p.location}</p>
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
                <button className="text-xs font-body font-semibold px-3 py-1 rounded" style={{ background: "var(--green-jungle)", color: "white" }}>
                  View →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
