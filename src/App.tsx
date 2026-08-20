import { createElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'

type Loader = () => Promise<{ default: React.ComponentType<any> }>

function eagerLazy(loader: Loader) {
  let module: { default: React.ComponentType<any> } | null = null
  let promise: Promise<unknown> | null = null
  function Lazy(props: Record<string, unknown>) {
    if (!module) {
      if (!promise) promise = loader().then((m) => (module = m))
      throw promise
    }
    return createElement(module.default, props)
  }
  return Lazy
}

const Home = eagerLazy(() => import('@/pages/Home'))
const About = eagerLazy(() => import('@/pages/About'))
const DoctorProfile = eagerLazy(() => import('@/pages/DoctorProfile'))
const Services = eagerLazy(() => import('@/pages/Services'))
const Contact = eagerLazy(() => import('@/pages/Contact'))
const Faq = eagerLazy(() => import('@/pages/Faq'))
const Testimonials = eagerLazy(() => import('@/pages/Testimonials'))
const Gallery = eagerLazy(() => import('@/pages/Gallery'))
const NotFound = eagerLazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}
