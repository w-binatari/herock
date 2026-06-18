import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WasteToSolutions from "@/components/WasteToSolutions";
import FlagshipProduct from "@/components/FlagshipProduct";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]"> {/* top-bar (40px) + nav (62px) */}
        <Hero />
        <WasteToSolutions />
        <FlagshipProduct />
      </main>
      <Footer />
    </>
  );
}
