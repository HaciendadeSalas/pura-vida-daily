"use client";

import { useTranslation } from "@/lib/i18n/translations";
import type { TranslationKey } from "@/lib/i18n/translations";

export default function ComingSoon({ icon, titleKey }: { icon: string; titleKey: TranslationKey }) {
  const { t } = useTranslation();

  return (
    <div className="text-center py-24">
      <div className="text-5xl mb-4">{icon}</div>
      <h1 className="font-headline text-5xl sm:text-6xl font-black leading-none" style={{ color: "var(--ink-dark)" }}>
        {t(titleKey)}
      </h1>
      <p className="font-editorial italic text-lg mt-4" style={{ color: "var(--ink-light)" }}>
        {t("comingSoon.text")}
      </p>
    </div>
  );
}
