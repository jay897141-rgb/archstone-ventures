import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Construction from './pages/Construction'
import Architecture from './pages/Architecture'
import Interiors from './pages/Interiors'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:slug" element={<PropertyDetail />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
