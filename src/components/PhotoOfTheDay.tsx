import { SectionHeader } from "./VolcanoWatch";

const photo = {
  title: "Hacienda Guachipelín at Dusk",
  location: "Rincón de la Vieja, Guanacaste",
  caption:
    "The ancient working cattle ranch glows amber as evening descends over the dry tropical forest. A place where generations of ticos have worked the land, ridden horses through volcanic valleys, and found peace at the end of a long day.",
  tags: ["Guanacaste", "Hacienda", "Golden Hour", "Cattle Country"],
  photographer: "Pura Vida Daily Archive",
  emoji: "🏡",
  gradient: "linear-gradient(160deg, #d4a017 0%, #8b5e3c 30%, #2d5a27 70%, #1a3a15 100%)",
};

export default function PhotoOfTheDay() {
  return (
    <section className="mb-8">
      <SectionHeader label="Photo of the Day" icon="📸" tagline="The beauty of Costa Rica, captured" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero image placeholder */}
        <div
          className="relative flex flex-col items-center justify-center min-h-80"
          style={{ background: photo.gradient }}
        >
          <div className="text-8xl opacity-40 mb-4">{photo.emoji}</div>
          <div className="text-center px-8">
            <h3 className="font-headline text-3xl font-bold text-white leading-tight">{photo.title}</h3>
            <p className="font-editorial italic text-white/80 text-sm mt-1">{photo.location}</p>
          </div>

          {/* Tags overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
            {photo.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body px-2 py-0.5 rounded"
                style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.9)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="p-5" style={{ background: "var(--bg-cream)" }}>
          <p className="font-editorial italic leading-relaxed" style={{ color: "var(--ink-medium)" }}>
            "{photo.caption}"
          </p>
          <p className="font-body text-xs mt-3 uppercase tracking-widest" style={{ color: "var(--ink-light)" }}>
            📷 {photo.photographer}
          </p>
        </div>
      </div>
    </section>
  );
}
