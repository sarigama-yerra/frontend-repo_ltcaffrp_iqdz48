import { Droplets, ShieldCheck, Hammer, ScanLine, Wind, Timer, Building2, Layers } from 'lucide-react'

const benefits = [
  { icon: Hammer, title: 'No tile removal', desc: 'Treats from within — we don’t dismantle your finishes.' },
  { icon: Layers, title: 'No surface coating', desc: 'Not a paint or membrane. It becomes part of the concrete.' },
  { icon: ShieldCheck, title: 'Permanent internal sealing', desc: 'Forms additional CSH gel that blocks water pathways.' },
  { icon: ScanLine, title: 'Strengthens matrix', desc: 'Densifies and improves compressive properties of the slab.' },
  { icon: Droplets, title: 'Seals microcracks & pores', desc: 'Penetrates deep and seals capillaries and micro-fractures.' },
  { icon: Wind, title: 'Resists moisture & fungus', desc: 'Dry surfaces reduce mold growth and damp patches.' },
  { icon: Timer, title: 'Fast application', desc: 'Clean, quick process with minimal disruption.' },
  { icon: Building2, title: 'Versatile', desc: 'Bathrooms, rooftops, basements, slabs, tanks, walls.' },
]

export default function Benefits(){
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Why Internal Waterproofing Wins</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Traditional surface coatings crack, peel and degrade under movement and UV. Our CSH resin diffuses into concrete and creates a permanent barrier within the structure.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b)=> (
            <div key={b.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <b.icon className="h-6 w-6 text-blue-700"/>
                <h3 className="font-semibold text-slate-900">{b.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{b.desc}</p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-blue-600/5 group-hover:bg-blue-600/10 blur-2xl transition"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
