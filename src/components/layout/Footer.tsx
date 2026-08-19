import { Link } from 'react-router-dom'
import { Phone, Mail, Globe } from 'lucide-react'
import AppointmentCta from '../AppointmentCta'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-poppins">
      <div className="w-full flex justify-center bg-white pb-8">
        <div className="relative w-full max-w-[1440px] h-[448px] mt-0 mb-0 z-10 overflow-hidden">
          <AppointmentCta top={0} />
        </div>
      </div>

      <div className="w-full bg-[#F3F4F6] flex justify-center py-[80px]">
        <div className="w-[1400px] flex justify-between px-10">
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
                  <a
                    href="mailto:emergencies@dentalesthetique.com"
                    className="break-all leading-tight hover:underline"
                  >
                    emergencies@dentalesthetique.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[#165ba7] font-semibold text-[14px]">
                  <Globe size={18} className="shrink-0" />
                  <a href="https://dentalesthetique.com" target="_blank" rel="noreferrer">
                    dentalesthetique.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[160px] flex flex-col">
            <div className="flex h-[32px] items-end">
              <h3 className="text-[#165ba7] text-[22px] font-bold tracking-tight leading-none">
                About
              </h3>
            </div>
            <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4]" />
            <div className="flex flex-col gap-4 font-semibold text-[15px] text-[#333]">
              <Link to="/about" className="hover:text-[#165ba7] transition-colors">
                Our Dental Team
              </Link>
              <Link to="/services" className="hover:text-[#165ba7] transition-colors">
                Pricing & Price List
              </Link>
              <Link to="/services" className="hover:text-[#165ba7] transition-colors">
                Solutions
              </Link>
              <Link to="/services" className="hover:text-[#165ba7] transition-colors">
                Dental Services
              </Link>
              <Link to="/about" className="hover:text-[#165ba7] transition-colors">
                Clients
              </Link>
            </div>
          </div>

          <div className="w-[340px] flex flex-col">
            <div className="pl-14">
              <div className="flex h-[32px] items-end">
                <h3 className="text-[#165ba7] text-[22px] font-bold tracking-tight leading-none">
                  Our Awards
                </h3>
              </div>
              <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4]" />
            </div>
            <div className="relative mt-2 flex w-[340px] h-[190px] flex-col items-center justify-center">
              <img
                src="/images/home/footer-awards-new.webp"
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

          <div className="w-[280px] flex flex-col">
            <div className="flex h-[32px] items-end">
              <h3 className="text-[#165ba7] text-[22px] font-bold tracking-tight leading-none">
                Social Networks
              </h3>
            </div>
            <div className="mt-4 mb-6 h-[2px] w-[40px] bg-[#C187A4]" />
            <div className="flex flex-col gap-6">
              <p className="text-[14px] leading-relaxed text-[#555] font-medium pr-4">
                Visit Dental Esthétique on these social links and connect with us. Make sure to
                follow our accounts for regular updates.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3b5998] text-white hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA4335] text-white hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#cb2027] text-white hover:opacity-90 transition-opacity"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#165ba7] flex justify-center py-6">
        <div className="w-[1400px] flex items-center justify-between px-10 text-white">
          <p className="text-[14px] font-medium">
            Copyright 2026 by <span className="font-bold">Dental Esthétique</span>. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-bold tracking-wide">
            <Link to="/about" className="hover:text-white/80 transition-colors">
              ABOUT US
            </Link>
            <Link to="/doctors" className="hover:text-white/80 transition-colors">
              DOCTOR PROFILE
            </Link>
            <Link to="/services" className="hover:text-white/80 transition-colors">
              TREATMENTS
            </Link>
            <Link to="/testimonials" className="hover:text-white/80 transition-colors">
              TESTIMONIALS
            </Link>
            <Link to="/gallery" className="hover:text-white/80 transition-colors">
              GALLERY
            </Link>
            <Link to="/faqs" className="hover:text-white/80 transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
