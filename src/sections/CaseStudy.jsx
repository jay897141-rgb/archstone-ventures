import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import './case-study.css'

// This walks through the SHAPE of how a project typically moves through
// our process — it is illustrative of the process, not a real project's
// verified history. It is deliberately NOT attributed to a specific named
// project (e.g. KR Puram Residence), so an invented stage-by-stage
// narrative can never be mistaken for that project's actual story.
const STAGES = [
  { label: 'Challenge', copy: 'A site with layout and approval constraints that need resolving before design can begin.' },
  { label: 'Approach', copy: 'Architecture, structure and interiors are planned together from the first concept pass.' },
  { label: 'Design', copy: 'A layout developed around how a family actually intends to use the home, stage by stage.' },
  { label: 'Execution', copy: 'Construction proceeds against the agreed BOQ and schedule, with regular site reporting.' },
  { label: 'Result', copy: 'A completed home handed over with documentation and a formally closed snag list.' },
]

export default function CaseStudy() {
  return (
    <section className="section section--dark case-study">
      <div className="container case-study__grid">
        <Reveal className="case-study__media">
          <ImagePlaceholder label="FIG. 09 — CASE STUDY PHOTOGRAPHY" ratio="4 / 5" />
        </Reveal>

        <div className="case-study__body">
          <Reveal>
            <p className="eyebrow">How a Project Moves Through Our Process</p>
            <h2>An illustrative project journey</h2>
            <span className="ref-tag case-study__flag">Illustrative example — not a specific project's history</span>
          </Reveal>

          <dl className="case-study__stages">
            {STAGES.map((s, i) => (
              <Reveal as="div" key={s.label} className="case-study__stage" delay={i * 60}>
                <dt>{s.label}</dt>
                <dd>{s.copy}</dd>
              </Reveal>
            ))}
          </dl>

          <Link to="/projects" className="btn btn-ghost">See Our Projects</Link>
        </div>
      </div>
    </section>
  )
}
