import { useState } from 'react'
import { useI18n } from '../i18n/i18n.jsx'

export default function Newsletter() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      setLoading(false)
      setEmail('')
    }, 1000)
  }
  
  if (subscribed) {
    return (
      <div className="card bg-green-900/20 border-green-800">
        <div className="text-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12 text-green-500 mx-auto mb-3">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-lg font-semibold text-green-400">{t('newsletter.success.title')}</h3>
          <p className="text-sm text-neutral-300 mt-2">{t('newsletter.success.message')}</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">{t('newsletter.title')}</h3>
      <p className="text-sm text-neutral-300 mb-4">{t('newsletter.description')}</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder')}
          required
          className="flex-1 px-4 py-2 rounded-md bg-neutral-900 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-brand-gold"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn-primary whitespace-nowrap"
        >
          {loading ? t('newsletter.loading') : t('newsletter.button')}
        </button>
      </form>
      <p className="text-xs text-neutral-500 mt-3">{t('newsletter.privacy')}</p>
    </div>
  )
}