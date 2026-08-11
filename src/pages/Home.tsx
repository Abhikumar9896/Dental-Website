import { useState } from 'react'
import AppointmentCta from '../components/AppointmentCta'
import HeroBanner from '../components/home/HeroBanner'
import DoctorCard from '../components/home/DoctorCard'
import KeyTreatments from '../components/home/KeyTreatments'
import FourReasons from '../components/home/FourReasons'
import ShowcaseSection from '../components/home/ShowcaseSection'
import ReviewsSection from '../components/home/ReviewsSection'
import FaqSection from '../components/home/FaqSection'
import GallerySection from '../components/home/GallerySection'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'

const W = 1440
const H = 6940

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="w-full overflow-x-auto bg-white">
      <div
        className="relative mx-auto shrink-0 bg-white"
        style={{ width: W, height: H, minWidth: W }}
      >
        <HeroBanner />

        <DoctorCard
          name="Dr. Deepika Singhal"
          role="ENDODONTIST"
          description="MDS in Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience, focused on root canal therapy and complex restorative cases, supported by 16 documented patient stories at this clinic."
          statPills={[
            { value: '₹300', label: 'Consultation Fees' },
            { value: '10K+', label: 'Happy Customer' },
          ]}
          topHeading="The specialist behind the microscope."
          className="left-[163px] top-[897px]"
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
          className="left-[172px] top-[1534px]"
        />

        <KeyTreatments />

        <FourReasons />

        <ShowcaseSection />

        <ReviewsSection />

        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

        <GallerySection />

        <AppointmentCta top={6412} />

        <WhatsAppFloat />
      </div>
    </div>
  )
}
