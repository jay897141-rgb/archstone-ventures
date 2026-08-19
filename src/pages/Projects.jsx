import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import PageCTABand from '../components/PageCTABand'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import './projects.css'

const STATUSES = ['All', 'Ongoing', 'Completed']

export default function Projects() {
  const [status, setStatus] = useState('All')

  const filtered = useMemo(
    () => (status === 'All' ? projects : projects.filter((p) => p.status === status)),
    [status]
  )

  return (
    <>
      <SEO
        title="Projects"
        description="Ongoing and completed architecture and construction projects delivered by Archstone Ventures in Bengaluru."
      />
      <PageHero
        eyebrow="Our Work"
        title="Projects, ongoing and completed."
        sub="A working gallery of engagements. Verified project details are limited right now — where a specific detail hasn't been confirmed yet, this page says so rather than guessing."
        refTag="SHEET PJ—01"
      />

      <section className="section projects-page">
        <div className="container">
          <div className="projects-page__filters" role="tablist" aria-label="Filter by status">
            {STATUSES.map((s) => (
              <button
                key={s}
                role="tab"
                aria-selected={status === s}
                className={`projects-page__filter ${status === s ? 'is-active' : ''}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="projects-page__grid">
            {filtered.map((project, i) => (
              <Reveal
                as={Link}
                to={`/projects/${project.slug}`}
                key={project.slug}
                className="project-tile"
                delay={i * 50}
              >
                <ImagePlaceholder label={`FIG. PJ.${i + 1}`} ratio="4 / 3" />
                <div className="project-tile__body">
                  <span className="ref-tag">{project.status ?? 'Details pending confirmation'}</span>
                  <h3>{project.name}</h3>
                  <p>{project.location} · {project.type ?? 'Type pending confirmation'}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="projects-page__empty">
              No verified projects are listed under &ldquo;{status}&rdquo; yet.
            </p>
          )}
        </div>
      </section>

      <PageCTABand />
    </>
  )
}
