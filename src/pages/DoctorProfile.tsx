import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import HeroButton, { BOOK_APPOINTMENT_TO } from '../components/ui/HeroButton'
import SectionPill from '../components/ui/SectionPill'
import Reveal, { Stagger, StaggerItem } from '../components/ui/Reveal'

const DOCTORS_DATA = {
  ds: {
    id: 'ds',
    initials: 'DS',
    specialisations: [
      { n: '01', title: 'Single Sitting Painless Root Canal Treatment (RCT)', link: '/services#catalogue' },
      { n: '02', title: 'Microscopic Root Canal Treatment (RCT)', link: '/services#catalogue' },
      { n: '03', title: 'Re-RCT Treatment', link: '/services#catalogue' },
      { n: '04', title: 'Smile Designing' },
      { n: '05', title: 'Cosmetic Treatments' },
    ],
    name: 'Dr. Deepika Singhal',
    pronoun: 'Her',
    tabTitle: 'Endodontist, Cosmetic Dentist',
    image: '/images/home/57dc078b4b52d3c3a7d118abc184bcd908bb21d9.webp',
    imageClass: 'w-full h-full object-cover object-top scale-[1.05]',
    pill: 'Endodontist & Cosmetic Dentist',
    desc1:
      'A distinguished Endodontist and Cosmetic Dentist with over 18 years of clinical excellence, renowned for delivering world-class dental care through precision, innovation, and uncompromising clinical standards.',
    desc2:
      'MDS in Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience, focused on root canal therapy and complex restorative cases, supported by a track record of over 15,000 successfully treated patients.',
    scheduleLine1: '· 10 AM - 2 PM and 5 PM - 8 PM',
    scheduleLine2: '· 10 AM - 2 PM',
    about: [
      {
        n: '1',
        title: 'Overview & Experience',
        body: 'With over 18 years of clinical excellence, Dr. Singhal has gained extensive experience managing complex restorative cases at reputed institutions like ESIC Dental Hospital, establishing herself as a leading specialist in Delhi NCR.',
      },
      {
        n: '2',
        title: 'Clinical Focus',
        body: 'Specializes in Microscopic Endodontics, Single-Visit RCT, and Comprehensive Smile Designing. Her minimally invasive approach focuses on preserving natural dentition with aesthetically pleasing and functionally superior results.',
      },
      {
        n: '3',
        title: 'Advanced Technology',
        body: 'An early adopter of cutting-edge technology, she routinely incorporates Dental Operating Microscopes, advanced magnification systems, and laser-assisted dentistry for unparalleled precision and patient comfort.',
      },
      {
        n: '4',
        title: 'Philosophy & Academics',
        body: 'Known for her calm demeanor and diagnostic acumen, she integrates scientific evidence with compassionate care. Deeply committed to academics, she has authored numerous scientific publications in national and international journals.',
      },
    ],
    quote:
      '"Her relentless pursuit of clinical excellence, commitment to innovation, and patient-centric philosophy have established Dr. Deepika Singhal as a trusted name in advanced endodontics and esthetic dentistry, delivering exceptional care with precision, compassion, and lasting results."',
    award: {
      image: '/images/home/awards.webp',
      pill: 'A RECOGNITION OF CLINICAL EXCELLENCE',
      title: 'Best Endodontist in North India',
      desc: "Dr. Deepika Singhal was honoured with this recognition at India's Pride Healthcare Awards 2018-19, reflecting her expertise and commitment to exceptional endodontic care.",
      buttonText: 'See Treatments',
      buttonLink: '/services',
    },
  },
  aj: {
    id: 'aj',
    initials: 'AJ',
    specialisations: [
      { n: '01', title: 'Full Mouth Rehabilitation', link: '/services#catalogue' },
      { n: '02', title: 'Full Mouth Implants', link: '/services#catalogue' },
      { n: '03', title: 'Single/Multiple Tooth Replacements With Implants', link: '/services#catalogue' },
      { n: '04', title: 'Aligners' },
      { n: '05', title: 'Braces' },
    ],
    name: 'Dr. Abhinav Jain',
    pronoun: 'His',
    tabTitle: 'Orthodontist, Implantologist',
    image: '/images/about/75524db1b2dcef952c107879077fccb06763426e-removebg-preview.webp',
    imageClass: 'absolute w-[135%] h-[135%] max-w-none object-cover object-top left-0 -top-[25%]',
    pill: 'Orthodontist & Implantologist',
    desc1:
      'A distinguished Orthodontist, Implantologist, and Full Mouth Rehabilitation Specialist with over 18 years of clinical excellence, dedicated to restoring oral health and aesthetics.',
    desc2:
      'B.D.S., M.D.S. (Orthodontist & Implantologist). Eighteen years of expertise in clear aligners, traditional braces, and full-mouth implant rehabilitation, supported by 15,000+ happy patients.',
    scheduleLine1: '· 10 AM - 2 PM and 5 PM - 8 PM',
    scheduleLine2: '· 10 AM - 2 PM',
    about: [
      {
        n: '1',
        title: 'Overview & Experience',
        body: 'A distinguished Orthodontist, Implantologist, and Full Mouth Rehabilitation Specialist with over 18 years of clinical excellence. He has managed complex cases at respected institutions like Apollo Hospital, Gurugram.',
      },
      {
        n: '2',
        title: 'Orthodontic Expertise',
        body: 'Provides customized solutions for all ages, with extensive expertise in metal, ceramic, and lingual braces, as well as Invisalign® clear aligners, ensuring optimal functional correction and harmonious smiles.',
      },
      {
        n: '3',
        title: 'Full Mouth Rehabilitation',
        body: 'Specializes in comprehensive treatment for severely worn dentition and complex restorative needs. Integrates orthodontics, implant dentistry, and digital smile planning to restore function, aesthetics, and long-term oral health.',
      },
      {
        n: '4',
        title: 'Implantology & Philosophy',
        body: 'Proficient in single-tooth and full-mouth implant rehabilitation using digital diagnostics. Known for his ethical, patient-first philosophy and commitment to continuous professional development.',
      },
    ],
    quote:
      '"His unwavering dedication to creating perfectly aligned smiles and restoring full dental function has made Dr. Abhinav Jain a highly sought-after specialist in orthodontics and implantology, delivering transformative and confident results."',
    award: {
      image: '/images/home/awards.webp',
      pill: 'EXCELLENCE IN ORTHODONTICS',
      title: 'Top Orthodontist in Delhi NCR',
      desc: 'Dr. Abhinav Jain was recognized for his outstanding contributions to digital orthodontics and patient care at the National Dental Excellence Awards, highlighting his commitment to creating beautiful, functional smiles.',
      buttonText: 'See Treatments',
      buttonLink: '/services',
    },
  },
}

type DoctorId = keyof typeof DOCTORS_DATA

export default function DoctorProfile() {
  const location = useLocation()
  
  const getInitialTab = (): DoctorId => {
    const hash = location.hash.replace('#', '') as DoctorId
    if (Object.keys(DOCTORS_DATA).includes(hash)) {
      return hash
    }
    return 'ds'
  }

  const [activeTab, setActiveTab] = useState<DoctorId>(getInitialTab())

  useEffect(() => {
    const hash = location.hash.replace('#', '') as DoctorId
    if (Object.keys(DOCTORS_DATA).includes(hash)) {
      setActiveTab(hash)
    }
  }, [location.hash])

  const activeDoctor = DOCTORS_DATA[activeTab]

  return (
    <div className="w-full bg-white font-poppins overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white pb-8">
        <PageHero
          tagline="Doctor Profile"
          title="Meet the Experts Behind Every Smile."
          description="Meet our experienced dental professionals, dedicated to delivering advanced, patient-focused care. Discover their qualifications, expertise, and compassionate approach, designed to make every visit comfortable and personalized. Explore their experience and book your consultation with Dental Esthétique today for trusted dental care and confidence."
          taglineColor="text-[#C187A4]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces"
          height="h-[max(100vh,800px)]"
          backgroundImage="/images/about/docprofile.webp"
          hideCollage={true}
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
          <HeroButton to="/services#catalogue" text="See treatments" variant="outline" />
        </PageHero>

        <div id={activeTab} className="relative z-30 mt-16 flex flex-col w-[1210px] gap-6 scroll-mt-32">
          <Reveal y={20} duration={0.6} className="flex gap-4">
            {(Object.keys(DOCTORS_DATA) as DoctorId[]).map((id) => {
              const doctor = DOCTORS_DATA[id]
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-3 border-[2px] rounded-full p-1.5 pr-6 transition-all ${activeTab === id ? 'border-[#165ba7] bg-gray-100 shadow-sm' : 'border-transparent bg-gray-100 hover:bg-gray-200 opacity-90'}`}
                >
                  <div className="bg-[#165ba7] text-white rounded-full w-[38px] h-[38px] flex items-center justify-center text-sm font-bold shrink-0">
                    {doctor.initials}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-poppins text-[#28231F] font-bold text-[13px] leading-tight">
                      {doctor.name}
                    </span>
                    <span className="font-poppins text-[9px] text-[#767676] uppercase tracking-[0.05em] mt-0.5 font-medium">
                      {doctor.tabTitle}
                    </span>
                  </div>
                </button>
              )
            })}
          </Reveal>

          <div className="flex w-full overflow-visible items-center mt-10">
            <Reveal
              key={activeTab}
              x={-40}
              y={0}
              duration={0.7}
              className="relative w-[368px] h-[368px] shrink-0 rounded-full bg-[#F2E8EB] ml-4"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#C187A4] scale-[1.03]" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  key={activeDoctor.id}
                  src={activeDoctor.image}
                  className={
                    activeDoctor.imageClass || 'w-full h-full object-cover object-top scale-[1.05]'
                  }
                  alt={activeDoctor.name}
                />
              </div>
            </Reveal>

            <Reveal
              key={activeTab + 'info'}
              x={40}
              y={0}
              duration={0.7}
              className="flex flex-col flex-1 pl-[90px]"
            >
              <div className="h-[28px] flex items-center">
                <SectionPill variant="solid">{activeDoctor.pill}</SectionPill>
              </div>
              <div className="mt-5 h-[45px] flex items-center">
                <h2 className="font-fraunces text-[36px] font-bold text-[#28231F] leading-tight">
                  {activeDoctor.name}
                </h2>
              </div>
              <div className="mt-4 h-[85px]">
                <p className="font-poppins text-[16px] leading-[1.7] text-[#28231F]/90 font-medium">
                  {activeDoctor.desc1}
                </p>
              </div>
              <div className="mt-5 h-[65px]">
                <p className="border-l-[1.5px] border-[#D1D1D1] pl-4 font-poppins text-[13px] leading-[1.6] text-[#767676] italic w-[518px]">
                  {activeDoctor.desc2}
                </p>
              </div>

              <div
                className="mt-8 bg-[#F0F0F0] rounded-[18px] px-5 py-2 flex flex-col justify-center w-[452px] h-[62px] shrink-0"
                style={{ boxShadow: '5px 2px 10.1px 0px rgba(0,0,0,0.13)' }}
              >
                <div className="font-poppins text-[12px] text-[#28231F] flex gap-1">
                  <span className="font-bold w-[65px]">MON-SAT</span>
                  <span className="text-[#28231F]">{activeDoctor.scheduleLine1}</span>
                </div>
                <div className="font-poppins text-[12px] text-[#28231F] flex gap-1">
                  <span className="font-bold w-[65px]">SUN</span>
                  <span className="text-[#28231F]">{activeDoctor.scheduleLine2}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="w-[1210px] mt-20 flex flex-col">
          <Reveal y={24} duration={0.7} className="flex flex-col">
            <SectionPill variant="solid">In {activeDoctor.pronoun} Own Practice</SectionPill>
            <h2 className="mt-4 font-fraunces text-[36px] font-bold text-[#28231F] leading-tight mb-12">
              About {activeDoctor.name}
            </h2>
          </Reveal>

          <div className="relative flex flex-col w-full pb-8">
            <div className="absolute top-[27px] bottom-[27px] left-1/2 w-[1.5px] bg-[#241F1B]/10 -translate-x-1/2 z-0" />

            {activeDoctor.about.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <Reveal
                  key={activeTab + item.n}
                  y={30}
                  delay={Math.min(index * 0.08, 0.3)}
                  duration={0.6}
                  className={`relative flex w-full justify-between items-start ${index !== 0 ? 'mt-16' : ''}`}
                >
                  <div
                    className={`w-1/2 pr-12 flex flex-col items-end text-right ${isLeft ? '' : 'opacity-0 invisible'}`}
                  >
                    {isLeft && (
                      <>
                        <h3 className="font-poppins text-[18px] font-bold text-[#28231F]">
                          {item.title}
                        </h3>
                        <p className="font-poppins text-[14px] leading-[1.8] text-[#767676] max-w-[564px] mt-3">
                          {item.body}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#C187A4] text-white font-poppins font-semibold text-[18px] z-10 ring-[12px] ring-white">
                    {item.n}
                  </div>

                  <div
                    className={`w-1/2 pl-12 flex flex-col items-start text-left pt-1 ${!isLeft ? '' : 'opacity-0 invisible'}`}
                  >
                    {!isLeft && (
                      <>
                        <h3 className="font-poppins text-[18px] font-bold text-[#28231F]">
                          {item.title}
                        </h3>
                        <p className="font-poppins text-[14px] leading-[1.8] text-[#767676] max-w-[564px] mt-3">
                          {item.body}
                        </p>
                      </>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal y={40} duration={0.7} className="w-full flex justify-center mt-8 mb-4">
          <div
            className="flex items-center justify-center w-[1280px] h-[252px] px-24 bg-cover bg-center bg-no-repeat"
            style={{
              borderRadius: '9px 200px 4px 200px',
              backgroundImage: 'url(/images/home/bgblue.webp)',
              backgroundColor: '#165ba7',
            }}
          >
            <p className="font-poppins text-[20px] leading-[1.6] text-center text-[#F3F3F3] font-medium max-w-[850px]">
              {activeDoctor.quote}
            </p>
          </div>
        </Reveal>

        <div id="specialisations" className="mt-12 w-full flex justify-center scroll-mt-8">
          <div className="flex w-[1280px] bg-[#F9F4F1] rounded-[26px] py-14 flex-col items-center gap-10">
            <Reveal y={24} duration={0.7} className="flex w-[1239px] flex-col gap-2">
              <SectionPill>FOCUS AREAS</SectionPill>
              <h2 className="font-fraunces text-[36px] font-bold leading-none text-[#28231F]">
                Fields of Specialisation
              </h2>
            </Reveal>

            <Stagger className="flex w-[1239px] flex-col mt-4" gap={0.1}>
              {activeDoctor.specialisations.map((card, index) => {
                const rowClasses = `group flex items-center justify-between w-full py-8 border-b border-[#28231F]/10 hover:border-[#C187A4] transition-colors duration-300 ${card.link ? 'cursor-pointer' : 'cursor-default'} ${index === 0 ? 'border-t' : ''}`
                const rowContent = (
                  <>
                    <div className="flex items-center gap-12">
                      <span className="font-poppins text-[16px] font-medium text-[#C187A4]">
                        {card.n}
                      </span>
                      <h3 className="font-fraunces text-[32px] text-[#28231F] group-hover:text-[#C187A4] transition-colors duration-300">
                        {card.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[#28231F]/10 flex items-center justify-center group-hover:bg-[#C187A4] group-hover:border-[#C187A4] transition-all duration-300">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#28231F] group-hover:text-white transition-colors duration-300"
                      >
                        <path
                          d="M1.16669 7H12.8334M12.8334 7L6.99999 1.16666M12.8334 7L6.99999 12.8333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )
                return card.link ? (
                  <StaggerItem key={card.n} y={20}>
                    <Link to={card.link} className={rowClasses}>
                      {rowContent}
                    </Link>
                  </StaggerItem>
                ) : (
                  <StaggerItem key={card.n} y={20}>
                    <div className={rowClasses}>{rowContent}</div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </div>

        {activeTab === 'ds' && (
          <div className="mt-12 w-full flex justify-center mb-16">
            <div className="w-[1239px] flex flex-col gap-10">
              <Reveal y={24} duration={0.7} className="flex flex-col gap-3 pt-8">
                <SectionPill>RECOGNITION</SectionPill>
                <h2 className="font-fraunces text-[36px] font-bold leading-none text-[#28231F]">
                  Awards
                </h2>
              </Reveal>

              <div className="flex w-full items-center justify-between">
                <Reveal x={-40} y={0} duration={0.7}>
                  <img
                    key={activeDoctor.id + 'award'}
                    src={activeDoctor.award.image}
                    className="w-[480px] h-auto shrink-0"
                    alt="Award"
                  />
                </Reveal>

                <div className="w-[1px] h-[266px] bg-[#D5EAE3] shrink-0 mx-12" />

                <Reveal
                  x={40}
                  y={0}
                  duration={0.7}
                  delay={0.15}
                  className="flex flex-col flex-1 max-w-[616px]"
                >
                  <div className="h-[36px] flex items-center">
                    <SectionPill>{activeDoctor.award.pill}</SectionPill>
                  </div>
                  <div className="mt-6 flex items-start">
                    <h3 className="font-fraunces text-[36px] font-bold text-[#28231F] leading-[1.2]">
                      {activeDoctor.award.title}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <p className="font-poppins text-[16px] leading-[1.7] text-[#28231F]/90 font-medium">
                      {activeDoctor.award.desc}
                    </p>
                  </div>
                  <HeroButton
                    to={activeDoctor.award.buttonLink}
                    text={activeDoctor.award.buttonText}
                    className="mt-8 !h-[44px]"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
