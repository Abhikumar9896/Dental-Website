import HeroButton, { BOOK_APPOINTMENT_TO } from '../components/ui/HeroButton'
import PageHero from '../components/ui/PageHero'
import AppointmentCta from '../components/AppointmentCta'

const contactCards = [
  {
    title: 'Address',
    body: '55, Vindhyachal Marg, Block B, Sector 22, Noida, Uttar Pradesh 201307',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: 'Phone',
    body: '+91 98188 62265',
    href: 'tel:+919818862265',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    title: 'Email',
    body: 'info@dentalesthetique.com',
    href: 'mailto:info@dentalesthetique.com',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    title: 'Hours',
    body: 'Mon to Sun · 9AM to 9PM',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
] as const

export default function Contact() {
  return (
    <div className="w-full overflow-x-hidden bg-white h-contact-page">
      {/* Desktop keeps fixed 1440×1200 canvas; mobile is fluid */}
      <div className="relative mx-auto w-full max-w-full lg:w-[1440px] lg:min-w-[1440px] h-auto lg:h-[1200px] overflow-hidden bg-[#F9F4F1] pb-8 lg:pb-0 h-canvas h-contact-canvas">
        <PageHero
          height="lg:h-[max(100vh,800px)]"
          backgroundImage="/images/about/contact hero.webp"
          hideCollage={true}
          tagline="Contact Us"
          title="Get in Touch"
          description="Have questions or want to book an appointment? We'd love to hear from you."
          className="h-contact-hero"
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
        </PageHero>

        <div className="relative z-10 w-full px-5 py-10 sm:px-8 lg:absolute lg:left-[80px] lg:top-[720px] lg:w-[1280px] lg:px-0 lg:py-0 h-contact-info">
          <p className="font-poppins text-[12px] sm:text-sm font-medium tracking-[0.06em] text-[#D35B8F]">
            CONTACT INFORMATION
          </p>
          <h2 className="mt-2 lg:mt-3 font-poppins text-[26px] sm:text-[32px] lg:text-[40px] font-semibold leading-tight lg:leading-none text-[#28231F] h-contact-h">
            Visit Our Clinic
          </h2>

          <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 h-contact-grid">
            {contactCards.map((card) => (
              <div key={card.title} className="flex flex-col items-start gap-2.5 lg:gap-3 h-contact-card">
                <div className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-[#f2f8ff] shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#165ba7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </div>
                <p className="font-poppins text-lg lg:text-xl font-semibold text-[#28231F]">
                  {card.title}
                </p>
                {'href' in card && card.href ? (
                  <a
                    href={card.href}
                    className="font-poppins text-[14px] lg:text-base text-[#767676] hover:text-[#165ba7] transition-colors break-words"
                  >
                    {card.body}
                  </a>
                ) : (
                  <p className="font-poppins text-[14px] lg:text-base text-[#767676] break-words">
                    {card.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 mt-2 lg:mt-0 lg:contents pb-2 lg:pb-0 h-contact-cta-wrap">
          <AppointmentCta top={950} />
        </div>
      </div>
    </div>
  )
}
