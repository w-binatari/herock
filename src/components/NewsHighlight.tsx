import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Calendar,
  MapPin,
  Trophy,
} from "lucide-react";
import { featuredArticle } from "@/data/news";
import {
  existingPublicImages,
  firstExistingPublicImage,
} from "@/lib/publicImages";

export default function NewsHighlight() {
  const article = featuredArticle;
  const productShots = existingPublicImages(article.productImages).slice(0, 3);
  const cover = firstExistingPublicImage(
    [
      "/news/nae-2026/event-4.jpg",
      "/news/nae-2026/event-2.jpg",
      "/news/nae-2026/product-2.jpg",
      article.coverImage,
    ],
    "/news/nae-2026/product-2.jpg"
  );

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-[#0B1A3D] via-[#0B1A3D] to-[#0E4D2F]">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-[#1E7A46]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4ADE80]/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-2">
              Latest News
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
              In the Spotlight
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-flex items-center gap-1.5 text-white/70 hover:text-[#4ADE80] text-sm font-semibold transition-colors"
          >
            All news <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-stretch">
          <Link
            href={`/news/${article.slug}`}
            className="group relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[360px] shadow-2xl shadow-black/30"
          >
            <Image
              src={cover}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A3D] via-[#0B1A3D]/45 to-transparent" />
            <div className="absolute top-4 left-4 right-4">
              <span className="inline-flex items-center gap-2 bg-[#1E7A46] text-white text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider shadow-lg">
                <Award size={13} />
                {article.badge}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="text-[#4ADE80] text-sm sm:text-base font-medium italic mb-2">
                {article.oneLiner}
              </p>
              <h3 className="font-heading text-xl sm:text-2xl font-black text-white leading-snug group-hover:text-[#4ADE80] transition-colors">
                {article.title}
              </h3>
            </div>
          </Link>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors">
                  <div className="flex items-center gap-2 text-[#4ADE80] mb-1.5">
                    <Award size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Recognition
                    </span>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    Certificate of Merit
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">
                    Nigerian Academy of Engineering
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors">
                  <div className="flex items-center gap-2 text-[#4ADE80] mb-1.5">
                    <Calendar size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Award Night
                    </span>
                  </div>
                  <p className="text-white text-sm font-semibold">
                    {article.eventDate}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5 flex items-start gap-1">
                    <MapPin size={11} className="mt-0.5 flex-shrink-0" />
                    Lagos · Sheraton Ikeja
                  </p>
                </div>
              </div>

              <div className="bg-[#1E7A46]/15 border border-[#1E7A46]/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-[#4ADE80] mb-3">
                  <Trophy size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Prize Pool
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {article.prizes.map((p) => (
                    <div key={p.place} className="text-white">
                      <span className="text-white/50 text-[10px] uppercase tracking-wider block">
                        {p.place}
                      </span>
                      <span className="font-heading font-black text-lg">
                        {p.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {productShots.length > 0 && (
              <div className="grid grid-cols-3 gap-2.5">
                {productShots.map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                ))}
              </div>
            )}

            <Link
              href={`/news/${article.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0B1A3D] font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-[#4ADE80] hover:text-[#0B1A3D] transition-all self-start"
            >
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
