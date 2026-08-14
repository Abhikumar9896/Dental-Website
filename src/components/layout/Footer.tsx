import { Link } from 'react-router-dom'
import { Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-[family-name:var(--font-poppins)]">
      {/* Top Tier (Light Gray) */}
      <div className="w-full bg-[#f7f7f7] flex justify-center py-[80px]">
        <div className="w-[1400px] flex justify-between px-10">
          {/* Column 1: Info */}
          <div className="w-[320px] flex flex-col">
            <div className="flex h-[32px] items-end text-[26px] font-bold tracking-tight leading-none gap-[6px]">
              <img src="/images/home/logo.svg" alt="Logo" className="h-[42px] w-auto mb-[-4px]" />
              <div>
                <span className="text-[#165ba7]">Dental</span>
                <span className="text-[#C187A4] font-medium ml-1">Esthétique</span>
              </div>
            </div>
            <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4] ml-[48px]" />
            <div className="flex flex-col gap-6">
              <p className="text-[14px] leading-relaxed text-[#555] font-medium">
                A team of dentists working to ensure you receive the best treatment.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[#165ba7] font-semibold text-[14px]">
                  <Phone size={18} className="shrink-0" />
                  <a href="tel:+919818862265">+91 98188 62265</a>
                </div>
                <div className="flex items-center gap-3 text-[#165ba7] font-semibold text-[14px]">
                  <Mail size={18} className="shrink-0" />
                  <a href="mailto:emergencies@dentalesthetique.com" className="break-all leading-tight hover:underline">emergencies@dentalesthetique.com</a>
                </div>
                <div className="flex items-center gap-3 text-[#165ba7] font-semibold text-[14px]">
                  <Globe size={18} className="shrink-0" />
                  <a href="https://dentalesthetique.com" target="_blank" rel="noreferrer">dentalesthetique.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: About */}
          <div className="w-[160px] flex flex-col">
            <div className="flex h-[32px] items-end">
              <h3 className="text-[#165ba7] text-[22px] font-bold tracking-tight leading-none">About</h3>
            </div>
            <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4]" />
            <div className="flex flex-col gap-4 font-semibold text-[15px] text-[#333]">
              <Link to="/about" className="hover:text-[#165ba7] transition-colors">Our Dental Team</Link>
              <Link to="/services" className="hover:text-[#165ba7] transition-colors">Pricing & Pricelist</Link>
              <Link to="/services" className="hover:text-[#165ba7] transition-colors">Solutions</Link>
              <Link to="/services" className="hover:text-[#165ba7] transition-colors">Dental Services</Link>
              <Link to="/about" className="hover:text-[#165ba7] transition-colors">Clients</Link>
            </div>
          </div>

          {/* Column 3: Our Awards */}
          <div className="w-[340px] flex flex-col">
            <div className="pl-14">
              <div className="flex h-[32px] items-end">
                <h3 className="text-[#165ba7] text-[22px] font-bold tracking-tight leading-none">Our Awards</h3>
              </div>
              <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4]" />
            </div>
            <div className="relative mt-2 flex w-[340px] h-[190px] flex-col items-center justify-center">
              <img
                src="/images/home/footer-awards-new.png"
                alt="Awards Wreath"
                className="absolute inset-0 h-[210px] w-[380px] -left-[10px] -top-[18px] object-contain max-w-none"
              />
              <div className="relative z-10 flex flex-col items-center text-center pb-8 pr-8">
                <p className="max-w-[200px] text-[15px] font-medium leading-tight text-[#333]">
                  Dental Esthétique is a multiple award winner
                </p>
                <div className="mt-3 flex flex-col gap-1 text-[15px]">
                  <p className="font-semibold text-[#333]">
                    Best Patient Care <span className="font-bold text-[#165ba7]">2023</span>
                  </p>
                  <p className="font-semibold text-[#333]">
                    Best Practice & Team <span className="font-bold text-[#165ba7]">2022</span>
                  </p>
                  <p className="font-semibold text-[#333]">
                    Best Patient Care <span className="font-bold text-[#165ba7]">2020</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social Networks */}
          <div className="w-[280px] flex flex-col">
            <div className="flex h-[32px] items-end">
              <h3 className="text-[#165ba7] text-[22px] font-bold tracking-tight leading-none">Social Networks</h3>
            </div>
            <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4]" />
            <div className="flex flex-col gap-6">
              <p className="text-[14px] leading-relaxed text-[#555] font-medium pr-4">
                Visit Dental Esthétique on these social links and connect with us. Make sure to follow our accounts for regular updates.
              </p>
              <div className="flex gap-3">
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3b5998] text-white hover:opacity-90 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00aced] text-white hover:opacity-90 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#007bb6] text-white hover:opacity-90 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#cb2027] text-white hover:opacity-90 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier (Solid Blue) */}
      <div className="w-full bg-[#165ba7] flex justify-center py-6">
        <div className="w-[1400px] flex items-center justify-between px-10 text-white">
          <p className="text-[14px] font-medium">
            Copyright 2026 by <span className="font-bold">Dental Esthétique</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-bold tracking-wide">
            <Link to="/about" className="hover:text-white/80 transition-colors">ABOUT US</Link>
            <Link to="/doctors" className="hover:text-white/80 transition-colors">DOCTOR PROFILE</Link>
            <Link to="/services" className="hover:text-white/80 transition-colors">TREATMENTS</Link>
            <Link to="/testimonials" className="hover:text-white/80 transition-colors">TESTIMONIALS</Link>
            <Link to="/gallery" className="hover:text-white/80 transition-colors">GALLERY</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
