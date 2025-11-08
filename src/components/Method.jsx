export default function Method() {
  const steps = [
    'Analisi (nicchia, mercato, competitor, buyer personas)',
    'Strategia su misura',
    'Prototipazione e design orientati alla conversione',
    'Sviluppo e ottimizzazione UX/UI',
    'Implementazione di strumenti di acquisizione, tracking risultati',
    'Lancio e ottimizzazione continua',
  ];

  return (
    <section id="metodo" className="relative py-20 bg-[#0b0b14]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Metodo in 6 fasi</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Processo pensato per ottenere risultati misurabili e scalabili.</p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-semibold shadow-md">
                {i + 1}
              </div>
              <p className="mt-2 text-white/80">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
