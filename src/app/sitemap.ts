import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";

const base = "https://www.herockenvirotech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/solutions", "/products", "/sustainability", "/news", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}` })),
    ...newsArticles.map((a) => ({ url: `${base}/news/${a.slug}` })),
  ];
}
