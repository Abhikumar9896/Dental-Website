import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const DoctorProfile = lazy(() => import('@/pages/DoctorProfile'))
const Services = lazy(() => import('@/pages/Services'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#F48422] border-t-transparent" />
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
