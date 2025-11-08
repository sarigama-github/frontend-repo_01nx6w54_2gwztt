export default function Testimonials() {
  const items = [
    { name: 'Francesca R.', role: 'Imprenditrice', quote: 'Abbiamo aumentato i lead qualificati del 140% in 3 mesi. Approccio data‑driven impeccabile.' },
    { name: 'Luca T.', role: 'CEO PMI', quote: 'Design, performance e risultati: finalmente un partner che parla la lingua del business.' },
    { name: 'Marta S.', role: 'Professionista', quote: 'Processi automatizzati e tracciamento completo: risparmio ore ogni settimana.' },
  ];

  return (
    <section className="relative py-20 bg-[#0b0b14]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Cosa dicono i clienti</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <blockquote className="text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">{t.name} — {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
