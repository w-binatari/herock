"use client";

import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const projects = [
  {
    tag: "Oil Spill Response",
    tagColor: "bg-[#1E7A46]",
    title: "Delta Coastline Cleanup Project",
    desc: "Successful deployment of feather sorbent pillows in a major oil spill incident.",
    image: "/pillow_spill.jpg",
    href: "/projects/delta-coastline",
  },
  {
    tag: "Industrial Application",
    tagColor: "bg-[#1D8A8A]",
    title: "Refinery Spill Management",
    desc: "Implementation in refinery environments for efficient spill control and recovery.",
    image: "/pillow_action.jpg",
    href: "/projects/refinery-spill",
  },
  {
    tag: "Community Impact",
    tagColor: "bg-[#D4A017]",
    title: "Environmental Awareness Program",
    desc: "Educating communities on circular economy and environmental stewardship.",
    image: "/pillow_feather.jpg",
    href: "/projects/awareness",
  },
];

export default function ProjectsAndNews() {
  return (
    <section className="py-20 bg-[#F7FAF8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          {/* Featured Projects */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-title text-2xl">
                FEATURED <span className="text-[#1E7A46]">PROJECTS</span>
              </h2>
              <Link href="/projects" className="text-[#1E7A46] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {projects.map((p) => (
                <Link key={p.title} href={p.href} className="card group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1F2937] text-sm mb-1.5 group-hover:text-[#1E7A46] transition-colors leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                    <span className="text-[#1E7A46] text-xs font-semibold flex items-center gap-1">
                      Read Case Study <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Subscribe */}
          <div className="flex flex-col gap-8 justify-center">
            {/* Subscribe */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading font-bold text-[#1F2937] text-sm uppercase tracking-wider mb-1">
                Stay Updated
              </h3>
              <p className="text-gray-500 text-xs mb-4">
                Subscribe to our newsletter for the latest updates on our innovations and impact.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#1E7A46] transition-colors"
                />
                <button className="bg-[#1E7A46] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#0E4D2F] transition-colors uppercase tracking-wider">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
