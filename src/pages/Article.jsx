import { Link, useParams } from 'react-router-dom'
import { articles } from '../content/articles'
import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Article() {
  const { t, lang } = useI18n()
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <section className="section">
        <div className="container-page">
          <p className="text-sm text-neutral-400">{t('article.notfound')}</p>
          <Link to="/blog" className="btn-ghost mt-4 inline-flex">{t('article.back')}</Link>
        </div>
      </section>
    )
  }

  const displayTitle = lang === 'en' ? (article.enTitle || article.title) : article.title
  const displayExcerpt = lang === 'en' ? (article.enExcerpt || article.excerpt) : article.excerpt
  const displayContent = lang === 'en' ? (article.enContent || article.content) : article.content

  return (
    <section className="section">
      <div className="container-page max-w-3xl">
        <Seo title={`${displayTitle} – Kelev Security SARL`} description={displayExcerpt || displayContent?.slice(0, 140)} />
        <Link to="/blog" className="text-sm text-neutral-400 hover:text-brand-gold">{t('article.back')}</Link>
        <h1 className="h1 mt-4">{displayTitle}</h1>
        <p className="text-xs text-neutral-400 mt-2">{new Date(article.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR')}</p>
        {article.cover && (
          <img src={article.cover} alt="" className="mt-6 rounded-lg border border-neutral-800" />
        )}
        <div className="prose prose-invert mt-6 max-w-none">
          {displayContent.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
