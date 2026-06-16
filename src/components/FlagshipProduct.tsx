"use client";

import Link from "next/link";
import { CheckCircle2, Download, ArrowRight, Leaf } from "lucide-react";

const highlights = [
  "High oil absorption capacity",
  "Water repellent",
  "Lightweight & easy to deploy",
  "Eco-friendly & biodegradable",
  "Locally sourced materials",
  "Cost-effective solution",
];

export default function FlagshipProduct() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              {/* Oil-water bg simulation */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80')] bg-cover bg-center opacity-40" />
              {/* Pillow card */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-56 h-48 bg-gradient-to-br from-white to-gray-100 rounded-[48px] shadow-2xl flex flex-col items-center justify-center border-4 border-white/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.02)_5px,rgba(0,0,0,0.02)_10px)]" />
                  <div className="relative z-10 flex flex-col items-center px-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#1E7A46] flex items-center justify-center mb-2">
                      <Leaf size={18} className="text-white" />
                    </div>
                    <p className="text-[#0E4D2F] font-black text-xs uppercase tracking-wider">HEROCK ENVIROTECH</p>
                    <p className="text-gray-600 font-bold text-[11px] uppercase tracking-wide leading-tight mt-1">
                      CHICKEN FEATHER<br />OIL SPILL SORBENT PILLOW
                    </p>
                    <p className="text-gray-400 text-[9px] mt-1.5">Sustainable. Effective. Responsible.</p>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-[#1E7A46] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Flagship Product
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-[#D4A017] text-sm font-bold uppercase tracking-widest mb-2">
              Our Flagship Product
            </p>
            <h2 className="section-title text-[#1E7A46] mb-4 text-4xl">
              CHICKEN FEATHER<br />OIL SPILL SORBENT PILLOW
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              A high-performance, eco-friendly oil sorbent made from processed chicken feathers.
              It absorbs oil efficiently while repelling water, making it the ideal solution for
              oil spill response and remediation.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#1E7A46] flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                View Product Details
              </Link>
              <Link href="/contact" className="btn-outline-green">
                Request a Sample
              </Link>
              <button className="flex items-center gap-2 text-[#1E7A46] text-sm font-semibold hover:underline">
                <Download size={16} />
                Download Datasheet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
