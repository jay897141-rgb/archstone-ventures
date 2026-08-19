import Reveal from '../components/Reveal'
import { testimonials } from '../data/testimonials'
import './testimonials.css'

// Placeholder entries (devPlaceholder: true) are intentionally never
// rendered here — a bracketed "insert a quote" placeholder is exactly the
// kind of unfinished content that must not reach visitors. They stay in
// the data file only so the structure is ready once real quotes exist.
const publicTestimonials = testimonials.filter((t) => !t.devPlaceholder)

export default function Testimonials() {
  if (publicTestimonials.length === 0) return null

  return (
    <section className="section section--paper testimonials">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Client Experience</p>
          <h2 className="testimonials__heading">In their words.</h2>
        </Reveal>

        <div className="testimonials__grid">
          {publicTestimonials.map((t, i) => (
            <Reveal as="figure" key={t.name + i} className="testimonial-card" delay={i * 70}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
