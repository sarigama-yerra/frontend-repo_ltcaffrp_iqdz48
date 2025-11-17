import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import WhyVsCoatings from '../components/WhyVsCoatings'
import SocialProof from '../components/SocialProof'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Benefits />
        <WhyVsCoatings />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}
