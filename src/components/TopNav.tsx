"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/lib/i18n/translations";
import type { TranslationKey } from "@/lib/i18n/translations";

const NAV_LINKS: { href: string; key: TranslationKey }[] = [
  { href: "/", key: "nav.home" },
  { href: "/rincon-del-cafe", key: "bottomColumns.columnTitle.coffee" },
  { href: "/cultura-e-historia", key: "bottomColumns.columnTitle.culture" },
  { href: "/stories", key: "nav.stories" },
  { href: "/about", key: "nav.about" },
];

export default function TopNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  // The login gate isn't really a "page" of the site — no nav needed there.
  if (pathname?.startsWith("/login")) return null;

  return (
    <nav className="sticky top-0 z-50" style={{ background: "var(--ink-dark)" }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-5 sm:gap-10 overflow-x-auto">
        {NAV_LINKS.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-body text-xs sm:text-sm uppercase tracking-widest py-3 transition-colors"
              style={{
                color: active ? "var(--gold-sun)" : "rgba(250,247,240,0.75)",
                borderBottom: active ? "2px solid var(--gold-sun)" : "2px solid transparent",
              }}
            >
              {t(link.key)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
