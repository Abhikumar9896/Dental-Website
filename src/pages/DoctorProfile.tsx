import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppointmentCta from '../components/AppointmentCta'
import PageHero from '../components/ui/PageHero'

const specialisations = [
  { n: '01', title: 'Single Sitting Painless RCT' },
  { n: '02', title: 'Microscopic Root Canal (RCT)' },
  { n: '03', title: 'Re-RCT Treatment' },
  { n: '04', title: 'Smile Designing' },
  { n: '05', title: 'Re-RCT Treatment' },
] as const

const CARD_SHADOW = '0px 24.3px 24.3px 0px rgba(22, 91, 167, 0.71)'

const DOCTORS_DATA = {
  ds: {
    id: 'ds',
    initials: 'DS',
    name: 'Dr. Deepika Singhal',
    tabTitle: 'Endodontist - Cosmetic Dentist',
    image: '/images/home/57dc078b4b52d3c3a7d118abc184bcd908bb21d9.png',
    badge1: { value: '₹500', label: 'Consult Fee' },
    badge2: { value: '15K+', label: 'Happy Patients' },
    badge3: { value: '18 Yrs', label: 'Experience' },
    pill: 'Endodontist & Cosmetic Dentist',
    desc1: 'A distinguished Endodontist and Cosmetic Dentist with over 18 years of clinical excellence, renowned for delivering world class dental care through precision, innovation, and uncompromising clinical standards.',
    desc2: 'MDS in Conservative Dentistry & Endodontics, BDS. Eighteen years of clinical experience, focused on root canal therapy and complex restorative cases, supported by 16 documented patient stories at this clinic.',
    scheduleLine1: '· 10:00am – 2:00pm & 5:00pm – 8:00pm',
    scheduleLine2: '· 10:00am – 2:00pm',
    about: [
      {
        n: '1',
        title: 'Overview',
        body: 'Recognized as one of the leading specialists in the Delhi NCR region, she has earned the trust of patients seeking advanced endodontic treatment and comprehensive smile rehabilitation.'
      },
      {
        n: '2',
        title: 'Career & Affiliations',
        body: 'Over the course of her distinguished career, Dr. Singhal has been associated with reputed healthcare institutions, including ESIC Dental Hospital, where she gained extensive experience in managing a wide spectrum of complex endodontic and restorative cases. This invaluable clinical exposure has further strengthened her expertise in delivering advanced, evidence based dental care across diverse patient populations.'
      },
      {
        n: '3',
        title: 'Clinical Focus',
        body: 'With a special focus on Microscopic Endodontics, Single Visit Root Canal Therapy and Comprehensive Smile Designing, Dr.Singhal is committed to preserving natural dentition while creating smiles that are both aesthetically pleasing and functionally superior. Her treatment philosophy combines minimally invasive techniques with meticulous attention to detail, ensuring predictable outcomes and an exceptional patient experience.'
      },
      {
        n: '4',
        title: 'Philosophy of Care',
        body: 'Widely respected for her calm demeanor, diagnostic acumen, and commitment to excellence, Dr. Singhal believes that exceptional dentistry is achieved through the seamless integration of scientific evidence, artistic vision, and compassionate care. Every treatment is tailored to the unique needs of the individual, reflecting her unwavering dedication to quality, ethics, and long term oral health.'
      },
      {
        n: '5',
        title: 'Academic Contributions',
        body: 'Beyond clinical practice, Dr. Singhal is deeply committed to academics and professional advancement. She has authored numerous scientific publications in reputed national and international journals and remains actively engaged in continuing education to stay at the forefront of contemporary endodontics and esthetic dentistry.'
      }
    ],
    quote: '"Her relentless pursuit of clinical excellence, commitment to innovation, and patient centric philosophy have established Dr. Deepika Singhal as a trusted name in advanced endodontics and esthetic dentistry, delivering exceptional care with precision, compassion, and lasting results."',
    award: {
      image: '/images/home/awards.png',
      pill: 'A RECOGNITION OF CLINICAL EXCELLENCE',
      title: 'Best Endodontist in North India',
      desc: 'Dr. Deepika Singhal was honoured with this recognition at the India\'s Pride Healthcare Awards 2018-19, reflecting her expertise and commitment to exceptional endodontic care.',
      buttonText: 'See Treatments',
      buttonLink: '/services'
    }
  },
  aj: {
    id: 'aj',
    initials: 'AJ',
    name: 'Dr. Abhinav Jain',
    tabTitle: 'Orthodontist - Implantologist',
    image: '/images/home/75524db1b2dcef952c107879077fccb06763426e.png',
    badge1: { value: '₹500', label: 'Consult Fee' },
    badge2: { value: '12K+', label: 'Happy Patients' },
    badge3: { value: '15 Yrs', label: 'Experience' },
    pill: 'Orthodontist & Implantologist',
    desc1: 'A highly skilled Orthodontist and Implantologist dedicated to creating beautiful, straight smiles and restoring missing teeth with state-of-the-art dental implants.',
    desc2: 'MDS in Orthodontics and Dentofacial Orthopedics. Fifteen years of expertise in clear aligners, traditional braces, and full-mouth implant rehabilitation.',
    scheduleLine1: '· 10:00am – 2:00pm & 4:30pm – 7:30pm',
    scheduleLine2: '· Closed',
    about: [
      {
        n: '1',
        title: 'Overview',
        body: 'Renowned for his expertise in modern orthodontics and implantology, Dr. Jain specializes in invisible aligners, complex bite corrections, and full-mouth rehabilitations.'
      },
      {
        n: '2',
        title: 'Career & Affiliations',
        body: 'With over 15 years of dedicated practice, he has successfully transformed thousands of smiles. His approach combines advanced digital dentistry with a deep understanding of facial aesthetics, ensuring every patient receives a personalized, minimally invasive treatment plan for optimal long-term results.'
      },
      {
        n: '3',
        title: 'Clinical Focus',
        body: 'Focusing extensively on clear aligner therapy and image-guided implant placements, Dr. Jain is at the forefront of integrating technology with patient care. He meticulously plans every case digitally to ensure precise movements and optimal surgical outcomes with minimal discomfort.'
      },
      {
        n: '4',
        title: 'Philosophy of Care',
        body: 'Dr. Jain believes that a confident smile is the foundation of self-esteem. He takes a patient-centric approach, taking the time to listen to concerns and fully explain treatment options, empowering patients to make informed decisions about their orthodontic and restorative journey.'
      },
      {
        n: '5',
        title: 'Academic Contributions',
        body: 'A passionate educator, Dr. Jain frequently conducts workshops on advanced implantology and aligner mechanics for fellow practitioners. He has presented his clinical cases at various national conferences and remains dedicated to mentoring the next generation of dental professionals.'
      }
    ],
    quote: '"His unwavering dedication to creating perfectly aligned smiles and restoring full dental function has made Dr. Abhinav Jain a highly sought-after specialist in orthodontics and implantology, delivering transformative and confident results."',
    award: {
      image: '/images/home/awards.png',
      pill: 'EXCELLENCE IN ORTHODONTICS',
      title: 'Top Orthodontist in Delhi NCR',
      desc: 'Dr. Abhinav Jain was recognized for his outstanding contributions to digital orthodontics and patient care at the National Dental Excellence Awards, highlighting his commitment to creating beautiful, functional smiles.',
      buttonText: 'See Treatments',
      buttonLink: '/services'
    }
  }
}

export default function DoctorProfile() {
  const [activeTab, setActiveTab] = useState<'ds' | 'aj'>('ds')
  const activeDoctor = DOCTORS_DATA[activeTab]

  return (
    <div className="w-full bg-white font-[family-name:var(--font-poppins)] overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white pb-32">
        
        {/* Hero Section */}
        <PageHero
          tagline="Doc Profile"
          title="Meet the Experts Behind Every Smile."
          description="Meet our experienced dental professionals, dedicated to delivering advanced, patient focused care. Discover their qualifications, expertise, and compassionate approach, designed to make every visit comfortable and personalized. Explore their experience and book your consultation with Dental Esthétique today for trusted dental care and confidence."
          taglineColor="text-[#C187A4]"
          titleColor="text-[#28231F]"
          titleFont="font-[family-name:var(--font-fraunces)]"
        >
          <Link
            to="/contact"
            className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#C187A4] px-8 font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Book an appointment
          </Link>
          <Link
            to="/services"
            className="inline-flex h-[44px] items-center justify-center rounded-full border-[1.5px] border-[#C187A4] bg-transparent px-8 font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[#C187A4] hover:bg-[#C187A4]/5 transition-colors"
          >
            See treatments
          </Link>
        </PageHero>

        {/* Doctor Tabs & Card */}
        <div className="relative z-30 mt-16 flex flex-col w-[1210px] gap-6">
          {/* Tabs */}
          <div className="flex gap-4">
            {/* DS Tab */}
            <button 
              onClick={() => setActiveTab('ds')}
              className={`flex items-center gap-3 border-[1px] bg-white rounded-full p-1.5 pr-6 transition-all ${activeTab === 'ds' ? 'border-[#0898CD] shadow-sm' : 'bg-[#F9F4F1] border-transparent hover:bg-gray-100 opacity-90'}`}
            >
              <div className="bg-[#165ba7] text-white rounded-full w-[38px] h-[38px] flex items-center justify-center text-sm font-bold shrink-0">DS</div>
              <div className="flex flex-col text-left">
                <span className="font-[family-name:var(--font-poppins)] text-[#28231F] font-bold text-[13px] leading-tight">Dr. Deepika Singhal</span>
                <span className="font-[family-name:var(--font-poppins)] text-[9px] text-[#767676] uppercase tracking-[0.05em] mt-0.5 font-medium">Endodontist - Cosmetic Dentist</span>
              </div>
            </button>
            {/* AJ Tab */}
            <button 
              onClick={() => setActiveTab('aj')}
              className={`flex items-center gap-3 border-[1px] bg-white rounded-full p-1.5 pr-6 transition-all ${activeTab === 'aj' ? 'border-[#0898CD] shadow-sm' : 'bg-[#F9F4F1] border-transparent hover:bg-gray-100 opacity-90'}`}
            >
              <div className="bg-[#165ba7] text-white rounded-full w-[38px] h-[38px] flex items-center justify-center text-sm font-bold shrink-0">AJ</div>
              <div className="flex flex-col text-left">
                <span className="font-[family-name:var(--font-poppins)] text-[#28231F] font-bold text-[13px] leading-tight">Dr. Abhinav Jain</span>
                <span className="font-[family-name:var(--font-poppins)] text-[9px] text-[#767676] uppercase tracking-[0.05em] mt-0.5 font-medium">Orthodontist - Implantologist</span>
              </div>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex w-full overflow-visible items-center mt-10">
            {/* Left: Avatar & Badges */}
            <div className="relative w-[368px] h-[368px] shrink-0 rounded-full bg-[#F2E8EB] ml-4">
              <div className="absolute inset-0 rounded-full border-2 border-[#165ba7] scale-[1.03]" />
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img 
                  key={activeDoctor.id} // Forces re-render on change
                  src={activeDoctor.image} 
                  className="w-full h-full object-cover object-top scale-[1.05]" 
                  alt={activeDoctor.name} 
                />
              </div>
              
              {/* Badge 1 */}
              <div className="absolute top-[20px] left-[-20px] bg-white rounded-[20px] px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center leading-none">
                <span className="font-[family-name:var(--font-poppins)] font-bold text-[#28231F] text-[15px] mb-1.5">{activeDoctor.badge1.value}</span>
                <span className="font-[family-name:var(--font-poppins)] text-[8px] font-semibold text-[#767676] tracking-wider uppercase">{activeDoctor.badge1.label}</span>
              </div>
              
              {/* Badge 2 */}
              <div className="absolute bottom-[20px] left-[10px] bg-white rounded-[20px] px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center leading-none">
                <span className="font-[family-name:var(--font-poppins)] font-bold text-[#28231F] text-[15px] mb-1.5">{activeDoctor.badge2.value}</span>
                <span className="font-[family-name:var(--font-poppins)] text-[8px] font-semibold text-[#767676] tracking-wider uppercase">{activeDoctor.badge2.label}</span>
              </div>

              {/* Badge 3 */}
              <div className="absolute top-[240px] right-[-20px] bg-white rounded-[20px] px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center leading-none">
                <span className="font-[family-name:var(--font-poppins)] font-bold text-[#28231F] text-[15px] mb-1.5">{activeDoctor.badge3.value}</span>
                <span className="font-[family-name:var(--font-poppins)] text-[8px] font-semibold text-[#767676] tracking-wider uppercase">{activeDoctor.badge3.label}</span>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col flex-1 pl-[90px]">
              <div className="h-[28px] flex items-center">
                <span className="bg-[#C187A4] text-white font-[family-name:var(--font-poppins)] text-[11px] font-bold tracking-[0.1em] px-4 py-2 rounded-full w-max uppercase">
                  {activeDoctor.pill}
                </span>
              </div>
              <div className="mt-5 h-[45px] flex items-center">
                <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-bold text-[#28231F] leading-tight">
                  {activeDoctor.name}
                </h2>
              </div>
              <div className="mt-4 h-[85px]">
                <p className="font-[family-name:var(--font-poppins)] text-[16px] leading-[1.7] text-[#28231F]/90 font-medium">
                  {activeDoctor.desc1}
                </p>
              </div>
              <div className="mt-5 h-[65px]">
                <p className="border-l-[1.5px] border-[#D1D1D1] pl-4 font-[family-name:var(--font-poppins)] text-[13px] leading-[1.6] text-[#767676] italic w-[518px]">
                  {activeDoctor.desc2}
                </p>
              </div>

              <div 
                className="mt-8 bg-[#F0F0F0] rounded-[18px] px-5 py-2 flex flex-col justify-center w-[452px] h-[62px] shrink-0"
                style={{ boxShadow: '5px 2px 10.1px 0px rgba(0,0,0,0.13)' }}
              >
                <div className="font-[family-name:var(--font-poppins)] text-[12px] text-[#28231F] flex gap-1">
                  <span className="font-bold w-[65px]">MON-SAT</span>
                  <span className="text-[#28231F]">{activeDoctor.scheduleLine1}</span>
                </div>
                <div className="font-[family-name:var(--font-poppins)] text-[12px] text-[#28231F] flex gap-1">
                  <span className="font-bold w-[65px]">SUN</span>
                  <span className="text-[#28231F]">{activeDoctor.scheduleLine2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Doctor Section */}
        <div className="w-[1210px] mt-20 flex flex-col">
          <p className="font-[family-name:var(--font-poppins)] text-[11px] font-bold tracking-[0.1em] text-[#C187A4] uppercase">
            In Her Own Practice
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-[36px] font-bold text-[#28231F] leading-tight mb-12">
            About {activeDoctor.name}
          </h2>

          <div className="relative flex flex-col w-full pb-8">
            {/* Center Vertical Line */}
            <div className="absolute top-[27px] bottom-[27px] left-1/2 w-[1.5px] bg-[#241F1B]/10 -translate-x-1/2 z-0" />

            {activeDoctor.about.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.n} className={`relative flex w-full justify-between items-start ${index !== 0 ? 'mt-16' : ''}`}>
                  
                  {/* Left Column */}
                  <div className={`w-1/2 pr-12 flex flex-col items-end text-right ${isLeft ? '' : 'opacity-0 invisible'}`}>
                    {isLeft && (
                      <>
                        <h3 className="font-[family-name:var(--font-poppins)] text-[18px] font-bold text-[#28231F]">
                          {item.title}
                        </h3>
                        <p className="font-[family-name:var(--font-poppins)] text-[14px] leading-[1.8] text-[#767676] max-w-[564px] mt-3">
                          {item.body}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#C187A4] text-white font-[family-name:var(--font-poppins)] font-semibold text-[18px] z-10 ring-[12px] ring-white">
                    {item.n}
                  </div>

                  {/* Right Column */}
                  <div className={`w-1/2 pl-12 flex flex-col items-start text-left pt-1 ${!isLeft ? '' : 'opacity-0 invisible'}`}>
                    {!isLeft && (
                      <>
                        <h3 className="font-[family-name:var(--font-poppins)] text-[18px] font-bold text-[#28231F]">
                          {item.title}
                        </h3>
                        <p className="font-[family-name:var(--font-poppins)] text-[14px] leading-[1.8] text-[#767676] max-w-[564px] mt-3">
                          {item.body}
                        </p>
                      </>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Dynamic Quote Block */}
        <div className="w-full flex justify-center mt-20 mb-8">
          <div 
            className="flex items-center justify-center w-[1280px] h-[252px] px-24 bg-cover bg-center bg-no-repeat"
            style={{ 
              borderRadius: '9px 200px 4px 200px',
              backgroundImage: 'url(/images/home/bgblue.png)',
              backgroundColor: '#165ba7'
            }}
          >
            <p className="font-[family-name:var(--font-poppins)] text-[20px] leading-[1.6] text-center text-[#F3F3F3] font-medium max-w-[850px]">
              {activeDoctor.quote}
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-12 w-full flex justify-center">
          <div className="flex w-[1280px] bg-[#F9F4F1] rounded-[26px] py-14 flex-col items-center gap-10">
            <div className="flex w-[1239px] flex-col gap-2">
              <p className="font-[family-name:var(--font-poppins)] text-[11px] font-bold tracking-[0.1em] text-[#C187A4] uppercase">
                FOCUS AREAS
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-bold leading-none text-[#28231F]">
                Fields of Specialisation
              </h2>
            </div>

            <div className="flex w-[1239px] flex-wrap gap-[24px]">
              {specialisations.map((card) => (
                <div
                  key={card.n}
                  className="box-border flex h-[152px] w-[397px] shrink-0 flex-col justify-center rounded-[24px] border border-[#10437b] bg-[#165ba7] px-12 gap-3"
                  style={{ boxShadow: CARD_SHADOW }}
                >
                  <p className="font-[family-name:var(--font-poppins)] text-base font-normal leading-none text-[#F9F4F1]/70">
                    {card.n}
                  </p>
                  <h3 className="font-[family-name:var(--font-poppins)] text-[20px] font-normal leading-[1.3] text-[#F9F4F1] max-w-[250px]">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-12 w-full flex justify-center mb-8">
          <div className="w-[1342px] flex flex-col gap-10">
            <div className="flex flex-col gap-2 pl-6">
              <p className="font-[family-name:var(--font-poppins)] text-[11px] font-bold tracking-[0.1em] text-[#C187A4] uppercase">
                RECOGNITION
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] font-bold leading-none text-[#28231F]">
                Awards
              </h2>
            </div>
            
            <div className="flex w-full items-center justify-between">
              <img 
                key={activeDoctor.id + 'award'}
                src={activeDoctor.award.image} 
                className="w-[580px] h-auto shrink-0" 
                alt="Award" 
              />
              
              {/* Vertical Divider */}
              <div className="w-[1px] h-[266px] bg-[#D5EAE3] shrink-0 mx-8"></div>

              <div className="flex flex-col flex-1 max-w-[616px]">
                <div className="h-[28px] flex items-center">
                  <span className="bg-[#C187A4] text-white font-[family-name:var(--font-poppins)] text-[11px] font-bold tracking-[0.1em] px-4 py-2 rounded-full w-max uppercase">
                    {activeDoctor.award.pill}
                  </span>
                </div>
                <div className="mt-6 flex items-start">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[36px] font-bold text-[#28231F] leading-[1.2]">
                    {activeDoctor.award.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="font-[family-name:var(--font-poppins)] text-[16px] leading-[1.7] text-[#28231F]/90 font-medium">
                    {activeDoctor.award.desc}
                  </p>
                </div>
                <Link 
                  to={activeDoctor.award.buttonLink}
                  className="mt-8 flex items-center justify-center w-[201px] h-[48px] bg-[#C187A4] text-white font-[family-name:var(--font-poppins)] font-semibold text-[15px] rounded-[16px] shadow-[0_4px_14px_rgba(193,135,164,0.3)] hover:opacity-90 transition-opacity"
                >
                  {activeDoctor.award.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="relative w-full h-[448px] mt-20 z-10">
          <AppointmentCta top={0} />
        </div>

      </div>
    </div>
  )
}
