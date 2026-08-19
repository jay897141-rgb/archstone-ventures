import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import PageCTABand from '../components/PageCTABand'
import Reveal from '../components/Reveal'
import { properties } from '../data/properties'
import NotFound from './NotFound'
import './property-detail.css'

const visualStudies = [
  { src: `${import.meta.env.BASE_URL}assets/stills/exterior.avif`, alt: 'Residential exterior in natural light' },
  { src: `${import.meta.env.BASE_URL}assets/stills/architectural-detail.avif`, alt: 'Architectural detail in warm light' },
  { src: `${import.meta.env.BASE_URL}assets/stills/living-staircase.avif`, alt: 'Residential living space with staircase' },
]

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = properties.find((item) => item.slug === slug)

  if (!property) return <NotFound />

  return (
    <>
      <SEO title={property.name} description={property.overview} />

      <section className="property-detail-hero">
        <div className="container property-detail-hero__grid">
          <Reveal className="property-detail-hero__copy">
            <p className="eyebrow">Selected property</p>
            <h1>{property.name}</h1>
            <p className="property-detail-hero__location">{property.location}</p>
          </Reveal>
          <Reveal delay={100} className="property-detail-hero__media">
            <div className="property-detail-hero__visual">
              <img src={`${import.meta.env.BASE_URL}assets/stills/exterior.avif`} alt="Residential exterior in natural light" />
              <span>Visual archive / project photography pending</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section property-detail">
        <div className="container property-detail__grid">
          <Reveal as="dl" className="property-detail__facts">
            <div><dt>Location</dt><dd>{property.location}</dd></div>
          </Reveal>

          <div className="property-detail__body">
            <Reveal>
              <p className="eyebrow">Overview</p>
              <h2>A considered residential engagement.</h2>
              <p>{property.overview}</p>
              <p className="property-detail__pending">Project-specific photography and commercial details are not published here until they are verified and approved for publication.</p>
            </Reveal>

            <Reveal as="section" className="property-detail__gallery" delay={80}>
              <p className="eyebrow">Visual language</p>
              <h2>Material, light, proportion.</h2>
              <p>These verified Archstone visuals express the quality of the environments we consider. They are not presented as photography of this specific project.</p>
              <div className="property-detail__gallery-grid">
                {visualStudies.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
              </div>
            </Reveal>

            <Reveal as="section" className="property-detail__location" delay={120}>
              <h2>Location context</h2>
              <p>{property.location} is the verified location currently available for this property.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">Continue exploring</p>
          <Link to="/properties" className="btn btn-ghost">Back to Properties <span className="btn-arrow" aria-hidden="true">→</span></Link>
        </div>
      </section>
      <PageCTABand heading="Want to understand the opportunity in context?" primaryLabel="Discuss Your Requirement" secondaryLabel="Schedule a Site Visit" />
    </>
  )
}