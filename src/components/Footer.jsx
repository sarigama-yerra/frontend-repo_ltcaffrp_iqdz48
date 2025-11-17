import { Mail, Phone, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold">Hydrion Technologies</h3>
          <p className="mt-3 text-slate-400">Sri Lanka’s next-generation internal waterproofing company. We waterproof from within — permanently.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +94 77 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@hydrion.lk</li>
            <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4"/> <a href="https://wa.me/94770000000" target="_blank" className="hover:text-white">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} Hydrion Technologies. All rights reserved.</div>
    </footer>
  )
}
