import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticle, newsArticles } from "@/data/news";
import {
  existingPublicImages,
  firstExistingPublicImage,
} from "@/lib/publicImages";
import {
  ArrowLeft,
  Award,
  Calendar,
  MapPin,
  Trophy,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "News | Herock Envirotech" };
  return {
    title: `${article.title} | Herock Envirotech`,
    description: article.excerpt,
  };
}

function Gallery({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle?: string;
  images: { src: string; alt: string; caption?: string }[];
}) {
  if (images.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="font-heading text-xl sm:text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-sm mb-6 max-w-2xl">{subtitle}</p>
      )}
      <div
        className={`grid gap-3 sm:gap-4 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {images.map((img, i) => (
          <figure
            key={img.src}
            className={`relative overflow-hidden rounded-xl bg-[#F7FAF8] border border-gray-100 group ${
              i === 0 && images.length >= 3 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <div
              className={`relative w-full ${
                i === 0 && images.length >= 3
                  ? "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[320px]"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {img.caption && (
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
                <p className="text-white/90 text-xs leading-snug">
                  {img.caption}
                </p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const productImages = existingPublicImages(article.productImages);
  const eventImages = existingPublicImages(article.eventImages);
  const presentationImages = existingPublicImages(article.presentationImages);
  const cover = firstExistingPublicImage(
    [
      "/news/nae-2026/event-4.jpg",
      "/news/nae-2026/event-2.jpg",
      "/news/nae-2026/presentation-5.jpg",
      article.coverImage,
      ...productImages.map((i) => i.src),
    ],
    "/news/nae-2026/product-2.jpg"
  );

  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        {/* Hero */}
        <section className="relative bg-[#0B1A3D] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={cover}
              alt=""
              fill
              className="object-cover opacity-35"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A3D] via-[#0B1A3D]/92 to-[#0B1A3D]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A3D] via-transparent to-[#0B1A3D]/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-14 lg:py-20">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-[#4ADE80] text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> Back to News
            </Link>

            <span className="inline-flex items-center gap-2 bg-[#1E7A46] text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6 shadow-lg shadow-[#1E7A46]/30">
              <Award size={13} />
              {article.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-white leading-tight max-w-4xl mb-5">
              {article.title}
            </h1>

            <p className="text-[#4ADE80] text-lg sm:text-xl italic max-w-2xl mb-8">
              {article.oneLiner}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-[#4ADE80]" />
                {article.dateLabel}
              </span>
              <span className="text-white/20">|</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-[#4ADE80]" />
                {article.eventVenue}
              </span>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.4fr_0.85fr] gap-12 lg:gap-16">
              <div>
                <div className="space-y-5 text-gray-600 leading-relaxed text-base sm:text-[1.05rem]">
                  {article.body.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>

                <div className="mt-10 flex items-start gap-3 bg-[#F7FAF8] border border-[#1E7A46]/15 rounded-2xl p-5 sm:p-6">
                  <Sparkles
                    size={20}
                    className="text-[#1E7A46] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-heading font-bold text-[#0B1A3D] text-sm uppercase tracking-wide mb-1">
                      Certificate of Merit
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The Herock Envirotech team has already been awarded a
                      Certificate of Merit by the Nigerian Academy of Engineering
                      in recognition of this innovation.
                    </p>
                  </div>
                </div>

                <Gallery
                  title="The Product"
                  subtitle="Chicken feather-based biosorbent pillows — turning agricultural waste into oil spill remediation."
                  images={productImages}
                />

                <Gallery
                  title="At the Competition"
                  subtitle="Moments from the Nigerian Academy of Engineering National Innovation Competition."
                  images={eventImages}
                />

                <Gallery
                  title="Presentation & Engagement"
                  subtitle="Booth demos, media interviews, and conversations with judges and guests."
                  images={presentationImages}
                />
              </div>

              {/* Sidebar */}
              <aside className="space-y-5 lg:sticky lg:top-28 self-start">
                <div className="rounded-2xl bg-[#0B1A3D] text-white p-6 shadow-xl">
                  <div className="flex items-center gap-2 text-[#4ADE80] mb-4">
                    <Calendar size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Award Night
                    </span>
                  </div>
                  <p className="font-heading font-black text-xl mb-2">
                    {article.eventDate}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#4ADE80]" />
                    {article.eventVenue}
                  </p>
                  <p className="text-white/40 text-xs mt-4 leading-relaxed">
                    Final rankings were announced at the NAE Annual Dinner &amp;
                    Award Night. Herock Envirotech received a Certificate of Merit.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7FAF8] border border-gray-100 p-6">
                  <div className="flex items-center gap-2 text-[#1E7A46] mb-4">
                    <Trophy size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Prize Pool
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {article.prizes.map((p, i) => (
                      <li
                        key={p.place}
                        className="flex items-center justify-between gap-3 pb-3 border-b border-gray-200 last:border-0 last:pb-0"
                      >
                        <span className="text-gray-600 text-sm">
                          <span className="font-heading font-bold text-[#0B1A3D] mr-2">
                            {i + 1}.
                          </span>
                          {p.place}
                        </span>
                        <span className="font-heading font-black text-[#1E7A46] text-lg">
                          {p.amount}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#1E7A46]/20 bg-white p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1E7A46] mb-2">
                    The Innovation
                  </p>
                  <p className="font-heading font-bold text-[#0B1A3D] text-sm mb-2">
                    Chicken Feather Oil Pillow (CFOP)
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    Biodegradable biosorbent pillows made from processed poultry
                    feathers for sustainable oil spill remediation.
                  </p>
                  <Link
                    href="/products"
                    className="text-[#1E7A46] text-xs font-bold uppercase tracking-wider hover:underline"
                  >
                    View product details →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
