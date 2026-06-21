"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: <MapPin size={20} />, title: "Office Address", value: "41, Mbonu Street, D/Line, Port Harcourt, Nigeria." },
  { icon: <Phone size={20} />, title: "Phone Number", value: "+234 (0) 901 538 4177", href: "tel:+2349015384177" },
  { icon: <Mail size={20} />, title: "Email Address", value: "herockenvirotech@gmail.com", href: "mailto:herockenvirotech@gmail.com" },
  { icon: <Clock size={20} />, title: "Office Hours", value: "Monday – Friday: 8:00AM – 5:00PM" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
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
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <div>
              <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-8">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B1A3D] flex items-center justify-center flex-shrink-0 text-[#4ADE80]">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-bold text-[#0B1A3D] text-sm mb-0.5">{c.title}</p>
                      {"href" in c && c.href ? (
                        <a href={c.href} className="text-gray-500 text-sm hover:text-[#1E7A46] transition-colors">
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

            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <Send size={28} className="text-[#1E7A46]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0B1A3D] mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl text-[#0B1A3D] mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E7A46] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E7A46] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="organization">
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="Your company or organization"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E7A46] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your interest in our innovation..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E7A46] transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
