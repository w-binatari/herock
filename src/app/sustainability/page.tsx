import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SustainableGoals from "@/components/SustainableGoals";
import { Recycle, Leaf, Droplets, ArrowRight } from "lucide-react";

const circularSteps = [
  { step: "Poultry Waste", color: "#D4A017" },
  { step: "Collection", color: "#1D8A8A" },
  { step: "Processing", color: "#1E7A46" },
  { step: "Manufacturing", color: "#0E4D2F" },
  { step: "Oil Spill Cleanup", color: "#1E7A46" },
  { step: "Ecosystem Restoration", color: "#0B1A3D" },
];

const impacts = [
  {
    icon: <Recycle size={24} />,
    title: "Waste Diversion",
    desc: "Converting poultry feather waste — a major agricultural by-product — into high-value environmental solutions instead of landfill or incineration.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Circular Economy",
    desc: "Every product closes the loop: agricultural waste becomes a functional absorbent, protecting ecosystems while creating economic value.",
  },
  {
    icon: <Droplets size={24} />,
    title: "Pollution Prevention",
    desc: "Biodegradable sorbents that absorb hydrocarbons from waterways without introducing microplastics or synthetic waste into the environment.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        <PageHero
          eyebrow="Sustainability"
          title={
            <>
              Circular Economy{" "}
              <span className="text-[#4ADE80]">Innovation</span>
            </>
          }
          description="Our innovation is built on the principle that waste is a resource. By transforming poultry feathers into oil spill sorbents, we advance responsible production and protect life below water."
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-3">
                The Circular Economy Flow
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Nothing goes to waste. Every step of our process creates environmental and economic value.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {circularSteps.map((p, i) => (
                <div key={p.step} className="flex items-center gap-3">
                  <div
                    className="px-5 py-3 rounded-full text-white font-bold text-sm shadow-md"
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

        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide">
                Environmental Impact
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {impacts.map((imp) => (
                <div
                  key={imp.title}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1E7A46] text-white flex items-center justify-center mx-auto mb-4">
                    {imp.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[#0B1A3D] mb-2">{imp.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{imp.desc}</p>
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
