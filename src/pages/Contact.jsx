import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', phone:'', address:'', issue:'Bathroom Leak', files: [] })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
  }

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-slate-600">Service areas: Colombo, Gampaha, Kalutara, Kandy, Galle, Matara, and islandwide on request.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 p-6 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input required value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium">Type of Issue</label>
              <select value={form.issue} onChange={(e)=>setForm({...form, issue:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                {['Bathroom Leak','Rooftop Leak','Basement Seepage','Tank Leakage','Industrial Floor','Other'].map((o)=>(<option key={o}>{o}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Upload Images</label>
              <input type="file" multiple onChange={(e)=>setForm({...form, files: Array.from(e.target.files||[])})} className="mt-1 w-full" />
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full font-semibold">Request Assessment</button>
              <a href="https://wa.me/94770000000" target="_blank" className="inline-flex items-center justify-center text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full font-semibold">WhatsApp Now</a>
              <a href="tel:+94770000000" className="inline-flex items-center justify-center text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full font-semibold">Call Us</a>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
