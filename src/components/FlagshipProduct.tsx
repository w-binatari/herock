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
              <img 
                src="/pillow_feather.jpg" 
                alt="Chicken Feather Oil Spill Sorbent Pillow"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
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
                Partner With Us
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
