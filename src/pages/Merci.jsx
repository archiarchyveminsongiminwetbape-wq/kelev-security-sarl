import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Merci() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className="container-page text-center max-w-2xl">
        <Seo title="Merci – Kelev Security SARL" description="Votre demande a bien été envoyée. Nous vous recontactons rapidement." />
        <h1 className="h1">{t('merci.title')}</h1>
        <p className="lead mt-3">{t('merci.lead')}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary">{t('common.back_home')}</Link>
          <Link to="/services" className="btn-ghost">{t('merci.view_services')}</Link>
        </div>
      </div>
    </section>
  )
}
