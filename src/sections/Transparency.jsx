import { siteConfig } from '../data/siteConfig'
import Reveal from '../components/Reveal'
import './transparency.css'

const CHANNELS = [
  'Project Progress',
  'Construction Stages',
  'Drawings',
  'Milestones',
  'Site Reports',
  'Documents',
  'Approvals',
]

export default function Transparency() {
  return (
    <section className="section transparency">
      <div className="container transparency__grid">
        <Reveal className="transparency__copy">
          <p className="eyebrow">Transparency, Structured</p>
          <h2 className="transparency__heading">
            Project visibility.
            <br />
            Without the guesswork.
          </h2>
          <p className="transparency__body">
            Every engagement is tracked through the same structured checkpoints —
            so you are never left waiting on a phone call to know where your
            project stands. Clients receive a dedicated login for ongoing
            projects, alongside the same site reporting our own team works from.
          </p>
          <a href={siteConfig.clientLoginUrl} className="btn btn-primary">
            Client Login <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delay={100} className="transparency__panel">
          <div className="transparency__panel-head">
            <span className="ref-tag">CLIENT VIEW — REFERENCE</span>
          </div>
          <ul className="transparency__channels">
            {CHANNELS.map((c) => (
              <li key={c}>
                <span className="transparency__dot" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
