import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#servizi', label: 'Servizi' },
    { href: '#metodo', label: 'Metodo' },
    { href: '#chi-siamo', label: 'Chi siamo' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 flex items-center justify-center shadow-inner">
                <Rocket className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-semibold tracking-tight">Nova Digital</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contatti"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 font-medium text-white shadow-md hover:shadow-violet-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              >
                Prenota una consulenza gratuita
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              aria-label="Apri menu"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3 text-white/80">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contatti"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 font-medium text-white shadow-md"
                >
                  Prenota una consulenza gratuita
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
