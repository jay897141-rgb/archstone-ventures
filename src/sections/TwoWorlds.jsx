import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './two-worlds.css'

const WORLDS = [
  {
    ref: '01',
    title: 'Real Estate',
    to: '/properties',
    eyebrow: 'REAL ESTATE',
    headline: <>Property decisions,<br />seen beyond the plot.</>,
    cta: 'Explore Properties',
    items: ['Property Advisory', 'Plots / Land', 'Investment Opportunities', 'Property Discovery'],
    tone: 'light',
  },
  {
    ref: '02',
    title: 'Construction & Design',
    to: '/construction',
    eyebrow: 'DESIGN & CONSTRUCTION',
    headline: <>From first line<br />to final handover.</>,
    cta: 'Explore Construction',
    items: ['Architecture', 'Residential Construction', 'Interiors', 'Project Execution', 'Handover'],
    tone: 'dark',
  },
]

export default function TwoWorlds() {
  return (
    <section className="two-worlds section">
      <div className="container">
        <Reveal className="two-worlds__intro">
          <p className="eyebrow">What we do</p>
          <h2>Two disciplines.<br />One considered journey.</h2>
          <p className="two-worlds__intro-copy">Archstone connects property decisions with the design thinking and execution discipline that bring a place to life.</p>
        </Reveal>

        <div className="two-worlds__panels">
          {WORLDS.map((world, index) => (
            <Reveal as={Link} to={world.to} key={world.ref} className={`world world--${world.tone}`} delay={index * 80}>
              <div className="world__visual" aria-hidden="true"><span /><span /><span /></div>
              <div className="world__content">
                <div className="world__topline">
                  <span className="world__number">{world.ref}</span>
                  <span className="world__eyebrow">{world.eyebrow}</span>
                </div>
                <h3 className="world__title">{world.headline}</h3>
                <ul className="world__items">
                  {world.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <span className="world__cta">
                  {world.cta} <span className="btn-arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
