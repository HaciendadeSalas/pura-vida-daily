import Header from "@/components/Header";
import InfoGrid from "@/components/InfoGrid";
import VolcanoWatch from "@/components/VolcanoWatch";
import AnimalOfTheDay from "@/components/AnimalOfTheDay";
import PhotoOfTheDay from "@/components/PhotoOfTheDay";
import MapSection from "@/components/MapSection";
import Headlines from "@/components/Headlines";
import BottomColumns, { DrivePhotoGallery } from "@/components/BottomColumns";
import WhatInSeason from "@/components/WhatInSeason";
import ChurchOfTheDay from "@/components/ChurchOfTheDay";
import Footer from "@/components/Footer";

// Photo of the Day depends on the current date (Costa Rica timezone) — revalidate
// daily so the static page cache doesn't freeze it at build time indefinitely.
export const revalidate = 86400;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-parchment)" }}>
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 space-y-0">
        <InfoGrid />

        {/* Left col: Volcano + Photo stacked. Right col: Animal. */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          <div className="flex flex-col gap-8">
            <VolcanoWatch />
            <PhotoOfTheDay />
          </div>
          <AnimalOfTheDay />
        </div>

        {/* Map + something side by side */}
        <MapSection />

        {/* Headlines */}
        <Headlines />

        {/* Bottom 4 columns */}
        <BottomColumns />

        {/* Photo cluster: Drive photos · Season · Churches */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-start">
          <DrivePhotoGallery />
          <WhatInSeason />
          <ChurchOfTheDay />
        </div>
      </main>

      <Footer />
    </div>
  );
}
