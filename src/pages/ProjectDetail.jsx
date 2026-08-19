import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import ImagePlaceholder from '../components/ImagePlaceholder'
import PageCTABand from '../components/PageCTABand'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import NotFound from './NotFound'
import './project-detail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const related = projects.filter((p) => p.slug !== slug).slice(0, 2)

  if (!project) return <NotFound />

  return (
    <>
      <SEO title={project.name} description={project.summary} />

      <section className="project-detail-hero">
        <ImagePlaceholder label={`FIG. — ${project.name.toUpperCase()}`} ratio="16 / 9" frame={false} className="project-detail-hero__image" />
        <div className="container project-detail-hero__content">
          <span className="ref-tag">{project.status ?? 'Details pending confirmation'}</span>
          <h1>{project.name}</h1>
        </div>
      </section>

      <section className="section project-detail">
        <div className="container project-detail__grid">
          <Reveal className="project-detail__info">
            <dl>
              <div><dt>Location</dt><dd>{project.location}</dd></div>
              <div><dt>Type</dt><dd>{project.type ?? 'To be confirmed'}</dd></div>
              <div><dt>Status</dt><dd>{project.status ?? 'To be confirmed'}</dd></div>
              <div><dt>Area</dt><dd>{project.area ?? 'To be confirmed'}</dd></div>
            </dl>
          </Reveal>

          <div className="project-detail__body">
            <Reveal>
              <p className="eyebrow">Design Intent</p>
              <p>{project.summary}</p>
              {project.devPlaceholder && (
                <p className="project-detail__flag">
                  Some details for this project are still being confirmed.
                  Contact us directly for the latest information.
                </p>
              )}
            </Reveal>

            <Reveal delay={80} className="project-detail__gallery">
              <ImagePlaceholder label="GALLERY 01" ratio="1 / 1" />
              <ImagePlaceholder label="GALLERY 02" ratio="1 / 1" />
              <ImagePlaceholder label="GALLERY 03" ratio="1 / 1" />
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--paper project-detail__related">
          <div className="container">
            <p className="eyebrow">Related Projects</p>
            <div className="project-detail__related-grid">
              {related.map((r) => (
                <Link to={`/projects/${r.slug}`} key={r.slug} className="project-detail__related-item">
                  <ImagePlaceholder label={r.name.toUpperCase()} ratio="4 / 3" />
                  <h3>{r.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageCTABand />
    </>
  )
}
