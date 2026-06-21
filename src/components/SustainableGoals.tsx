const sdgs = [
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    color: "#FD6925",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="white">
        <rect x="8" y="36" width="14" height="14" rx="1" />
        <rect x="25" y="28" width="14" height="22" rx="1" />
        <rect x="42" y="20" width="14" height="30" rx="1" />
      </svg>
    ),
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    color: "#BF8B2E",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="white" strokeWidth="3">
        <path d="M32 12 C32 12 18 28 18 38 C18 46 24 52 32 52 C40 52 46 46 46 38 C46 28 32 12 32 12Z" />
        <path d="M32 52 C32 52 46 36 46 26" strokeDasharray="4 3" />
      </svg>
    ),
  },
  {
    number: 14,
    title: "Life Below Water",
    color: "#0A97D9",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="white">
        <path d="M12 32 Q20 24 32 28 Q44 32 52 24 L52 40 Q44 48 32 44 Q20 40 12 48Z" opacity="0.5" />
        <ellipse cx="38" cy="30" rx="10" ry="6" />
        <circle cx="44" cy="28" r="1.5" fill="#0A97D9" />
        <path d="M48 30 L56 28 L56 32 Z" />
      </svg>
    ),
  },
];

export default function SustainableGoals() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-[#D4A017]/40" />
          <h2 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0B1A3D] text-center whitespace-nowrap">
            Aligned with the UN Sustainable Development Goals
          </h2>
          <div className="flex-1 h-px bg-[#D4A017]/40" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {sdgs.map((sdg) => (
            <div key={sdg.number} className="flex flex-col items-center text-center group">
              <div
                className="w-full aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-center p-4 shadow-md transition-transform group-hover:scale-105"
                style={{ backgroundColor: sdg.color }}
              >
                <span className="text-white font-black text-3xl self-start leading-none mb-1">
                  {sdg.number}
                </span>
                <div className="flex-1 flex items-center justify-center">
                  {sdg.icon}
                </div>
              </div>
              <p className="mt-3 text-[#0B1A3D] text-xs font-bold uppercase tracking-wide leading-snug max-w-[160px]">
                {sdg.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
