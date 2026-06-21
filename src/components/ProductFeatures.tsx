import { Zap, Leaf, Droplets, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "High-Capacity Absorption",
    desc: "Absorbs fuels, lubricants, and hydrocarbons.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Sustainable Core Material",
    desc: "Made from processed poultry feathers, converting waste into a functional absorbent.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Hydrophobic Behavior",
    desc: "Floats on water and selectively absorbs oil.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Industrial Durability",
    desc: "Tear-resistant mesh casing prevents bursting when saturated.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-16 bg-[#F7FAF8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1E7A46] text-white flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1E7A46] text-sm uppercase tracking-wider mb-1.5">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
