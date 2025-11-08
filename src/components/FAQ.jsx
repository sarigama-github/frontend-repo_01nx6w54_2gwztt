export default function FAQ() {
  const faqs = [
    {
      q: 'Quanto tempo serve per lanciare un progetto? ',
      a: 'Dipende dalla complessità: in media 4–8 settimane per un sito vetrina, 8–12 per un e‑commerce.'
    },
    {
      q: 'Come misurate i risultati?',
      a: 'Impostiamo KPI, tracciamenti avanzati e dashboard. Le decisioni si basano sui dati.'
    },
    {
      q: 'Lavorate con qualsiasi settore?',
      a: 'Sì. Adattiamo strategia e messaggi alla nicchia e al target specifico.'
    },
    {
      q: 'Qual è il costo?',
      a: 'Offriamo soluzioni su misura: definiamo insieme priorità, roadmap e budget.'
    },
  ];

  return (
    <section id="faq" className="relative py-20 bg-[#0b0b14]">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 open:bg-white/10">
              <summary className="cursor-pointer list-none text-white font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-white/50 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="mt-3 text-white/70 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
