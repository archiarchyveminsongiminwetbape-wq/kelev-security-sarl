import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EmergencyBanner from './components/EmergencyBanner'
import FloatingButtons from './components/FloatingButtons'
import LoadingSpinner from './components/LoadingSpinner'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Article from './pages/Article'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Careers from './pages/Careers'
import Partners from './pages/Partners'
import CaseStudies from './pages/CaseStudies'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'
import Merci from './pages/Merci'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen flex flex-col text-white overflow-x-hidden">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/temoignages" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/carrières" element={<Careers />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/etudes-de-cas" element={<CaseStudies />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/politique-confidentialite" element={<Privacy />} />
          <Route path="/conditions-utilisation" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Merci />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
