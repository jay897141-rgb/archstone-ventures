import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNav, siteConfig } from '../data/siteConfig'
import { brandConfig } from '../data/brandConfig'
import './header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${isHome ? 'site-header--home' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__row">
        <Link to="/" className="site-header__mark" onClick={() => setOpen(false)}>
          {brandConfig.hasLogo && brandConfig.icon.dark ? (
            <img
              src={brandConfig.icon.dark}
              alt=""
              className="site-header__icon-img"
            />
          ) : null}
          <span className="site-header__wordmark">
            <span className="site-header__mark-main">ARCHSTONE VENTURES</span>
            <span className="site-header__mark-sub">A VISION FOR YOUR LIFE</span>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-header__link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={siteConfig.clientLoginUrl} className="site-header__login">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.25" /><path d="M5.5 20c.7-3.1 2.9-4.75 6.5-4.75s5.8 1.65 6.5 4.75" /></svg>
            <span>Client Login</span>
          </a>
        </div>

        <button
          className="site-header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-nav__list" aria-label="Mobile">
          {primaryNav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="mobile-nav__link"
              style={{ transitionDelay: `${i * 35}ms` }}
            >
              <span className="mobile-nav__index">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>Start a Project</Link>
          <a href={siteConfig.clientLoginUrl} className="mobile-nav__login">Client Login</a>
        </div>
      </div>
    </header>
  )
}
