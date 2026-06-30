import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n.jsx'
import Seo from '../components/Seo'

export default function NotFound() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className="container-page text-center">
        <Seo title={t('seo.notfound.title')} description={t('seo.notfound.desc')} />
        <h1 className="h1">{t('notfound.title')}</h1>
        <p className="lead mt-2">{t('notfound.lead')}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary">{t('common.back_home')}</Link>
          <Link to="/contact" className="btn-ghost">{t('nav.contact')}</Link>
        </div>
      </div>
    </section>
  )
}
