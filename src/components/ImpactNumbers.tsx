"use client";

import { useEffect, useRef, useState } from "react";
import { Feather, Droplets, BriefcaseBusiness, Users, Handshake } from "lucide-react";

const stats = [
  {
    icon: <Feather size={28} />,
    number: 125,
    suffix: "+",
    unit: "TONS",
    label: "Chicken feathers upcycled",
  },
  {
    icon: <Droplets size={28} />,
    number: 85,
    suffix: "+",
    unit: "TONS",
    label: "Oil absorbed from water bodies",
  },
  {
    icon: <BriefcaseBusiness size={28} />,
    number: 45,
    suffix: "+",
    unit: "",
    label: "Projects completed",
  },
  {
    icon: <Users size={28} />,
    number: 12,
    suffix: "+",
    unit: "",
    label: "Communities impacted",
  },
  {
    icon: <Handshake size={28} />,
    number: 30,
    suffix: "+",
    unit: "",
    label: "Partners & collaborators",
  },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(stat.number, active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center text-white py-4 px-2">
      <div className="text-green-400 mb-3 opacity-80">{stat.icon}</div>
      <div className="flex items-end gap-0.5">
        <span className="font-heading text-4xl sm:text-5xl font-black">{count}</span>
        <span className="font-heading text-3xl font-black text-green-400">{stat.suffix}</span>
      </div>
      {stat.unit && <p className="text-green-300 text-xs font-bold uppercase tracking-widest mt-0.5">{stat.unit}</p>}
      <p className="text-white/60 text-xs mt-2 leading-tight max-w-[100px]">{stat.label}</p>
    </div>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="relative bg-[#0E4D2F] py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.2fr_3fr] gap-10 items-start">
          {/* Left */}
          <div>
            <h2 className="font-heading text-white text-3xl font-bold mb-3 leading-tight">
              OUR IMPACT<br />IN NUMBERS
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Creating measurable environmental impact through sustainable innovation and responsible action.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 divide-x divide-white/10">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
