import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Careers() {
  const { t } = useI18n()
  const positions = [
    {
      title: t('careers.position1.title'),
      location: t('careers.position1.location'),
      type: t('careers.position1.type'),
      description: t('careers.position1.description'),
      requirements: [
        t('careers.position1.req1'),
        t('careers.position1.req2'),
        t('careers.position1.req3'),
        t('careers.position1.req4')
      ]
    },
    {
      title: t('careers.position2.title'),
      location: t('careers.position2.location'),
      type: t('careers.position2.type'),
      description: t('careers.position2.description'),
      requirements: [
        t('careers.position2.req1'),
        t('careers.position2.req2'),
        t('careers.position2.req3'),
        t('careers.position2.req4')
      ]
    },
    {
      title: t('careers.position3.title'),
      location: t('careers.position3.location'),
      type: t('careers.position3.type'),
      description: t('careers.position3.description'),
      requirements: [
        t('careers.position3.req1'),
        t('careers.position3.req2'),
        t('careers.position3.req3'),
        t('careers.position3.req4')
      ]
    }
  ]
  
  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <Seo title={t('seo.careers.title')} description={t('seo.careers.desc')} keywords={t('seo.careers.keywords')} />
        <h1 className="h1 mb-2">{t('careers.title')}</h1>
        <p className="lead mb-8">{t('careers.lead')}</p>
        
        {/* Why Join Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-brand-gold mb-4">{t('careers.why.title')}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold mb-2">{t('careers.why.benefit1.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.why.benefit1.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('careers.why.benefit2.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.why.benefit2.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('careers.why.benefit3.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.why.benefit3.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('careers.why.benefit4.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.why.benefit4.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('careers.why.benefit5.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.why.benefit5.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('careers.why.benefit6.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.why.benefit6.desc')}</p>
            </div>
          </div>
        </div>
        
        {/* Open Positions */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-brand-gold mb-4">{t('careers.positions.title')}</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex gap-4 text-sm text-neutral-400 mt-1">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <a href="/contact" className="btn-primary mt-4 sm:mt-0 w-full sm:w-auto text-center">
                    {t('careers.apply')}
                  </a>
                </div>
                <p className="text-neutral-300 mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">{t('careers.requirements')}</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Application Process */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-brand-gold mb-4">{t('careers.process.title')}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">{t('careers.process.step1.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.process.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">{t('careers.process.step2.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.process.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">{t('careers.process.step3.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.process.step3.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold text-black flex items-center justify-center mx-auto mb-3 font-bold text-xl">4</div>
              <h3 className="font-semibold mb-2">{t('careers.process.step4.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.process.step4.desc')}</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('careers.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('careers.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('careers.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}