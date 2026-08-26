import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import TopicShowcase from "@/components/TopicShowcase";
import Footer from "@/components/Footer";
import { coffeeSlides } from "@/data/coffeeSlides";

export const metadata: Metadata = {
  title: "Rincón del Café — Pura Vida Daily",
};

export default function RinconDelCafePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-parchment)" }}>
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <PageHeading icon="☕" titleKey="bottomColumns.columnTitle.coffee" />

        <TopicShowcase slides={coffeeSlides} accent="var(--brown-coffee)" />
      </main>

      <Footer />
    </div>
  );
}
