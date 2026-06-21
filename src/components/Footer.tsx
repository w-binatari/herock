"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ],
  solutions: [
    { label: "Oil Spill Response", href: "/solutions#oil-spill" },
    { label: "Water Pollution Control", href: "/solutions#water-pollution" },
    { label: "Industrial Waste Management", href: "/solutions#industrial" },
    { label: "Environmental Restoration", href: "/solutions#restoration" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Downloads", href: "/downloads" },
    { label: "FAQs", href: "/faqs" },
    { label: "News", href: "/news" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1A3D] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-10">
          {/* Column 1 - Company */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/navbar_logo.png"
              alt="Herock Envirotech"
              width={150}
              height={50}
              className="h-11 w-auto object-contain mb-4 brightness-200 contrast-75"
            />
            <p className="text-white/50 text-xs leading-relaxed mb-5">
              Transforming waste into innovative solutions for a cleaner, healthier and more sustainable planet.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-[#4ADE80] text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Our Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-[#4ADE80] text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-[#4ADE80] text-xs transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/50 text-xs">
                <MapPin size={12} className="mt-0.5 flex-shrink-0 text-[#4ADE80]" />
                <span>41, Mbonu Street, D/Line, Port Harcourt, Nigeria.</span>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Phone size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <a href="tel:+2349015384177" className="hover:text-[#4ADE80] transition-colors">+234 (0) 901 538 4177</a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Mail size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <a href="mailto:herockenvirotech@gmail.com" className="hover:text-[#4ADE80] transition-colors">herockenvirotech@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Clock size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <span>Mon - Fri: 8:00AM - 5:00PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Herock Envirotech Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
