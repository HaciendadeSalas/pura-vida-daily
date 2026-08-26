"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/translations";

export interface TopicSlide {
  key: string;
  icon: string;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  photo: string | null; // null = no real photo yet, render placeholder gradient
  imagePosition?: string; // CSS object-position value, defaults to center
  gradient: string; // used for placeholder background
  paragraph: string;
  paragraphEs: string;
  stats: { label: string; labelEs: string; value: string; valueEs: string }[];
}

function PlaceholderPhoto({ icon, gradient }: { icon: string; gradient: string }) {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: gradient }}>
      <span className="text-5xl opacity-80">{icon}</span>
      <span
        className="absolute bottom-2 right-2.5 font-body text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded"
        style={{ background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.7)" }}
      >
        {t("bottomColumns.photoPending")}
      </span>
    </div>
  );
}

function TopicCard({ slide, accent }: { slide: TopicSlide; accent: string }) {
  const { language } = useTranslation();
  const title = language === "en" ? slide.title : slide.titleEs;
  const subtitle = language === "en" ? slide.subtitle : slide.subtitleEs;
  const paragraph = language === "en" ? slide.paragraph : slide.paragraphEs;

  return (
    <article
      className="rounded overflow-hidden border flex flex-col"
      style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}
    >
      <div className="relative" style={{ aspectRatio: "4 / 3" }}>
        {slide.photo ? (
          <>
            <Image
              src={slide.photo}
              alt={title}
              fill
              className="object-cover"
              style={slide.imagePosition ? { objectPosition: slide.imagePosition } : undefined}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          </>
        ) : (
          <PlaceholderPhoto icon={slide.icon} gradient={slide.gradient} />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="font-headline text-white font-bold text-xl leading-tight">{title}</div>
          <div className="font-editorial italic text-white/70 text-base mt-1 leading-tight">{subtitle}</div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="font-editorial italic text-base leading-relaxed" style={{ color: "var(--ink-medium)" }}>
          {paragraph}
        </p>

        <div
          className="flex flex-wrap gap-x-3 gap-y-1 mt-auto"
          style={{ borderTop: "1px solid var(--border-aged)", paddingTop: "8px" }}
        >
          {slide.stats.map((stat) => (
            <span key={stat.label} className="font-body text-sm" style={{ color: "var(--ink-light)" }}>
              <span className="uppercase tracking-widest">{language === "en" ? stat.label : stat.labelEs}:</span>{" "}
              <span className="font-headline font-bold" style={{ color: accent }}>
                {language === "en" ? stat.value : stat.valueEs}
              </span>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function TopicShowcase({ slides, accent }: { slides: TopicSlide[]; accent: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {slides.map((slide) => (
        <TopicCard key={slide.key} slide={slide} accent={accent} />
      ))}
    </div>
  );
}
