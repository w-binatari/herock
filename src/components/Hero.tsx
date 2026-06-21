import Link from "next/link";
import Image from "next/image";
import { Droplets, Recycle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0B1A3D] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="inline-flex items-center gap-2 bg-[#1E7A46] text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
            <Droplets size={14} />
            Biosorbent Oil Spill Solutions
          </span>
          <span className="inline-flex items-center gap-2 bg-[#0B1A3D] border-2 border-[#1E7A46] text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
            <Recycle size={14} className="text-[#4ADE80]" />
            Circular Economy Services
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl xl:text-[2.75rem] font-black leading-[1.15] text-white mb-6">
              TRANSFORMING{" "}
              <span className="text-[#4ADE80]">WASTE</span>{" "}
              INTO SOLUTIONS THAT PROTECT OUR BLUE ECONOMY{" "}
              <span className="text-[#4ADE80]">
                THROUGH SCIENCE AND CIRCULAR INNOVATION.
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Herock Envirotech is a Nigerian cleantech startup turning agricultural
              waste into biodegradable, low-cost products that restore ecosystems and
              create economic value — starting with our flagship Chicken Feather Oil
              Spill Sorbent Pillow.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/solutions" className="btn-primary">
                Explore Solutions
              </Link>
              <Link href="/products" className="btn-outline">
                Our Products
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-[#1E7A46]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
                <Image
                  src="/pillow_spill.jpg"
                  alt="Herock Envirotech Oil Absorbent Pillows"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1E7A46] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl border-4 border-[#0B1A3D]">
                <span className="text-[9px] font-bold uppercase tracking-wider leading-tight text-center px-2">
                  Biodegradable
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider leading-tight text-center px-2">
                  Effective
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider leading-tight text-center px-2">
                  Sustainable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
