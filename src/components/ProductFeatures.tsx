import { Zap, Leaf, Droplets, ShieldCheck, Recycle, FlaskConical } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "High-Capacity Absorption",
    desc: "Absorbs over 10 times its own weight in oil — fuels, lubricants, and hydrocarbons.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Sustainable Core Material",
    desc: "Made from processed poultry feathers — fibrous keratin structure naturally binds oil while repelling water.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Hydrophobic Behavior",
    desc: "Floats on water and selectively absorbs oil from both hydrocarbon and non-hydrocarbon spills.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Industrial Durability",
    desc: "Tear-resistant mesh casing prevents bursting when saturated.",
  },
  {
    icon: <Recycle size={22} />,
    title: "Biodegradable Disposal",
    desc: "Fully biodegradable after use — leaves no secondary waste or microplastic pollution.",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Cost-Effective Production",
    desc: "Simple manufacturing process using locally sourced agricultural waste.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-16 bg-[#F7FAF8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#1E7A46]/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1E7A46] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
