import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Services() {
  const { t } = useI18n()
  const services = [
    { title: t('services.guard.title'), icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand-gold"><path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.5"/></svg>
    ), items: [t('services.guard.item1'), t('services.guard.item2'), t('services.guard.item3')] },
    { title: t('services.patrol.title'), icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand-gold"><path d="M4 13l4 4 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ), items: [t('services.patrol.item1'), t('services.patrol.item2'), t('services.patrol.item3')] },
    { title: t('services.event.title'), icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand-gold"><path d="M3 7h18M5 7l1 12h12l1-12" stroke="currentColor" strokeWidth="1.5"/></svg>
    ), items: [t('services.event.item1'), t('services.event.item2'), t('services.event.item3')] },
    { title: t('services.remote.title'), icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand-gold"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>
    ), items: [t('services.remote.item1'), t('services.remote.item2'), t('services.remote.item3')] },
    { title: t('services.cctv.title'), icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand-gold"><path d="M3 10l8-5 10 6-8 5-10-6zM13 11v8" stroke="currentColor" strokeWidth="1.5"/></svg>
    ), items: [t('services.cctv.item1'), t('services.cctv.item2'), t('services.cctv.item3')] },
    { title: t('services.audit.title'), icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-brand-gold"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.5"/></svg>
    ), items: [t('services.audit.item1'), t('services.audit.item2'), t('services.audit.item3')] },
  ]

  return (
    <section className="section">
      <div className="container-page px-4">
        <Seo title={t('seo.services.title')} description={t('seo.services.desc')} keywords={t('seo.services.keywords')} />
        <h1 className="h1 mb-2">{t('services.title')}</h1>
        <p className="lead mb-8">{t('services.lead')}</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card group">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-lg font-semibold group-hover:text-brand-gold">{s.title}</h3>
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-neutral-300">
                {s.items.map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold"></span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('services.banner.title')}</h3>
              <p className="text-sm text-neutral-300">{t('services.banner.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('services.cta')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
