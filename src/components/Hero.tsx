import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";

const stats = [
  { value: "1.3–2.8 g", label: "of oil absorbed per gram of sorbent" },
  { value: "Top 8", label: "of 108 entries, NAE National Innovation Competition 2026" },
  { value: "100%", label: "biodegradable after use, with no microplastics" },
  { value: "4", label: "UN Sustainable Development Goals advanced" },
];

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-leaf mb-5 sm:mb-6">
              Biosorbent oil spill solutions · Circular economy
            </p>
            <h1 className="font-heading text-[2.4rem] leading-[1.02] sm:text-6xl xl:text-[4.4rem] font-semibold text-ink mb-6">
              Transforming waste into solutions that protect our{" "}
              <span className="text-leaf">blue economy.</span>
            </h1>
            <p className="text-ink/70 text-lg leading-relaxed mb-8 max-w-xl">
              Herock Envirotech is a Nigerian cleantech company turning poultry feather
              waste into the Chicken Feather Oil Pillow (CFOP): a biodegradable,
              low-cost sorbent for hydrocarbon and non-hydrocarbon spills.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                See the product <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn-outline-green">
                Explore solutions
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden bg-[#E9E9E7]">
              <Image
                src="/pillow_spill.jpg"
                alt="Stack of Herock Chicken Feather Oil Pillows"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
            <Link
              href="/news/nae-top-8-finalist"
              className="group absolute -bottom-6 left-4 right-4 sm:left-auto sm:-left-8 sm:right-auto sm:max-w-[300px] bg-ink text-white rounded-2xl p-4 sm:p-5 shadow-[0_18px_40px_rgba(15,42,46,0.25)] flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-leaf flex items-center justify-center">
                <Award size={17} />
              </span>
              <span>
                <span className="eyebrow block text-mint mb-1">NAE 2026</span>
                <span className="block text-sm font-medium leading-snug">
                  Top 8 finalist and Certificate of Merit, Nigerian Academy of Engineering
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors"
              />
            </Link>
          </div>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-20 sm:mt-24 pb-14 sm:pb-16">
          {stats.map((s) => (
            <div key={s.value} className="border-t border-ink/20 pt-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                {s.value}
              </dd>
              <dd className="text-ink/60 text-sm leading-snug mt-2 max-w-[16rem]">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
