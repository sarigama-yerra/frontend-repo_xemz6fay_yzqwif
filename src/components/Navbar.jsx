import { Menu, Phone, HeartPulse } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center ring-1 ring-white/20">
              <HeartPulse className="h-5 w-5 text-white drop-shadow" />
            </div>
            <span className="text-white font-semibold tracking-tight group-hover:text-cyan-200 transition-colors">StandUp Zorg</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#diensten" className="text-slate-300 hover:text-white transition-colors">Diensten</a>
            <a href="#werkwijze" className="text-slate-300 hover:text-white transition-colors">Werkwijze</a>
            <a href="#ervaringen" className="text-slate-300 hover:text-white transition-colors">Ervaringen</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-cyan-400 transition-colors">
              <Phone className="h-4 w-4" />
              Neem contact op
            </a>
          </div>

          <button aria-label="menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-slate-200">
              <a href="#diensten" className="px-3 py-2 rounded-lg hover:bg-white/5">Diensten</a>
              <a href="#werkwijze" className="px-3 py-2 rounded-lg hover:bg-white/5">Werkwijze</a>
              <a href="#ervaringen" className="px-3 py-2 rounded-lg hover:bg-white/5">Ervaringen</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-white/5">Contact</a>
              <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-cyan-400"><Phone className="h-4 w-4"/>Neem contact op</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
