import type { Metadata } from "next";

export const defaultShareImage = {
  url: "/pillow_spill.jpg",
  width: 750,
  height: 444,
  alt: "Herock Envirotech Chicken Feather Oil Pillows",
};

// A child page's openGraph replaces the layout's whole, so each page sets its own.
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Herock Envirotech",
      locale: "en_NG",
      title: `${title} | Herock Envirotech`,
      description,
      url: path,
      images: [defaultShareImage],
    },
  };
}
