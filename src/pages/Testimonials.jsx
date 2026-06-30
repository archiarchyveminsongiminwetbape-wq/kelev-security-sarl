import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'
import { testimonials } from '../content/testimonials'

export default function Testimonials() {
  const { t } = useI18n()
  const isEnglish = window.location.pathname.startsWith('/en')
  
  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <Seo title={t('seo.testimonials.title')} description={t('seo.testimonials.desc')} />
        <h1 className="h1 mb-2">{t('testimonials.title')}</h1>
        <p className="lead mb-8">{t('testimonials.lead')}</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand-gold">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 italic mb-4">
                "{isEnglish ? testimonial.enText : testimonial.text}"
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-neutral-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('testimonials.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('testimonials.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('testimonials.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}