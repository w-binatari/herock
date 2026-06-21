const partners = [
  "Imperial College London",
  "Surface Measurement Systems, London",
  "Rivers State University",
];

const tests = [
  "Water Sorbency Test",
  "Oil Sorption Capacity Test",
  "Saturation Time",
  "Oil Recovery Test",
  "Reusability Test",
  "Dynamic Vapour Sorption",
  "IGC–SEA Analysis",
];

export default function ResearchDevelopment() {
  return (
    <section className="py-20 bg-[#F7FAF8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-[#1E7A46] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Research & Development
            </p>
            <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-5">
              Scientifically Tested & Validated
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Chicken Feather Oil Pillow (CFOP) has undergone extensive laboratory
              evaluation and field testing across four contaminated spill locations,
              confirming effectiveness under real environmental conditions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chicken feathers naturally absorb oil through their fibrous keratin structure —
              hydrophobic fibers that bind hydrocarbons while repelling water, making them
              ideal for oil spill remediation.
            </p>

            <h3 className="font-heading font-bold text-[#0B1A3D] text-sm uppercase tracking-wider mb-4">
              Research Partners
            </h3>
            <ul className="space-y-2">
              {partners.map((p) => (
                <li key={p} className="flex items-center gap-3 text-gray-600 text-sm">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1E7A46]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-[#0B1A3D] text-sm uppercase tracking-wider mb-4">
              Laboratory & Field Testing
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {tests.map((t) => (
                <div
                  key={t}
                  className="bg-white rounded-xl px-4 py-3 text-sm text-gray-600 border border-gray-100 shadow-sm"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
