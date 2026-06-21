import { ArrowRight } from "lucide-react";

const steps = [
  { step: "Collection", desc: "Poultry feather waste collected from local farms" },
  { step: "Cleaning", desc: "Feathers cleaned and prepared for processing" },
  { step: "Processing", desc: "Keratin fibers processed into high-performance sorbent material" },
  { step: "Fabrication", desc: "Oil absorbent pillows manufactured and packaged for deployment" },
];

export default function ProductionProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#1E7A46] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            How It&apos;s Made
          </p>
          <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-3">
            Production Process
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            A simple, cost-effective process that converts agricultural by-product into a
            functional environmental solution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative bg-[#F7FAF8] rounded-2xl p-6 border border-gray-100">
              <p className="font-heading text-3xl font-black text-[#1E7A46]/30 mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading font-bold text-[#0B1A3D] text-sm uppercase tracking-wider mb-2">
                {s.step}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
