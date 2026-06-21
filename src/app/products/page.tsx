import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductFeatures from "@/components/ProductFeatures";
import SustainableGoals from "@/components/SustainableGoals";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const howItWorks = [
  {
    step: "01",
    title: "Contact",
    desc: "Keratin fibers in the feather pillow encounter spilled oil on the water surface.",
  },
  {
    step: "02",
    title: "Absorption",
    desc: "Hydrocarbons bind to the hydrophobic feather fiber matrix, trapping oil efficiently.",
  },
  {
    step: "03",
    title: "Repulsion",
    desc: "The structural chemistry of feathers repels water while retaining absorbed oil.",
  },
];

const specs = [
  { field: "Material Composition", value: "Processed chicken feathers (keratin fiber)" },
  { field: "Absorption Rate", value: "1.3–2.8 g oil per g sorbent (varies by oil type)" },
  { field: "Weight", value: "Approx. 50–200g per pillow (customizable)" },
  { field: "Dimensions", value: "Standard: 30cm × 30cm × 5cm (custom available)" },
  { field: "Reusability", value: "Up to 3–5 cycles with proper squeezing/recovery" },
  { field: "Biodegradability", value: "Fully biodegradable within 6–12 months" },
];

const performance = [
  { oil: "Palm Oil", value: 2.8, max: 3 },
  { oil: "Diesel", value: 1.9, max: 3 },
  { oil: "Weathered Oil", value: 1.7, max: 3 },
  { oil: "Crude Oil", value: 1.3, max: 3 },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        <PageHero
          eyebrow="Innovation Entry"
          title={
            <>
              Chicken Feather{" "}
              <span className="text-[#4ADE80]">Oil Spill Sorbent Pillow</span>
            </>
          }
          description="A circular-economy innovation converting poultry waste into a high-performance, biodegradable oil absorbent — designed to protect waterways and advance sustainable industry."
        />

        <section id="sorbent-pillow" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <Image
                  src="/pillow_spill.jpg"
                  alt="Herock Envirotech Oil Absorbent Pillows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#1E7A46] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Flagship Innovation
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-4">
                  The Problem We Solve
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Oil spills threaten Nigeria&apos;s blue economy — contaminating waterways,
                  damaging ecosystems, and burdening communities. Conventional synthetic
                  sorbents are costly, non-biodegradable, and add to plastic pollution.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our innovation transforms poultry feather waste — an abundant agricultural
                  by-product — into a biodegradable, high-capacity oil absorbent that floats
                  on water, selectively absorbs hydrocarbons, and supports circular economy
                  principles.
                </p>
                <Link href="/contact" className="btn-primary inline-flex">
                  Partner With Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductFeatures />

        <section className="py-20 bg-[#0B1A3D]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                The Science
              </p>
              <h2 className="font-heading text-3xl font-black text-white">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((h) => (
                <div
                  key={h.step}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1E7A46] flex items-center justify-center mx-auto mb-5">
                    <span className="font-heading text-white font-black text-lg">{h.step}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{h.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-6">
                  Technical Specifications
                </h2>
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map((s, i) => (
                        <tr key={s.field} className={i % 2 === 0 ? "bg-[#F7FAF8]" : "bg-white"}>
                          <td className="py-3.5 px-5 font-semibold text-gray-700 border-r border-gray-100 w-2/5">
                            {s.field}
                          </td>
                          <td className="py-3.5 px-5 text-gray-500">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-6">
                  Performance Results
                </h2>
                <div className="space-y-5">
                  {performance.map((p) => (
                    <div key={p.oil}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-gray-700">{p.oil}</span>
                        <span className="text-sm font-bold text-[#1E7A46]">{p.value} g/g</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#1E7A46] to-[#4ADE80] rounded-full"
                          style={{ width: `${(p.value / p.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="text-gray-400 text-xs mt-4">
                    Laboratory trial results. Absorption capacity in grams of oil per gram of sorbent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SustainableGoals />
      </main>
      <Footer />
    </>
  );
}
