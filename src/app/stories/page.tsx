import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stories — Pura Vida Daily",
};

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-parchment)" }}>
      <main className="flex-1 max-w-7xl mx-auto w-full px-4">
        <ComingSoon icon="📖" titleKey="nav.stories" />
      </main>

      <Footer />
    </div>
  );
}
