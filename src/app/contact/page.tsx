"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Linkedin, MessageCircle, Play, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  { icon: <MapPin size={20} />, title: "Office Address", value: "No. 12 Excellence Drive, Akure, Ondo State, Nigeria." },
  { icon: <Phone size={20} />, title: "Phone Numbers", value: "+234 800 123 4567\n+234 803 000 1122 (Emergency)" },
  { icon: <Mail size={20} />, title: "Email Address", value: "info@herockenvirotech.com" },
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
        {/* Hero */}
        <section className="relative bg-[#0E4D2F] py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E4D2F]/95 to-[#1E7A46]/70" />
          <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              Get In Touch
            </span>
            <h1 className="font-heading text-5xl font-black mb-4">
              Let&apos;s Build Sustainable Solutions Together
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Reach out to discuss partnerships, product inquiries, or emergency response needs.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr] gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="section-title mb-8">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((c) => (
                  <div key={c.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 text-[#1E7A46]">
                      {c.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 text-sm mb-0.5">{c.title}</p>
                      <p className="text-gray-500 text-sm whitespace-pre-line">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="font-bold text-sm text-gray-700 uppercase tracking-wider mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Linkedin size={16} />, href: "#" },
                    { icon: <MessageCircle size={16} />, href: "#" },
                    { icon: <Play size={16} />, href: "#" },
                    { icon: <Instagram size={16} />, href: "#" },
                    { icon: <Facebook size={16} />, href: "#" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#1E7A46] hover:border-[#1E7A46] hover:text-white flex items-center justify-center text-gray-500 transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <Send size={28} className="text-[#1E7A46]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#1F2937] mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl text-[#1F2937] mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">Full Name *</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address *</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="organization">Organization</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
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
