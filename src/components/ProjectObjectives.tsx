"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  CircleDollarSign,
  Users,
  Recycle,
  Flag,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const objectives = [
  {
    id: 1,
    icon: Leaf,
    title: "Locally Sourced Materials",
    summary: "Promote local materials in oil sorbent manufacturing.",
    detail:
      "We are building a supply chain with poultry farms across the Niger Delta — turning abundant feather waste into sorbent raw material. This reduces dependence on imported synthetic absorbents and keeps value within Nigerian communities.",
    approach: "Farm partnerships · Local processing · Domestic manufacturing",
  },
  {
    id: 2,
    icon: CircleDollarSign,
    title: "Lower Cleanup Costs",
    summary: "Reduce the cost of oil spill cleanup operations.",
    detail:
      "CFOP is produced through a simple, low-cost process using waste feathers — a fraction of the cost of conventional synthetic sorbents. Faster deployment and high absorption capacity mean less material used per spill, cutting remediation bills for operators and agencies.",
    approach: "Affordable production · High absorption efficiency · Less material per spill",
  },
  {
    id: 3,
    icon: Users,
    title: "Employment & Growth",
    summary: "Create employment through commercialization.",
    detail:
      "Commercializing CFOP creates jobs across the value chain: feather collection, processing, pillow manufacturing, spill response deployment, and training. As demand grows from oil & gas, marine, and industrial sectors, so does local employment.",
    approach: "Manufacturing jobs · Field deployment · Training programmes",
  },
  {
    id: 4,
    icon: Recycle,
    title: "Sustainable Waste Management",
    summary: "Repurpose poultry waste into functional products.",
    detail:
      "Millions of tons of poultry feathers are discarded annually. CFOP diverts this waste from landfills and incineration, converting it into a product that actively cleans the environment — a true waste-to-value circular model.",
    approach: "Waste diversion · Landfill reduction · Circular conversion",
  },
  {
    id: 5,
    icon: Flag,
    title: "Local Content Development",
    summary: "Support Nigerian-owned innovation and industry.",
    detail:
      "Herock Envirotech is a Nigerian cleantech company (RC 1731428) developing homegrown environmental technology. CFOP supports local content goals in the oil & gas sector by offering a domestically manufactured, scientifically validated spill response solution.",
    approach: "Nigerian innovation · Oil & gas sector supply · NCDMB alignment",
  },
  {
    id: 6,
    icon: RefreshCw,
    title: "Circular Economy",
    summary: "Advance circular economy principles at scale.",
    detail:
      "Our innovation closes the loop: agricultural waste becomes a functional absorbent, protects waterways, and biodegrades after use. With a validated circularity score and processing technology proven across the Niger Delta, CFOP demonstrates circular economy in action.",
    approach: "Waste-to-value · Biodegradable end-of-life · Scalable model",
  },
];

export default function ProjectObjectives() {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const openId = pinned ?? hovered;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F7FAF8] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-[#1E7A46] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Our Goals
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#0B1A3D] uppercase tracking-wide mb-3">
            Project Objectives
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl">
            The Chicken Feather Oil Pillow project aims to deliver environmental,
            economic, and social impact across Nigeria&apos;s blue economy.
          </p>
          <p className="text-gray-400 text-xs mt-3">
            <span className="hidden lg:inline">Hover</span>
            <span className="lg:hidden">Tap</span> a card to explore how we achieve each objective
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {objectives.map((obj) => {
            const isOpen = openId === obj.id;
            const Icon = obj.icon;

            return (
              <motion.div
                key={obj.id}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setHovered(obj.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setPinned(pinned === obj.id ? null : obj.id)}
                className={`group relative rounded-2xl border cursor-pointer select-none transition-colors duration-300 ${
                  isOpen
                    ? "sm:col-span-2 lg:col-span-2 bg-[#0B1A3D] border-[#1E7A46] shadow-2xl shadow-[#1E7A46]/10 z-10"
                    : "bg-white border-gray-100 hover:border-[#1E7A46]/30 hover:shadow-lg"
                }`}
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#1E7A46] text-white"
                          : "bg-[#F7FAF8] text-[#1E7A46] group-hover:bg-[#1E7A46]/10"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-heading font-bold text-sm uppercase tracking-wide mb-1 transition-colors ${
                          isOpen ? "text-white" : "text-[#0B1A3D]"
                        }`}
                      >
                        {obj.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isOpen ? "text-white/60" : "text-gray-500"
                        }`}
                      >
                        {obj.summary}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 mt-1 ${isOpen ? "text-[#4ADE80]" : "text-gray-300"}`}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-white/10">
                          <p className="text-white/80 text-sm leading-relaxed mb-4">
                            {obj.detail}
                          </p>
                          <p className="text-[#4ADE80] text-[10px] font-bold uppercase tracking-widest mb-1.5">
                            How we get there
                          </p>
                          <p className="text-white/50 text-xs leading-relaxed">
                            {obj.approach}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {!isOpen && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#1E7A46]/0 to-transparent group-hover:via-[#1E7A46]/40 transition-all rounded-b-2xl" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
