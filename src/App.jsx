import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} StandUp Zorg. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}

export default App;