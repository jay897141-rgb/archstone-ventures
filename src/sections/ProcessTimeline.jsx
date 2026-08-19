import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { processStages } from '../data/process'
import './process-timeline.css'

export default function ProcessTimeline() {
  return (
    <section className="section section--dark process-timeline">
      <div className="container">
        <div className="process-timeline__head">
          <Reveal>
            <p className="eyebrow">Our End-to-End Journey</p>
            <h2>Eleven stages. One accountable line, enquiry to handover.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/process" className="btn btn-ghost">See the Full Process</Link>
          </Reveal>
        </div>

        <ol className="process-timeline__spine">
          {processStages.map((stage, i) => (
            <Reveal as="li" key={stage.n} delay={Math.min(i * 45, 360)}>
              <span className="process-timeline__n">{stage.n}</span>
              <div className="process-timeline__body">
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
