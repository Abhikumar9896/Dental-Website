import { Link } from 'react-router-dom'
import HeroToothCollage from '../components/HeroToothCollage'

const W = 1440
const H = 800

export default function NotFound() {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 overflow-hidden bg-[#F9F4F1]"
        style={{ width: W, height: H, minWidth: W }}
      >
        <div className="absolute left-0 top-0 h-[649px] w-[1440px] overflow-visible bg-[#F9F4F1]">
          <HeroToothCollage />

          <div
            className="absolute left-1/2 top-[250px] z-[2] flex w-[600px] -translate-x-1/2 flex-col items-center text-center"
            style={{ gap: 24 }}
          >
            <h1 className="font-[family-name:var(--font-fraunces)] text-[96px] font-bold text-[#C187A4]">
              404
            </h1>
            <p className="font-[family-name:var(--font-poppins)] text-xl text-[#767676]">
              Page not found
            </p>
            <Link
              to="/"
              className="inline-flex h-12 w-[200px] items-center justify-center rounded-2xl bg-[#C187A4] font-[family-name:var(--font-fraunces)] text-xl font-bold text-white"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
