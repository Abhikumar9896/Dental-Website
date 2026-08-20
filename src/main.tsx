import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const pageLoaders: Record<string, () => Promise<unknown>> = {
  '/': () => import('@/pages/Home'),
  '/about': () => import('@/pages/About'),
  '/doctors': () => import('@/pages/DoctorProfile'),
  '/services': () => import('@/pages/Services'),
  '/contact': () => import('@/pages/Contact'),
  '/faqs': () => import('@/pages/Faq'),
  '/testimonials': () => import('@/pages/Testimonials'),
  '/gallery': () => import('@/pages/Gallery'),
}

const path = window.location.pathname
const loader = pageLoaders[path] || pageLoaders['/']

loader()
  .catch(() => {})
  .then(() => {
    hydrateRoot(
      document.getElementById('root')!,
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>,
    )
  })
