import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "oil-spill",
    title: "Oil Spill Response",
    tagline: "Environmental Remediation",
    desc: "Our Chicken Feather Oil Spill Sorbent Pillows are engineered for rapid containment and cleanup in marine, freshwater, and industrial environments — deploying quickly with minimal environmental disturbance.",
    benefits: [
      "Rapid deployment and easy handling",
      "High oil absorption capacity (1.3–2.8 g/g)",
      "Biodegradable — no secondary pollution",
      "Effective on crude, diesel, palm, and weathered oil",
    ],
    image: "/pillow_spill.jpg",
    reverse: false,
  },
  {
    id: "water-pollution",
    title: "Water Pollution Control",
    tagline: "Waterway Protection",
    desc: "Protect rivers, lakes, and coastal waters from hydrocarbon contamination. Our hydrophobic sorbents absorb oil while repelling water, supporting ecosystem recovery across Nigeria's blue economy.",
    benefits: [
      "Suitable for freshwater and marine environments",
      "Floats on water — selectively absorbs oil",
      "Supports aquatic ecosystem recovery",
      "Made from sustainable agricultural waste",
    ],
    image: "/pillow_action.jpg",
    reverse: true,
  },
  {
    id: "industrial",
    title: "Industrial Wastewater Management",
    tagline: "Industrial Applications",
    desc: "Manage oily wastewater in industrial and manufacturing facilities. Our biosorbent solutions reduce hydrocarbon load in effluent streams, supporting compliance and sustainable operations.",
    benefits: [
      "Reduces oil content in industrial effluents",
      "Cost-effective alternative to synthetic sorbents",
      "Reusable for multiple absorption cycles",
      "Locally sourced and manufactured in Nigeria",
    ],
    image: "/pillow_action.jpg",
    reverse: false,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        <PageHero
          eyebrow="Our Solutions"
          title={
            <>
              Protecting Our{" "}
              <span className="text-[#4ADE80]">Blue Economy</span>
            </>
          }
          description="Circular-economy technologies for oil spill response, water pollution control, and industrial environmental management — powered by science, built from waste."
        />

        <div>
          {solutions.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F7FAF8]"}`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    s.reverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl ${
                      s.reverse ? "lg:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className={s.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <p className="text-[#1E7A46] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                      {s.tagline}
                    </p>
                    <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-4">
                      {s.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>

                    <div className="space-y-2 mb-8">
                      {s.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-[#1E7A46] flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{b}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/products" className="btn-primary inline-flex">
                      View Product <ArrowRight size={14} />
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
