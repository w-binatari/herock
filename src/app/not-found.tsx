import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  // Next.js adds <meta name="robots" content="noindex"> to every 404 response.
};

const sections = [
  {
    label: "Product",
    href: "/products",
    desc: "The Chicken Feather Oil Pillow and the First Response Kit.",
  },
  {
    label: "Solutions",
    href: "/solutions",
    desc: "Oil spill response, water pollution control and wastewater.",
  },
  {
    label: "About",
    href: "/about",
    desc: "Who we are and why we turn feather waste into oil sorbents.",
  },
  {
    label: "News",
    href: "/news",
    desc: "The latest news and updates from Herock Envirotech.",
  },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="bg-cream pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-line overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative">
            <p
              aria-hidden
              className="pointer-events-none select-none absolute right-4 -top-6 hidden lg:block font-heading font-semibold text-[16rem] leading-none tracking-[-0.06em] text-ink/[0.05]"
            >
              404
            </p>
            <p className="eyebrow text-leaf mb-5">Error 404 · Page not found</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-semibold text-ink leading-[1.04] max-w-4xl mb-6">
              This page has <span className="text-leaf">drifted off.</span>
            </h1>
            <p className="text-ink/70 text-lg leading-relaxed max-w-2xl">
              The link may be old, or the address has a typo. Everything else on the site is right where we left it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                Back to the homepage
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/contact" className="btn-outline-green">
                Contact us
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="elsewhere" className="bg-paper py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="elsewhere" className="eyebrow text-ink/50 mb-6">
              Or head straight to
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-ink hover:bg-cream"
                  >
                    <span className="flex items-center justify-between gap-3 font-heading text-xl font-semibold text-ink">
                      {s.label}
                      <ArrowUpRight
                        size={18}
                        aria-hidden
                        className="text-leaf transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="text-sm leading-relaxed text-ink/65">{s.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
