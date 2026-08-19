import { useState } from 'react'
import HeroButton, { BOOK_APPOINTMENT_TO } from '../components/ui/HeroButton'
import PageHero from '../components/ui/PageHero'
import SectionPill from '../components/ui/SectionPill'
import Reveal, { Stagger, StaggerItem } from '../components/ui/Reveal'
import { treatmentCategories, treatments } from '../data/treatments'

export default function Services() {
  const [active, setActive] = useState<(typeof treatmentCategories)[number]>('All')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filteredTreatments = treatments.filter(
    (item) => active === 'All' || item.category === active,
  )
  const visibleTreatments = showAll
    ? filteredTreatments
    : filteredTreatments.slice(0, Math.ceil(filteredTreatments.length / 2))

  return (
    <div className="w-full bg-white font-poppins overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white pb-8">
        <PageHero
          tagline="Treatments"
          title="Smile Solutions for Everyone"
          description="At Dental Esthétique, we provide a full spectrum of world-class dental treatments under one roof, tailored specifically to your unique needs. From essential preventive care and painless root canals to advanced dental implants and complete smile makeovers, our dedicated specialists utilize cutting-edge technology to ensure flawless, long-lasting results."
          taglineColor="text-[#C187A4]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces !text-[62px] !leading-[1.06] tracking-[0.01em]"
          height="h-[max(100vh,800px)]"
          backgroundImage="/images/about/treatment hero.webp"
          hideCollage={true}
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
          <HeroButton href="#catalogue" text="See treatments" variant="outline" />
        </PageHero>

        <div id="catalogue" className="relative mt-24 flex w-[1210px] flex-col">
          <Reveal y={24} duration={0.7} className="flex flex-col">
            <SectionPill size="lg">01 · CARE CATALOGUE</SectionPill>
            <h2 className="mt-2 font-poppins text-[36px] font-bold leading-tight text-[#28231F]">
              Comprehensive Dental Treatments
            </h2>
          </Reveal>

          <Stagger className="mt-8 flex flex-wrap items-center gap-[22px] w-[1182px]" gap={0.05}>
            {treatmentCategories.map((cat) => {
              const isActive = active === cat
              return (
                <StaggerItem key={cat} y={16}>
                  <button
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`flex items-center justify-center h-[40px] rounded-[18px] px-5 font-poppins text-[13px] font-medium transition-colors ${
                      isActive
                        ? 'bg-[#C187A4] text-white border border-[#C187A4]'
                        : 'border border-[#C187A4] bg-white text-[#404040] hover:bg-[#C187A4]/5'
                    }`}
                  >
                    {cat}
                  </button>
                </StaggerItem>
              )
            })}
          </Stagger>

          <div className="mt-16 flex flex-col w-[1222px] gap-[40px]">
            {visibleTreatments.map((item) => {
              const isExpanded = expandedItem === item.title
              return (
                <Reveal
                  key={item.title}
                  y={30}
                  duration={0.5}
                  className="flex flex-col border-b border-[#D9D9D9] pb-6"
                >
                  <div
                    className="group flex w-full items-center justify-between cursor-pointer transition-colors"
                    onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                  >
                    <h3 className="font-poppins text-[32px] font-semibold text-[#28231F] group-hover:text-[#1E73BE] transition-colors uppercase tracking-wide leading-tight">
                      {item.title}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-[#28231F] group-hover:text-[#1E73BE] transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {isExpanded && (
                    <div className="mt-8 flex gap-[74px]">
                      <img
                        src={`/treatment/${encodeURIComponent(item.title)}.webp`}
                        className="w-[300px] h-[160px] object-cover rounded-[16px] shrink-0"
                        alt={item.title}
                      />
                      <div className="flex flex-col justify-between py-1">
                        <p className="font-poppins text-[20px] text-[#28231F] leading-[1.6] max-w-[667px]">
                          {item.content}
                        </p>
                        <HeroButton to={BOOK_APPOINTMENT_TO} text="Enquiry" className="mt-6 !h-[44px]" />
                      </div>
                    </div>
                  )}
                </Reveal>
              )
            })}

            {filteredTreatments.length > Math.ceil(filteredTreatments.length / 2) && (
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="mt-8 mx-auto flex items-center justify-center font-poppins text-[14px] font-semibold uppercase tracking-[0.05em] text-[#C187A4] hover:opacity-80 transition-opacity"
              >
                {showAll ? 'SHOW LESS' : 'SHOW MORE'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
