import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { site } from '../config/site'
import { useI18n } from '../i18n/i18n.jsx'
import Seo from '../components/Seo'

export default function Contact() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', budget: '', urgency: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [hp, setHp] = useState('') // honeypot

  // Load reCAPTCHA v3 if a site key is configured
  useEffect(() => {
    const key = site.forms?.recaptchaSiteKey
    if (!key) return
    if (document.getElementById('recaptcha-v3')) return
    const s = document.createElement('script')
    s.src = `https://www.google.com/recaptcha/api.js?render=${key}`
    s.async = true
    s.defer = true
    s.id = 'recaptcha-v3'
    document.head.appendChild(s)
  }, [])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = t('contact.validation.name')
    if (!form.email.trim()) err.email = t('contact.validation.email.required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = t('contact.validation.email.invalid')
    if (!form.phone.trim()) err.phone = t('contact.validation.phone')
    if (!form.service.trim()) err.service = t('contact.validation.service')
    if (!form.message.trim() || form.message.trim().length < 10) err.message = t('contact.validation.message')
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const formspreeEndpoint = useMemo(() => {
    if (!site.forms?.formspreeId || site.forms.formspreeId === 'VOTRE_ID_FORMSPREE') return null
    return `https://formspree.io/f/${site.forms.formspreeId}`
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    if (hp) {
      // Honeypot filled -> likely bot
      return
    }
    setLoading(true)
    setStatus(null)
    try {
      if (!formspreeEndpoint) throw new Error('Formspree non configuré')
      // Get reCAPTCHA token if available
      let recaptchaToken = ''
      const siteKey = site.forms?.recaptchaSiteKey
      if (siteKey && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(siteKey, { action: 'submit' })
        } catch {}
      }
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          nom: form.name,
          entreprise: form.company,
          email: form.email,
          telephone: form.phone,
          service: form.service,
          message: form.message,
          _gotcha: hp,
          recaptchaToken,
        }),
      })
      if (!res.ok) throw new Error('Échec de l’envoi')
      setStatus('success')
      // Fire conversion event if analytics enabled
      try {
        if (site.analytics?.enabled) {
          if (window.gtag) {
            window.gtag('event', 'lead_submitted', { method: 'contact_form' })
          } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
            window.dataLayer.push({ event: 'lead_submitted', method: 'contact_form' })
          }
        }
      } catch {}
      setForm({ name: '', company: '', email: '', phone: '', service: '', budget: '', urgency: '', message: '' })
      // Redirect to thank-you page
      navigate('/merci')
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section">
      <div className="container-page max-w-2xl">
        <Seo title={t('seo.contact.title')} description={t('seo.contact.desc')} />
        <h1 className="h1">{t('contact.title')}</h1>
        <p className="lead mt-3">{t('contact.lead')}</p>
        {!formspreeEndpoint && (
          <p className="text-xs text-amber-400 mt-2">{t('contact.notice.config')}</p>
        )}

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          {/* Honeypot field (hidden for humans) */}
          <input type="text" name="company_website" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" autoComplete="off" tabIndex="-1" aria-hidden="true" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">{t('contact.field.name')}</label>
              <input name="name" value={form.name} onChange={onChange} className={`w-full rounded-md bg-neutral-900 border px-3 py-2 ${errors.name ? 'border-red-500' : 'border-neutral-700'}`} required />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">{t('contact.field.company')}</label>
              <input name="company" value={form.company} onChange={onChange} className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">{t('contact.field.email')}</label>
              <input type="email" name="email" value={form.email} onChange={onChange} className={`w-full rounded-md bg-neutral-900 border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-neutral-700'}`} required />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">{t('contact.field.phone')}</label>
              <input name="phone" value={form.phone} onChange={onChange} className={`w-full rounded-md bg-neutral-900 border px-3 py-2 ${errors.phone ? 'border-red-500' : 'border-neutral-700'}`} required />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">{t('contact.field.service')}</label>
            <select name="service" value={form.service} onChange={onChange} className={`w-full rounded-md bg-neutral-900 border px-3 py-2 ${errors.service ? 'border-red-500' : 'border-neutral-700'}`} required>
              <option value="">{t('select.choose')}</option>
              <option>{t('service.option.guard')}</option>
              <option>{t('service.option.patrol')}</option>
              <option>{t('service.option.event')}</option>
              <option>{t('service.option.remote')}</option>
              <option>{t('service.option.cctv')}</option>
              <option>{t('service.option.audit')}</option>
            </select>
            {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">{t('contact.field.message')}</label>
            <textarea name="message" rows="5" value={form.message} onChange={onChange} className={`w-full rounded-md bg-neutral-900 border px-3 py-2 ${errors.message ? 'border-red-500' : 'border-neutral-700'}`} required />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading || !formspreeEndpoint} className="btn-primary disabled:opacity-60">
              {loading ? 'Envoi…' : t('contact.submit')}
            </button>
            <a
              className="btn-ghost"
              href={`https://wa.me/${site.phoneLink}?text=${encodeURIComponent('Bonjour Kelev Security, je souhaite un devis.')}`}
              target="_blank"
              rel="noreferrer"
            >
              {t('contact.whatsapp')}
            </a>
          </div>
          {status === 'success' && (
            <p className="text-sm text-emerald-400">{t('contact.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">{t('contact.error')}</p>
          )}
        </form>
        <div className="mt-8 text-sm text-neutral-300">
          <p>{/* phone/email labels left as-is to avoid overcomplicating; could be i18n if needed */}
            <span>Tel:</span> <a className="hover:text-brand-gold" href={`tel:${site.phoneLink}`}>{site.phone}</a></p>
          <p><span>Email:</span> <a className="hover:text-brand-gold" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
    </section>
  )
}
