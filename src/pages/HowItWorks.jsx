import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HowItWorks(){
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">How It Works</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">Our CSH resin system penetrates concrete, reacts with free lime to form additional CSH gel, densifies the matrix and seals microcracks from within.</p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <h2 className="text-2xl font-semibold">Simple Explanation</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Penetrates concrete</li>
              <li>• Reacts with free lime</li>
              <li>• Forms additional CSH gel</li>
              <li>• Densifies slab and seals microcracks</li>
              <li>• Creates an internal waterproof barrier</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-white border border-slate-200" />
            <p className="mt-3 text-sm text-slate-600">Engineering visuals: diffusion into concrete and gel formation.</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl font-semibold">Step-by-Step Process</h2>
          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {['Assessment','Injection / Application','Penetration & Reaction','Internal structural sealing','Final test & confirmation'].map((s)=> (
              <div key={s} className="p-4 border border-slate-200 rounded-xl bg-white">
                <div className="font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid md:grid-cols-3 gap-6">
          {['Moisture reductions','Stain/fungus removal','Dry, strengthened surfaces'].map((s)=> (
            <div key={s} className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
              <div className="font-semibold">{s}</div>
              <div className="mt-3 aspect-video rounded-lg bg-white/60 border border-emerald-200"/>
            </div>
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-blue-600 text-white text-xl font-semibold">Permanent solution — not a surface-level patch.</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
