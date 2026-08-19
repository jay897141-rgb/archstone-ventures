import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { siteConfig } from '../data/siteConfig'
import './legal.css'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms governing the use of the Archstone Ventures website." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section legal-page">
        <div className="container legal-page__body">
          <p>
            Archstone Ventures is finalising these Terms & Conditions. For
            any questions in the meantime, please contact us at{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
