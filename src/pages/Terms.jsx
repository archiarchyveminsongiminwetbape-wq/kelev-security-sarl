import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Terms() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <Seo title={t('seo.terms.title')} description={t('seo.terms.desc')} />
        <h1 className="h1 mb-4">{t('terms.title')}</h1>
        <p className="text-sm text-neutral-400 mb-8">{t('terms.last_updated')}</p>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.intro.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.intro.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.services.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.services.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.responsibilities.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.responsibilities.content')}</p>
          <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
            <li>{t('terms.responsibilities.item1')}</li>
            <li>{t('terms.responsibilities.item2')}</li>
            <li>{t('terms.responsibilities.item3')}</li>
            <li>{t('terms.responsibilities.item4')}</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.payments.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.payments.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.liability.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.liability.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.termination.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.termination.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.intellectual.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.intellectual.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.governing.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.governing.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('terms.contact.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('terms.contact.content')}</p>
          <p className="text-neutral-300 mb-4">
            <strong>Email:</strong> {t('terms.contact.email')}<br/>
            <strong>Téléphone:</strong> {t('terms.contact.phone')}<br/>
            <strong>Adresse:</strong> {t('terms.contact.address')}
          </p>
        </div>
      </div>
    </section>
  )
}