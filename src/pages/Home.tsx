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
import { homeDoctors } from '../data/doctors'

const W = 1440
const H = 9250

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-white" style={{ width: W, height: H }}>
      <HeroBanner />

      <div className="absolute left-0 top-[786px] w-full h-[740px] bg-[#F5F7FA] z-10" />

      <BookAppointment />

      <WhyChooseUs />

      <SpecializedTeam />

      <div className="absolute w-full" style={{ top: 1890 }}>
        <div className="absolute left-0 w-full top-[863px] flex flex-col items-center gap-[40px] z-30">
          {homeDoctors.map((doctor) => (
            <HorizontalDoctorCard key={doctor.name} {...doctor} />
          ))}
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
