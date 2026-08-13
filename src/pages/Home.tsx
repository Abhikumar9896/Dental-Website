import { useState } from 'react'
import AppointmentCta from '../components/AppointmentCta'
import HeroBanner from '../components/home/HeroBanner'
import BookAppointment from '../components/home/BookAppointment'
import WhyChooseUs from '../components/home/WhyChooseUs'
import SpecializedTeam from '../components/home/SpecializedTeam'
import DoctorCard from '../components/home/DoctorCard'
import HorizontalDoctorCard from '../components/home/HorizontalDoctorCard'
import KeyTreatments from '../components/home/KeyTreatments'
import FourReasons from '../components/home/FourReasons'
import ShowcaseSection from '../components/home/ShowcaseSection'
import ReviewsSection from '../components/home/ReviewsSection'
import FaqSection from '../components/home/FaqSection'
import GallerySection from '../components/home/GallerySection'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'

const W = 1440
const H = 6940 + 2960

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="relative bg-white" style={{ width: W, height: H }}>
      <HeroBanner />

      {/* Grey Background behind BookAppointment */}
      <div className="absolute left-0 top-[814px] w-full h-[786px] bg-[#F5F7FA] z-10"></div>

      <BookAppointment />

      <WhyChooseUs />

      <SpecializedTeam />

      <div className="absolute w-full" style={{ top: 2050 }}>
        <div className="absolute left-[163px] top-[1700px] flex flex-col items-start gap-3">
          <h2 className="font-[family-name:var(--font-poppins)] text-[44px] font-semibold text-[#333] leading-[1.2]">
            Meet the Specialists<br/>You Can Trust
          </h2>
          <div className="w-16 h-[4px] bg-[#A66689] rounded-full"></div>
        </div>

        {/* Original Horizontal Doctor Cards */}
        <DoctorCard
          name="Dr. Deepika Singhal"
          role="Endodontist & Cosmetic Dentist"
          description="Expert Endodontist providing advanced microscopic root canal therapy, aesthetic dentistry, and restorative treatments with precision, comfort, and exceptional patient care."
          statPills={[]}
          bulletPoints={[
            'Microscopic & Endodontics Expert',
            'Single Sitting RCT Specialist',
          ]}
          imgSrc="/images/home/e0a9924195fe49bd12e71ddc6eb19b13ace633e8.png"
          className="left-[163px] top-[1870px]"
          gap={228}
        />

        <DoctorCard
          name="Dr. Abhinav Jain"
          role="Orthodontist & Implantologist"
          description="Experienced Orthodontist and Implantologist dedicated to transforming smiles through advanced orthodontics, dental implants, and patient-focused treatment planning."
          statPills={[]}
          bulletPoints={[
            'Member - Indian Dental Association',
            'Member - European Orthodontic Society (London)',
            'Certified Implantologist (Korea)',
            'Certified Aligner Practitioner (Germany)'
          ]}
          imgSrc="/images/home/75524db1b2dcef952c107879077fccb06763426e.png"
          badgeLeft
          width={409}
          className="left-[163px] top-[2450px]"
          gap={80}
        />

        {/* New Horizontal Doctor Cards Below SpecializedTeam */}
        <div className="absolute left-0 w-full top-[810px] flex flex-col items-center gap-[40px] z-30">
          <HorizontalDoctorCard
            name="Dr. Deepika Singhal"
            role="Endodontist & Cosmetic Dentist"
            description="Expert Endodontist providing advanced microscopic root canal therapy, aesthetic dentistry, and restorative treatments with precision, comfort, and exceptional patient care."
            imgSrc="/images/home/e0a9924195fe49bd12e71ddc6eb19b13ace633e8.png"
            colorScheme="blue"
            imagePosition="left"
            imgClassName="!top-[-40px] !h-[calc(100%+40px)]"
            bulletPoints={[
              "Microscopic & Endodontics Expert",
              "Single Sitting RCT Specialist",
              "Member - Indian Dental Association"
            ]}
          />

          <HorizontalDoctorCard
            name="Dr. Abhinav Jain"
            role="Orthodontist & Implantologist"
            description="Experienced Orthodontist and Implantologist dedicated to transforming smiles through advanced orthodontics, dental implants, and patient-focused treatment planning."
            imgSrc="/images/home/75524db1b2dcef952c107879077fccb06763426e.png"
            colorScheme="pink"
            imagePosition="right"
            imgObjectPosition="object-[center_30%]"
            bulletPoints={[
              "Member - Indian Dental Association",
              "Member - European Orthodontic Society (London)",
              "Certified Implantologist (Korea)",
              "Certified Aligner Practitioner (Germany)"
            ]}
          />
        </div>

        <div className="relative" style={{ top: 910 }}>
          <KeyTreatments />
          <FourReasons />
          <ShowcaseSection />
          <ReviewsSection />
          <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
          <GallerySection />
          <AppointmentCta top={6412} />
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
