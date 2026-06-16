import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Herock Envirotech | Turning Waste Into Environmental Solutions",
  description:
    "Herock Envirotech develops circular economy technologies converting poultry feather waste into sustainable products for pollution control and environmental restoration.",
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
