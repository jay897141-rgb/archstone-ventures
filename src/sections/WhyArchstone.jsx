import Reveal from '../components/Reveal'
import './why-archstone.css'

const REASONS = [
  { n: '01', title: 'One Team', detail: 'Property, design and construction sit inside a single accountable structure — not three vendors pointing at each other.' },
  { n: '02', title: 'Transparent Costing', detail: 'Costs are itemised against an approved BOQ before work begins, and tracked against it as it proceeds.' },
  { n: '03', title: 'Structured Execution', detail: 'Every project runs against the same eleven-stage process — nothing is left to memory or improvisation.' },
  { n: '04', title: 'Design + Construction Coordination', detail: 'Architects and site teams work from the same drawing set, reviewed together before execution.' },
  { n: '05', title: 'Quality Control', detail: 'Site audits run alongside construction, not as an afterthought once work is already complete.' },
  { n: '06', title: 'Clear Communication', detail: 'Structured progress updates replace ad-hoc calls, so you always know exactly where things stand.' },
]

export default function WhyArchstone() {
  return (
    <section className="section section--paper why-archstone">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Why Archstone</p>
          <h2 className="why-archstone__heading">Built on how the work actually gets done.</h2>
        </Reveal>

        <div className="why-archstone__grid">
          {REASONS.map((r, i) => (
            <Reveal as="article" key={r.n} className="why-archstone__card" delay={i * 50}>
              <span className="why-archstone__n">{r.n}</span>
              <h3>{r.title}</h3>
              <p>{r.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
