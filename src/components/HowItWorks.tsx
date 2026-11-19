const steps = [
  {
    title: "Collect feather waste",
    desc: "Poultry feathers that would otherwise be burned or dumped are collected from processors.",
  },
  {
    title: "Process into keratin fibre",
    desc: "Feathers are cleaned and processed into a fibrous keratin sorbent that binds oil and repels water.",
  },
  {
    title: "Pack into mesh pillows",
    desc: "The fibre is sealed in tear-resistant mesh casings that hold together when fully saturated.",
  },
  {
    title: "Absorb, recover, biodegrade",
    desc: "Pillows float, soak up the spill and are recovered — then break down with no secondary waste.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 mb-12 sm:mb-16">
          <p className="eyebrow text-leaf">How it works</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-ink max-w-3xl">
            One waste stream cleans up another.
          </h2>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-ink pt-5">
              <span className="eyebrow text-ink/50">0{i + 1}</span>
              <h3 className="font-heading text-xl font-semibold text-ink mt-3 mb-2">{s.title}</h3>
              <p className="text-ink/65 text-[0.95rem] leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
