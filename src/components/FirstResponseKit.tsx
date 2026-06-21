import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FirstResponseKit() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Kit image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-[#F7FAF8]">
              <Image
                src="/pillow_action.jpg"
                alt="Oil Spill Response Kit with absorbent pillows and accessories"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#1E7A46] uppercase tracking-wide mb-3">
              First Response Kit for Oil Spill
            </h2>
            <p className="text-[#0B1A3D] text-lg font-bold mb-4">
              Be prepared. Act fast.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our oil spill response kit includes absorbent pillows and essential
              accessories for quick containment and cleanup. Designed for rapid
              deployment in industrial, marine, and community environments.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Absorbent pillows for immediate spill containment",
                "Protective gloves and disposal bags included",
                "Compact duffel bag for easy transport and storage",
                "Instruction manual for safe deployment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#1E7A46] mt-2" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary inline-flex">
              Request a Kit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
