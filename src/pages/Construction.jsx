import SEO from '../components/SEO'
import PageCTABand from '../components/PageCTABand'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import './construction.css'

const JOURNEY = [
  'Pre-Construction Planning',
  'Site Preparation',
  'Foundation',
  'Structural Construction',
  'Masonry & Services',
  'Plastering & Waterproofing',
  'Flooring & Finishes',
  'Electrical & Plumbing Completion',
  'Painting & Fixtures',
  'Quality Inspection',
  'Final Handover',
]

const CONTROLS = [
  ['01', 'Site supervision', 'Work is checked in context, as the build progresses.'],
  ['02', 'Material verification', 'Materials are considered against the approved scope before use.'],
  ['03', 'Structural checks', 'Structural work is reviewed at the stages where it matters most.'],
  ['04', 'Waterproofing checks', 'Wet areas and critical junctions receive focused attention.'],
  ['05', 'MEP coordination', 'Services are coordinated before they disappear behind finishes.'],
  ['06', 'Finish-quality inspection', 'The final review is detailed, visible and tied to handover.'],
]

export default function Construction() {
  return (
    <>
      <SEO
        title="Construction"
        description="Residential construction, BOQ and cost planning, procurement, execution and quality control — coordinated end to end by Archstone Ventures."
      />
      <section className="construction-hero">
        <div className="container construction-hero__grid">
          <Reveal className="construction-hero__copy">
            <p className="eyebrow">Construction / Sheet C-01</p>
            <h1>Built with discipline.<br /><em>Delivered with accountability.</em></h1>
            <p>Archstone Ventures manages residential construction from planning and engineering through execution, quality control and final handover.</p>
            <div className="construction-hero__actions">
              <a href="#construction-journey" className="btn btn-primary">Start Your Construction <span className="btn-arrow" aria-hidden="true">→</span></a>
              <a href="#construction-journey" className="btn btn-ghost">View Our Process</a>
            </div>
          </Reveal>
          <Reveal delay={100} className="construction-hero__media">
            <ImagePlaceholder label="APPROVED CONSTRUCTION PHOTOGRAPHY PENDING" ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      <section className="section construction-philosophy section--paper">
        <div className="container construction-philosophy__grid">
          <Reveal>
            <p className="eyebrow">Our approach</p>
            <h2>Good construction is not just what you see.<br /><em>It is what you never have to worry about.</em></h2>
          </Reveal>
          <Reveal delay={80} className="construction-philosophy__copy">
            <p>Planning, engineering coordination, material control, site supervision, quality checks, transparent progress and final handover are treated as one connected responsibility.</p>
            <span className="construction-philosophy__rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="section construction-journey" id="construction-journey">
        <div className="container">
          <Reveal>
            <p className="eyebrow">End-to-end construction journey</p>
            <h2>Every stage has a place<br />in the plan.</h2>
          </Reveal>
          <div className="construction-journey__timeline">
            {JOURNEY.map((stage, index) => (
              <Reveal as="article" className="construction-stage" key={stage} delay={index * 35}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{stage}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section construction-controls section--paper">
        <div className="container">
          <Reveal className="construction-controls__heading">
            <p className="eyebrow">Quality & control</p>
            <h2>Precision is a practice,<br />not a final inspection.</h2>
          </Reveal>
          <div className="construction-controls__list">
            {CONTROLS.map(([number, title, detail], index) => (
              <Reveal as="article" className="construction-control" key={number} delay={index * 45}>
                <span className="construction-control__mark">{number}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-execution">
        <div className="container construction-execution__grid">
          <Reveal className="construction-execution__media">
            <ImagePlaceholder label="APPROVED SITE EXECUTION PHOTOGRAPHY PENDING" ratio="16 / 10" />
          </Reveal>
          <Reveal className="construction-execution__copy" delay={90}>
            <p className="eyebrow">On site</p>
            <h2>Calm execution begins with a clear scope.</h2>
            <p>The construction record is built through the work itself: what is being executed, what stage the project is in, and what comes next.</p>
          </Reveal>
        </div>
      </section>

      <section className="section construction-transparency">
        <div className="container construction-transparency__inner">
          <Reveal>
            <p className="eyebrow">Transparency</p>
            <h2>Clear scope.<br />Clear progress.<br /><em>Clear accountability.</em></h2>
          </Reveal>
          <Reveal className="construction-transparency__copy" delay={80}>
            <p>A client should understand what is being executed, what stage the project is in, and what comes next. That clarity is part of the construction work, not an afterthought.</p>
          </Reveal>
        </div>
      </section>

      <section className="section construction-model section--paper">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The Archstone model</p>
            <h2>One team.<br />One coordinated journey.<br /><em>One line of accountability.</em></h2>
          </Reveal>
          <div className="construction-model__flow" aria-label="Property to architecture to construction to handover">
            {['Property', 'Architecture', 'Construction', 'Handover'].map((stage, index) => (
              <Reveal as="div" className="construction-model__stage" key={stage} delay={index * 65}>
                <span>0{index + 1}</span><strong>{stage}</strong>{index < 3 && <i aria-hidden="true">→</i>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTABand
        heading="Planning to build?"
        primaryLabel="Start Your Project"
        secondaryLabel="Contact Archstone"
      />
    </>
  )
}
