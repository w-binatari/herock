import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Users2, Award, Lightbulb, Shield, Handshake, TrendingUp, Star, Globe } from "lucide-react";

const values = [
  { icon: <Lightbulb size={24} />, title: "Innovation", desc: "Pioneering new technologies to solve environmental challenges." },
  { icon: <Globe size={24} />, title: "Sustainability", desc: "Embedding environmental responsibility in everything we do." },
  { icon: <Shield size={24} />, title: "Integrity", desc: "Upholding the highest standards of honesty and ethics." },
  { icon: <TrendingUp size={24} />, title: "Impact", desc: "Measuring success by the positive change we create." },
  { icon: <Handshake size={24} />, title: "Collaboration", desc: "Partnering with communities, industries, and governments." },
  { icon: <Star size={24} />, title: "Excellence", desc: "Striving for the highest quality in all our products and services." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        {/* Hero Banner */}
        <section className="relative bg-[#0E4D2F] py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E4D2F]/95 to-[#1E7A46]/70" />
          <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              About Us
            </span>
            <h1 className="font-heading text-5xl font-black mb-4">Creating Value From Waste</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Africa&apos;s pioneering circular economy company, turning agricultural by-products into environmental solutions.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="green-badge mb-4 inline-block">Who We Are</span>
              <h2 className="section-title mb-5">Herock Envirotech</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Herock Envirotech is an environmental technology company at the forefront of circular economy innovation.
                We develop sustainable products from waste materials, specifically converting poultry feather waste into
                high-performance oil sorbents and other environmental remediation tools.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Founded with a commitment to both environmental protection and economic development, we bridge the gap
                between agricultural waste management and industrial environmental solutions — creating value at every step.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-[#0E4D2F] to-[#1E7A46] flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543559a56e4b?w=800&q=80')] bg-cover bg-center opacity-30" />
              <div className="relative text-center text-white">
                <Users2 size={48} className="mx-auto mb-3 text-green-300" />
                <p className="font-heading font-bold text-xl">Building a Greener Future</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                <Eye size={24} className="text-[#1E7A46]" />
              </div>
              <span className="text-[#D4A017] text-xs font-bold uppercase tracking-widest block mb-2">Our Vision</span>
              <p className="text-[#1F2937] text-lg font-semibold leading-relaxed">
                &ldquo;To become Africa&apos;s leading circular economy innovation company, creating sustainable solutions from waste materials.&rdquo;
              </p>
            </div>
            <div className="bg-[#0E4D2F] rounded-2xl p-10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-green-300" />
              </div>
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest block mb-2">Our Mission</span>
              <p className="text-white text-lg font-semibold leading-relaxed">
                &ldquo;To develop environmentally responsible products and technologies that convert waste into valuable products while solving critical environmental and societal problems.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="green-badge mb-4 inline-block">What We Stand For</span>
              <h2 className="section-title">Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={v.title} className="card p-7">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-[#1E7A46]">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[#1F2937] text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
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
