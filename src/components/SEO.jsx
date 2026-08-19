import { useEffect } from 'react'

const SITE_TITLE = 'Archstone Ventures'

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_TITLE}` : SITE_TITLE

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
