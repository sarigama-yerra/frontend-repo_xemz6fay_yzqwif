import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      if(!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch(err){
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Neem contact op</h2>
          <p className="mt-3 text-slate-300">We reageren meestal binnen één werkdag</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={submit} className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Naam</label>
                <input name="name" required className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">E-mail</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@mail.nl" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Bericht</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Waarmee kunnen we helpen?" />
            </div>
            <button disabled={status==="loading"} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-white font-medium shadow hover:bg-cyan-400 disabled:opacity-60">
              <Send className="h-4 w-4" />
              {status==="loading"? "Verzenden..." : "Verstuur bericht"}
            </button>
            {status==="success" && <p className="mt-3 text-sm text-emerald-400">Bedankt! We nemen snel contact op.</p>}
            {status==="error" && <p className="mt-3 text-sm text-rose-400">Er ging iets mis. Probeer het later opnieuw.</p>}
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold">Direct bellen of mailen</h3>
              <div className="mt-4 grid gap-3 text-slate-300">
                <a href="tel:+31000000000" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Phone className="h-4 w-4"/> +31 00 000 00 00</a>
                <a href="mailto:info@standup-zorg.nl" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Mail className="h-4 w-4"/> info@standup-zorg.nl</a>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold">Beschikbaarheid</h3>
              <p className="mt-2 text-slate-300">Flexibel inzetbaar in de regio. Ook op korte termijn mogelijk.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
