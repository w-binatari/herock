import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Download, Leaf, Droplets, Feather, Factory, Ship, FlaskConical, ArrowRight } from "lucide-react";

const benefits = [
  { icon: <Droplets size={22} />, title: "High Oil Absorption", desc: "Absorbs up to 2.8g of oil per gram of sorbent material." },
  { icon: <Feather size={22} />, title: "Lightweight", desc: "Easy to handle and deploy across all environments." },
  { icon: <Leaf size={22} />, title: "Eco-Friendly", desc: "Made from natural poultry feathers — fully biodegradable." },
  { icon: <CheckCircle2 size={22} />, title: "Biodegradable", desc: "Breaks down naturally — no microplastic pollution." },
  { icon: <Factory size={22} />, title: "Cost-Effective", desc: "Significantly cheaper than synthetic sorbents." },
  { icon: <FlaskConical size={22} />, title: "Locally Sourced", desc: "Materials sourced from Nigerian poultry farms." },
];

const applications = [
  { icon: <Ship size={20} />, label: "Marine Oil Spills" },
  { icon: <Droplets size={20} />, label: "Inland Water Spills" },
  { icon: <Factory size={20} />, label: "Industrial Facilities" },
  { icon: <FlaskConical size={20} />, label: "Petroleum Depots" },
  { icon: <Factory size={20} />, label: "Refineries" },
  { icon: <Ship size={20} />, label: "Offshore Operations" },
];

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
        {/* Hero */}
        <section className="relative bg-[#0E4D2F] py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pillow_spill.jpg')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E4D2F]/95 to-[#1E7A46]/70" />
          <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Our Products
            </span>
            <h1 className="font-heading text-5xl font-black mb-4">Sustainable Sorbent Technologies</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Nature-derived, science-backed solutions for oil spill response and environmental remediation.
            </p>
          </div>
        </section>

        {/* Product Overview */}
        <section id="sorbent-pillow" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <img 
                  src="/pillow_feather.jpg" 
                  alt="Chicken Feather Oil Spill Sorbent Pillow"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-4 left-4 bg-[#1E7A46] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Featured Product
                </div>
              </div>
              {/* Content */}
              <div>
                <span className="green-badge mb-4 inline-block">Product Overview</span>
                <h2 className="section-title mb-2">Feather Clean-Sorbent Pillow</h2>
                <p className="text-[#D4A017] font-semibold text-sm mb-5 uppercase tracking-wider">Chicken Feather Oil Spill Sorbent</p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  A sustainable oil sorbent developed from processed chicken feathers designed to absorb oil efficiently
                  while repelling water. Lightweight, biodegradable, and cost-effective — ideal for rapid response
                  to oil spills across marine and industrial environments.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn-primary">Request a Sample</Link>
                  <button className="btn-outline-green flex items-center gap-2">
                    <Download size={16} /> Download Datasheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="green-badge mb-4 inline-block">Why Choose Us</span>
              <h2 className="section-title">Key Benefits</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="card p-6">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-[#1E7A46]">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-1.5">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="green-badge mb-4 inline-block">Use Cases</span>
              <h2 className="section-title">Applications</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {applications.map((a) => (
                <div key={a.label} className="bg-[#F7FAF8] hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-5 flex flex-col items-center text-center transition-all cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-3 text-[#1E7A46]">
                    {a.icon}
                  </div>
                  <p className="text-gray-700 font-semibold text-xs leading-tight">{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#0E4D2F]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-white/10 text-green-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                The Science
              </span>
              <h2 className="font-heading text-3xl font-bold text-white">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((h, i) => (
                <div key={h.step} className="relative">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#1E7A46] flex items-center justify-center mx-auto mb-5">
                      <span className="font-heading text-white font-black text-lg">{h.step}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg mb-3">{h.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 z-10">
                      <ArrowRight size={20} className="text-green-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="green-badge mb-4 inline-block">Specifications</span>
                <h2 className="section-title mb-6">Technical Specifications</h2>
                <div className="overflow-hidden rounded-2xl border border-gray-100">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map((s, i) => (
                        <tr key={s.field} className={i % 2 === 0 ? "bg-[#F7FAF8]" : "bg-white"}>
                          <td className="py-3.5 px-5 font-semibold text-gray-700 border-r border-gray-100 w-2/5">{s.field}</td>
                          <td className="py-3.5 px-5 text-gray-500">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Performance Chart */}
              <div>
                <span className="green-badge mb-4 inline-block">Trial Results</span>
                <h2 className="section-title mb-6">Performance Results</h2>
                <div className="space-y-5">
                  {performance.map((p) => (
                    <div key={p.oil}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-gray-700">{p.oil}</span>
                        <span className="text-sm font-bold text-[#1E7A46]">{p.value} g/g</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#1E7A46] to-[#4ADE80] rounded-full transition-all duration-1000"
                          style={{ width: `${(p.value / p.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="text-gray-400 text-xs mt-4">
                    * Results from laboratory trials. Values represent absorption capacity in grams of oil per gram of sorbent material.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
