export default function SocialProof(){
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Trusted by engineers and property owners</h2>
            <p className="mt-3 text-slate-600">From residential bathrooms to commercial rooftops and basements — proven performance across Sri Lanka.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-3 gap-4">
            {Array.from({length:6}).map((_,i)=> (
              <div key={i} className="h-14 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 text-sm">Client Logo</div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["Before","After","After 3 months"].map((t,i)=> (
            <div key={i} className="p-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
              <div className="text-sm text-slate-500">{t}</div>
              <div className="mt-2 aspect-video rounded-lg bg-slate-100 border border-slate-200"/>
              <p className="mt-2 text-sm text-slate-600">Moisture readings and visual dampness reduced significantly.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
