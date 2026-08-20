import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import { StaticRouter, Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import DoctorProfile from './pages/DoctorProfile'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Testimonials from './pages/Testimonials'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'

export function renderPage(path: string) {
  return renderToString(
    <StrictMode>
      <ErrorBoundary>
        <StaticRouter location={path}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="doctors" element={<DoctorProfile />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faqs" element={<Faq />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </StaticRouter>
      </ErrorBoundary>
    </StrictMode>,
  )
}
