"use client";

import { useTranslation } from "@/lib/i18n/translations";
import type { TranslationKey } from "@/lib/i18n/translations";

export default function PageHeading({ icon, titleKey }: { icon: string; titleKey: TranslationKey }) {
  const { t } = useTranslation();

  return (
    <div className="text-center pb-8 mb-8" style={{ borderBottom: "1px solid var(--border-aged)" }}>
      <h1 className="font-headline text-5xl sm:text-6xl font-black leading-none" style={{ color: "var(--ink-dark)" }}>
        {icon} {t(titleKey)}
      </h1>
    </div>
  );
}
