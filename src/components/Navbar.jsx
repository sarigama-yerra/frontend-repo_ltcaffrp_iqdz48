import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/services', label: 'Services' },
  { to: '/why-hydrion', label: 'Why Hydrion' },
  { to: '/projects', label: 'Projects' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Hydrion Technologies" onError={(e)=>{e.currentTarget.style.display='none'}} className="h-8 w-auto" />
          <span className="text-xl font-semibold tracking-tight text-slate-900">Hydrion Technologies</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://wa.me/94770000000" target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full transition">
            <MessageSquare className="h-4 w-4" /> WhatsApp Now
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full transition">
            <Phone className="h-4 w-4" /> Request a Quote
          </Link>
        </div>
        <button className="md:hidden p-2 rounded hover:bg-slate-100" onClick={()=>setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={()=>setOpen(false)} className="text-slate-700 font-medium">
                {item.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/94770000000" target="_blank" className="flex-1 text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full">WhatsApp Now</a>
              <Link to="/contact" onClick={()=>setOpen(false)} className="flex-1 text-center text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full">Request a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
