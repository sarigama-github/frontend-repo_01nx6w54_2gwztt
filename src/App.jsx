import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Method from './components/Method';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <Benefits />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <footer className="bg-[#0b0b14] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/70">
            <div>
              <h3 className="text-white font-medium">Recapiti</h3>
              <p className="mt-2">Nova Digital Agency</p>
              <p>P.IVA 12345678901</p>
              <p className="mt-2">email@novadigital.it</p>
              <p>+39 000 000 000</p>
            </div>
            <div>
              <h3 className="text-white font-medium">Menu</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
                <li><a href="#servizi" className="hover:text-white">Servizi</a></li>
                <li><a href="#metodo" className="hover:text-white">Metodo</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                <li><a href="#contatti" className="hover:text-white">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium">Social</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium">Legale</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Termini e Condizioni</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Nova Digital — Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
