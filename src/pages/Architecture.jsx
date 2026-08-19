import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import PageCTABand from '../components/PageCTABand'
import ArchArtwork from '../components/ArchArtwork'
import Reveal from '../components/Reveal'
import '../sections/design-section.css'

const CAPABILITIES = [
  { n: 'A', title: 'Concept Design', detail: 'Massing and spatial intent developed against site, orientation and how the space will be lived in.' },
  { n: 'B', title: 'Space Planning', detail: 'Room relationships resolved for daily use before elevations are considered.' },
  { n: 'C', title: 'Floor Plans', detail: 'Layouts refined through iteration with the client before being locked for construction.' },
  { n: 'D', title: 'Elevation Design', detail: 'Facade language developed as part of the structure, not applied afterward.' },
  { n: 'E', title: 'Structural Coordination', detail: 'Engineering reviewed alongside architecture, so structure and design are resolved together.' },
  { n: 'F', title: 'MEP Coordination', detail: 'Electrical, plumbing and HVAC routed into the design early, not retrofitted after.' },
  { n: 'G', title: 'Working Drawings', detail: 'Construction-ready drawing sets, not concept renders handed to a contractor to interpret.' },
  { n: 'H', title: 'Design Review', detail: 'Formal review checkpoints before each design phase is signed off.' },
]

export default function Architecture() {
  return (
    <>
      <SEO
        title="Architecture"
        description="Concept design, space planning, structural and MEP coordination, and construction-ready working drawings from Archstone Ventures."
      />
      <PageHero
        eyebrow="Architecture"
        title="Design intelligence, resolved before it reaches the site."
        sub="Architecture at Archstone is treated as a construction discipline, not a rendering exercise — every drawing is developed with the structural and site realities that will build it."
        refTag="SHEET AR—01"
      />

      <section className="section design-section">
        <div className="container design-section__grid">
          <Reveal className="design-section__media">
            <ArchArtwork variant="blueprint" ratio="4 / 5" label="Illustrative — working drawing" />
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

      <PageCTABand heading="Bring us a site, and we'll bring you a design that can actually be built." />
    </>
  )
}
