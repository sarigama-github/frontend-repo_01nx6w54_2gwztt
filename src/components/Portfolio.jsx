export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 bg-[#0b0b14]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Portfolio</h2>
            <p className="mt-2 text-white/70">Progetti in arrivo — stiamo preparando i casi studio migliori.</p>
          </div>
          <a href="#contatti" className="hidden sm:inline-flex rounded-xl bg-white/5 px-4 py-2 text-white/80 hover:text-white border border-white/10">Richiedi un case study</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-violet-600/10 backdrop-blur-sm flex items-center justify-center text-white/70">
              Presto disponibili
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
