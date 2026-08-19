import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { siteConfig } from '../data/siteConfig'
import './legal.css'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Archstone Ventures collects and uses information submitted through this website." />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section legal-page">
        <div className="container legal-page__body">
          <p>
            Archstone Ventures is finalising this Privacy Policy. If you
            have any questions about how information you share with us —
            including through the enquiry form on this site — is used or
            stored, please contact us directly at{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
