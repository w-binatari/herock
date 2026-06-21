import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-[#0B1A3D] py-20 lg:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-4">
          {eyebrow}
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl mb-5">
          {title}
        </h1>
        <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
