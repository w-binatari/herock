import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getArticle,
  newsArticles,
  type ArticleBlock,
  type NewsImage,
} from "@/data/news";
import { existingPublicImages } from "@/lib/publicImages";
import { ArrowLeft, Award } from "lucide-react";

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

function Figure({
  src,
  alt,
  caption,
  large,
}: {
  src: string;
  alt: string;
  caption?: string;
  large?: boolean;
}) {
  return (
    <figure className={`my-8 sm:my-10 ${large ? "-mx-4 sm:mx-0" : ""}`}>
      <div
        className={`relative overflow-hidden bg-[#F7FAF8] ${
          large
            ? "aspect-[16/10] sm:rounded-2xl"
            : "aspect-[16/10] rounded-xl sm:rounded-2xl"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Gallery({ images }: { images: NewsImage[] }) {
  const visible = existingPublicImages(images);
  if (visible.length === 0) return null;

  return (
    <div
      className={`my-8 sm:my-10 grid gap-3 sm:gap-4 ${
        visible.length === 1
          ? "grid-cols-1"
          : visible.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-3"
      }`}
    >
      {visible.map((img) => (
        <figure key={img.src} className="min-w-0">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F7FAF8]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          {img.caption && (
            <figcaption className="mt-2 text-xs text-gray-500 leading-relaxed">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className="text-gray-700 text-[1.05rem] sm:text-lg leading-[1.75] mb-5"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-heading text-2xl sm:text-3xl font-black text-[#0B1A3D] mt-12 mb-5 tracking-tight"
              >
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 border-l-4 border-[#1E7A46] pl-5 sm:pl-6 py-1"
              >
                <p className="font-heading text-xl sm:text-2xl font-bold text-[#0B1A3D] italic leading-snug">
                  {block.text}
                </p>
              </blockquote>
            );
          case "figure":
            return (
              <Figure
                key={i}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                large
              />
            );
          case "gallery":
            return <Gallery key={i} images={block.images} />;
          case "facts":
            return (
              <aside
                key={i}
                className="my-10 rounded-2xl bg-[#0B1A3D] text-white p-6 sm:p-8"
              >
                <p className="text-[#4ADE80] text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
                  At a glance
                </p>
                <dl className="grid sm:grid-cols-2 gap-5">
                  {block.items.map((item) => (
                    <div key={item.label}>
                      <dt className="text-white/45 text-[10px] font-bold uppercase tracking-widest mb-1">
                        {item.label}
                      </dt>
                      <dd className="text-white text-sm sm:text-base font-semibold leading-snug">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
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

  const coverExists = existingPublicImages([
    { src: article.coverImage, alt: article.title },
  ]).length > 0;
  const cover = coverExists
    ? article.coverImage
    : existingPublicImages(article.eventImages)[0]?.src ||
      existingPublicImages(article.productImages)[0]?.src ||
      "/news/nae-2026/product-2.jpg";

  return (
    <>
      <Navbar />
      <main className="pt-[102px] bg-white">
        {/* Article header */}
        <header className="border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#1E7A46] text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> News
            </Link>

            <span className="inline-flex items-center gap-2 bg-[#1E7A46]/10 text-[#1E7A46] text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-5">
              <Award size={12} />
              {article.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-[#0B1A3D] leading-[1.15] mb-5">
              {article.title}
            </h1>

            <p className="text-[#1E7A46] text-lg sm:text-xl italic leading-relaxed mb-6">
              {article.oneLiner}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
              <span className="font-semibold text-gray-600">
                Herock Envirotech
              </span>
              <span className="text-gray-300">·</span>
              <time>{article.publishedLabel}</time>
              <span className="text-gray-300">·</span>
              <span>{article.eventVenue.split(",")[0]}</span>
            </div>
          </div>
        </header>

        {/* Lead image */}
        <div className="max-w-5xl mx-auto px-4 pt-8 sm:pt-10">
          <figure>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden shadow-lg bg-[#0B1A3D]">
              <Image
                src={cover}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            {article.coverCaption && (
              <figcaption className="mt-3 text-sm text-gray-500 max-w-3xl mx-auto px-1">
                {article.coverCaption}
              </figcaption>
            )}
          </figure>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
          <ArticleBlocks blocks={article.blocks} />

          <div className="mt-14 pt-8 border-t border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1E7A46] mb-2">
              Related
            </p>
            <Link
              href="/products"
              className="font-heading font-bold text-[#0B1A3D] hover:text-[#1E7A46] transition-colors"
            >
              Learn more about the Chicken Feather Oil Pillow →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
