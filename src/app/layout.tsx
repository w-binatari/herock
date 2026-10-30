import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { defaultShareImage } from "@/lib/metadata";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
