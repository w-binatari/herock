import { MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export default function ContactCta() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-leaf rounded-[28px] px-6 py-12 sm:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-mint mb-4">Samples · Pricing · Partnerships</p>
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-white max-w-2xl">
              Ready to test the pillows on your site?
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-ink font-semibold rounded-full px-6 py-3.5 hover:bg-cream transition-colors flex-shrink-0"
          >
            <MessageCircle size={17} />
            <span className="sm:hidden">WhatsApp us</span>
            <span className="hidden sm:inline whitespace-nowrap">WhatsApp {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
