import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const DoctorProfile = lazy(() => import('@/pages/DoctorProfile'))
const Services = lazy(() => import('@/pages/Services'))
const Contact = lazy(() => import('@/pages/Contact'))
const Faq = lazy(() => import('@/pages/Faq'))
const Testimonials = lazy(() => import('@/pages/Testimonials'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#6366F1]">
      <div className="relative flex h-[100px] w-[100px] items-center justify-center">
        <div className="absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full border-[1.5px] border-transparent border-l-white border-r-white opacity-80" />

        <img
          src="/images/home/logo.svg"
          alt="Dental Esthetique"
          className="h-[52px] w-[48px] object-contain"
        />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ErrorBoundary>
  )
}
