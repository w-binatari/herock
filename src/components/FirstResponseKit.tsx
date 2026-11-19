import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const contents = [
  "Absorbent pillows for immediate containment",
  "Protective gloves and disposal bags",
  "Compact duffel bag for transport and storage",
  "Instruction manual for safe deployment",
];

export default function FirstResponseKit() {
  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="lg:order-2 relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#E9E9E7]">
          <Image
            src="/pillow_action.jpg"
            alt="Pillows and mats from the First Response Kit laid out on a table"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="lg:order-1">
          <p className="eyebrow text-leaf mb-4">Be prepared. Act fast.</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-ink mb-5">
            First Response Kit
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-8 max-w-lg">
            Everything a team needs for the first hour of a spill, designed for rapid
            deployment at industrial, marine and community sites.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {contents.map((c) => (
              <li key={c} className="bg-paper rounded-2xl px-4 py-3.5 text-ink/80 text-sm leading-snug">
                {c}
              </li>
            ))}
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-green">
            <MessageCircle size={16} />
            Request a kit
          </a>
        </div>
      </div>
    </section>
  );
}
