"use client";

const partners = [
  { name: "NNPC", abbr: "NNPC", color: "#1E7A46" },
  { name: "Chevron", abbr: "CHV", color: "#005EB8" },
  { name: "TotalEnergies", abbr: "TTE", color: "#FF0000" },
  { name: "NIMASA", abbr: "NIM", color: "#003366" },
  { name: "UN Environment Programme", abbr: "UN", color: "#009EDB" },
  { name: "Global Environment Facility", abbr: "GEF", color: "#1E7A46" },
  { name: "Ondo State Government", abbr: "OND", color: "#FF6B00" },
];

export default function TrustedPartners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading font-bold text-[#1F2937] text-base uppercase tracking-widest mb-10">
          OUR TRUSTED PARTNERS
        </h2>
        <div className="flex flex-wrap gap-6 items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-14 px-6 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all cursor-pointer group"
              title={p.name}
            >
              <span
                className="font-black text-sm tracking-wider group-hover:opacity-100 opacity-60 transition-opacity"
                style={{ color: p.color }}
              >
                {p.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
