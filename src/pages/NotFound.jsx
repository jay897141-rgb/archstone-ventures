import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './not-found.css'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="section not-found">
        <div className="container not-found__inner">
          <p className="eyebrow">Error 404</p>
          <h1>This drawing isn&apos;t in the set.</h1>
          <p className="not-found__body">The page you&apos;re looking for doesn&apos;t exist, or may have moved.</p>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </section>
    </>
  )
}
