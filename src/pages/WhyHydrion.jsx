import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WhyHydrion(){
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Why Hydrion</h1>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold">Differentiators</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>Advanced CSH resin technology</li>
                <li>Interior sealing vs surface methods</li>
                <li>Long-term durability</li>
                <li>Scientifically engineered solution</li>
                <li>Trained applicators & QC process</li>
                <li>Fast, clean application</li>
                <li>No dismantling/renovation needed</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="font-semibold">Safety & Eco Profile</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>Non-toxic</li>
                <li>Zero VOC</li>
                <li>Concrete strengthening</li>
                <li>Fungal/mold resistant</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="font-semibold">Cost Efficiency</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>No demolition</li>
                <li>No tile replacement</li>
                <li>Fewer callbacks</li>
                <li>Permanent solution reduces lifetime cost</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
