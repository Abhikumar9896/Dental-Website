import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="w-full bg-[#43403E] flex justify-center">
      <div className="relative h-[467px] w-[1440px] shrink-0">
        <div className="absolute left-[67px] top-[161px] flex" style={{ gap: 193 }}>
          <div className="flex w-[271px] flex-col" style={{ gap: 20 }}>
            <div className="flex items-center" style={{ gap: 12 }}>
              <img src="/images/home/logo-footer.svg" alt="" width={47} height={53} />
              <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#CCCCCC]">
                Dental Esthetique
              </span>
            </div>
            <p className="text-base tracking-[0.04em] text-[rgba(255,255,255,0.51)]">
              Multi-speciality dental care in 55, Vindhyachal Marg, Block B, Sector 22, Noida, Uttar
              Pradesh 201307
            </p>
          </div>

          <div className="flex" style={{ gap: 60 }}>
            <div className="flex w-[158px] flex-col" style={{ gap: 20 }}>
              <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#CCCCCC]">
                Quick links
              </p>
              <div
                className="flex flex-col text-base tracking-[0.04em] text-[rgba(255,255,255,0.51)]"
                style={{ gap: 12 }}
              >
                <Link to="/about">About us</Link>
                <Link to="/doctors">Doctor Profile</Link>
                <Link to="/services">Treatments</Link>
              </div>
            </div>
            <div className="flex w-[158px] flex-col" style={{ gap: 20 }}>
              <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#CCCCCC]">
                Treatments
              </p>
              <div
                className="flex flex-col text-base tracking-[0.04em] text-[rgba(255,255,255,0.51)]"
                style={{ gap: 12 }}
              >
                <Link to="/services">Dental Implants</Link>
                <Link to="/services">Smile Designing</Link>
                <Link to="/services">Root Canal</Link>
                <Link to="/services">Teeth Whitening</Link>
              </div>
            </div>
            <div className="flex w-[188px] flex-col" style={{ gap: 20 }}>
              <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#CCCCCC]">
                Contact
              </p>
              <div
                className="flex flex-col text-base tracking-[0.04em] text-[rgba(255,255,255,0.51)]"
                style={{ gap: 12 }}
              >
                <span>B-55, Sector 22, Noida</span>
                <a href="tel:+919818862265">+91 98188 62265</a>
                <span>Mon–Sun · 9AM–9PM</span>
              </div>
            </div>
            <div className="flex w-[158px] flex-col" style={{ gap: 20 }}>
              <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#CCCCCC]">
                Book
              </p>
              <div
                className="flex flex-col text-base tracking-[0.04em] text-[rgba(255,255,255,0.51)]"
                style={{ gap: 12 }}
              >
                <Link to="/contact">Reserve Online</Link>
                <a href="tel:+919818862265">Call clinic</a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[124px] top-[381px] h-px w-[1168px] bg-white/15" />
        <p className="absolute left-[442px] top-[411px] w-[458px] text-center font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#CCCCCC]">
          © 2026 Dental Esthetique. All rights reserved.
        </p>
      </div>
    </div>
  )
}
