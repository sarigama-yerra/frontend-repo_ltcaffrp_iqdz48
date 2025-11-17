import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900 pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-1.5 mb-6 ring-1 ring-white/15">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-sm">CSH Resin Internal Waterproofing • Sri Lanka</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Waterproof From Within. <span className="text-blue-400">No Tiles Broken.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200 max-w-2xl">
            Powered by advanced CSH resin technology that penetrates concrete, reacts with free lime, forms additional CSH gel and permanently seals microcracks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg shadow-blue-600/20 transition">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 px-6 py-3 rounded-full transition">
              Book a Site Visit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
