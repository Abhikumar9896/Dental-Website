import { useState } from 'react'
import AppointmentCta from '../components/AppointmentCta'
import HeroBanner from '../components/home/HeroBanner'
import WhyChooseUs from '../components/home/WhyChooseUs'
import DoctorCard from '../components/home/DoctorCard'
import KeyTreatments from '../components/home/KeyTreatments'
import FourReasons from '../components/home/FourReasons'
import ShowcaseSection from '../components/home/ShowcaseSection'
import ReviewsSection from '../components/home/ReviewsSection'
import FaqSection from '../components/home/FaqSection'
import GallerySection from '../components/home/GallerySection'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'

const W = 1440
const H = 6940 + 600 // Increased height to accommodate the new section

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 bg-white"
        style={{ width: W, height: H, minWidth: W }}
      >
        <HeroBanner />
        
        <WhyChooseUs />

        <div className="absolute w-full" style={{ top: 600 }}>
          <div className="absolute left-[163px] top-[897px] flex flex-col items-center">
            <h2 className="font-[family-name:var(--font-fraunces)] text-[42px] font-bold text-[#28231F] mb-12">
              Meet the Specialists<br/>You Can Trust
            </h2>
          </div>

          <DoctorCard
            name="Dr. Deepika Singhal"
            role="ENDODONTIST"
            description="MDS in Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience, focused on root canal therapy and complex restorative cases, supported by 16 documented patient stories at this clinic."
            statPills={[
              { value: '₹300', label: 'Consultation Fees' },
              { value: '10K+', label: 'Happy Customer' },
            ]}
            topHeading="The specialist behind the microscope."
            className="left-[163px] top-[1020px]"
          />

          <DoctorCard
            name="Dr. Abhinav Jain"
            role="ENDODONTIST"
            description="MDS in Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience, focused on root canal therapy and complex restorative cases, supported by 16 documented patient stories at this clinic."
            statPills={[
              { value: '₹300', label: 'Consultation Fees' },
              { value: '10K+', label: 'Happy Customer' },
            ]}
            badgeLeft
            width={409}
            className="left-[172px] top-[1657px]"
          />

          <KeyTreatments />

          <FourReasons />

          <ShowcaseSection />

          <ReviewsSection />

          <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

          <GallerySection />

          <AppointmentCta top={6412} />
        </div>

        <WhatsAppFloat />
      </div>
    </div>
  )
}
