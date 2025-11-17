import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = [
  'Residential bathrooms',
  'Apartment slabs',
  'Commercial rooftops',
  'Basements',
  'Water tanks',
  'Industrial floors'
]

const cases = categories.flatMap((c, i) => Array.from({length: 2}).map((_,j)=> ({
  cat: c,
  title: `${c} Case ${j+1}`,
  problem: 'Persistent leaks and damp patches visible on the underside.',
  inspection: 'Identified microcracks and capillary pathways; negative-side pressure.',
  treatment: 'CSH resin injection/application; diffusion and reaction forming internal gel.',
  outcome: 'Significant moisture reduction, dry finish, no recurrence at follow-up.'
})))

export default function Projects(){
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Projects & Case Studies</h1>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {cases.map((cs, idx)=> (
              <article key={idx} className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
                <div className="text-xs text-slate-500">{cs.cat}</div>
                <h3 className="mt-1 text-xl font-semibold">{cs.title}</h3>
                <div className="mt-3 grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm"><span className="font-medium">Problem:</span> {cs.problem}</div>
                    <div className="text-sm"><span className="font-medium">Inspection:</span> {cs.inspection}</div>
                    <div className="text-sm"><span className="font-medium">Treatment:</span> {cs.treatment}</div>
                    <div className="text-sm"><span className="font-medium">Outcome:</span> {cs.outcome}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-video rounded-lg bg-slate-100 border border-slate-200"/>
                    <div className="aspect-video rounded-lg bg-slate-100 border border-slate-200"/>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
