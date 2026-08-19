import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import PageCTABand from '../components/PageCTABand'
import ArchArtwork from '../components/ArchArtwork'
import Reveal from '../components/Reveal'
import '../sections/design-section.css'

const CAPABILITIES = [
  { n: 'A', title: 'Space Planning', detail: 'Layouts resolved for how rooms will actually be used, not just how they photograph.' },
  { n: 'B', title: 'Material Selection', detail: 'Finishes chosen for durability and character together, within an agreed budget.' },
  { n: 'C', title: 'Lighting', detail: 'Layered lighting planned alongside the architecture, not bolted on at the end.' },
  { n: 'D', title: 'Furniture Coordination', detail: 'Scale and placement resolved against the finished floor plan before anything is ordered.' },
  { n: 'E', title: 'Finishes', detail: 'Consistent material language carried through every room, not chosen room by room.' },
  { n: 'F', title: 'Execution', detail: 'The same site team responsible for construction carries interiors through to completion.' },
]

export default function Interiors() {
  return (
    <>
      <SEO
        title="Interiors"
        description="Space planning, material selection, lighting and execution — interior design coordinated with construction by Archstone Ventures."
      />
      <PageHero
        eyebrow="Interiors"
        title="Considered alongside the architecture, not after it."
        sub="Interiors are planned in the same design phase as the architecture, so lighting, material and furniture decisions are resolved before construction — not retrofitted once the shell is built."
        refTag="SHEET IN—01"
      />

      <section className="section section--paper design-section">
        <div className="container design-section__grid">
          <Reveal className="design-section__media">
            <ArchArtwork variant="material" ratio="4 / 5" label="Illustrative — material study" />
          </Reveal>
          <div className="design-section__body">
            <ul className="design-section__list">
              {CAPABILITIES.map((c, i) => (
                <Reveal as="li" key={c.n} delay={i * 45}>
                  <span className="design-section__index">{c.n}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageCTABand heading="Tell us how you want to live in the space, and we'll design around it." />
    </>
  )
}
