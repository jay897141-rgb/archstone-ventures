import Reveal from '../components/Reveal'
import './positioning.css'

const CAPABILITIES = [
  'Property Advisory',
  'Architecture',
  'Construction',
  'Interiors',
  'Project Management',
]

export default function Positioning() {
  return (
    <section className="section positioning positioning--home">
      <div className="container positioning__grid">
        <Reveal className="positioning__statement">
          <p className="eyebrow">What We Do</p>
          <h2 className="positioning__lead">
            Five disciplines that are usually handed to five different
            vendors — held here under one accountable team, so nothing
            gets lost in the handoffs.
          </h2>
        </Reveal>

        <Reveal delay={100} className="positioning__list">
          <ol>
            {CAPABILITIES.map((cap, i) => (
              <li key={cap}>
                <span className="positioning__index">{String(i + 1).padStart(2, '0')}</span>
                <span>{cap}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
