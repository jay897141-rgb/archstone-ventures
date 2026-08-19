import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import './featured-projects.css'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="section featured-projects">
      <div className="container">
        <div className="featured-projects__head">
          <Reveal>
            <p className="eyebrow">Selected Work</p>
            <h2>Featured Projects</h2>
          </Reveal>
          <Link to="/projects" className="btn btn-ghost featured-projects__all">View All Projects</Link>
        </div>

        <div className="featured-projects__list">
          {featured.map((project, i) => (
            <Reveal
              as={Link}
              to={`/projects/${project.slug}`}
              key={project.slug}
              className={`fp-item ${i % 2 === 1 ? 'fp-item--reverse' : ''}`}
              delay={i * 80}
            >
              <ImagePlaceholder
                label={`FIG. 04.${i + 1} — ${project.name.toUpperCase()}`}
                ratio="16 / 10"
                className="fp-item__image"
              />
              <div className="fp-item__body">
                <span className="ref-tag">{project.status ?? 'Details pending confirmation'}</span>
                <h3>{project.name}</h3>
                <p className="fp-item__meta">{project.location} · {project.type}</p>
                <p className="fp-item__summary">{project.summary}</p>
                <span className="fp-item__link">View Project <span className="btn-arrow" aria-hidden="true">→</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
