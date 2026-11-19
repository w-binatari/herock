import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const points = [
  "Absorbs fuels, lubricants and crude across hydrocarbon and non-hydrocarbon spills",
  "Floats on water and takes up oil while repelling water",
  "Tear-resistant mesh casing that does not burst when saturated",
  "Made in Nigeria from locally sourced agricultural waste",
];

export default function OilAbsorbentPillows() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#E9E9E7]">
          <Image
            src="/news/nae-2026/product-3.jpg"
            alt="Processed chicken feather sorbent mats"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="eyebrow text-leaf mb-4">Flagship product</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-ink mb-5">
            Oil Absorbent Pillows
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-8 max-w-lg">
            A high-performance, eco-friendly sorbent made from processed chicken
            feathers, for fast containment of spills on land and water.
          </p>
          <ul className="border-t border-line mb-10">
            {points.map((p) => (
              <li key={p} className="border-b border-line py-3.5 text-ink/80 text-[0.95rem] flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-leaf flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <Link href="/products" className="btn-primary">
            Product details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
