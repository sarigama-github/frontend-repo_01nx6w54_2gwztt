import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b14] to-[#0b0b14]" />

      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="py-10">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Innovazione • Strategia • Crescita
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Portiamo la tua azienda nel futuro digitale.
            </h1>
            <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed">
              Più visibilità, lead qualificati e ROI misurabile. Strategie su misura studiate su nicchia, mercato e competitor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contatti" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 font-medium text-white shadow-md">
                Prenota una consulenza gratuita
              </a>
              <a href="#servizi" className="inline-flex items-center rounded-xl bg-white/5 px-5 py-3 text-white/80 hover:text-white border border-white/10">
                Scopri i servizi
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60 max-w-lg">
              Chi non innova rischia di perdere clienti e quote di mercato. Agisci ora: trasformiamo il rischio in opportunità.
            </p>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0b14] to-transparent" />
    </section>
  );
}
