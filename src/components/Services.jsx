import { Code, Search, ShoppingCart, BarChart3, Bot, LineChart } from 'lucide-react';

const cards = [
  {
    icon: Code,
    title: 'Siti web su misura',
    desc: 'Progettazione e sviluppo orientati alla conversione, performance top e design su brand.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Store scalabili con funnel, automazioni e integrazioni pagamenti sicure.'
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Campagne multicanale per acquisizione clienti e crescita del fatturato.'
  },
  {
    icon: Search,
    title: 'SEO / SEM',
    desc: 'Visibilità organica e paid search con tracciamenti e KPI chiari.'
  },
  {
    icon: Bot,
    title: 'Automazioni',
    desc: 'Workflow e chatbot per ridurre tempi e aumentare efficienza.'
  },
  {
    icon: LineChart,
    title: 'Analisi mercato',
    desc: 'Studio nicchia, competitor e buyer personas per strategie data-driven.'
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative py-20 bg-[#0b0b14]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Servizi su misura</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Dalla strategia alla crescita: soluzioni versatili per PMI e professionisti in ogni settore.</p>
          </div>
          <a href="#contatti" className="hidden sm:inline-flex rounded-xl bg-white/5 px-4 py-2 text-white/80 hover:text-white border border-white/10">Parla con noi</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition shadow-lg">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
              <a href="#contatti" className="mt-4 inline-flex text-indigo-300 hover:text-white text-sm">Richiedi una consulenza →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
