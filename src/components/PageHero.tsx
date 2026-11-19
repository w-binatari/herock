import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-cream pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-line">
      <div className="max-w-7xl mx-auto px-4">
        <p className="eyebrow text-leaf mb-5">{eyebrow}</p>
        <h1 className="font-heading text-4xl sm:text-6xl font-semibold text-ink leading-[1.04] max-w-4xl mb-6 [&_span]:text-leaf">
          {title}
        </h1>
        <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
