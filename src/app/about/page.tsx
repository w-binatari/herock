import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SustainableGoals from "@/components/SustainableGoals";
import Image from "next/image";
import {
  Target,
  Droplets,
  Cog,
  Truck,
  GraduationCap,
  Shield,
  Users,
  Lightbulb,
  Handshake,
  Sprout,
} from "lucide-react";

const objectives = [
  {
    number: 1,
    icon: <Droplets size={22} />,
    title: "Environmental Remediation & Operations",
    desc: "Rapid-response oil spill clean-up and wastewater treatment using our Chicken Feather Oil Spill Sorbent Pillow technology.",
  },
  {
    number: 2,
    icon: <Cog size={22} />,
    title: "Product Manufacturing & Innovation",
    desc: "Manufacturing keratin-rich biosorbents from poultry waste, converting agricultural by-products into high-performance environmental solutions.",
  },
  {
    number: 3,
    icon: <Truck size={22} />,
    title: "Procurement & Supply",
    desc: "Supplying biosorbent pillows and spill response equipment to oil and gas operators, industrial facilities, and government agencies.",
  },
  {
    number: 4,
    icon: <GraduationCap size={22} />,
    title: "Training",
    desc: "Professional training programs in biosorbent deployment, spill response protocols, and waste-to-value processing.",
  },
];

const irideValues = [
  {
    letter: "I",
    title: "Integrity",
    desc: "Integrity in every process, decision, and partnership.",
    icon: <Shield size={18} />,
  },
  {
    letter: "R",
    title: "Respect",
    desc: "Respect for people, communities, and the environment.",
    icon: <Users size={18} />,
  },
  {
    letter: "I",
    title: "Innovation",
    desc: "We drive innovation to develop practical and sustainable circular economy solutions.",
    icon: <Lightbulb size={18} />,
  },
  {
    letter: "D",
    title: "Dependability",
    desc: "We deliver reliable, cost-effective products and services that meet the needs of our clients and partners.",
    icon: <Handshake size={18} />,
  },
  {
    letter: "E",
    title: "Environmental Stewardship",
    desc: "The responsible management, protection, and restoration of natural resources and ecosystems.",
    icon: <Sprout size={18} />,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[102px]">
        {/* Hero */}
        <section className="relative bg-[#0B1A3D] py-20 lg:py-28 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">
            <p className="text-[#4ADE80] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              RC 1731428
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl mb-5">
              Transforming Waste Into{" "}
              <span className="text-[#4ADE80]">Environmental Solutions</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Africa&apos;s pioneering circular economy company, turning agricultural
              by-products into high-performance environmental remediation products.
            </p>
          </div>
        </section>

        {/* About + Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#1E7A46] text-lg">🌿</span>
                  <h2 className="font-heading text-xl font-black text-[#0B1A3D] uppercase tracking-wider">
                    About Us
                  </h2>
                  <div className="flex-1 h-0.5 bg-[#1E7A46]/30" />
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Herock Envirotech Ltd. is a Nigerian cleantech company focused on
                    transforming agricultural waste into high-performance environmental
                    solutions. We develop and manufacture the Chicken Feather Oil Spill
                    Sorbent Pillow — a biodegradable, cost-effective alternative to
                    conventional oil absorbents.
                  </p>
                  <p>
                    By converting poultry feather waste into functional sorbents, we
                    address two critical challenges: agricultural waste management and
                    oil spill remediation — creating value at every step of the circular
                    economy.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={20} className="text-[#0B1A3D]" />
                    <h2 className="font-heading text-xl font-black text-[#0B1A3D] uppercase tracking-wider">
                      Mission
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To build Africa&apos;s circular economy by developing environmentally
                    responsible products and technologies that convert waste into valuable
                    solutions — protecting our blue economy through science and innovation.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-[#F7FAF8]">
                  <Image
                    src="/pillow_action.jpg"
                    alt="Herock Envirotech Oil Absorbent Pillows"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#1E7A46] text-white rounded-xl px-5 py-3 shadow-lg">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                    Flagship Product
                  </p>
                  <p className="font-heading font-bold text-sm">
                    Oil Absorbent Pillows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Objectives */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-3">
              Project Objectives
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              The Chicken Feather Oil Pillow project aims to deliver environmental,
              economic, and social impact across Nigeria&apos;s blue economy.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Promote locally sourced materials in oil sorbent manufacturing",
                "Reduce the cost of oil spill cleanup operations",
                "Create employment opportunities through commercialization",
                "Encourage sustainable waste management by repurposing poultry waste",
                "Support local content development",
                "Advance circular economy principles",
              ].map((obj) => (
                <div
                  key={obj}
                  className="flex items-start gap-3 bg-[#F7FAF8] rounded-xl p-5 border border-gray-100"
                >
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#1E7A46] mt-2" />
                  <span className="text-gray-600 text-sm leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Objectives + I-RIDE */}
        <section className="py-20 bg-[#F7FAF8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
              {/* Strategic Objectives */}
              <div>
                <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-2">
                  Strategic Objectives
                </h2>
                <p className="text-gray-500 text-sm mb-8 max-w-lg">
                  Our core business areas driving environmental impact and circular
                  economy innovation across Nigeria and beyond.
                </p>

                <div className="space-y-5">
                  {objectives.map((obj) => (
                    <div
                      key={obj.number}
                      className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    >
                      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#0B1A3D] text-white flex items-center justify-center font-heading font-black text-sm">
                        {obj.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[#1E7A46]">{obj.icon}</span>
                          <h3 className="font-heading font-bold text-[#0B1A3D] text-sm uppercase tracking-wide">
                            {obj.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {obj.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* I-RIDE Values */}
              <div>
                <h2 className="font-heading text-2xl font-black text-[#0B1A3D] uppercase tracking-wide mb-2">
                  Our Values
                </h2>
                <p className="text-[#1E7A46] font-heading font-black text-lg mb-8 tracking-widest">
                  I-RIDE
                </p>

                <div className="space-y-4">
                  {irideValues.map((v) => (
                    <div
                      key={v.title}
                      className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0B1A3D] text-white flex items-center justify-center">
                        {v.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-[#0B1A3D] text-sm mb-0.5">
                          <span className="text-[#1E7A46]">{v.letter}</span>
                          {" — "}
                          {v.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SustainableGoals />
      </main>
      <Footer />
    </>
  );
}
