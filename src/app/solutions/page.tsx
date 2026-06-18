import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Droplets, Factory, Waves, CheckCircle2, ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "oil-spill",
    icon: <Droplets size={32} className="text-[#1E7A46]" />,
    title: "Oil Spill Response",
    tagline: "Environmental Remediation Solutions",
    desc: "Our Feather Clean-Sorbent Pillows are engineered for rapid oil spill containment and cleanup in marine, freshwater, and industrial environments. Deployed quickly and effectively with minimal environmental disturbance.",
    benefits: [
      "Rapid deployment and easy handling",
      "High oil absorption capacity (1.3–2.8 g/g)",
      "Biodegradable — no secondary pollution",
      "Effective on crude, diesel, palm, and weathered oil",
    ],
    industries: ["Maritime & Shipping", "Oil & Gas Refineries", "Port Authorities", "Environmental Agencies"],
    image: "/pillow_action.jpg",
    reverse: false,
  },
  {
    id: "water-pollution",
    icon: <Waves size={32} className="text-[#1D8A8A]" />,
    title: "Water Pollution Control",
    tagline: "Waterway Protection Technologies",
    desc: "Protect rivers, lakes, and coastal waters from hydrocarbon contamination. Our technologies provide passive and active oil interception to keep water bodies clean and ecosystems thriving.",
    benefits: [
      "Suitable for freshwater and marine environments",
      "Water-repellent design — absorbs oil, not water",
      "Supports aquatic ecosystem recovery",
      "Compliance with environmental regulations",
    ],
    industries: ["Water Treatment Plants", "Fisheries & Aquaculture", "Conservation Groups", "Local Government"],
    image: "/pillow_feather.jpg",
    reverse: true,
  },
  {
    id: "industrial",
    icon: <Factory size={32} className="text-[#D4A017]" />,
    title: "Industrial Wastewater Management",
    tagline: "Industrial Environmental Solutions",
    desc: "Manage oily wastewater in industrial and manufacturing facilities. Our sorbent solutions reduce the hydrocarbon load in effluent streams, supporting compliance and sustainable operations.",
    benefits: [
      "Reduces BOD and oil content in effluents",
      "Cost-effective alternative to synthetic sorbents",
      "Reusable for multiple absorption cycles",
      "Supports ISO 14001 & ESHS compliance",
    ],
    industries: ["Petroleum Depots", "Manufacturing Plants", "Power Stations", "Mining Operations"],
    image: "/pillow_spill.jpg",
    reverse: false,
  },
];

export default function SolutionsPage() {
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
              What We Offer
            </span>
            <h1 className="font-heading text-5xl font-black mb-4">Sustainable Environmental Solutions</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              From oil spill cleanup to industrial wastewater management — powered by nature, engineered for performance.
            </p>
          </div>
        </section>

        {/* Solutions */}
        <div>
          {solutions.map((s, i) => (
            <section key={s.id} id={s.id} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F7FAF8]"}`}>
              <div className="max-w-7xl mx-auto px-4">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${s.reverse ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative rounded-2xl overflow-hidden h-80 ${s.reverse ? "lg:col-start-2" : ""}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${s.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                        <div className="text-white">{s.icon}</div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className={s.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <span className="green-badge mb-4 inline-block">{s.tagline}</span>
                    <h2 className="section-title mb-4">{s.title}</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>

                    <div className="mb-6">
                      <p className="font-bold text-sm text-gray-700 uppercase tracking-wider mb-3">Key Benefits</p>
                      <div className="space-y-2">
                        {s.benefits.map((b) => (
                          <div key={b} className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-[#1E7A46] flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <p className="font-bold text-sm text-gray-700 uppercase tracking-wider mb-3">Industries Served</p>
                      <div className="flex flex-wrap gap-2">
                        {s.industries.map((ind) => (
                          <span key={ind} className="bg-green-50 text-[#1E7A46] text-xs font-medium px-3 py-1.5 rounded-full border border-green-100">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary inline-flex">
                      Get a Consultation <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
