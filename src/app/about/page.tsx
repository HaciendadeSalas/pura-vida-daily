import type { Metadata } from "next";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Pura Vida Daily",
};

// Photo of the Day / Current Chapter depend on the current date — revalidate
// daily so the static page cache doesn't freeze the countdown at build time.
export const revalidate = 86400;

const signature = Dancing_Script({ subsets: ["latin"], weight: "700" });

const origins: { src: string; caption: string; objectPosition?: string }[] = [
  {
    src: "/images/about/origins.jpg",
    caption: "Circa the early 1980s. Vilmar Salas (left) with his father, Don Tilo Salas.",
  },
  {
    src: "/images/about/d_salas_0.jpeg",
    caption: "Circa 2004. Vilmar Salas with grandsons on the motorbike.",
    // Landscape crop into a square frame otherwise cuts off Vilmar's head.
    objectPosition: "object-top",
  },
  {
    src: "/images/about/d_salas_1.jpg",
    caption: "December 2005. Danny in the mountains of Costa Rica.",
  },
  {
    src: "/images/about/d_salas_2.jpeg",
    caption: "June 2023. Wilmar Salas (left) pictured with Danny.",
    // Landscape crop into a square frame otherwise cuts off both men's heads.
    objectPosition: "object-top",
  },
];

// Desktop: an asymmetric 12-column "vision board" grid — desktopSpan/desktopAspect
// are hand-tuned per row group (7+5, 4+4+4, 8+4, 3+3+6) so every row fills exactly
// with no gaps and no overlap. Mobile: a single column at each photo's own native
// aspect ratio, so no cropping is needed there at all.
const visionItems: {
  src: string;
  caption: string;
  desktopSpan: number;
  desktopAspect: string;
  mobileAspect: string;
  objectPosition?: string;
}[] = [
  {
    src: "/images/about/mechanic.jpg",
    caption: "Concentrate on a single goal, a single task, and beat it into submission.",
    desktopSpan: 7,
    desktopAspect: "4 / 3",
    mobileAspect: "1 / 1",
  },
  {
    src: "/images/about/mechanic_II.jpg",
    caption: "Take the leap. Learn a skill. Life is long.",
    desktopSpan: 5,
    desktopAspect: "3 / 4",
    mobileAspect: "3 / 4",
  },
  {
    src: "/images/about/old_land_rover.jpg",
    caption: "Some things do not make you feel rich. They make you feel free.",
    desktopSpan: 4,
    desktopAspect: "3 / 4",
    mobileAspect: "4 / 5",
  },
  {
    src: "/images/about/oxen.jpg",
    caption:
      "You must adopt a philosophy of patience and incremental progress, trusting that the daily labor you put in will eventually yield results.",
    desktopSpan: 4,
    desktopAspect: "3 / 4",
    mobileAspect: "2 / 3",
  },
  {
    src: "/images/about/picking_coffee.jpg",
    caption:
      '"For thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee." — Psalm 128:2, KJV',
    desktopSpan: 4,
    desktopAspect: "3 / 4",
    mobileAspect: "2 / 3",
  },
  {
    src: "/images/about/surf.jpg",
    caption: "There is no secret to balance, you just have to feel the waves.",
    desktopSpan: 8,
    desktopAspect: "16 / 9",
    mobileAspect: "3 / 2",
  },
  {
    src: "/images/about/sword_fish.jpg",
    caption:
      "There is a particular kind of freedom that begins when the coastline disappears behind you.",
    desktopSpan: 4,
    desktopAspect: "3 / 4",
    mobileAspect: "3 / 4",
  },
  {
    src: "/images/about/macaws.jpg",
    caption:
      "Some people come into your life for a season.... And then there are those who, like macaws, choose you for a lifetime.",
    desktopSpan: 3,
    desktopAspect: "3 / 4",
    mobileAspect: "4 / 5",
  },
  {
    src: "/images/about/gallo_pinto.jpg",
    caption: "What nicer thing is there than to have somebody in your life who cooks with love?",
    desktopSpan: 3,
    desktopAspect: "1 / 1",
    mobileAspect: "1 / 1",
  },
  {
    src: "/images/about/Jesus_Christ_Redeemer.avif",
    caption:
      '"For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth." — Job 19:25, KJV',
    desktopSpan: 6,
    desktopAspect: "16 / 9",
    mobileAspect: "8 / 5",
    // Wide crop otherwise cuts off the statue's head and arms.
    objectPosition: "object-top",
  },
];

// Costa Rica sits at a fixed UTC-6 offset year-round (no DST), so the
// arrival threshold and the CR calendar date can both be computed with
// a plain 6-hour shift instead of a timezone library. Mirrors the
// countdown logic used for the homepage's "Your Journey" card.
const CR_OFFSET_MS = 6 * 60 * 60 * 1000;
function crCalendarDayMs(d: Date) {
  const crWall = new Date(d.getTime() - CR_OFFSET_MS);
  return Date.UTC(crWall.getUTCFullYear(), crWall.getUTCMonth(), crWall.getUTCDate());
}

const COUNTDOWN_TARGET = new Date("2026-10-05T12:00:00-06:00");
function isArrived(now: Date) {
  return now.getTime() >= COUNTDOWN_TARGET.getTime();
}
function calcDayNumber(now: Date) {
  return Math.floor((crCalendarDayMs(now) - crCalendarDayMs(COUNTDOWN_TARGET)) / (1000 * 60 * 60 * 24)) + 1;
}

export default function AboutPage() {
  const now = new Date();
  const arrived = isArrived(now);
  const diff = Math.max(0, COUNTDOWN_TARGET.getTime() - now.getTime());
  const daysUntil = Math.floor(diff / (1000 * 60 * 60 * 24));
  const dayNumber = arrived ? calcDayNumber(now) : null;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-parchment)" }}>
      <main className="flex-1 w-full">
        {/* HERO — vertical portrait, matching the photo's own 3:4 aspect so it shows in full */}
        <section className="w-full px-4 pt-10 pb-6 sm:pt-14">
          <h1
            className="font-body text-sm uppercase tracking-[0.3em] text-center mb-6"
            style={{ color: "var(--ink-light)" }}
          >
            About
          </h1>
          <div
            className="relative mx-auto overflow-hidden rounded"
            style={{
              width: "100%",
              maxWidth: "440px",
              aspectRatio: "3 / 4",
              border: "1px solid var(--border-aged)",
              boxShadow: "0 12px 32px rgba(44,24,16,0.18)",
            }}
          >
            <Image
              src="/images/about/d_salas_main.jpeg"
              alt="Danny in Costa Rica"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 440px) 100vw, 440px"
            />
          </div>
        </section>

        {/* BIO + PULL-QUOTE */}
        <section className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
          <p
            className="drop-cap font-editorial text-lg sm:text-xl leading-relaxed"
            style={{ color: "var(--ink-medium)" }}
          >
            Born the grandson of the bravest, most hospitable, and people-loving Costa Rican man to
            live, Don Vilmar Salas. Split between two worlds, I am blessed to have been raised
            between the US and Costa Rica. Soy tico de corazón and feel immense pride for Costa
            Rica, with a high aim to do what I can in my power to preserve the beauty and culture
            of the country while sharing love with the people — that their children will remember
            me the way Vilmar, Tilo, and one day my own parents will be remembered by the lives
            their heart and hands touched.
          </p>

          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: "var(--border-aged)" }} />
            <span style={{ color: "var(--gold-sun)" }}>❦</span>
            <div className="flex-1 h-px" style={{ background: "var(--border-aged)" }} />
          </div>

          <blockquote
            className="font-editorial italic text-2xl sm:text-3xl leading-snug text-center"
            style={{ color: "var(--green-jungle)" }}
          >
            &ldquo;With Tico blood in my veins, the mountains, beaches, future
            possibilities, and deep purpose of watering human connection call my name.&rdquo;
          </blockquote>
        </section>

        {/* ORIGINS STRIP */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-lg">🌱</span>
            <h2 className="font-headline text-xl font-bold" style={{ color: "var(--ink-dark)" }}>
              Origins
            </h2>
            <div className="flex-1 h-px" style={{ background: "var(--border-aged)" }} />
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div
              className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dashed"
              style={{ borderColor: "var(--border-aged)" }}
            />
            {origins.map((o) => (
              <div key={o.src} className="relative flex flex-col items-center text-center">
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: 64,
                    height: 64,
                    boxShadow: "0 0 0 3px var(--bg-cream), 0 0 0 4px var(--border-aged)",
                  }}
                >
                  <Image
                    src={o.src}
                    alt={o.caption}
                    fill
                    className={`object-cover ${o.objectPosition ?? ""}`}
                    sizes="64px"
                  />
                </div>
                <div className="text-sm mt-1.5" aria-hidden="true">
                  📍
                </div>
                <p
                  className="font-body text-xs mt-1 leading-snug"
                  style={{ color: "var(--ink-light)" }}
                >
                  {o.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* VISION SECTION — mobile: single simple column; md+: asymmetric vision-board grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {/* Mobile: one clean column, no scattered sizing */}
          <div className="flex flex-col gap-10 md:hidden">
            {visionItems.map((v) => (
              <figure key={v.src}>
                <div
                  className="relative overflow-hidden rounded"
                  style={{
                    aspectRatio: v.mobileAspect,
                    border: "1px solid var(--border-aged)",
                    boxShadow: "0 6px 16px rgba(44,24,16,0.12)",
                  }}
                >
                  <Image
                    src={v.src}
                    alt={v.caption}
                    fill
                    className={`object-cover ${v.objectPosition ?? ""}`}
                    sizes="100vw"
                  />
                </div>
                <figcaption className="mt-3">
                  <p
                    className="font-headline italic font-bold text-lg leading-snug"
                    style={{ color: "var(--ink-dark)" }}
                  >
                    {v.caption}
                  </p>
                  <div
                    className="h-1 w-10 mt-2"
                    style={{ background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))" }}
                  />
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Desktop/tablet: asymmetric "vision board" grid — varied sizes, no overlap */}
          <div
            className="hidden md:grid"
            style={{ gridTemplateColumns: "repeat(12, 1fr)", columnGap: "1.75rem", rowGap: "2.5rem", alignItems: "start" }}
          >
            {visionItems.map((v, i) => (
              <figure
                key={v.src}
                style={{
                  gridColumn: `span ${v.desktopSpan}`,
                  marginTop: i % 3 === 1 ? "1.5rem" : 0,
                }}
              >
                <div
                  className="relative overflow-hidden rounded"
                  style={{
                    aspectRatio: v.desktopAspect,
                    border: "1px solid var(--border-aged)",
                    boxShadow: "0 6px 16px rgba(44,24,16,0.12)",
                  }}
                >
                  <Image
                    src={v.src}
                    alt={v.caption}
                    fill
                    className={`object-cover ${v.objectPosition ?? ""}`}
                    sizes={`${Math.round((v.desktopSpan / 12) * 100)}vw`}
                  />
                </div>
                <figcaption className="mt-3">
                  <p
                    className="font-headline italic font-bold text-lg leading-snug"
                    style={{ color: "var(--ink-dark)" }}
                  >
                    {v.caption}
                  </p>
                  <div
                    className="h-1 w-10 mt-2"
                    style={{ background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))" }}
                  />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CURRENT CHAPTER STRIP */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg">🗓️</span>
            <h2 className="font-headline text-xl font-bold" style={{ color: "var(--ink-dark)" }}>
              Current Chapter
            </h2>
            <div className="flex-1 h-px" style={{ background: "var(--border-aged)" }} />
          </div>

          <div
            className="rounded overflow-hidden border flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-5"
            style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
          >
            <div
              className="font-headline font-black leading-none"
              style={{ fontSize: "4rem", color: "var(--green-jungle)" }}
            >
              {arrived ? dayNumber : daysUntil}
            </div>
            <div className="text-center sm:text-left">
              <div
                className="font-body text-sm uppercase tracking-widest"
                style={{ color: "var(--ink-light)" }}
              >
                {arrived ? "Days in Costa Rica" : "Days Until Arrival"}
              </div>
              <p className="font-editorial italic text-base mt-1" style={{ color: "var(--ink-medium)" }}>
                {arrived
                  ? "Building the next chapter, one day at a time."
                  : "The countdown to Costa Rica is on."}
              </p>
            </div>
            <div
              className="flex-1 hidden sm:block h-1 rounded"
              style={{ background: "linear-gradient(90deg, var(--gold-sun), var(--green-leaf))" }}
            />
          </div>
        </section>

        {/* CLOSE */}
        <section
          className="text-center px-4 py-16 sm:py-24"
          style={{ borderTop: "3px double var(--ink-dark)", background: "var(--bg-cream)" }}
        >
          <p
            className={`${signature.className} text-3xl sm:text-4xl leading-relaxed max-w-2xl mx-auto`}
            style={{ color: "var(--ink-dark)" }}
          >
            To chase the horizon, and still come home to the table. To build something with your
            hands, and share it with the people you love. Faith in Jesus first. Familia always.
            That&rsquo;s not just pura vida — that&rsquo;s the only life worth living.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
