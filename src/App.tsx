import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout.tsx'
import Home from '@/pages/Home.tsx'
import About from '@/pages/About.tsx'
import DoctorProfile from '@/pages/DoctorProfile.tsx'
import Services from '@/pages/Services.tsx'
import Contact from '@/pages/Contact.tsx'
import NotFound from '@/pages/NotFound.tsx'

export default function App() {
  return (
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
  )
}
