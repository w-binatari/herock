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
    <section className="bg-cream py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        <div>
          <p className="eyebrow text-leaf mb-4">UN Sustainable Development Goals</p>
          <p className="text-ink/70 leading-relaxed max-w-sm">
            The Chicken Feather Oil Pillow advances SDGs 9, 12, 13 and 14 through
            circular manufacturing, responsible production, climate-conscious
            remediation and protection of life below water.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {sdgs.map((sdg) => (
            <li key={sdg.number}>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={sdg.image}
                  alt={`UN Sustainable Development Goal ${sdg.number}: ${sdg.title}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-ink/70 text-sm leading-snug">{sdg.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
