import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ADDRESS, EMAIL, OFFICE_HOURS, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Product", href: "/products" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  solutions: [
    { label: "Oil Spill Response", href: "/solutions#oil-spill" },
    { label: "Water Pollution Control", href: "/solutions#water-pollution" },
    { label: "Industrial Wastewater", href: "/solutions#industrial" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 pb-16 border-b border-white/10">
          <div>
            <p className="eyebrow text-mint mb-4">Herock Envirotech Ltd · RC 1731428</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] max-w-xl">
              Transforming waste into solutions.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 lg:items-end">
            <p className="text-white/60 text-sm max-w-sm lg:text-right">
              For samples, pricing or partnerships, the fastest way to reach us is WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              WhatsApp {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-12">
          <div>
            <h3 className="eyebrow text-white/40 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-white/40 mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2 grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="eyebrow text-white/40 mb-4">Office</h3>
              <p className="text-white/80 text-sm leading-relaxed">{ADDRESS}</p>
              <p className="text-white/50 text-sm mt-2">{OFFICE_HOURS}</p>
            </div>
            <div>
              <h3 className="eyebrow text-white/40 mb-4">Contact</h3>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors"
              >
                {PHONE_DISPLAY} <ArrowUpRight size={13} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-white/80 hover:text-white text-sm mt-2 transition-colors break-all"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Herock Envirotech Ltd. All rights reserved.</p>
          <p>Port Harcourt, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
