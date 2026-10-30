import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { ADDRESS, EMAIL, OFFICE_HOURS, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact Us",
  "Contact Herock Envirotech in Port Harcourt about Chicken Feather Oil Pillows, oil spill response kits, partnerships and innovation collaborations.",
  "/contact"
);

const contactInfo = [
  { icon: <MapPin size={20} />, title: "Office Address", value: ADDRESS },
  { icon: <Phone size={20} />, title: "Phone / WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL },
  { icon: <Mail size={20} />, title: "Email Address", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <Clock size={20} />, title: "Office Hours", value: OFFICE_HOURS },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[102px]">
        <PageHero
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s Build{" "}
              <span className="text-[#4ADE80]">Sustainable Solutions</span>{" "}
              Together
            </>
          }
          description="Reach out to discuss partnerships, innovation collaborations, or learn more about our Chicken Feather Oil Spill Sorbent Pillow."
        />

        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#0B1A3D] rounded-2xl p-8 sm:p-10 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-white mb-2">
                  The fastest way to reach us is WhatsApp
                </h2>
                <p className="text-white/60 text-sm">
                  Message us for samples, pricing, or partnership enquiries.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center flex-shrink-0"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B1A3D] flex items-center justify-center flex-shrink-0 text-[#4ADE80]">
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#0B1A3D] text-sm mb-0.5">{c.title}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-gray-500 text-sm hover:text-[#1E7A46] transition-colors break-words"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
