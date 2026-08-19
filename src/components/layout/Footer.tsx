import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import AppointmentCta from '../AppointmentCta'
import { BOOK_APPOINTMENT_TO } from '../ui/HeroButton'
import { scrollToId } from '../../utils/scroll'

const quickLinks = [
  { to: BOOK_APPOINTMENT_TO, label: 'Book Appointment', hash: true },
  { to: '/about', label: 'The Clinic & Values' },
  { to: '/doctors', label: 'Meet Our Specialists' },
  { to: '/services', label: 'Our Treatments' },
  { to: '/testimonials', label: 'Patient Stories' },
  { to: '/faqs', label: 'FAQs' },
] as const

const bottomLinks = [
  { to: '/about', label: 'ABOUT US' },
  { to: '/doctors', label: 'DOCTOR PROFILE' },
  { to: '/services', label: 'TREATMENTS' },
  { to: '/testimonials', label: 'TESTIMONIALS' },
  { to: '/gallery', label: 'GALLERY' },
  { to: '/faqs', label: 'FAQs' },
] as const

export default function Footer() {
  return (
    <footer className="relative z-20 w-full flex flex-col font-poppins overflow-visible h-ft">
      <div className="w-full flex justify-center bg-white pb-4 lg:pb-8">
        <div className="relative w-full max-w-[1440px] h-auto lg:h-[448px] mt-0 mb-0 z-10 overflow-visible lg:overflow-hidden h-ft-cta">
          <AppointmentCta top={0} />
        </div>
      </div>

      <div className="w-full bg-[#F3F4F6] flex justify-center pt-10 pb-10 lg:py-[80px] h-ft-main">
        <div className="w-full max-w-[1400px] lg:w-[1400px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 px-5 sm:px-6 lg:px-10 box-border h-ft-cols">
          {/* Brand + contact */}
          <div className="w-full lg:w-[320px] flex flex-col h-ft-brand">
            <div className="flex items-end text-[20px] lg:text-[26px] font-bold tracking-tight leading-none gap-[6px]">
              <img
                src="/images/home/logo.svg"
                alt="Logo"
                className="h-[32px] lg:h-[42px] w-auto mb-[-2px]"
              />
              <div>
                <span className="text-[#165ba7]">Dental</span>
                <span className="text-[#D35B8F] font-medium ml-1">Esthetique</span>
              </div>
            </div>
            <div className="mt-2.5 mb-4 h-[2px] w-[40px] bg-[#D35B8F] ml-[38px] lg:ml-[48px]" />
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-[#555] font-medium mb-4">
              A team of dentists working to ensure you receive the best treatment.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5 text-[#165ba7] font-semibold text-[12.5px] lg:text-[14px]">
                <Phone size={16} className="shrink-0 mt-0.5" />
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                  <a href="tel:+919818862265" className="hover:underline">
                    +91 98188 62265
                  </a>
                  <span className="text-[#D35B8F] font-normal">|</span>
                  <a href="tel:01204266344" className="hover:underline">
                    0120 4266 344
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-[#165ba7] font-semibold text-[12.5px] lg:text-[14px]">
                <Mail size={16} className="shrink-0 mt-0.5" />
                <a
                  href="mailto:dentalesthetiqueb55noida@gmail.com"
                  className="break-all leading-snug hover:underline"
                >
                  dentalesthetiqueb55noida@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[#165ba7] font-semibold text-[12.5px] lg:text-[14px]">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/mgbFVCZRaDL7CVeQ8"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-snug hover:underline text-left"
                >
                  55, Vindhyachal Marg, Block B, Sector 22, Noida
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-[#165ba7] font-semibold text-[12.5px] lg:text-[14px]">
                <Clock size={16} className="shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 leading-snug">
                  <span>
                    <span className="font-bold">Mon-Sat:</span> 10 AM – 2 PM & 5 PM – 8 PM
                  </span>
                  <span>
                    <span className="font-bold">Sun:</span> 10 AM – 2 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links — 2 cols on mobile */}
          <div className="w-full lg:w-[160px] flex flex-col h-ft-links">
            <h3 className="text-[#165ba7] text-[18px] lg:text-[22px] font-bold tracking-tight leading-none">
              Quick Links
            </h3>
            <div className="mt-2.5 mb-4 h-[2px] w-[40px] bg-[#D35B8F]" />
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-2.5 lg:gap-4 font-semibold text-[13px] lg:text-[15px] text-[#333]">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={(e) => {
                    if ('hash' in link && link.hash && window.location.pathname === '/') {
                      e.preventDefault()
                      scrollToId('book-appointment')
                    }
                  }}
                  className="hover:text-[#165ba7] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="w-full lg:w-[340px] flex flex-col h-ft-c3">
            <div className="pl-0 lg:pl-14">
              <h3 className="text-[#165ba7] text-[18px] lg:text-[22px] font-bold tracking-tight leading-none">
                Our Awards
              </h3>
              <div className="mt-2.5 mb-4 h-[2px] w-[40px] bg-[#D35B8F]" />
            </div>
            <div className="relative mx-auto mt-1 flex w-full max-w-[280px] lg:max-w-none lg:w-[340px] min-h-[160px] lg:h-[190px] flex-col items-center justify-center overflow-visible h-ft-c3-card">
              <img
                src="/images/home/footer-awards-new.webp"
                alt="Awards Wreath"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[160px] w-[260px] -translate-x-1/2 -translate-y-1/2 object-contain lg:left-auto lg:top-auto lg:h-[210px] lg:w-[380px] lg:translate-x-0 lg:translate-y-0 lg:-left-[10px] lg:-top-[18px] h-ft-c3-img"
              />
              <div className="relative z-10 flex flex-col items-center text-center px-3 py-4 lg:pb-8 lg:pr-8">
                <p className="max-w-[200px] text-[13px] lg:text-[15px] font-medium leading-snug text-[#333]">
                  Recognized for clinical excellence and patient care
                </p>
                <div className="mt-2.5 flex flex-col gap-0.5 text-[12px] lg:text-[14.5px]">
                  <p className="font-bold text-[#165ba7] leading-snug max-w-[200px]">
                    Best Endodontist in North India
                  </p>
                  <p className="font-semibold text-[#333] text-[11px] lg:text-[13px] leading-snug max-w-[200px] mt-0.5">
                    India&apos;s Pride Healthcare Awards
                  </p>
                  <p className="font-bold text-[#D35B8F] text-[11px] lg:text-[13px]">2018-19</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="w-full lg:w-[280px] flex flex-col h-ft-social">
            <h3 className="text-[#165ba7] text-[18px] lg:text-[22px] font-bold tracking-tight leading-none">
              Social Networks
            </h3>
            <div className="mt-2.5 mb-4 h-[2px] w-[40px] bg-[#D35B8F]" />
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-[#555] font-medium mb-4 lg:pr-4">
              Visit Dental Esthetique on these social links and connect with us. Follow us for
              regular updates.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/dentalesthetique/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3b5998] text-white hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/mgbFVCZRaDL7CVeQ8"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EA4335] text-white hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
              <a
                href="https://wa.me/919818862265"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dental.esthetique/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#cb2027] text-white hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — extra bottom padding so FAQs isn't cut / covered by WhatsApp */}
      <div className="w-full bg-[#165ba7] flex justify-center py-5 lg:py-6 h-ft-bar">
        <div className="w-full max-w-[1400px] lg:w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 px-5 sm:px-6 lg:px-10 box-border text-white h-ft-bottom">
          <p className="text-[12px] lg:text-[14px] font-medium text-center lg:text-left">
            &copy; 2026 <span className="font-bold">Dental Esthetique</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:gap-6 text-[10px] sm:text-[11px] lg:text-[13px] font-bold tracking-wide h-ft-nav">
            {bottomLinks.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-white/80 transition-colors whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
