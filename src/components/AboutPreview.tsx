import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        <p className="eyebrow text-leaf">Our mission</p>
        <div>
          <p className="font-heading text-2xl sm:text-4xl leading-[1.2] font-medium text-ink mb-10">
            To build Africa&apos;s circular economy by developing environmentally
            responsible products and technologies that convert waste into valuable
            solutions, protecting our blue economy through science and innovation.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-ink/70 leading-relaxed mb-10">
            <p>
              Herock Envirotech Ltd. is a Nigerian cleantech company transforming
              agricultural waste into high-performance environmental solutions. We
              develop and manufacture the Chicken Feather Oil Pillow (CFOP), a
              biodegradable, cost-effective alternative to conventional oil absorbents,
              validated at TRL 7.
            </p>
            <p>
              By converting poultry feather waste into functional sorbents, we tackle two
              problems at once: agricultural waste management and oil spill
              remediation, creating value at every step of the circular economy.
            </p>
          </div>
          <Link href="/about" className="btn-outline-green">
            About Herock <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
