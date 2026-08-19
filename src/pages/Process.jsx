import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import PageCTABand from '../components/PageCTABand'
import Reveal from '../components/Reveal'
import { processStages } from '../data/process'
import './process.css'

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process"
        description="The eleven-stage Archstone Ventures process, from client enquiry through to long-term relationship."
      />
      <PageHero
        eyebrow="Our Process"
        title="Eleven stages. No step skipped, no step improvised."
        sub="Every Archstone engagement — regardless of size — runs against the same sequence. It exists so you always know what stage your project is at, and what happens next."
        refTag="SHEET PR—01"
      />

      <section className="section process-page">
        <div className="container">
          <ol className="process-page__list">
            {processStages.map((stage, i) => (
              <Reveal as="li" key={stage.n} delay={Math.min(i * 40, 320)} className="process-page__item">
                <span className="process-page__n">{stage.n}</span>
                <div className="process-page__body">
                  <h2>{stage.title}</h2>
                  <p>{stage.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <PageCTABand heading="Ready to start at Stage 01?" />
    </>
  )
}
