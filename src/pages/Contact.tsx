import HeroButton, { BOOK_APPOINTMENT_TO } from '../components/ui/HeroButton'
import PageHero from '../components/ui/PageHero'
import AppointmentCta from '../components/AppointmentCta'

const W = 1440
const H = 1200

export default function Contact() {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 overflow-hidden bg-[#F9F4F1]"
        style={{ width: W, height: H, minWidth: W }}
      >
        <PageHero
          tagline="Contact Us"
          title="Get in Touch"
          description="Have questions or want to book an appointment? We'd love to hear from you."
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
        </PageHero>

        <div className="absolute left-[80px] top-[720px] w-[1280px]">
          <p className="font-poppins text-sm font-medium tracking-[0.06em] text-[#C187A4]">
            CONTACT INFORMATION
          </p>
          <h2 className="mt-3 font-poppins text-[40px] font-semibold leading-none text-[#28231F]">
            Visit Our Clinic
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2f8ff]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#165ba7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="font-poppins text-xl font-semibold text-[#28231F]">Address</p>
              <p className="font-poppins text-base text-[#767676]">
                55, Vindhyachal Marg, Block B, Sector 22, Noida, UP 201307
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2f8ff]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#165ba7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="font-poppins text-xl font-semibold text-[#28231F]">Phone</p>
              <p className="font-poppins text-base text-[#767676]">+91 98188 62265</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2f8ff]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#165ba7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <p className="font-poppins text-xl font-semibold text-[#28231F]">Email</p>
              <p className="font-poppins text-base text-[#767676]">info@dentalesthetique.com</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2f8ff]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#165ba7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p className="font-poppins text-xl font-semibold text-[#28231F]">Hours</p>
              <p className="font-poppins text-base text-[#767676]">Mon to Sun · 9AM to 9PM</p>
            </div>
          </div>
        </div>

        <AppointmentCta top={950} />
      </div>
    </div>
  )
}
