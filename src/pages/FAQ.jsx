import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {q:'Will you break tiles?', a:'No. Our system penetrates from grout lines and exposed areas. We seal from within without dismantling finishes.'},
  {q:'How long does the treatment last?', a:'It is a permanent solution. The CSH gel formed becomes part of the concrete matrix.'},
  {q:'Is your solution safe?', a:'Yes. Non-toxic, zero VOC, and compatible with concrete. No harmful fumes.'},
  {q:'How long does the application take?', a:'Most bathrooms complete in 1–2 days; larger slabs may vary.'},
  {q:'Is it guaranteed?', a:'Yes. We provide a service warranty based on site conditions and scope.'},
  {q:'Will it stop dampness and fungus?', a:'Yes. By cutting off moisture pathways, surfaces dry and fungus reduces.'},
  {q:'Can this be used for rooftops?', a:'Yes. Ideal for rooftops, exposed slabs, and terraces with movement and ponding issues.'},
  {q:'Does it strengthen concrete?', a:'Yes. Densification and additional CSH formation improve durability.'},
  {q:'What areas in Sri Lanka do you service?', a:'Colombo, Gampaha, Kalutara, Kandy, Galle, Matara, and islandwide on request.'},
]

export default function FAQ(){
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">FAQ</h1>
          <div className="mt-6 divide-y divide-slate-200 border border-slate-200 rounded-xl">
            {faqs.map((f)=> (
              <div key={f.q} className="p-5">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
