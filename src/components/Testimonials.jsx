export default function Testimonials(){
  const items = [
    {
      quote: "StandUp Zorg bracht rust en overzicht in een drukke periode. Hun aanpak is praktisch en doeltreffend.",
      author: "Teamleider Thuiszorg",
    },
    {
      quote: "Binnen een week merkten we al verschil in samenwerking en planning.",
      author: "Manager Zorgcentrum",
    },
    {
      quote: "Professioneel, verbindend en altijd helder in communicatie.",
      author: "Regiocoördinator Wijkzorg",
    },
  ];

  return (
    <section id="ervaringen" className="py-20 bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ervaringen</h2>
          <p className="mt-3 text-slate-300">Wat organisaties over ons zeggen</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.author} className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
