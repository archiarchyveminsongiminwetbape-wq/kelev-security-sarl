import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function About() {
  const { t } = useI18n()
  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <Seo title={t('seo.about.title')} description={t('seo.about.desc')} />
        <h1 className="h1">{t('about.title')}</h1>
        <p className="lead mt-4">{t('about.lead')}</p>
        
        {/* History Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-brand-gold">{t('about.history.title')}</h2>
          <p className="text-neutral-300 mt-3">{t('about.history.content')}</p>
        </div>

        {/* Mission Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-brand-gold">{t('about.mission.title')}</h2>
          <p className="text-neutral-300 mt-3">{t('about.mission.content')}</p>
        </div>

        {/* Vision Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-brand-gold">{t('about.vision.title')}</h2>
          <p className="text-neutral-300 mt-3">{t('about.vision.content')}</p>
        </div>

        {/* Key Features Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-800 p-5 bg-neutral-900/30">
            <h3 className="font-semibold">{t('about.certification')}</h3>
            <p className="text-sm text-neutral-300 mt-1">{t('about.certification_desc')}</p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-5 bg-neutral-900/30">
            <h3 className="font-semibold">{t('about.area')}</h3>
            <p className="text-sm text-neutral-300 mt-1">{t('about.area_desc')}</p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-5 bg-neutral-900/30">
            <h3 className="font-semibold">{t('about.values')}</h3>
            <p className="text-sm text-neutral-300 mt-1">{t('about.values_desc')}</p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-5 bg-neutral-900/30">
            <h3 className="font-semibold">{t('about.team')}</h3>
            <p className="text-sm text-neutral-300 mt-1">{t('about.team_desc')}</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-gold">{t('about.stats.years')}</div>
            <div className="text-sm text-neutral-300 mt-1">{t('about.stats.years_label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-gold">{t('about.stats.clients')}</div>
            <div className="text-sm text-neutral-300 mt-1">{t('about.stats.clients_label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-gold">{t('about.stats.agents')}</div>
            <div className="text-sm text-neutral-300 mt-1">{t('about.stats.agents_label')}</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('about.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('about.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('about.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
