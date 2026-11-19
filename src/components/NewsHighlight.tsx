import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredArticle } from "@/data/news";
import { firstExistingPublicImage } from "@/lib/publicImages";

export default function NewsHighlight() {
  const article = featuredArticle;
  const cover = firstExistingPublicImage(
    ["/news/nae-2026/event-4.jpg", "/news/nae-2026/event-2.jpg", article.coverImage],
    "/news/nae-2026/event-4.jpg"
  );

  return (
    <section className="bg-ink text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="eyebrow text-mint mb-4">Recognition</p>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold max-w-3xl">
              Top 8 at the Nigerian Academy of Engineering.
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors flex-shrink-0"
          >
            All news <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-14 items-center">
          <Link
            href={`/news/${article.slug}`}
            className="group relative block aspect-[3/2] rounded-[28px] overflow-hidden"
          >
            <Image
              src={cover}
              alt="Herock Envirotech recognised at the NAE Award Night"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </Link>

          <div>
            <p className="text-white/75 text-lg leading-relaxed mb-8">{article.excerpt}</p>
            <dl className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-t border-white/20 pt-4">
                <dt className="eyebrow text-white/45 mb-2">Recognition</dt>
                <dd className="text-white font-medium">Certificate of Merit</dd>
              </div>
              <div className="border-t border-white/20 pt-4">
                <dt className="eyebrow text-white/45 mb-2">Award night</dt>
                <dd className="text-white font-medium">{article.eventDate}</dd>
              </div>
            </dl>
            <Link href={`/news/${article.slug}`} className="btn-outline">
              Read the story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
