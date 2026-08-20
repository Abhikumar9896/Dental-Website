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
    <div className="w-full bg-white font-poppins overflow-x-hidden h-svc-page">
      <div className="relative mx-auto flex w-full max-w-[1440px] lg:w-[1440px] flex-col items-center bg-white pb-8 h-canvas">
        <PageHero
          tagline="Treatments"
          title="Smile Solutions for Everyone"
          description="At Dental Esthétique, we provide a full spectrum of world-class dental treatments under one roof, tailored specifically to your unique needs. From essential preventive care and painless root canals to advanced dental implants and complete smile makeovers, our dedicated specialists utilize cutting-edge technology to ensure flawless, long-lasting results."
          taglineColor="text-[#D35B8F]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces lg:!text-[62px] !leading-[1.06] tracking-[0.01em]"
          height="lg:h-[max(100vh,800px)]"
          backgroundImage="/images/about/treatment hero.webp"
          hideCollage={true}
          className="h-svc-hero"
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
          <HeroButton href="#catalogue" text="See treatments" variant="outline" />
        </PageHero>

        <div
          id="catalogue"
          className="relative mt-12 lg:mt-24 flex w-full max-w-[1210px] lg:w-[1210px] flex-col px-5 lg:px-0 h-cat"
        >
          <Reveal y={24} duration={0.7} className="flex flex-col">
            <SectionPill size="lg">01 · CARE CATALOGUE</SectionPill>
            <h2 className="mt-2 font-poppins text-[26px] sm:text-[30px] lg:text-[36px] font-bold leading-tight text-[#28231F] h-cat-h">
              Comprehensive Dental Treatments
            </h2>
          </Reveal>

          <Stagger
            className="mt-6 lg:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 lg:gap-[22px] w-full max-w-[1182px] lg:w-[1182px] h-cat-pills"
            gap={0.05}
          >
            {treatmentCategories.map((cat) => {
              const isActive = active === cat
              return (
                <StaggerItem key={cat} y={16}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(cat)
                      setShowAll(false)
                      setExpandedItem(null)
                    }}
                    className={`flex items-center justify-center h-[36px] lg:h-[40px] rounded-[18px] px-3.5 lg:px-5 font-poppins text-[12px] lg:text-[13px] font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-[#D35B8F] text-white border border-[#D35B8F]'
                        : 'border border-[#D35B8F] bg-white text-[#404040] hover:bg-[#D35B8F]/5'
                    }`}
                  >
                    {cat}
                  </button>
                </StaggerItem>
              )
            })}
          </Stagger>

          <div className="mt-10 lg:mt-16 flex flex-col w-full max-w-[1222px] lg:w-[1222px] gap-7 lg:gap-[40px] h-cat-list">
            {visibleTreatments.map((item) => {
              const isExpanded = expandedItem === item.title
              return (
                <Reveal
                  key={item.title}
                  y={30}
                  duration={0.5}
                  className="flex flex-col border-b border-[#D9D9D9] pb-5 lg:pb-6"
                >
                  <div
                    className="group flex w-full items-start sm:items-center justify-between gap-3 cursor-pointer transition-colors"
                    onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                    onMouseEnter={() => {
                      const img = new Image()
                      img.src = `/treatment/${encodeURIComponent(item.title)}.webp`
                    }}
                  >
                    <h3 className="font-poppins text-[18px] sm:text-[22px] lg:text-[32px] font-semibold text-[#28231F] group-hover:text-[#1E73BE] transition-colors uppercase tracking-wide leading-snug lg:leading-tight min-w-0 flex-1">
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
                      className={`text-[#28231F] group-hover:text-[#1E73BE] transition-all duration-300 shrink-0 mt-1 sm:mt-0 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-5 lg:gap-[74px] h-cat-exp">
                      <img
                        src={`/treatment/${encodeURIComponent(item.title)}.webp`}
                        className="w-full max-w-[300px] lg:w-[300px] h-auto aspect-[300/160] lg:h-[160px] object-cover rounded-[14px] lg:rounded-[16px] shrink-0 bg-[#F3F4F6] mx-auto lg:mx-0"
                        alt={item.title}
                        width={300}
                        height={160}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="flex flex-col justify-between py-0 lg:py-1 min-w-0 flex-1">
                        <p className="font-poppins text-[15px] sm:text-[17px] lg:text-[20px] text-[#28231F] leading-[1.65] lg:leading-[1.6] max-w-[667px]">
                          {item.content}
                        </p>
                        <HeroButton
                          to={BOOK_APPOINTMENT_TO}
                          text="Enquiry"
                          className="mt-5 lg:mt-6 !h-[44px]"
                        />
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
                className="mt-4 lg:mt-8 mx-auto flex items-center justify-center font-poppins text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.05em] text-[#D35B8F] hover:opacity-80 transition-opacity py-2"
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
