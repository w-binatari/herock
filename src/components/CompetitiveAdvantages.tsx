import { CheckCircle2 } from "lucide-react";

const advantages = [
  "Made from renewable agricultural waste",
  "Eco-friendly and biodegradable — leaves no secondary waste",
  "Cost-effective manufacturing process",
  "Absorbs over 10 times its own weight in oil",
  "Supports local content development",
  "Promotes circular economy practices",
  "Creates employment opportunities",
  "Scientifically tested and validated",
  "Suitable for large-scale oil spill remediation",
];

export default function CompetitiveAdvantages() {
  return (
    <section className="py-20 bg-[#0B1A3D]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Why CFOP Wins
          </p>
          <h2 className="font-heading text-2xl font-black text-white uppercase tracking-wide">
            Competitive Advantages
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {advantages.map((a) => (
            <div key={a} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
              <CheckCircle2 size={16} className="text-[#4ADE80] flex-shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm leading-relaxed">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
