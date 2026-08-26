import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import TopicShowcase from "@/components/TopicShowcase";
import Footer from "@/components/Footer";
import { cultureSlides } from "@/data/cultureSlides";

export const metadata: Metadata = {
  title: "Cultura e Historia — Pura Vida Daily",
};

export default function CulturaEHistoriaPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-parchment)" }}>
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <PageHeading icon="🎭" titleKey="bottomColumns.columnTitle.culture" />

        <TopicShowcase slides={cultureSlides} accent="var(--ink-dark)" />
      </main>

      <Footer />
    </div>
  );
}
