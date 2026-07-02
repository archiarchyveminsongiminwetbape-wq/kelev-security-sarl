import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Partners() {
  const { t } = useI18n()
  const certifications = [
    {
      name: t('partners.cert1.name'),
      issuer: t('partners.cert1.issuer'),
      description: t('partners.cert1.description'),
      year: t('partners.cert1.year')
    },
    {
      name: t('partners.cert2.name'),
      issuer: t('partners.cert2.issuer'),
      description: t('partners.cert2.description'),
      year: t('partners.cert2.year')
    },
    {
      name: t('partners.cert3.name'),
      issuer: t('partners.cert3.issuer'),
      description: t('partners.cert3.description'),
      year: t('partners.cert3.year')
    }
  ]
  
  const partners = [
    {
      name: t('partners.partner1.name'),
      type: t('partners.partner1.type'),
      description: t('partners.partner1.description')
    },
    {
      name: t('partners.partner2.name'),
      type: t('partners.partner2.type'),
      description: t('partners.partner2.description')
    },
    {
      name: t('partners.partner3.name'),
      type: t('partners.partner3.type'),
      description: t('partners.partner3.description')
    },
    {
      name: t('partners.partner4.name'),
      type: t('partners.partner4.type'),
      description: t('partners.partner4.description')
    }
  ]
  
  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <Seo title={t('seo.partners.title')} description={t('seo.partners.desc')} keywords={t('seo.partners.keywords')} />
        <h1 className="h1 mb-2">{t('partners.title')}</h1>
        <p className="lead mb-8">{t('partners.lead')}</p>
        
        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('partners.certifications.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-neutral-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 mb-2">{cert.description}</p>
                <p className="text-xs text-brand-gold">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('partners.partners_list.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((partner, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-brand-gold">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold">{partner.name}</h3>
                    <p className="text-sm text-neutral-400">{partner.type}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-300">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Partner */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('partners.why_partner.title')}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold mb-2">{t('partners.why_partner.reason1.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.why_partner.reason1.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('partners.why_partner.reason2.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.why_partner.reason2.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('partners.why_partner.reason3.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.why_partner.reason3.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('partners.why_partner.reason4.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.why_partner.reason4.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('partners.why_partner.reason5.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.why_partner.reason5.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('partners.why_partner.reason6.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.why_partner.reason6.desc')}</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('partners.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('partners.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('partners.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}