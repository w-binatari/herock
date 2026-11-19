import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SustainableGoals from "@/components/SustainableGoals";
import { Recycle, Leaf, Droplets, ArrowRight, Wind, Factory } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Sustainability",
  "How the Chicken Feather Oil Pillow supports UN SDGs 9, 12, 13 and 14 by turning poultry waste into a resource for environmental protection.",
  "/sustainability"
);


const circularSteps = [
  { step: "Poultry Waste", color: "#8A6D2F" },
  { step: "Collection", color: "#24443F" },
  { step: "Processing", color: "#1E7A46" },
  { step: "Manufacturing", color: "#0E4D2F" },
  { step: "Oil Spill Cleanup", color: "#24443F" },
  { step: "Ecosystem Restoration", color: "#0F2A2E" },
];

const environmentalImpact = [
  "Reducing poultry waste diverted from landfills",
  "Replacing synthetic sorbent materials with biodegradable alternatives",
  "Supporting cleaner waterways through efficient oil spill cleanup",
  "Eliminating secondary waste after disposal",
  "Reducing dependence on imported synthetic absorbents",
];

const sustainabilityBenefits = [
  { icon: <Recycle size={24} />, title: "Sustainable Waste Utilization", desc: "Converts agricultural by-product into a functional environmental product." },
  { icon: <Leaf size={24} />, title: "Renewable Raw Materials", desc: "Locally sourced poultry feathers — abundant across the Niger Delta." },
  { icon: <Droplets size={24} />, title: "Reduced Pollution", desc: "Biodegradable sorbents that protect waterways without microplastic waste." },
  { icon: <Wind size={24} />, title: "Green Manufacturing", desc: "Simple, cost-effective production supporting environmental conservation." },
  { icon: <Factory size={24} />, title: "Circular Economy", desc: "Circularity score of 13/27 with confirmed economic viability and validated processing technology." },
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <PageHero
          eyebrow="Sustainability"
          title={
            <>
              Circular Economy{" "}
              <span className="text-mint">Innovation</span>
            </>
          }
          description="The Chicken Feather Oil Pillow advances responsible production, climate-conscious remediation, and protection of life below water — turning waste into a resource for environmental conservation."
        />

        <section className="py-20 bg-paper">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-semibold text-ink mb-3">
                The Circular Economy Flow
              </h2>
              <p className="text-ink/60 max-w-xl mx-auto">
                Nothing goes to waste. Every step of our process creates environmental and economic value.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {circularSteps.map((p, i) => (
                <div key={p.step} className="flex items-center gap-3">
                  <div
                    className="px-5 py-3 rounded-full text-white font-bold text-sm"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.step}
                  </div>
                  {i < circularSteps.length - 1 && (
                    <ArrowRight size={18} className="text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-ink mb-5">
                  Environmental Impact
                </h2>
                <p className="text-ink/70 leading-relaxed mb-6">
                  The Chicken Feather Oil Pillow contributes to environmental sustainability
                  by addressing both agricultural waste and oil pollution simultaneously.
                </p>
                <ul className="space-y-3">
                  {environmentalImpact.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink/70 text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-leaf mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ink rounded-2xl p-8 text-white">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Circular Economy Assessment
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Circularity Score</span>
                    <span className="font-bold text-mint">13 / 27</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Economic Viability</span>
                    <span className="font-bold text-mint">Confirmed</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Raw Material Availability</span>
                    <span className="font-bold text-mint">Adequate</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Processing Technology</span>
                    <span className="font-bold text-mint">Validated</span>
                  </div>
                  <p className="text-white/50 text-xs pt-2 leading-relaxed">
                    Strong potential for utilizing poultry waste across the Niger Delta.
                    Main barrier identified: absence of a comprehensive regulatory framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-paper">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-semibold text-ink">
                Sustainability Benefits
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sustainabilityBenefits.map((imp) => (
                <div
                  key={imp.title}
                  className="bg-cream rounded-2xl p-7 border border-line"
                >
                  <div className="w-12 h-12 rounded-full bg-leaf text-white flex items-center justify-center mb-4">
                    {imp.icon}
                  </div>
                  <h3 className="font-heading font-bold text-ink mb-2 text-sm">{imp.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{imp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SustainableGoals />
      </main>
      <Footer />
    </>
  );
}
