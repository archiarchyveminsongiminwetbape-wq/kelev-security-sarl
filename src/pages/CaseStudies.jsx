import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function CaseStudies() {
  const { t } = useI18n()
  const caseStudies = [
    {
      title: t('case_studies.case1.title'),
      client: t('case_studies.case1.client'),
      industry: t('case_studies.case1.industry'),
      duration: t('case_studies.case1.duration'),
      challenge: t('case_studies.case1.challenge'),
      solution: t('case_studies.case1.solution'),
      results: t('case_studies.case1.results'),
      category: 'corporate'
    },
    {
      title: t('case_studies.case2.title'),
      client: t('case_studies.case2.client'),
      industry: t('case_studies.case2.industry'),
      duration: t('case_studies.case2.duration'),
      challenge: t('case_studies.case2.challenge'),
      solution: t('case_studies.case2.solution'),
      results: t('case_studies.case2.results'),
      category: 'event'
    },
    {
      title: t('case_studies.case3.title'),
      client: t('case_studies.case3.client'),
      industry: t('case_studies.case3.industry'),
      duration: t('case_studies.case3.duration'),
      challenge: t('case_studies.case3.challenge'),
      solution: t('case_studies.case3.solution'),
      results: t('case_studies.case3.results'),
      category: 'industrial'
    }
  ]
  
  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <Seo title={t('seo.case_studies.title')} description={t('seo.case_studies.desc')} />
        <h1 className="h1 mb-2">{t('case_studies.title')}</h1>
        <p className="lead mb-8">{t('case_studies.lead')}</p>
        
        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-brand-gold">{study.title}</h2>
                  <div className="flex gap-4 text-sm text-neutral-400 mt-1">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.duration}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-brand-gold text-black mt-2 sm:mt-0 w-fit">
                  {study.category === 'corporate' ? t('case_studies.category.corporate') : 
                   study.category === 'event' ? t('case_studies.category.event') : 
                   t('case_studies.category.industrial')}
                </span>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <h3 className="font-semibold mb-2">{t('case_studies.challenge')}</h3>
                  <p className="text-sm text-neutral-300">{study.challenge}</p>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-semibold mb-2">{t('case_studies.solution')}</h3>
                  <p className="text-sm text-neutral-300">{study.solution}</p>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-semibold mb-2">{t('case_studies.results')}</h3>
                  <p className="text-sm text-neutral-300">{study.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('case_studies.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('case_studies.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('case_studies.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}