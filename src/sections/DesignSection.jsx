import ArchArtwork from '../components/ArchArtwork'
import Reveal from '../components/Reveal'
import './design-section.css'

const DISCIPLINES = [
  { n: 'A', title: 'Architectural Planning', detail: 'Massing and layout decided against site, sun-path and how the family actually lives.' },
  { n: 'B', title: 'Elevation', detail: 'Facade language developed as part of the structure, not applied to it afterward.' },
  { n: 'C', title: 'Interior Design', detail: 'Space planning, material and lighting resolved alongside the architecture, not after it.' },
  { n: 'D', title: 'Structural Coordination', detail: 'Engineering and architecture reviewed together before a foundation is poured.' },
  { n: 'E', title: 'MEP Coordination', detail: 'Electrical, plumbing and HVAC routed into the design early, so nothing is retrofitted.' },
]

export default function DesignSection() {
  return (
    <section className="section section--paper design-section">
      <div className="container design-section__grid">
        <Reveal className="design-section__media">
          <ArchArtwork variant="elevation" ratio="4 / 5" label="Illustrative — design study" />
        </Reveal>

        <div className="design-section__body">
          <Reveal>
            <p className="eyebrow">Design Thinking</p>
            <h2 className="design-section__heading">
              Design decisions are made once, together — not revised on site
              after they collide.
            </h2>
          </Reveal>

          <ul className="design-section__list">
            {DISCIPLINES.map((d, i) => (
              <Reveal as="li" key={d.n} delay={i * 60}>
                <span className="design-section__index">{d.n}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
