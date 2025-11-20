import { ArrowRight } from "lucide-react";

const steps = [
  { title: "Kennismaking", desc: "We verkennen de vraag en bepalen de prioriteiten.", },
  { title: "Plan van aanpak", desc: "Heldere doelen, planning en afstemming met het team.", },
  { title: "Uitvoering", desc: "Hands-on ondersteuning en continue afstemming op de werkvloer.", },
  { title: "Borging", desc: "We leggen vast wat werkt en zorgen dat het blijft werken.", },
];

export default function Process(){
  return (
    <section id="werkwijze" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Zo werken wij</h2>
          <p className="mt-3 text-slate-300">Transparant, resultaatgericht en betrokken</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-cyan-500/40"/>
          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
                <div className="inline-flex items-center gap-2 text-cyan-300 text-sm">
                  <span className="h-6 w-6 grid place-items-center rounded-full bg-cyan-500/20 text-cyan-300">{i+1}</span>
                  <ArrowRight className="h-4 w-4"/>
                </div>
                <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
