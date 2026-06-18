"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Recycle, Leaf, Zap, Globe } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Biosorbent Oil Spill Solutions · Circular Economy Services",
    headline: "TRANSFORMING WASTE INTO SOLUTIONS",
    headlineGreen: "THAT PROTECT OUR BLUE ECONOMY.",
    sub: "Herock Envirotech is a Nigerian cleantech startup turning agricultural waste into biodegradable, low-cost products that restore ecosystems and create economic value — starting with our flagship Chicken Feather Oil Spill Sorbent Pillow.",
    ctaPrimary: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "Our Products", href: "/products" },
    ctaTertiary: { label: "Partner With Us", href: "/contact" },
  },
  {
    id: 2,
    badge: "Sustainable Technology",
    headline: "TRANSFORMING WASTE",
    headlineGreen: "INTO SOLUTIONS.",
    sub: "Converting poultry feather waste into sustainable sorbents for oil spill response, water pollution control, and industrial environmental management.",
    ctaPrimary: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "Our Products", href: "/products" },
    ctaTertiary: { label: "Partner With Us", href: "/contact" },
  },
  {
    id: 3,
    badge: "Environmental Impact",
    headline: "PROTECTING OUR",
    headlineGreen: "PLANET'S FUTURE.",
    sub: "Creating measurable environmental impact through sustainable innovation, responsible action, and circular economy principles.",
    ctaPrimary: { label: "View Impact", href: "/sustainability" },
    ctaSecondary: { label: "Our Products", href: "/products" },
    ctaTertiary: { label: "Partner With Us", href: "/contact" },
  },
];

const features = [
  { icon: <Recycle size={16} />, label: "Circular Economy Innovation" },
  { icon: <Zap size={16} />, label: "Innovative Technology" },
  { icon: <Leaf size={16} />, label: "Environmental Impact" },
  { icon: <Globe size={16} />, label: "Partnerships" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent((idx + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen bg-[#0E4D2F] overflow-hidden flex flex-col">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url("/pillow_action.jpg")`,
          opacity: 0.25,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E4D2F]/95 via-[#0E4D2F]/80 to-[#1E7A46]/50" />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            key={current}
            className="text-white"
            style={{
              animation: "slideInLeft 0.6s ease both",
            }}
          >
            <span className="green-badge mb-5 inline-block" style={{ background: "rgba(255,255,255,0.12)", color: "white" }}>
              {slide.badge}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-2">
              {slide.headline}
            </h1>
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-[#4ADE80] mb-6">
              {slide.headlineGreen}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {slide.sub}
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href={slide.ctaPrimary.href} className="btn-primary">
                {slide.ctaPrimary.label}
              </Link>
              <Link href={slide.ctaSecondary.href} className="btn-outline">
                {slide.ctaSecondary.label}
              </Link>
              <Link href={slide.ctaTertiary.href} className="btn-outline">
                {slide.ctaTertiary.label}
              </Link>
            </div>
            {/* Feature tags */}
            <div className="flex flex-wrap gap-6">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-white/70 text-xs">
                  <span className="text-green-400">{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Product card */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-2xl">
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#1E7A46]/30 blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-green-400/20 blur-xl" />

                {/* Product image */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img 
                    src="/pillow_feather.jpg" 
                    alt="Chicken Feather Oil Spill Sorbent Pillow"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white/60 text-xs uppercase tracking-widest">Flagship Product</p>
                  <p className="text-white font-bold text-sm mt-0.5">Feather Clean-Sorbent Pillow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="relative pb-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[#1E7A46]" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(current - 1)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
        <ArrowRight size={12} className="rotate-90 animate-bounce" />
      </div>
    </section>
  );
}
