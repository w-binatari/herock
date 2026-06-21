import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OilAbsorbentPillows() {
  return (
    <section className="relative bg-[#1F2937] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center min-h-[480px]">
          {/* Left — Copy */}
          <div className="py-16 lg:py-20 lg:pr-12 relative z-10">
            <span className="inline-block bg-[#1E7A46] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              Spill Containment Solutions
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl font-black leading-tight mb-4">
              <span className="text-white">OIL</span>{" "}
              <span className="text-[#4ADE80]">ABSORBENT</span>{" "}
              <span className="text-white">PILLOWS</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              For{" "}
              <span className="text-[#4ADE80] font-semibold">Hydrocarbon</span> and{" "}
              <span className="text-[#4ADE80] font-semibold">Non-Hydrocarbon</span>{" "}
              spill response — a high-performance, eco-friendly sorbent made from
              processed chicken feathers.
            </p>

            <Link href="/products" className="btn-primary inline-flex">
              View Product Details <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — Image with angled clip */}
          <div className="relative h-[320px] lg:h-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2">
            <div
              className="absolute inset-0 lg:clip-path-slant"
              style={{
                clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                src="/pillow_spill.jpg"
                alt="Oil absorbent pillows deployed in spill containment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937] via-transparent to-transparent lg:w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
