import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './consultation-cta.css'

export default function ConsultationCTA() {
  return (
    <section className="section consultation-cta">
      <div className="container consultation-cta__inner">
        <Reveal>
          <p className="eyebrow">Get Started</p>
          <h2 className="consultation-cta__heading">
            Have a property?
            <br />
            Have a plan?
            <br />
            Let&apos;s build it the right way.
          </h2>
        </Reveal>
        <Reveal delay={100} className="consultation-cta__actions">
          <Link to="/contact" className="btn btn-primary">
            Book a Consultation <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/contact#site-visit" className="btn btn-ghost">Schedule a Site Visit</Link>
        </Reveal>
      </div>
    </section>
  )
}
