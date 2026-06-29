import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const churches = [
  {
    name: "Iglesia de Grecia",
    location: "Grecia, Alajuela",
    photo: "https://images.unsplash.com/photo-1587646589462-4728f63df161?w=800&q=85&fit=crop",
  },
  {
    name: "Basílica de Nuestra Señora de los Ángeles",
    location: "Cartago",
    photo: "https://images.unsplash.com/photo-1696887027052-2e2d8debd399?w=800&q=85&fit=crop",
  },
  {
    name: "Iglesia de Zarcero",
    location: "Zarcero, Alajuela",
    photo: "https://images.unsplash.com/photo-1672782974529-37965a03f8ad?w=800&q=85&fit=crop",
  },
];

function getDayChurch() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return churches[dayOfYear % churches.length];
}

export default function ChurchOfTheDay() {
  const church = getDayChurch();

  return (
    <section>
      <SectionHeader label="Church of the Day" icon="⛪" tagline="Faith & architecture across Costa Rica" />
      <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
        <div className="relative overflow-hidden" style={{ minHeight: "208px" }}>
          <Image src={church.photo} alt={church.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{church.name}</div>
            <div className="font-editorial italic text-white/70 text-xs mt-0.5">📍 {church.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
