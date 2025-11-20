import { Stethoscope, ClipboardList, Users, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Tijdelijke ondersteuning",
    desc: "Wanneer de druk oploopt springen we bij: van roostering tot dagcoördinatie en alles daartussen.",
  },
  {
    icon: ClipboardList,
    title: "Procesverbetering",
    desc: "We brengen structuur aan, optimaliseren werkprocessen en zorgen voor borging.",
  },
  {
    icon: Users,
    title: "Teamcoaching",
    desc: "We versterken teams met coaching on-the-job, duidelijke afspraken en draagvlak.",
  },
  {
    icon: ShieldCheck,
    title: "Kwaliteit & veiligheid",
    desc: "We bewaken kwaliteit, protocollen en dossiervoering zodat de basis op orde is.",
  },
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Wat we doen</h2>
          <p className="mt-3 text-slate-300">Praktische zorgexpertise die direct waarde toevoegt</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6 hover:ring-cyan-400/30 transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white grid place-items-center shadow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
