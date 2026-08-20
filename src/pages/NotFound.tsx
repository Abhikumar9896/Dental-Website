import { Link, useLocation } from 'react-router-dom'
import HeroToothCollage from '../components/HeroToothCollage'
import { usePageMeta } from '../utils/seo'

const W = 1440
const H = 800

export default function NotFound() {
  usePageMeta({
    title: '404 Page Not Found | Dental Esthetique',
    description:
      'The page you are looking for does not exist. Explore dental treatments, meet our doctors or book an appointment at Dental Esthetique, Noida.',
    path: useLocation().pathname,
    robots: 'noindex, follow',
  })
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 overflow-hidden bg-[#F9F4F1] h-canvas"
        style={{ width: W, height: H, minWidth: W }}
      >
        <div className="absolute left-0 top-0 h-[649px] w-[1440px] overflow-visible bg-[#F9F4F1] h-nf-inner">
          <HeroToothCollage className="h-nf-col" />

          <div
            className="absolute left-1/2 top-[250px] z-[2] flex w-[600px] -translate-x-1/2 flex-col items-center text-center h-nf-c"
            style={{ gap: 24 }}
          >
            <h1 className="font-poppins text-[96px] font-bold text-[#D35B8F]">404</h1>
            <p className="font-poppins text-xl text-[#767676]">Page not found</p>
            <Link
              to="/"
              className="inline-flex h-12 w-[200px] items-center justify-center rounded-xl bg-[#D35B8F] font-poppins text-xl font-bold text-white"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
