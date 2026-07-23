import fs from "fs";
import path from "path";
import type { NewsImage } from "@/data/news";

export function existingPublicImages(images: NewsImage[]): NewsImage[] {
  return images.filter((img) => {
    const filePath = path.join(process.cwd(), "public", img.src.replace(/^\//, ""));
    return fs.existsSync(filePath);
  });
}

export function firstExistingPublicImage(
  candidates: string[],
  fallback: string
): string {
  for (const src of candidates) {
    const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
    if (fs.existsSync(filePath)) return src;
  }
  return fallback;
}
