export default function WhyVsCoatings(){
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Internal vs. Traditional Coatings</h2>
            <p className="mt-4 text-slate-600">Coatings sit on top and fail when surfaces move, crack, or when negative-side pressure pushes water from below. Our CSH resin travels into the concrete, reacts with free lime and forms additional CSH gel — permanently blocking pathways.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Coatings: surface-level, UV & wear degradation, peeling</li>
              <li>• Internal CSH: penetrates, densifies, seals microcracks from the inside</li>
              <li>• Result: long-term durability and structural improvement</li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200" />
                <p className="mt-2 text-sm font-medium text-rose-600">Surface coating (fails)</p>
              </div>
              <div>
                <div className="aspect-video rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200" />
                <p className="mt-2 text-sm font-medium text-emerald-700">Internal CSH sealing (permanent)</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Illustrative visuals: surface vs internal barrier within concrete matrix.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
