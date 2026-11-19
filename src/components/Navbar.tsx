"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Oil Spill Response", href: "/solutions#oil-spill" },
      { label: "Water Pollution Control", href: "/solutions#water-pollution" },
      { label: "Industrial Wastewater", href: "/solutions#industrial" },
    ],
  },
  { label: "Product", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur transition-[border-color,box-shadow] duration-200 border-b ${
        scrolled ? "border-line shadow-[0_1px_0_rgba(15,42,46,0.04)]" : "border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0" aria-label="Herock Envirotech home">
          <Image
            src="/navbar_logo.png"
            alt="Herock Envirotech"
            width={160}
            height={60}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-3 py-2 text-[0.9rem] rounded-full transition-colors ${
                  isActive(link.href)
                    ? "text-ink font-semibold"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="text-ink/40" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-paper rounded-2xl border border-line shadow-[0_12px_32px_rgba(15,42,46,0.10)] py-2 min-w-[230px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink/70 hover:text-ink hover:bg-cream transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 !text-sm"
          >
            <MessageCircle size={15} />
            WhatsApp us
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-paper px-4 pb-6 pt-2 max-h-[calc(100dvh-72px)] overflow-y-auto">
          {[{ label: "Home", href: "/" }, ...navLinks].map((link) => (
            <div key={link.label} className="border-b border-line/70">
              <Link
                href={link.href}
                className={`block py-3.5 text-lg ${isActive(link.href) ? "text-leaf font-semibold" : "text-ink"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {"children" in link && link.children && (
                <div className="pb-3 -mt-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-1.5 text-sm text-ink/60"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-6"
          >
            <MessageCircle size={16} />
            WhatsApp {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
