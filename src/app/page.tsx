import Header from "@/components/Header";
import InfoGrid from "@/components/InfoGrid";
import VolcanoWatch from "@/components/VolcanoWatch";
import AnimalOfTheDay from "@/components/AnimalOfTheDay";
import PhotoOfTheDay from "@/components/PhotoOfTheDay";
import MapSection from "@/components/MapSection";
import PropertyWatch from "@/components/PropertyWatch";
import Headlines from "@/components/Headlines";
import BottomColumns, { DrivePhotoGallery } from "@/components/BottomColumns";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-parchment)" }}>
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 space-y-0">
        <InfoGrid />

        {/* Two-column layout: Volcano + Animal side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <VolcanoWatch />
          <AnimalOfTheDay />
        </div>

        {/* Photo of the Day full width */}
        <PhotoOfTheDay />

        {/* Map + something side by side */}
        <MapSection />

        {/* Property Watch */}
        <PropertyWatch />

        {/* Headlines */}
        <Headlines />

        {/* Bottom 4 columns */}
        <BottomColumns />

        {/* Drive photo gallery — full width, after the 4-column section */}
        <DrivePhotoGallery />
      </main>

      <Footer />
    </div>
  );
}
