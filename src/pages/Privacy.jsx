import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Privacy() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <Seo title={t('seo.privacy.title')} description={t('seo.privacy.desc')} keywords={t('seo.privacy.keywords')} />
        <h1 className="h1 mb-4">{t('privacy.title')}</h1>
        <p className="text-sm text-neutral-400 mb-8">{t('privacy.last_updated')}</p>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.intro.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.intro.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.data_collection.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.data_collection.content')}</p>
          <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
            <li>{t('privacy.data_collection.item1')}</li>
            <li>{t('privacy.data_collection.item2')}</li>
            <li>{t('privacy.data_collection.item3')}</li>
            <li>{t('privacy.data_collection.item4')}</li>
            <li>{t('privacy.data_collection.item5')}</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.data_usage.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.data_usage.content')}</p>
          <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
            <li>{t('privacy.data_usage.item1')}</li>
            <li>{t('privacy.data_usage.item2')}</li>
            <li>{t('privacy.data_usage.item3')}</li>
            <li>{t('privacy.data_usage.item4')}</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.data_protection.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.data_protection.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.data_sharing.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.data_sharing.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.user_rights.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.user_rights.content')}</p>
          <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
            <li>{t('privacy.user_rights.item1')}</li>
            <li>{t('privacy.user_rights.item2')}</li>
            <li>{t('privacy.user_rights.item3')}</li>
            <li>{t('privacy.user_rights.item4')}</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.cookies.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.cookies.content')}</p>
          
          <h2 className="text-xl font-semibold text-brand-gold mt-8 mb-4">{t('privacy.contact.title')}</h2>
          <p className="text-neutral-300 mb-4">{t('privacy.contact.content')}</p>
          <p className="text-neutral-300 mb-4">
            <strong>Email:</strong> {t('privacy.contact.email')}<br/>
            <strong>Téléphone:</strong> {t('privacy.contact.phone')}<br/>
            <strong>Adresse:</strong> {t('privacy.contact.address')}
          </p>
        </div>
      </div>
    </section>
  )
}