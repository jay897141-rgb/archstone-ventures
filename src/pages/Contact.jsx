import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import EnquiryForm from '../components/EnquiryForm'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Reveal from '../components/Reveal'
import { siteConfig } from '../data/siteConfig'
import './contact.css'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Reach Archstone Ventures in Bengaluru by phone, email, or by booking a consultation."
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        sub="Reach us directly, or send an enquiry below and we'll get back to you using your preferred contact method."
        refTag="SHEET CT—01"
      />

      <section className="section contact-page" id="site-visit">
        <div className="container contact-page__grid">
          <Reveal className="contact-page__details">
            <div className="contact-page__block">
              <h3>Phone</h3>
              {siteConfig.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
              ))}
            </div>
            <div className="contact-page__block">
              <h3>Email</h3>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div className="contact-page__block">
              <h3>Office</h3>
              <p>{siteConfig.addressPlaceholder}</p>
            </div>
            <div className="contact-page__block">
              <h3>Follow</h3>
              <div className="contact-page__social">
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer">X</a>
              </div>
            </div>
            <ImagePlaceholder label="MAP — EMBED PENDING" ratio="4 / 3" className="contact-page__map" />
          </Reveal>

          <Reveal delay={100}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
