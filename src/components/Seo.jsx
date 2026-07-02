import { useEffect } from 'react'

export default function Seo({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (name, content) => {
      if (!content) return
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setProperty = (property, content) => {
      if (!content) return
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:type', 'website')
    setProperty('og:url', window.location.href)
    setProperty('og:site_name', 'Kelev Security SARL')
    setProperty('og:locale', 'fr_FR')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
  }, [title, description, keywords])

  return null
}
