import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Team() {
  const { t } = useI18n()
  const teamMembers = [
    {
      name: t('team.member1.name'),
      position: t('team.member1.position'),
      bio: t('team.member1.bio'),
      experience: t('team.member1.experience'),
      certifications: [t('team.member1.cert1'), t('team.member1.cert2')]
    },
    {
      name: t('team.member2.name'),
      position: t('team.member2.position'),
      bio: t('team.member2.bio'),
      experience: t('team.member2.experience'),
      certifications: [t('team.member2.cert1'), t('team.member2.cert2')]
    },
    {
      name: t('team.member3.name'),
      position: t('team.member3.position'),
      bio: t('team.member3.bio'),
      experience: t('team.member3.experience'),
      certifications: [t('team.member3.cert1'), t('team.member3.cert2')]
    },
    {
      name: t('team.member4.name'),
      position: t('team.member4.position'),
      bio: t('team.member4.bio'),
      experience: t('team.member4.experience'),
      certifications: [t('team.member4.cert1'), t('team.member4.cert2')]
    }
  ]
  
  return (
    <section className="section">
      <div className="container-page max-w-4xl">
        <Seo title={t('seo.team.title')} description={t('seo.team.desc')} keywords={t('seo.team.keywords')} />
        <h1 className="h1 mb-2">{t('team.title')}</h1>
        <p className="lead mb-8">{t('team.lead')}</p>
        
        {/* Leadership */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('team.leadership.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-black font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-brand-gold">{member.position}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-300">
                      {cert}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-3">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Personnel */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('team.key_personnel.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.slice(2).map((member, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-black font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-brand-gold">{member.position}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-300 mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-300">
                      {cert}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-3">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Stats */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('team.stats.title')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">50+</div>
              <p className="text-sm text-neutral-300">{t('team.stats.agents')}</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">100%</div>
              <p className="text-sm text-neutral-300">{t('team.stats.certified')}</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
              <p className="text-sm text-neutral-300">{t('team.stats.availability')}</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">5+</div>
              <p className="text-sm text-neutral-300">{t('team.stats.languages')}</p>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-brand-gold mb-6">{t('team.values.title')}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold mb-2">{t('team.values.value1.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.values.value1.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('team.values.value2.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.values.value2.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('team.values.value3.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.values.value3.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('team.values.value4.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.values.value4.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('team.values.value5.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.values.value5.desc')}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">{t('team.values.value6.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.values.value6.desc')}</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('team.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('team.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('team.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}