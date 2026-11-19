import type { Metadata } from "next";
import { Inter, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { defaultShareImage } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Herock Envirotech converts poultry feather waste into biodegradable oil spill sorbent pillows — a circular economy innovation protecting Nigeria's blue economy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.herockenvirotech.com"),
  title: {
    default: "Herock Envirotech | Turning Waste Into Environmental Solutions",
    template: "%s | Herock Envirotech",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Herock Envirotech",
    locale: "en_NG",
    title: "Herock Envirotech | Turning Waste Into Environmental Solutions",
    description,
    url: "/",
    images: [defaultShareImage],
  },
  twitter: { card: "summary_large_image" },
  keywords: [
    "oil spill sorbent",
    "chicken feather pillow",
    "environmental solutions",
    "circular economy",
    "sustainable products",
    "Herock Envirotech",
  ],
  icons: {
    icon: "/logo_only.png",
    apple: "/logo_only.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${plexMono.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
