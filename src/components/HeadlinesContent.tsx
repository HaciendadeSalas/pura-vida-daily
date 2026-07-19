"use client";

import Image from "next/image";
import { SectionHeader } from "./VolcanoWatch";
import { useTranslation } from "@/lib/i18n/translations";
import type { Headline } from "./Headlines";

export default function HeadlinesContent({ headlines }: { headlines: Headline[] | null }) {
  const { t } = useTranslation();

  return (
    <section className="mb-8">
      <SectionHeader label={t("headlines.title")} icon="📰" tagline={t("headlines.tagline")} />

      {headlines ? (
        <div className="rounded overflow-hidden border" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
          {headlines.map((item, i) => (
            <div
              key={item.url}
              className="flex gap-4 p-4 items-start group"
              style={{ borderBottom: i < headlines.length - 1 ? "1px solid var(--border-aged)" : undefined }}
            >
              {/* Thumbnail (falls back to a plain icon when the feed has no image) */}
              <div className="relative overflow-hidden text-2xl w-10 h-10 flex items-center justify-center rounded flex-shrink-0" style={{ background: "var(--bg-parchment)" }}>
                {item.image ? (
                  <Image src={item.image} alt="" fill sizes="40px" className="object-cover" />
                ) : (
                  "📰"
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-xs font-body font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{ background: item.categoryColor, color: "white" }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs font-body" style={{ color: "var(--ink-light)" }}>
                    The Tico Times{item.date ? ` · ${item.date}` : ""}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-base leading-snug mb-1" style={{ color: "var(--ink-dark)" }}>
                  {item.headline}
                </h3>

                <p className="font-editorial italic text-base leading-relaxed" style={{ color: "var(--ink-medium)" }}>
                  {item.summary}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body font-semibold flex-shrink-0 underline hover:no-underline"
                style={{ color: "var(--blue-ocean)" }}
              >
                {t("headlines.readMore")}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded overflow-hidden border p-5 text-center" style={{ borderColor: "var(--border-aged)", background: "var(--bg-cream)" }}>
          <p className="font-editorial italic" style={{ color: "var(--ink-medium)" }}>
            {t("headlines.unavailable")}
          </p>
        </div>
      )}

      <p className="text-xs font-body mt-2 ml-1" style={{ color: "var(--ink-light)" }}>
        {t("headlines.explainerPrefix")}
        <a href="https://ticotimes.net" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>The Tico Times</a> · <a href="https://crhoy.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>CRHoy</a> · <a href="https://www.nacion.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--blue-ocean)" }}>La Nación</a>
      </p>
    </section>
  );
}
