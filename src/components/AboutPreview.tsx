import Link from "next/link";
import { Target, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#F7FAF8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#1E7A46] text-lg">🌿</span>
              <h2 className="font-heading text-xl font-black text-[#0B1A3D] uppercase tracking-wider">
                About Us
              </h2>
              <div className="flex-1 h-0.5 bg-[#1E7A46]/30" />
            </div>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Herock Envirotech Ltd. is a Nigerian cleantech company focused on
                transforming agricultural waste into high-performance environmental
                solutions. We develop and manufacture the Chicken Feather Oil Spill
                Sorbent Pillow — a biodegradable, cost-effective alternative to
                conventional oil absorbents.
              </p>
              <p>
                By converting poultry feather waste into functional sorbents, we
                address two critical challenges: agricultural waste management and
                oil spill remediation — creating value at every step of the circular
                economy.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Target size={20} className="text-[#0B1A3D]" />
              <h2 className="font-heading text-xl font-black text-[#0B1A3D] uppercase tracking-wider">
                Mission
              </h2>
              <div className="flex-1 h-0.5 bg-[#1E7A46]/30" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              To build Africa&apos;s circular economy by developing environmentally
              responsible products and technologies that convert waste into valuable
              solutions — protecting our blue economy through science and innovation.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-[#1E7A46] text-sm font-bold uppercase tracking-wider hover:gap-2.5 transition-all"
            >
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
