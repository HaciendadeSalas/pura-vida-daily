import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const photos = [
  {
    title: "Arenal Volcano at Dusk",
    location: "La Fortuna, Alajuela",
    caption: "The sleeping giant of Costa Rica glows orange as evening descends over Lake Arenal. For decades Arenal was the most active volcano in the Americas — today its perfect cone stands as a symbol of the country's wild, elemental beauty.",
    tags: ["Arenal", "Volcano", "Alajuela", "Golden Hour"],
    photo: "https://images.unsplash.com/photo-1664532869454-53ac5942d959?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
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
  {
    title: "Costa Rica Volcano at Dawn",
    location: "Central Valley, Costa Rica",
    caption: "First light catches the crater rim of a Central Valley volcano, where steam mingles with morning mist. Costa Rica sits atop the Pacific Ring of Fire — its volcanic soils are among the most fertile on Earth, producing world-class coffee and vegetables.",
    tags: ["Volcano", "Dawn", "Central Valley", "Landscape"],
    photo: "https://images.unsplash.com/photo-1611223156134-07ade11dfe6a?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Scarlet Macaw at Isla Tortuga",
    location: "Isla Tortuga, Puntarenas",
    caption: "A wild Scarlet Macaw surveys its tropical kingdom from a branch on Isla Tortuga. Once nearly extinct in Costa Rica due to habitat loss and the illegal pet trade, conservation efforts have restored their populations to thriving numbers on the Pacific coast.",
    tags: ["Scarlet Macaw", "Wildlife", "Pacific", "Conservation"],
    photo: "https://images.unsplash.com/photo-1524595974748-074187548e50?w=1600&q=85&fit=crop",
    credit: "Unsplash · Free License",
  },
  {
    title: "Mountain Valley Vista",
    location: "Alajuela Province",
    caption: "A sea of green fills the valley below as clouds drift over the mountain ridges of Alajuela province. This patchwork of coffee farms, cattle pastures, and protected forest corridors represents Costa Rica's balance between agriculture and conservation.",
    tags: ["Mountains", "Valley", "Alajuela", "Landscape"],
    photo: "https://images.unsplash.com/photo-1658604872041-172a440e6d78?w=1600&q=85&fit=crop",
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
    <section className="mb-8">
      <SectionHeader label="Photo of the Day" icon="📸" tagline="The beauty of Costa Rica, captured" />

      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)" }}>
        {/* Hero image */}
        <div className="relative min-h-80 overflow-hidden">
          <Image
            src={photo.photo}
            alt={photo.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
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
