import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsHighlight from "@/components/NewsHighlight";
import ProductFeatures from "@/components/ProductFeatures";
import OilAbsorbentPillows from "@/components/OilAbsorbentPillows";
import FirstResponseKit from "@/components/FirstResponseKit";
import AboutPreview from "@/components/AboutPreview";
import SustainableGoals from "@/components/SustainableGoals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[102px]">
        <Hero />
        <NewsHighlight />
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
