import { useEffect } from 'react'

export default function Seo({ title, description }) {
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
    setProperty('og:title', title)
    setProperty('og:description', description)
  }, [title, description])

  return null
}
