import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Bathroom & Wet Area Waterproofing (No Tile Removal)',
    pain: ['Leaks through grout and joints','Damp patches and fungus','Impossible to redo tiles'],
    fail: 'External coatings peel and fail under negative-side pressure and movement.',
    superior: 'Our internal CSH method penetrates the slab and seals pathways from within, without dismantling finishes.',
  },
  {
    title: 'Rooftops & Exposed Slabs',
    pain: ['Ponding water','UV degradation of coatings','Cracking from thermal movement'],
    fail: 'Membranes and paints degrade and split at joints and penetrations.',
    superior: 'Internal sealing densifies concrete and blocks ingress below the surface layer.',
  },
  {
    title: 'Basements & Retaining Walls',
    pain: ['Negative-side water pressure','Seepage through cold joints','Persistent dampness'],
    fail: 'Surface coats cannot resist hydrostatic pressure pushing from behind.',
    superior: 'Internal gel formation creates a pressure-resistant, integral barrier.',
  },
  {
    title: 'Water Tanks & Reservoirs',
    pain: ['Leaks at construction joints','Difficult to recoat','Chlorinated water attack'],
    fail: 'Coatings debond and contaminate water.',
    superior: 'Internal CSH is non-toxic, zero VOC and compatible with potable water when specified.',
  },
  {
    title: 'Industrial Floors & Parking Decks',
    pain: ['Heavy wear','Oil and water ingress','Crack propagation'],
    fail: 'Topical sealers wear out under traffic.',
    superior: 'Internal densification improves durability and reduces dusting.',
  },
  {
    title: 'Structural Slabs & High-Load Slabs',
    pain: ['Microcracking','Water migration','Service life concerns'],
    fail: 'Surface patches don’t address internal pathways.',
    superior: 'Internal sealing strengthens and reduces permeability across the section.',
  },
]

export default function Services(){
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Services</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">Problem → Solution → Outcome for the environments we treat using CSH-based internal waterproofing.</p>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            {services.map((s)=> (
              <div key={s.title} className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <div className="mt-3">
                  <div className="font-medium">Pain points</div>
                  <ul className="list-disc pl-5 text-slate-700">
                    {s.pain.map((p)=> (<li key={p}>{p}</li>))}
                  </ul>
                </div>
                <div className="mt-3">
                  <div className="font-medium">Why external solutions fail</div>
                  <p className="text-slate-700">{s.fail}</p>
                </div>
                <div className="mt-3">
                  <div className="font-medium">Why Hydrion’s internal CSH method is superior</div>
                  <p className="text-slate-700">{s.superior}</p>
                </div>
                <div className="mt-4">
                  <Link to="/contact" className="inline-flex text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full font-semibold">Request a Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
