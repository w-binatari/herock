const readiness = [
  {
    level: "TRL 7",
    title: "Technology Readiness",
    desc: "Advanced technology with a strong foundation for commercialization.",
    detail: "Laboratory experiments and field trial testing completed.",
  },
  {
    level: "CRL 5",
    title: "Commercial Readiness",
    desc: "Substantial commercialization progress and market potential.",
    detail: "Business plan development and techno-economic assessment completed.",
  },
  {
    level: "MRL 4",
    title: "Manufacturing Readiness",
    desc: "Minimum Viable Product successfully developed.",
    detail: "Processing technology validated with adequate raw material availability.",
  },
];

const milestones = [
  "Laboratory experiments",
  "Field trial testing",
  "Techno-economic assessment",
  "Business plan development",
];

export default function TechnologyReadiness() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#1E7A46] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Validated Innovation
          </p>
          <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide">
            Technology Validation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {readiness.map((r) => (
            <div
              key={r.level}
              className="bg-[#F7FAF8] rounded-2xl p-8 border border-gray-100 text-center"
            >
              <p className="font-heading text-4xl font-black text-[#1E7A46] mb-2">{r.level}</p>
              <h3 className="font-heading font-bold text-[#0B1A3D] text-sm uppercase tracking-wider mb-3">
                {r.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">{r.desc}</p>
              <p className="text-gray-400 text-xs">{r.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0B1A3D] rounded-2xl p-8 text-center">
          <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Completed Milestones
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {milestones.map((m) => (
              <span
                key={m}
                className="bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/10"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
