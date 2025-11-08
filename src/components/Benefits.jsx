export default function Benefits() {
  const points = [
    { title: 'Più clienti e fatturato', desc: 'Strategie orientate alla crescita con KPI chiari e ROI misurabile.' },
    { title: 'Vantaggio competitivo', desc: 'Rimani davanti ai competitor con tecnologie e processi moderni.' },
    { title: 'Efficienza operativa', desc: 'Automazioni che liberano tempo e riducono costi.' },
    { title: 'Rischi del “non fare”', desc: 'Perdita di clienti, calo visibilità, dati non tracciati e decisioni non informate.' },
  ];

  return (
    <section className="relative py-20 bg-[#0b0b14]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Perché digitalizzare</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Trasforma i rischi in opportunità concrete di crescita.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white font-medium">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
