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
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#6366F1]">
      <div className="relative flex h-[100px] w-[100px] items-center justify-center">
        {/* Spinning Parenthesis Arcs */}
        <div className="absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full border-[1.5px] border-transparent border-l-white border-r-white opacity-80" />
        
        {/* Inner Icon */}
        <svg 
          width="44" 
          height="44" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Custom Tooth Shape */}
          <path d="M7 3.5c-1.7 0-3 1.3-3 3 0 2.2 1 4 2 6l1 4c.4 1.2 1.5 2 2.8 2 1.3 0 2-.6 2.4-1.5L13 14.5l.8 2.5c.4.9 1.1 1.5 2.4 1.5 1.3 0 2.4-.8 2.8-2l1-4c1-2 2-3.8 2-6 0-1.7-1.3-3-3-3-1.3 0-2.5.8-2.9 2L13 7.5l-3.1-2C9.5 4.3 8.3 3.5 7 3.5z" />
          {/* Heart Inside */}
          <path d="M12 13l-1.5-1.5c-1-1-1.5-1.5-1.5-2.5 0-1 .8-1.8 1.8-1.8.6 0 1 .3 1.2.8.2-.5.6-.8 1.2-.8 1 0 1.8.8 1.8 1.8 0 1-.5 1.5-1.5 2.5L12 13z" fill="currentColor" fillOpacity="0.2" />
        </svg>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
