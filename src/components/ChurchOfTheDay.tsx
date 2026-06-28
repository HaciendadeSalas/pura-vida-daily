import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";

const churches = [
  {
    name: "Iglesia de Grecia",
    location: "Grecia, Alajuela",
    emoji: "⛪", bgGradient: "linear-gradient(135deg, #8b2020, #c0392b)",
    photo: null as string | null,
  },
  {
    name: "Basílica de Nuestra Señora de los Ángeles",
    location: "Cartago",
    emoji: "🕍", bgGradient: "linear-gradient(135deg, #2e86ab, #1a5276)",
    photo: null as string | null,
  },
  {
    name: "Iglesia de San Rafael de Heredia",
    location: "Heredia",
    emoji: "⛪", bgGradient: "linear-gradient(135deg, #d4a017, #a8881a)",
    photo: null as string | null,
  },
  {
    name: "Iglesia de San Isidro de Coronado",
    location: "San Isidro de Coronado, San José",
    emoji: "⛪", bgGradient: "linear-gradient(135deg, #4a8c3f, #2d6a27)",
    photo: null as string | null,
  },
  {
    name: "Catedral Metropolitana de San José",
    location: "San José",
    emoji: "🕍", bgGradient: "linear-gradient(135deg, #6b4e2e, #4a3728)",
    photo: null as string | null,
  },
  {
    name: "Iglesia de San Blas de Nicoya",
    location: "Nicoya, Guanacaste",
    emoji: "⛪", bgGradient: "linear-gradient(135deg, #d4a017, #c77729)",
    photo: null as string | null,
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
          {church.photo ? (
            <>
              <Image src={church.photo} alt={church.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: church.bgGradient }}>
              <div className="text-7xl">{church.emoji}</div>
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="font-headline text-white font-bold text-xl leading-tight drop-shadow">{church.name}</div>
            <div className="font-editorial italic text-white/70 text-xs mt-0.5">📍 {church.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
