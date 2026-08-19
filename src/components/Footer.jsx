import { Link } from 'react-router-dom'
import { siteConfig, footerNav } from '../data/siteConfig'
import { brandConfig } from '../data/brandConfig'
import './footer.css'

function NavColumn({ title, items }) {
  return (
    <div className="footer-col">
      <h4 className="footer-col__title">{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          {brandConfig.hasLogo && brandConfig.icon.dark ? (
            <span className="footer-brand__mark footer-brand__mark--with-icon">
              <img
                src={brandConfig.icon.dark}
                alt=""
                aria-hidden="true"
                className="footer-brand__icon-img"
              />
              ARCHSTONE VENTURES
            </span>
          ) : (
            <span className="footer-brand__mark">ARCHSTONE VENTURES</span>
          )}
          <p className="footer-brand__tagline">{siteConfig.tagline}</p>
          <a href={siteConfig.clientLoginUrl} className="btn btn-ghost footer-brand__login">Client Login</a>
        </div>

        <NavColumn title="Company" items={footerNav.company} />
        <NavColumn title="Services" items={footerNav.services} />
        <NavColumn title="Projects" items={footerNav.projects} />

        <div className="footer-col">
          <h4 className="footer-col__title">Contact</h4>
          <ul>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            {siteConfig.phones.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></li>
            ))}
            <li>{siteConfig.city}</li>
          </ul>
          <div className="footer-social">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Archstone Ventures. All rights reserved.</span>
        <div className="footer-bottom__legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
