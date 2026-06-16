"use client";

import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const projects = [
  {
    tag: "Oil Spill Response",
    tagColor: "bg-[#1E7A46]",
    title: "Delta Coastline Cleanup Project",
    desc: "Successful deployment of feather sorbent pillows in a major oil spill incident.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
    href: "/projects/delta-coastline",
  },
  {
    tag: "Industrial Application",
    tagColor: "bg-[#1D8A8A]",
    title: "Refinery Spill Management",
    desc: "Implementation in refinery environments for efficient spill control and recovery.",
    image: "https://images.unsplash.com/photo-1565217574178-5a3ce23ca52e?w=600&q=80",
    href: "/projects/refinery-spill",
  },
  {
    tag: "Community Impact",
    tagColor: "bg-[#D4A017]",
    title: "Environmental Awareness Program",
    desc: "Educating communities on circular economy and environmental stewardship.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    href: "/projects/awareness",
  },
];

const news = [
  {
    title: "Herock Envirotech Wins Green Innovation Award 2024",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=70",
  },
  {
    title: "New Research Confirms High Efficiency of Feather Sorbents",
    date: "April 28, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543559a56e4b?w=200&q=70",
  },
  {
    title: "Partnership with Maritime Agencies for Cleaner Oceans",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=70",
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

          {/* Right Column: News + Subscribe */}
          <div className="flex flex-col gap-8">
            {/* Latest News */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading font-bold text-[#1F2937] text-base uppercase tracking-wider">
                  Latest News
                </h3>
                <Link href="/news" className="text-[#1E7A46] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={12} />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {news.map((n) => (
                  <Link key={n.title} href="#" className="flex items-start gap-3 group">
                    <div
                      className="w-14 h-14 flex-shrink-0 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${n.image})` }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-[#1E7A46] transition-colors leading-tight mb-1">
                        {n.title}
                      </p>
                      <p className="text-xs text-gray-400">{n.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

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
