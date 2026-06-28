import { SectionHeader } from "./VolcanoWatch";

const animal = {
  name: "Resplendent Quetzal",
  scientific: "Pharomachrus mocinno",
  emoji: "🦜",
  habitat: "Cloud forests, Monteverde & Chirripó",
  status: "Near Threatened",
  statusColor: "var(--gold-sun)",
  description:
    "Perhaps the most spectacular bird in the Americas, the Resplendent Quetzal was sacred to the ancient Maya and Aztec peoples, who associated it with the deity Quetzalcoatl. The male's iridescent emerald tail feathers can reach up to one meter in length.",
  facts: [
    { label: "Wing Span", value: "56–61 cm" },
    { label: "Diet", value: "Wild avocados, fruit, insects" },
    { label: "Nest", value: "Hollow tree cavities" },
    { label: "Call", value: "Melodic, flute-like warble" },
    { label: "Best Seen", value: "March–June breeding season" },
    { label: "Local Name", value: '"El Quetzal"' },
  ],
  funFact: "The male quetzal's tail feathers are longer than its body — and they moult entirely each year, regrowing in time for breeding season.",
};

export default function AnimalOfTheDay() {
  return (
    <section className="mb-8">
      <SectionHeader label="Animal of the Day" icon="🐾" tagline="Costa Rica's extraordinary biodiversity, one creature at a time" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        <div className="grid md:grid-cols-2">
          {/* Photo placeholder */}
          <div
            className="min-h-64 flex flex-col items-center justify-center"
            style={{ background: "linear-gradient(135deg, #2d5a27 0%, #4a8c3f 50%, #7fb069 100%)" }}
          >
            <div className="text-8xl mb-3">{animal.emoji}</div>
            <div className="text-white font-headline text-lg font-bold">{animal.name}</div>
            <div className="text-white/70 font-editorial italic text-sm">{animal.scientific}</div>
            <div
              className="mt-3 text-xs px-3 py-1 rounded font-body uppercase tracking-widest"
              style={{ background: "rgba(0,0,0,0.3)", color: animal.statusColor, border: `1px solid ${animal.statusColor}` }}
            >
              {animal.status}
            </div>
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col gap-4">
            <div>
              <h3 className="font-headline text-2xl font-bold" style={{ color: "var(--ink-dark)" }}>{animal.name}</h3>
              <p className="font-editorial italic text-sm" style={{ color: "var(--ink-light)" }}>{animal.habitat}</p>
            </div>

            <p className="font-body text-sm leading-relaxed" style={{ color: "var(--ink-medium)" }}>
              {animal.description}
            </p>

            <div className="grid grid-cols-2 gap-2">
              {animal.facts.map((f) => (
                <div key={f.label} className="text-xs" style={{ borderLeft: "2px solid var(--green-leaf)", paddingLeft: "8px" }}>
                  <div className="font-body uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>{f.label}</div>
                  <div className="font-headline font-bold" style={{ color: "var(--ink-dark)" }}>{f.value}</div>
                </div>
              ))}
            </div>

            <div
              className="rounded p-3 text-sm font-editorial italic"
              style={{ background: "var(--bg-parchment)", color: "var(--ink-medium)", borderLeft: "3px solid var(--green-jungle)" }}
            >
              🌿 <strong>Did you know?</strong> {animal.funFact}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
