import SEO from '../components/SEO'
import Hero from '../sections/Hero'
import Positioning from '../sections/Positioning'
import TwoWorlds from '../sections/TwoWorlds'
import FeaturedProjects from '../sections/FeaturedProjects'
import DesignSection from '../sections/DesignSection'
import ProcessTimeline from '../sections/ProcessTimeline'
import Transparency from '../sections/Transparency'
import WhyArchstone from '../sections/WhyArchstone'
import CaseStudy from '../sections/CaseStudy'
import Testimonials from '../sections/Testimonials'
import ConsultationCTA from '../sections/ConsultationCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="Property, Design & Construction — One Trusted Journey"
        description="Archstone Ventures coordinates property advisory, architecture, interiors and construction as one accountable team in Bengaluru."
      />
      <Hero />
      <Positioning />
      <TwoWorlds />
      <FeaturedProjects />
      <DesignSection />
      <ProcessTimeline />
      <Transparency />
      <WhyArchstone />
      <CaseStudy />
      <Testimonials />
      <ConsultationCTA />
    </>
  )
}
