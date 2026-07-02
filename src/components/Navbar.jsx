import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/i18n.jsx'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-brand-gold hover:bg-brand-gold/10 ${
    isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200'
  }`

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-2xl shadow-black/20">
      <div className="container-page relative flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Kelev Security SARL" className="h-9 w-auto transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden sm:block font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-200">Kelev Security SARL</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>{t('nav.home')}</NavLink>
          <NavLink to="/services" className={navLinkClass}>{t('nav.services')}</NavLink>
          <NavLink to="/a-propos" className={navLinkClass}>{t('nav.about')}</NavLink>
          <NavLink to="/temoignages" className={navLinkClass}>{t('nav.testimonials')}</NavLink>
          <NavLink to="/faq" className={navLinkClass}>{t('nav.faq')}</NavLink>
          <NavLink to="/blog" className={navLinkClass}>{t('nav.blog')}</NavLink>
          <NavLink to="/contact" className={navLinkClass}>{t('nav.contact')}</NavLink>
          <Link to="/contact" className="btn-primary ml-2 hidden sm:inline-flex">{t('nav.quote')}</Link>
          <div className="ml-2">
            <select
              aria-label="Language"
              className="bg-neutral-900/80 border border-neutral-700/50 text-xs rounded-md px-2 py-1 backdrop-blur-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Menu"
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/10 text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="sm:hidden absolute right-4 top-16 w-56 rounded-xl border border-neutral-800/50 bg-neutral-950/95 backdrop-blur-xl shadow-2xl animate-scale-in">
            <div className="p-2 grid">
              <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` } end>{t('nav.home')}</NavLink>
              <NavLink to="/services" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` }>{t('nav.services')}</NavLink>
              <NavLink to="/a-propos" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` }>{t('nav.about')}</NavLink>
              <NavLink to="/temoignages" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` }>{t('nav.testimonials')}</NavLink>
              <NavLink to="/faq" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` }>{t('nav.faq')}</NavLink>
              <NavLink to="/blog" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` }>{t('nav.blog')}</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm transition-all duration-300 ${isActive ? 'text-brand-gold bg-brand-gold/10' : 'text-neutral-200 hover:text-brand-gold hover:bg-brand-gold/10'}` }>{t('nav.contact')}</NavLink>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">{t('nav.quote')}</Link>
              <div className="mt-2">
                <label className="sr-only" htmlFor="lang-mobile">Language</label>
                <select
                  id="lang-mobile"
                  aria-label="Language"
                  className="w-full bg-neutral-900/80 border border-neutral-700/50 text-xs rounded-md px-2 py-1 backdrop-blur-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-300"
                  value={lang}
                  onChange={(e) => { setLang(e.target.value); setOpen(false) }}
                >
                  <option value="fr">FR</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
