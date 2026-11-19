import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsHighlight from "@/components/NewsHighlight";
import HowItWorks from "@/components/HowItWorks";
import OilAbsorbentPillows from "@/components/OilAbsorbentPillows";
import FirstResponseKit from "@/components/FirstResponseKit";
import AboutPreview from "@/components/AboutPreview";
import SustainableGoals from "@/components/SustainableGoals";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <HowItWorks />
        <OilAbsorbentPillows />
        <FirstResponseKit />
        <NewsHighlight />
        <AboutPreview />
        <SustainableGoals />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
