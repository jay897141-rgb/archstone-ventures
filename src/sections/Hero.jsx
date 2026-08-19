import { Link } from 'react-router-dom'
import './hero.css'

const HERO_IMAGE = `${import.meta.env.BASE_URL}assets/hero/home-hero-premium.png`

const heroStats = [
  {
    label: 'Property',
    detail: 'One trusted journey',
    icon: 'property',
  },
  {
    label: 'Architecture',
    detail: 'One trusted journey',
    icon: 'architecture',
  },
  {
    label: 'Construction',
    detail: 'One trusted journey',
    icon: 'construction',
  },
  {
    label: 'One Team',
    detail: 'One line of accountability',
    icon: 'layers',
  },
]

function StatIcon({ type }) {
  if (type === 'property') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-5h6v5M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    )
  }

  if (type === 'architecture') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16M6 20V8h12v12M4 8h16M8 8V5h8v3M9 12h2M13 12h2M9 16h2M13 16h2" />
      </svg>
    )
  }

  if (type === 'construction') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 20 7-7M13 4l7 7M7 7l10 10M5 5l2-2 14 14-2 2L5 5Z" />
      </svg>
    )
  }

  if (type === 'layers') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4-8 4-8-4 8-4Z" />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
      </svg>
    )
  }

  return null
}

export default function Hero() {
  return (
    <div className="hero-shell">

      {/* ==============================
          MAIN HOME HERO
      ============================== */}
      <section className="hero">

        {/* Background image */}
        <div className="hero__media">
          <img
            src={HERO_IMAGE}
            alt="Luxury contemporary residence by Archstone Ventures"
            className="hero__poster"
            fetchPriority="high"
          />

          <div
            className="hero__scrim"
            aria-hidden="true"
          />
        </div>

        {/* Hero content */}
        <div className="container hero__content">

          <p className="eyebrow hero__eyebrow">
            <span>Building spaces. Creating value.</span>
            <i aria-hidden="true" />
          </p>

          <h1 className="hero__headline">
            <span>We don&apos;t just</span>
            <span>build spaces.</span>
            <span>
              We build <em>value.</em>
            </span>
          </h1>

          <p className="hero__sub">
            Property. Architecture. Construction. One team, one line of
            accountability, from first site visit to final handover.
          </p>

          <div
            className="hero__divider"
            aria-hidden="true"
          />

          <div className="hero__actions">

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Start Your Project
              <span
                className="btn-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              to="/projects"
              className="btn btn-ghost"
            >
              Explore Our Work
            </Link>

          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="hero__explore"
          aria-hidden="true"
        >
          <span className="hero__mouse">
            <span>↓</span>
          </span>

          <span className="hero__explore-label">
            Scroll to explore
          </span>

          <span className="hero__explore-line" />
        </div>

      </section>

      {/* ==============================
          SERVICES / TRUST STRIP
      ============================== */}
      <section
        className="hero__stats"
        aria-label="Archstone Ventures services"
      >

        {heroStats.map((stat) => (
          <article
            className="hero__stat"
            key={stat.label}
          >

            <div className="hero__stat-icon">
              <StatIcon type={stat.icon} />
            </div>

            <div className="hero__stat-content">
              <strong>{stat.label}</strong>
              <span>{stat.detail}</span>
            </div>

            <i aria-hidden="true" />

          </article>
        ))}

      </section>

    </div>
  )
}