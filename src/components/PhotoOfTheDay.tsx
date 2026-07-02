import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

// Photo of the Day: landscapes/culture only, no animals — see Animal of the Day for wildlife.
// Also avoid reusing images already shown in Volcano Watch (see VolcanoWatch.tsx) so the two
// sections don't display duplicate photos on the same page.
const photos = [
  {
    title: "La Fortuna Waterfall",
    location: "Arenal Volcano National Park",
    caption: "Fed by the rains of the cloud forest above, La Fortuna Waterfall plunges 70 meters into a turquoise pool surrounded by lush jungle. The hike down 530 steps is worth every step.",
    tags: ["Waterfall", "Arenal", "Nature", "Swimming"],
    photo: "https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Jungle Canopy Bridge",
    location: "Monteverde Cloud Forest",
    caption: "Suspended between ancient trees in Monteverde's cloud forest, hanging bridges offer a rare perspective of the canopy — the world's most biodiverse ecosystem, home to more species per square mile than anywhere on Earth.",
    tags: ["Monteverde", "Cloud Forest", "Canopy", "Adventure"],
    photo: "https://images.unsplash.com/photo-1611223157314-18a252c20228?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Guanacaste Pacific Coastline",
    location: "Playa Tamarindo, Guanacaste",
    caption: "The Pacific coastline of Guanacaste stretches for miles of white sand and warm, gentle surf. Tamarindo's beach has attracted surfers, turtle watchers, and sun-seekers for generations of ticos and travelers alike.",
    tags: ["Guanacaste", "Beach", "Pacific", "Tamarindo"],
    photo: "https://images.unsplash.com/photo-1714319001328-2383617c51d2?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
];

function getDayIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / 86400000) % photos.length;
}

export default function PhotoOfTheDay() {
  const photo = photos[getDayIndex()];

  return (
    <section>
      <SectionHeader label="Photo of the Day" icon="📸" tagline="The beauty of Costa Rica, captured" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero image */}
        <div className="relative min-h-52 overflow-hidden">
          <Image
            src={photo.photo}
            alt={photo.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />

          {/* Tags overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {photo.tags.map((tag) => (
              <span key={tag} className="text-xs font-body px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.9)" }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-headline text-3xl font-bold text-white leading-tight">{photo.title}</h3>
            <p className="font-editorial italic text-white/75 text-sm mt-1">📍 {photo.location}</p>
          </div>
        </div>

        {/* Caption */}
        <div className="p-5 flex items-start justify-between gap-4" style={{ background: "var(--bg-cream)" }}>
          <p className="font-editorial italic leading-relaxed flex-1" style={{ color: "var(--ink-medium)" }}>
            "{photo.caption}"
          </p>
          <p className="font-body text-xs uppercase tracking-widest flex-shrink-0 mt-1" style={{ color: "var(--ink-light)" }}>
            📷 {photo.credit}
          </p>
        </div>
      </div>
    </section>
  );
}
