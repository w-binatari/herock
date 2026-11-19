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
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-leaf text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Research & Development
            </p>
            <h2 className="font-heading text-2xl font-semibold text-ink mb-5">
              Scientifically Tested & Validated
            </h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              The Chicken Feather Oil Pillow (CFOP) has undergone extensive laboratory
              evaluation and field testing across four contaminated spill locations,
              confirming effectiveness under real environmental conditions.
            </p>
            <p className="text-ink/70 leading-relaxed mb-8">
              Chicken feathers naturally absorb oil through their fibrous keratin structure —
              hydrophobic fibers that bind hydrocarbons while repelling water, making them
              ideal for oil spill remediation.
            </p>

            <h3 className="font-heading font-bold text-ink text-sm mb-4">
              Research Partners
            </h3>
            <ul className="space-y-2">
              {partners.map((p) => (
                <li key={p} className="flex items-center gap-3 text-ink/70 text-sm">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-leaf" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-ink text-sm mb-4">
              Laboratory & Field Testing
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {tests.map((t) => (
                <div
                  key={t}
                  className="bg-white rounded-xl px-4 py-3 text-sm text-ink/70 border border-line"
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
