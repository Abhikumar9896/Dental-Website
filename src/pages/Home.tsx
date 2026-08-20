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

import { homeDoctors } from '../data/doctors'

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-white mx-auto w-full lg:w-[1440px] h-auto lg:h-[9150px] h-canvas">
      <HeroBanner />

      <div className="hidden lg:block absolute left-0 top-[786px] w-full h-[740px] bg-[#F5F7FA] z-10 h-band" />

      <BookAppointment />

      <WhyChooseUs />

      <SpecializedTeam />

      <div className="relative w-full lg:absolute lg:top-[1862px] h-doc-stack">
        <div className="relative flex w-full flex-col items-center gap-4 px-4 py-5 lg:absolute lg:left-0 lg:top-[863px] lg:gap-[40px] lg:px-0 lg:py-0 z-30 bg-white h-doc-cards">
          {homeDoctors.map((doctor) => (
            <HorizontalDoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>

        <div className="relative lg:top-[-385px] h-rest">
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
    </div>
  )
}
