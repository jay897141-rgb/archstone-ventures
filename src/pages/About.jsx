import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import PageCTABand from '../components/PageCTABand'
import ArchArtwork from '../components/ArchArtwork'
import Reveal from '../components/Reveal'
import './about.css'

const VALUES = [
  { title: 'Trust', detail: 'Every commitment is made in writing, against a scope both sides have agreed to.' },
  { title: 'Precision', detail: 'Drawings, budgets and schedules are treated as instruments, not estimates.' },
  { title: 'Execution Strength', detail: 'Design intent is only worth as much as the site team\u2019s ability to deliver it.' },
  { title: 'Long-Term Value', detail: 'We plan for the building\u2019s next twenty years, not just its handover date.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Archstone Ventures brings property advisory, architecture and construction under one accountable team in Bengaluru."
      />
      <PageHero
        eyebrow="About Archstone"
        title="One team, built to remove the gaps between vision and site."
        sub="Archstone Ventures exists because property, design and construction are usually handled by disconnected vendors — and the client absorbs every gap between them. We built one structure to close those gaps."
      />

      <section className="section about-approach">
        <div className="container about-approach__grid">
          <Reveal className="about-approach__media">
            <ArchArtwork variant="coordination" ratio="4 / 5" label="Illustrative — coordinated drawing set" />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Our Approach</p>
              <h2 className="about-approach__heading">
                Design and execution are planned together, from the first
                site visit.
              </h2>
              <p className="about-approach__body">
                Most construction problems are decided long before the first
                foundation is dug — in how a project is scoped, budgeted and
                designed. We treat property advisory, architecture and
                construction as one continuous decision, held by one team,
                so nothing is redesigned on site after it has already been built.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--paper about-philosophy">
        <div className="container about-philosophy__grid">
          <Reveal>
            <p className="eyebrow">Design & Execution Philosophy</p>
            <h2 className="about-philosophy__heading">
              A drawing is only as good as the site&apos;s ability to build it.
            </h2>
            <p className="about-philosophy__body">
              We don&apos;t separate the studio from the site. Architecture,
              structural and MEP coordination happen before construction
              begins, and the same team that designed a space stays
              accountable for how it is executed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="about-values__heading">What guides the work.</h2>
          </Reveal>
          <div className="about-values__grid">
            {VALUES.map((v, i) => (
              <Reveal as="div" key={v.title} className="about-values__item" delay={i * 60}>
                <h3>{v.title}</h3>
                <p>{v.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark about-vision">
        <div className="container about-vision__inner">
          <Reveal>
            <p className="eyebrow">Long-Term Vision</p>
            <h2>
              A property is a decades-long asset. We stay reachable long
              after the keys change hands.
            </h2>
          </Reveal>
        </div>
      </section>

      <PageCTABand />
    </>
  )
}
