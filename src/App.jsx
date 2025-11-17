import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Services from './pages/Services'
import WhyHydrion from './pages/WhyHydrion'
import Projects from './pages/Projects'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/services" element={<Services />} />
      <Route path="/why-hydrion" element={<WhyHydrion />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
