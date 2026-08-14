import HeroBanner from '../components/home/HeroBanner'
import BookAppointment from '../components/home/BookAppointment'
import WhyChooseUs from '../components/home/WhyChooseUs'
import SpecializedTeam from '../components/home/SpecializedTeam'
import HorizontalDoctorCard from '../components/home/HorizontalDoctorCard'
import KeyTreatments from '../components/home/KeyTreatments'
import FourReasons from '../components/home/FourReasons'
import ShowcaseSection from '../components/home/ShowcaseSection'
import ReviewsSection from '../components/home/ReviewsSection'
import GallerySection from '../components/home/GallerySection'
import BookVisitSection from '../components/home/BookVisitSection'
import ServicesGridSection from '../components/home/ServicesGridSection'
import LocationSection from '../components/home/LocationSection'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'

const W = 1440
const H = 9400

export default function Home() {
  return (
    <div className="relative bg-white" style={{ width: W, height: H }}>
      <HeroBanner />

      {/* Grey Background behind BookAppointment */}
      <div className="absolute left-0 top-[814px] w-full h-[800px] bg-[#F5F7FA] z-10"></div>

      <BookAppointment />

      <WhyChooseUs />

      <SpecializedTeam />

      <div className="absolute w-full" style={{ top: 2050 }}>
        {/* New Horizontal Doctor Cards Below SpecializedTeam */}
        <div className="absolute left-0 w-full top-[863px] flex flex-col items-center gap-[40px] z-30">
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

        <div className="relative" style={{ top: -385 }}>
          <KeyTreatments />
          <FourReasons />
          <ShowcaseSection />
          <ReviewsSection />
          <GallerySection />
          <BookVisitSection />
          <ServicesGridSection />
          <LocationSection />
        </div>
      </div>

      <WhatsAppFloat />
    </div>
  )
}
