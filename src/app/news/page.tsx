import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { newsArticles } from "@/data/news";
import {
  existingPublicImages,
  firstExistingPublicImage,
} from "@/lib/publicImages";
import { ArrowRight, Award } from "lucide-react";

export const metadata = {
  title: "News | Herock Envirotech",
  description:
    "Latest news and updates from Herock Envirotech — circular innovation for Nigeria's blue economy.",
};

export default function NewsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        <section className="relative bg-[#0B1A3D] py-16 lg:py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E7A46]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4">
            <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Updates
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-black text-white">
              News
            </h1>
            <p className="text-white/60 mt-4 max-w-xl">
              Milestones, competitions, and progress from our work turning waste
              into environmental solutions.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8">
              {newsArticles.map((article) => {
                const cover = firstExistingPublicImage(
                  [
                    "/news/nae-2026/event-4.jpg",
                    "/news/nae-2026/event-2.jpg",
                    article.coverImage,
                  ],
                  article.coverImage
                );
                const thumbs = existingPublicImages(article.productImages).slice(
                  0,
                  3
                );

                return (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    className="group grid lg:grid-cols-[1.1fr_1.2fr] gap-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1E7A46]/25 transition-all duration-300"
                  >
                    <div className="relative min-h-[240px] lg:min-h-full">
                      <Image
                        src={cover}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    </div>
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <span className="inline-flex items-center gap-2 self-start bg-[#1E7A46]/10 text-[#1E7A46] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                        <Award size={12} />
                        {article.badge}
                      </span>
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        {article.dateLabel}
                      </p>
                      <h2 className="font-heading text-xl sm:text-2xl font-black text-[#0B1A3D] leading-snug mb-3 group-hover:text-[#1E7A46] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-[#1E7A46] text-sm italic mb-3">
                        {article.oneLiner}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                        {article.excerpt}
                      </p>
                      {thumbs.length > 0 && (
                        <div className="flex gap-2 mb-5">
                          {thumbs.map((img) => (
                            <div
                              key={img.src}
                              className="relative w-16 h-12 rounded-md overflow-hidden border border-gray-100"
                            >
                              <Image
                                src={img.src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-[#1E7A46] text-sm font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
