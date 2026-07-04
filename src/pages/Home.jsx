import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Seo from '../components/Seo'
import Newsletter from '../components/Newsletter'
import ScrollReveal from '../components/ScrollReveal'
import { testimonials } from '../content/testimonials'
import { articles } from '../content/articles'
import { useI18n } from '../i18n/i18n.jsx'

// Animated counter hook
const useAnimatedCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return [count, ref]
}

export default function Home() {
  const { t } = useI18n()
  const isEnglish = window.location.pathname.startsWith('/en')
  
  // Get latest 3 articles
  const latestArticles = articles.slice(0, 3)
  // Get first 3 testimonials
  const featuredTestimonials = testimonials.slice(0, 3)
  
  // Animated counters
  const [yearsCount, yearsRef] = useAnimatedCounter(5)
  const [clientsCount, clientsRef] = useAnimatedCounter(200)
  const [agentsCount, agentsRef] = useAnimatedCounter(50)
  
  return (
    <>
        <Seo title={t('seo.home.title')} description={t('seo.home.desc')} keywords={t('seo.home.keywords')} />
      
      {/* Hero Section */}
      <div className="section relative hero-bg min-h-[90vh] flex items-center overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-gold/10 to-transparent rounded-full blur-3xl opacity-30"></div>

        <div className="container-page px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm text-sm text-brand-gold animate-fade-in animate-glow">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {t('home.badge1')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span>{t('home.badge2')}</span>
            </div>
            <h1 className="h1 mt-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-300% animate-gradient text-4xl sm:text-6xl lg:text-7xl animate-slide-up"> {t('home.title')}</h1>
            <p className="lead mt-6 text-lg sm:text-xl px-2 sm:px-0 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>{t('home.lead')}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link to="/contact" className="btn-primary w-full sm:w-auto px-8 py-3 text-lg animate-glow">
                {t('home.cta.primary')}
              </Link>
              <a href="tel:+237655070707" className="btn-ghost w-full sm:w-auto px-8 py-3 text-lg">
                {t('home.cta.call')}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 px-2 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <span className="pill px-4 py-2 border-brand-gold/20 bg-brand-gold/5 text-brand-gold/90">{t('home.pill.certified')}</span>
              <span className="pill px-4 py-2 border-brand-gold/20 bg-brand-gold/5 text-brand-gold/90">{t('home.pill.supervision')}</span>
              <span className="pill px-4 py-2 border-brand-gold/20 bg-brand-gold/5 text-brand-gold/90">{t('home.pill.coverage')}</span>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-brand-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="section">
        <div className="container-page px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-brand-gold">{t('home.services_section.title')}</h2>
              <p className="text-neutral-300 mt-3 text-lg max-w-2xl mx-auto">{t('home.services_section.subtitle')}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                  { title: t('home.service2.title'), desc: t('home.service2.desc'), icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M4 13l4 4 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) },
                { title: t('home.service3.title'), desc: t('home.service3.desc'), icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M3 7h18M5 7l1 12h12l1-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) },
                { title: t('home.service4.title'), desc: t('home.service4.desc'), icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>
                ) },
                { title: t('home.service5.title'), desc: t('home.service5.desc'), icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M3 10l8-5 10 6-8 5-10-6zM13 11v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) },
                { title: t('home.service6.title'), desc: t('home.service6.desc'), icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) },
              ].map((s) => (
                <div key={s.title} className="card group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300">
                        {s.icon}
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-brand-gold transition-colors duration-300">{s.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-brand-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>En savoir plus</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-ghost px-8 py-3 border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold/50 transition-all duration-300">
                {t('home.services_section.view_all')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Trust/Certifications Section */}
      <div className="section bg-neutral-900/30">
        <div className="container-page px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-gold">Certifications & Partenaires de confiance</h2>
            <p className="text-neutral-300 mt-3 max-w-2xl mx-auto">Des certifications reconnues et des partenariats solides pour garantir votre sécurité</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Licence Sécurité N°001', issuer: 'Ministère de la Sécurité', icon: (
                <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-brand-gold"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) },
              { name: 'ISO 9001:2015', issuer: 'Organisation Internationale', icon: (
                <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-brand-gold"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) },
              { name: 'Assurance RC Pro', issuer: 'AXA Cameroun', icon: (
                <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-brand-gold"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) },
              { name: 'Conformité Normes', issuer: 'Standards Camerounais', icon: (
                <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-brand-gold"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) },
            ].map((cert) => (
              <div key={cert.name} className="card text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300">
                    {cert.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-brand-gold mb-1">{cert.name}</h3>
                <p className="text-sm text-neutral-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="section bg-neutral-900/50">
        <div className="container-page px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div ref={yearsRef} className="text-center">
              <div className="text-5xl font-bold text-brand-gold mb-2">{yearsCount}+</div>
              <p className="text-sm text-neutral-300">{t('home.stats.years')}</p>
            </div>
            <div ref={clientsRef} className="text-center">
              <div className="text-5xl font-bold text-brand-gold mb-2">{clientsCount}+</div>
              <p className="text-sm text-neutral-300">{t('home.stats.clients')}</p>
            </div>
            <div ref={agentsRef} className="text-center">
              <div className="text-5xl font-bold text-brand-gold mb-2">{agentsCount}+</div>
              <p className="text-sm text-neutral-300">{t('home.stats.agents')}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-gold mb-2">24/7</div>
              <p className="text-sm text-neutral-300">{t('home.stats.availability')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="section">
        <div className="container-page px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-gold">{t('home.why_us.title')}</h2>
            <p className="text-neutral-300 mt-3 text-lg max-w-2xl mx-auto">{t('home.why_us.subtitle')}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: t('home.why_us.reason1.title'), 
                desc: t('home.why_us.reason1.desc'),
                icon: <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              { 
                title: t('home.why_us.reason2.title'), 
                desc: t('home.why_us.reason2.desc'),
                icon: <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              { 
                title: t('home.why_us.reason3.title'), 
                desc: t('home.why_us.reason3.desc'),
                icon: <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M17 20h5v-2a3 3 0 -5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              { 
                title: t('home.why_us.reason4.title'), 
                desc: t('home.why_us.reason4.desc'),
                icon: <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              { 
                title: t('home.why_us.reason5.title'), 
                desc: t('home.why_us.reason5.desc'),
                icon: <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              { 
                title: t('home.why_us.reason6.title'), 
                desc: t('home.why_us.reason6.desc'),
                icon: <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
            ].map((reason) => (
              <div key={reason.title} className="card group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="font-semibold group-hover:text-brand-gold transition-colors duration-300">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="section bg-neutral-900/50">
        <div className="container-page px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-gold">{t('home.testimonials.title')}</h2>
            <p className="text-neutral-300 mt-3 text-lg max-w-2xl mx-auto">{t('home.testimonials.subtitle')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="card group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-300">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand-gold">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-neutral-300 italic mb-6 text-sm leading-relaxed">
                    "{isEnglish ? testimonial.enText : testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-brand-gold transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-neutral-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/temoignages" className="btn-ghost px-8 py-3 border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold/50 transition-all duration-300">
              {t('home.testimonials.view_all')}
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="section">
        <div className="container-page px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-brand-gold">{t('home.articles.title')}</h2>
            <p className="text-neutral-300 mt-3 text-lg max-w-2xl mx-auto">{t('home.articles.subtitle')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="card group relative overflow-hidden">
                <div className="aspect-video overflow-hidden mb-4">
                  <img 
                    src={article.cover} 
                    alt={isEnglish ? article.enTitle : article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-gold mb-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {article.date}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                  {isEnglish ? article.enTitle : article.title}
                </h3>
                <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                  {isEnglish ? article.enExcerpt : article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Lire l'article</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-ghost px-8 py-3 border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold/50 transition-all duration-300">
              {t('home.articles.view_all')}
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="section">
        <div className="container-page px-4">
          <div className="banner p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl"></div>
            <div className="relative z-10 grid gap-6 sm:flex sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-semibold text-brand-gold">{t('home.banner.title')}</h3>
                <p className="text-neutral-300 mt-3 text-lg">{t('home.banner.lead')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto px-8 py-3 text-lg shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/30 transform hover:-translate-y-0.5 transition-all duration-300">
                  {t('home.cta.primary')}
                </Link>
                <a href="tel:+237655070707" className="btn-ghost w-full sm:w-auto px-8 py-3 text-lg border-brand-gold/30 hover:bg-brand-gold/10 hover:border-brand-gold/50 transition-all duration-300">
                  {t('home.cta.call')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="section">
        <div className="container-page px-4">
          <Newsletter />
        </div>
      </div>
    </>
  )
}
