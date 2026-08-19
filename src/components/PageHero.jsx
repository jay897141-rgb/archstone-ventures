import Reveal from './Reveal'
import './page-hero.css'

export default function PageHero({ eyebrow, title, sub, refTag }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <div className="page-hero__row">
            <h1 className="page-hero__title">{title}</h1>
            {refTag && <span className="ref-tag">{refTag}</span>}
          </div>
          {sub && <p className="page-hero__sub">{sub}</p>}
        </Reveal>
      </div>
    </section>
  )
}
