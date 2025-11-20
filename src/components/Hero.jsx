import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl"/>
        <div className="absolute top-32 -right-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"/>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Praktische ondersteuning in de zorg, precies wanneer het nodig is
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              StandUp Zorg helpt zorgorganisaties met tijdelijke ondersteuning, verbeterprojecten en hands-on coördinatie. Betrouwbaar, betrokken en direct inzetbaar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-white font-medium shadow hover:bg-cyan-400 transition-colors">
                Plan een kennismaking
              </a>
              <a href="#diensten" className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white/80 hover:text-white ring-1 ring-white/20 hover:ring-white/40 transition-all">
                Ontdek onze diensten
              </a>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/>Ervaren in zorgcoördinatie</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/>Flexibel en snel inzetbaar</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/>Focus op kwaliteit en continuïteit</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-400"/>Heldere communicatie</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 ring-1 ring-white/10 shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1686301825429-7e4dd9f61719?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM2NDc4NTR8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Zorg in actie" className="h-full w-full object-cover opacity-90"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
