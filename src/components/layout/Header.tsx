import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <div className="fixed top-0 z-[100] w-full pointer-events-none">
      <div className="mx-auto w-[1440px] relative pointer-events-auto">
        <div
          className="absolute left-[60px] top-[16px] flex h-[77px] w-[1320px] items-center justify-between rounded-xl"
          style={{
            padding: '12px 24px 12px 48px',
            background: 'rgba(0, 0, 0, 0.39)',
            border: '1px solid rgba(244, 132, 34, 0)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img src="/images/home/logo.svg" alt="" className="h-[35px] w-8 brightness-0 invert" />
            <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white">
              Dental Esthétique
            </span>
          </Link>

          <nav className="flex items-center gap-10">
            <Link
              to="/about"
              className={`font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white ${
                pathname === '/about' ? 'underline decoration-white/80 underline-offset-8' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              to="/doctors"
              className={`font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white ${
                pathname === '/doctors' ? 'underline decoration-white/80 underline-offset-8' : ''
              }`}
            >
              Doctor Profile
            </Link>
            <Link
              to="/services"
              className={`font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white ${
                pathname === '/services' ? 'underline decoration-white/80 underline-offset-8' : ''
              }`}
            >
              Treatments
            </Link>
          </nav>

          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-[#F48422] px-5 py-2.5 font-[family-name:var(--font-poppins)] text-sm font-semibold leading-5 text-white"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
