import Image from "next/image";

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
    number: 14,
    title: "Life Below Water",
    image: "/sdg/sdg-14.png",
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

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {sdgs.map((sdg) => (
            <div key={sdg.number} className="flex flex-col items-center text-center group">
              <div className="relative w-full max-w-[160px] aspect-square shadow-md transition-transform group-hover:scale-105">
                <Image
                  src={sdg.image}
                  alt={`UN Sustainable Development Goal ${sdg.number}: ${sdg.title}`}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
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
