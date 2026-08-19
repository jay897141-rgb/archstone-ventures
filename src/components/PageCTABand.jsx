import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import './page-cta-band.css'

export default function PageCTABand({
  heading = "Have a property? Have a plan? Let's build it the right way.",
  primaryLabel = 'Book a Consultation',
  secondaryLabel = 'Schedule a Site Visit',
}) {
  return (
    <section className="section page-cta-band">
      <div className="container page-cta-band__inner">
        <Reveal as="h2">{heading}</Reveal>
        <Reveal delay={80} className="page-cta-band__actions">
          <Link to="/contact" className="btn btn-primary">{primaryLabel} <span className="btn-arrow" aria-hidden="true">→</span></Link>
          <Link to="/contact#site-visit" className="btn btn-ghost">{secondaryLabel}</Link>
        </Reveal>
      </div>
    </section>
  )
}
