"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, Search } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Oil Spill Response", href: "/solutions#oil-spill" },
      { label: "Water Pollution Control", href: "/solutions#water-pollution" },
      { label: "Industrial Wastewater", href: "/solutions#industrial" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Feather Clean-Sorbent Pillow", href: "/products#sorbent-pillow" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div className="bg-[#0E4D2F] text-white text-xs py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+2349015384177" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
            <Phone size={11} />
            <span>+234 (0) 901 538 4177</span>
          </a>
          <a href="mailto:herockenvirotech@gmail.com" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
            <Mail size={11} />
            <span>herockenvirotech@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/contact" className="ml-3 bg-[#1E7A46] hover:bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded transition-colors uppercase tracking-wider">
            Request a Sample
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/97 backdrop-blur-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/navbar_logo.png"
              alt="Herock Envirotech"
              width={160}
              height={55}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[0.85rem] font-medium text-gray-700 hover:text-[#1E7A46] transition-colors rounded-md hover:bg-green-50 whitespace-nowrap"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className="text-gray-400 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>
                {/* Underline indicator for active */}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1E7A46] rounded-full" />
                )}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#1E7A46] hover:bg-green-50 transition-colors"
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

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button aria-label="Search" className="p-2 text-gray-500 hover:text-[#1E7A46] transition-colors">
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#1E7A46]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={`block py-2.5 text-sm font-medium ${pathname === link.href ? "text-[#1E7A46]" : "text-gray-700"} hover:text-[#1E7A46]`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l-2 border-green-100 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-1.5 text-xs text-gray-500 hover:text-[#1E7A46]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/contact" className="mt-4 btn-primary w-full text-center justify-center">
              Request a Sample
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
