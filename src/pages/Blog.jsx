import { useState } from 'react'
import { Link } from 'react-router-dom'
import { articles } from '../content/articles'
import { videos } from '../content/videos'
import { photos } from '../content/photos'
import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Blog() {
  const { t, lang } = useI18n()
  const tabs = [
    { id: 'articles', label: `${t('blog.tabs.articles')} (${articles.length})` },
    { id: 'videos', label: `${t('blog.tabs.videos')} (${videos.length})` },
    { id: 'photos', label: `${t('blog.tabs.photos')} (${photos.length})` },
  ]
  const [active, setActive] = useState('articles')

  return (
    <section className="section">
      <div className="container-page">
        <Seo title={t('seo.blog.title')} description={t('seo.blog.desc')} keywords={t('seo.blog.keywords')} />
        <h1 className="h1 mb-6">{t('blog.title')}</h1>

        <div className="flex items-center gap-2 mb-8">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-md border text-sm transition ${
                active === t.id
                  ? 'border-brand-gold text-brand-gold bg-neutral-900/50'
                  : 'border-neutral-800 text-neutral-300 hover:bg-neutral-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {active === 'articles' && (
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((a) => {
              const title = lang === 'en' ? (a.enTitle || a.title) : a.title
              const excerpt = lang === 'en' ? (a.enExcerpt || a.excerpt) : a.excerpt
              return (
              <article key={a.slug} className="card">
                {a.cover && (
                  <img src={a.cover} alt={title || ''} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-neutral-800" />
                )}
                <h3 className="text-lg font-semibold mt-4">{title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{new Date(a.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR')}</p>
                <p className="text-sm text-neutral-300 mt-2">{excerpt}</p>
                <div className="mt-4">
                  <Link to={`/blog/${a.slug}`} className="btn-ghost">{t('blog.read')}</Link>
                </div>
              </article>
            )})}
          </div>
        )}

        {active === 'videos' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <a key={v.id} href={v.url} target="_blank" rel="noreferrer" className="card group">
                <div className="relative aspect-video bg-neutral-900 rounded-md border border-neutral-800 overflow-hidden">
                  <img 
                    src={v.thumbnail} 
                    alt={v.title || ''} 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${v.url.split('/').pop()}/mqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm font-semibold mt-3 group-hover:text-brand-gold">{v.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{new Date(v.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR')}</p>
              </a>
            ))}
          </div>
        )}

        {active === 'photos' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.id} className="overflow-hidden rounded-md border border-neutral-800">
                <img src={p.src} alt={p.title || ''} loading="lazy" decoding="async" className="w-full h-72 object-cover hover:scale-[1.02] transition" />
                <figcaption className="p-2 text-xs text-neutral-400">{p.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
