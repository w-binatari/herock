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
  if (!article) return { title: "News" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage, alt: article.coverCaption }],
    },
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
        className={`relative overflow-hidden bg-cream ${
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
        <figcaption className="mt-3 text-sm text-ink/60 leading-relaxed px-1">
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
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          {img.caption && (
            <figcaption className="mt-2 text-xs text-ink/60 leading-relaxed">
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
                className="text-ink/70 text-[1.05rem] sm:text-lg leading-[1.75] mb-5"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-heading text-2xl sm:text-3xl font-semibold text-ink mt-12 mb-5 tracking-tight"
              >
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-10 border-l-4 border-leaf pl-5 sm:pl-6 py-1"
              >
                <p className="font-heading text-xl sm:text-2xl font-bold text-ink italic leading-snug">
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
                className="my-10 rounded-2xl bg-ink text-white p-6 sm:p-8"
              >
                <p className="text-mint text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
                  At a glance
                </p>
                <dl className="grid sm:grid-cols-2 gap-5">
                  {block.items.map((item) => (
                    <div key={item.label}>
                      <dt className="text-white/45 eyebrow mb-1">
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
      <main className="pt-[72px] bg-paper">
        {/* Article header */}
        <header className="border-b border-line">
          <div className="max-w-3xl mx-auto px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-ink/50 hover:text-leaf text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={14} /> News
            </Link>

            <span className="inline-flex items-center gap-2 bg-leaf/10 text-leaf text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-5">
              <Award size={12} />
              {article.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold text-ink leading-[1.15] mb-5">
              {article.title}
            </h1>

            <p className="text-leaf text-lg sm:text-xl italic leading-relaxed mb-6">
              {article.oneLiner}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/50">
              <span className="font-semibold text-ink/70">
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
            <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-ink">
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
              <figcaption className="mt-3 text-sm text-ink/60 max-w-3xl mx-auto px-1">
                {article.coverCaption}
              </figcaption>
            )}
          </figure>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
          <ArticleBlocks blocks={article.blocks} />

          <div className="mt-14 pt-8 border-t border-line">
            <p className="eyebrow text-leaf mb-2">
              Related
            </p>
            <Link
              href="/products"
              className="font-heading font-bold text-ink hover:text-leaf transition-colors"
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
