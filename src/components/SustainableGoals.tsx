const sdgs = [
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    image: "/sdg/sdg-9.png",
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    image: "/sdg/sdg-12.png",
  },
  {
    number: 13,
    title: "Climate Action",
    image: "/sdg/sdg-13.png",
  },
  {
    number: 14,
    title: "Life Below Water",
    image: "/sdg/sdg-14.png",
  },
];

export default function SustainableGoals() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 h-px bg-[#D4A017]/40" />
          <h2 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0B1A3D] text-center whitespace-nowrap">
            Aligned with the UN Sustainable Development Goals
          </h2>
          <div className="flex-1 h-px bg-[#D4A017]/40" />
        </div>
        <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-10">
          Our Chicken Feather Oil Pillow innovation advances SDGs 9, 12, 13, and 14 through
          circular manufacturing, responsible production, climate-conscious remediation, and
          protection of life below water.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {sdgs.map((sdg) => (
            <div key={sdg.number} className="flex flex-col items-center text-center group">
              {/* Plain img so locally replaced files in public/sdg/ show immediately */}
              <div className="w-full max-w-[140px] aspect-square shadow-md transition-transform group-hover:scale-105 overflow-hidden rounded-sm">
                <img
                  src={sdg.image}
                  alt={`UN Sustainable Development Goal ${sdg.number}: ${sdg.title}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-[#0B1A3D] text-[10px] sm:text-xs font-bold uppercase tracking-wide leading-snug max-w-[140px]">
                {sdg.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
