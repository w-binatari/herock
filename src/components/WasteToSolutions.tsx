"use client";

import Link from "next/link";
import { Recycle, FlaskConical, Leaf, Handshake } from "lucide-react";

const features = [
  {
    icon: <Recycle size={28} className="text-[#1E7A46]" />,
    title: "Circular Economy",
    desc: "We transform poultry waste into valuable environmental solutions.",
  },
  {
    icon: <FlaskConical size={28} className="text-[#1E7A46]" />,
    title: "Innovative Technology",
    desc: "Science-driven products designed for maximum performance.",
  },
  {
    icon: <Leaf size={28} className="text-[#1E7A46]" />,
    title: "Environmental Impact",
    desc: "Reducing pollution, protecting ecosystems and communities.",
  },
  {
    icon: <Handshake size={28} className="text-[#1E7A46]" />,
    title: "Partnerships",
    desc: "Working with industries, governments and communities for a sustainable future.",
  },
];

export default function WasteToSolutions() {
  return (
    <section className="bg-[#F7FAF8] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="section-title mb-4">
              WE TURN WASTE<br />INTO SOLUTIONS{" "}
              <span className="inline-block text-2xl">🌿</span>
            </h2>
            <p className="section-subtitle text-gray-500 mb-8">
              Using circular economy principles, we create innovative products that protect
              the environment and build a better future.
            </p>
            <Link href="/about" className="btn-primary inline-flex">
              Learn More About Us
            </Link>
          </div>

          {/* Right - 4 feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1F2937] text-sm uppercase tracking-wider mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
