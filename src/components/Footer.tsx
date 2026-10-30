import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ADDRESS, EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Products", href: "/products" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "News", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
  solutions: [
    { label: "Oil Spill Response", href: "/solutions#oil-spill" },
    { label: "Water Pollution Control", href: "/solutions#water-pollution" },
    { label: "Industrial Wastewater", href: "/solutions#industrial" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1A3D] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
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

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/50 text-xs">
                <MapPin size={12} className="mt-0.5 flex-shrink-0 text-[#4ADE80]" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Phone size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#4ADE80] transition-colors">{PHONE_DISPLAY} (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Mail size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#4ADE80] transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-xs">
                <Clock size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <span>Mon - Fri: 8:00AM - 5:00PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Herock Envirotech Ltd. All Rights Reserved.
          </p>
          <Link href="/contact" className="text-white/40 hover:text-white/70 text-xs transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
