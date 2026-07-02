import { useState } from 'react'
import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'
import { faqData } from '../content/faq'

export default function FAQ() {
  const { t } = useI18n()
  const [openItem, setOpenItem] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const isEnglish = window.location.pathname.startsWith('/en')
  
  const categories = [
    { id: 'all', label: t('faq.category.all'), enLabel: 'All' },
    { id: 'general', label: t('faq.category.general'), enLabel: 'General' },
    { id: 'pricing', label: t('faq.category.pricing'), enLabel: 'Pricing' },
    { id: 'quality', label: t('faq.category.quality'), enLabel: 'Quality' },
    { id: 'emergency', label: t('faq.category.emergency'), enLabel: 'Emergency' },
    { id: 'technology', label: t('faq.category.technology'), enLabel: 'Technology' },
    { id: 'events', label: t('faq.category.events'), enLabel: 'Events' },
    { id: 'legal', label: t('faq.category.legal'), enLabel: 'Legal' }
  ]
  
  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory)
  
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }
  
  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <Seo title={t('seo.faq.title')} description={t('seo.faq.desc')} keywords={t('seo.faq.keywords')} />
        <h1 className="h1 mb-2">{t('faq.title')}</h1>
        <p className="lead mb-8">{t('faq.lead')}</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-brand-gold text-black'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {isEnglish ? cat.enLabel : cat.label}
            </button>
          ))}
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="card">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-semibold pr-4">
                  {isEnglish ? faq.enQuestion : faq.question}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`h-5 w-5 text-brand-gold transition-transform ${
                    openItem === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openItem === faq.id && (
                <div className="mt-4 pt-4 border-t border-neutral-800">
                  <p className="text-neutral-300">
                    {isEnglish ? faq.enAnswer : faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-10 banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('faq.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('faq.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('faq.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}