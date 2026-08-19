import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageCTABand from '../components/PageCTABand'
import Reveal from '../components/Reveal'
import { properties, propertyFilters } from '../data/properties'
import './properties.css'

const visualReferences = [
  { src: `${import.meta.env.BASE_URL}assets/stills/exterior.avif`, alt: 'Architectural exterior detail from the Archstone visual archive' },
  { src: `${import.meta.env.BASE_URL}assets/stills/living-staircase.avif`, alt: 'Living and staircase detail from the Archstone visual archive' },
]

export default function Properties() {
  const [location, setLocation] = useState('')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return properties.filter((property) => {
      if (location && property.location !== location) return false
      if (normalizedQuery && !`${property.name} ${property.location} ${property.summary}`.toLowerCase().includes(normalizedQuery)) return false
      return true
    })
  }, [location, query])

  const clearFilters = () => {
    setLocation('')
    setQuery('')
  }

  return (
    <>
      <SEO
        title="Properties"
        description="Explore selected residential opportunities from Archstone Ventures, evaluated through location, design, potential and long-term value."
      />

      <section className="properties-intro">
        <div className="container properties-intro__grid">
          <Reveal className="properties-intro__copy">
            <p className="eyebrow">The Archstone collection</p>
            <h1>Places with<br />potential.</h1>
            <p className="properties-intro__sub">A small, considered selection of real residential engagements. Each is understood through its setting, design potential and the quality of its delivery.</p>
            <div className="properties-intro__actions">
              <a href="#selected-properties" className="btn btn-primary">View the collection <span className="btn-arrow" aria-hidden="true">→</span></a>
              <Link to="/contact" className="properties-intro__link">Arrange a conversation</Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="properties-intro__figure">
            <video className="properties-intro__video" autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}assets/hero/home-hero-premium.png`} aria-label="Aerial view of an Archstone property setting">
              <source src={`${import.meta.env.BASE_URL}assets/videos/hero-loop.webm`} type="video/webm" />
              <source src={`${import.meta.env.BASE_URL}assets/videos/hero-loop.mp4`} type="video/mp4" />
            </video>
            <span className="properties-intro__video-label">Archstone / visual study</span>
          </Reveal>
        </div>
      </section>

      <section className="section properties" id="selected-properties">
        <div className="container">
          <Reveal className="properties__heading">
            <div>
              <p className="eyebrow">Selected properties</p>
              <h2>A focused collection of opportunities chosen with design quality, location and long-term value in mind.</h2>
            </div>
            <span className="properties__count">{filtered.length} of {properties.length} projects</span>
          </Reveal>

          <Reveal className="properties__filters" aria-label="Filter properties">
            <label className="properties__search">
              <span>Search the collection</span>
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Project or location" />
            </label>
            <label>
              <span>Location</span>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">All locations</option>
                {propertyFilters.locations.map((value) => <option key={value} value={value}>{value}</option>)}
              </select>
            </label>
            <button type="button" className="properties__clear" onClick={clearFilters} disabled={!location && !query}>Clear filters</button>
          </Reveal>

          <div className="properties__grid">
            {filtered.map((property, i) => (
              <Reveal as="article" key={property.slug} className="property-card" delay={i * 50}>
                <Link to={`/properties/${property.slug}`} className="property-card__image-link" aria-label={`View ${property.name}`}>
                  <img src={visualReferences[i % visualReferences.length].src} alt={visualReferences[i % visualReferences.length].alt} loading="lazy" />
                  <span className="property-card__image-note">Visual archive / not project-specific</span>
                </Link>
                <div className="property-card__body">
                  <span className="property-card__label">Verified project</span>
                  <h3><Link to={`/properties/${property.slug}`}>{property.name}</Link></h3>
                  <p className="property-card__meta">{property.location}</p>
                  <p className="property-card__description">{property.summary}</p>
                  <Link to={`/properties/${property.slug}`} className="property-card__link">View Property <span aria-hidden="true">→</span></Link>
                </div>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <div className="properties__empty">
                <h3>No opportunities match this search.</h3>
                <p>Try another location or clear the filters to view the full collection.</p>
                <button type="button" className="btn btn-ghost" onClick={clearFilters}>Clear filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section properties-perspective">
        <div className="container">
          <Reveal className="properties-perspective__intro">
            <p className="eyebrow">Why Archstone</p>
            <h2>Good property decisions<br />begin with good questions.</h2>
          </Reveal>
          <div className="properties-perspective__grid">
            {[
              ['01', 'Location perspective', 'We look beyond the listing to understand the context a property will live in.'],
              ['02', 'Design understanding', 'We read potential through proportion, light, planning and how a space could be lived in.'],
              ['03', 'Execution insight', 'Architecture and construction experience brings practical clarity to the decision.'],
              ['04', 'One accountable team', 'Property advice can continue into design and delivery when the opportunity calls for it.'],
            ].map(([number, title, copy], index) => (
              <Reveal as="article" key={number} className="perspective-card" delay={index * 50}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section properties-journey">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The property journey</p>
            <h2>From first question<br />to clear decision.</h2>
          </Reveal>
          <div className="properties-journey__steps">
            {['Discover', 'Evaluate', 'Visit', 'Decide', 'Execute'].map((step, index) => (
              <Reveal as="div" className="journey-step" key={step} delay={index * 50}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTABand
        heading="The right place deserves a considered conversation."
        primaryLabel="Discuss a Property"
        secondaryLabel="Request a Site Visit"
      />
    </>
  )
}
