import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Recycle, TreePine, Wind, Shield, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const impacts = [
  {
    icon: <Recycle size={28} />,
    title: "Waste Diversion",
    desc: "Keeping chicken feathers out of landfills by converting them into high-value sorbent materials.",
    stat: "125+ Tons",
    statLabel: "Diverted from Landfills",
  },
  {
    icon: <Wind size={28} />,
    title: "Carbon Reduction",
    desc: "Reducing emissions from feather incineration and synthetic sorbent manufacturing.",
    stat: "40%",
    statLabel: "Lower Carbon Footprint",
  },
  {
    icon: <TreePine size={28} />,
    title: "Pollution Prevention",
    desc: "Preventing oil from contaminating water bodies, protecting aquatic life and ecosystems.",
    stat: "85+ Tons",
    statLabel: "Oil Absorbed",
  },
  {
    icon: <Shield size={28} />,
    title: "Ecosystem Protection",
    desc: "Supporting biodiversity recovery in oil-affected marine and freshwater environments.",
    stat: "12+",
    statLabel: "Communities Protected",
  },
];

const process = [
  { step: "Poultry Waste", color: "#D4A017" },
  { step: "Collection", color: "#1D8A8A" },
  { step: "Processing", color: "#1E7A46" },
  { step: "Manufacturing", color: "#0E4D2F" },
  { step: "Oil Spill Cleanup", color: "#1E7A46" },
  { step: "Environmental Restoration", color: "#1D8A8A" },
];

const downloads = [
  { title: "Product Brochure", type: "PDF", size: "2.4 MB" },
  { title: "Technical Datasheet", type: "PDF", size: "1.1 MB" },
  { title: "Research Paper — Feather Sorbents", type: "PDF", size: "3.8 MB" },
  { title: "Environmental Certification", type: "PDF", size: "0.8 MB" },
];

export default function SustainabilityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        {/* Hero */}
        <section className="relative bg-[#0E4D2F] py-28 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E4D2F]/95 to-[#1E7A46]/70" />
          <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Our Commitment
            </span>
            <h1 className="font-heading text-5xl font-black mb-4">Driving Circular Economy Innovation</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Every product we make is a step toward a cleaner, more sustainable planet.
            </p>
          </div>
        </section>

        {/* Circular Economy Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="green-badge mb-4 inline-block">Our Model</span>
              <h2 className="section-title">The Circular Economy Flow</h2>
              <p className="section-subtitle mx-auto mt-3 text-center">
                Nothing goes to waste. Every step of our process creates value.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {process.map((p, i) => (
                <div key={p.step} className="flex items-center gap-3">
                  <div
                    className="px-5 py-3 rounded-full text-white font-bold text-sm shadow-md"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.step}
                  </div>
                  {i < process.length - 1 && (
                    <ArrowRight size={18} className="text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Benefits */}
        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="green-badge mb-4 inline-block">Impact Areas</span>
              <h2 className="section-title">Environmental Benefits</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impacts.map((imp) => (
                <div key={imp.title} className="card p-7 text-center">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4 text-[#1E7A46]">
                    {imp.icon}
                  </div>
                  <div className="mb-4">
                    <p className="font-heading font-black text-2xl text-[#1E7A46]">{imp.stat}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{imp.statLabel}</p>
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-2">{imp.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{imp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="green-badge mb-4 inline-block">Resources</span>
              <h2 className="section-title">Downloads</h2>
              <p className="section-subtitle mx-auto mt-3 text-center">
                Access our product documentation, research papers, and certifications.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {downloads.map((d) => (
                <div key={d.title} className="bg-[#F7FAF8] hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-6 transition-all group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-[#1E7A46] transition-colors">
                    <Download size={18} className="text-[#1E7A46] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-1 leading-tight">{d.title}</h3>
                  <p className="text-gray-400 text-xs">{d.type} · {d.size}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
