import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";
import OilAbsorbentPillows from "@/components/OilAbsorbentPillows";
import FirstResponseKit from "@/components/FirstResponseKit";
import AboutPreview from "@/components/AboutPreview";
import SustainableGoals from "@/components/SustainableGoals";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        <Hero />
        <ProductFeatures />
        <OilAbsorbentPillows />
        <FirstResponseKit />
        <AboutPreview />
        <SustainableGoals />
      </main>
      <Footer />
    </>
  );
}
