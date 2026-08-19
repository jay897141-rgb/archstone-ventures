import { useEffect, useRef } from 'react'

// Attaches an IntersectionObserver that adds `.is-visible` once, the first
// time an element enters the viewport. Pairs with the `.reveal` class in
// global.css. Deliberately one-shot and CSS-driven — no scroll-jacking,
// no parallax, respects prefers-reduced-motion via CSS.
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}
