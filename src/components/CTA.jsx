export default function CTA() {
  return (
    <section id="contatti" className="relative py-20 bg-[#0b0b14]">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-indigo-500/30 p-[1px]">
          <div className="rounded-3xl bg-[#0b0b14]/80 p-10 backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Pronto a crescere?</h2>
            <p className="mt-3 text-white/70">Prenota una consulenza gratuita: analizziamo nicchia, mercato e competitor e definiamo una roadmap d’azione.</p>
            <form className="mt-6 grid gap-3 sm:grid-cols-2 text-left">
              <input aria-label="Nome" required placeholder="Nome" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input aria-label="Email" required type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input aria-label="Azienda" placeholder="Azienda" className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea aria-label="Messaggio" placeholder="Raccontaci l’obiettivo" rows={4} className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-medium text-white shadow-md">Invia richiesta</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
