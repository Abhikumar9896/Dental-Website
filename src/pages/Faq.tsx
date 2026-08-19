import { useState } from 'react'
import HeroButton, { BOOK_APPOINTMENT_TO } from '../components/ui/HeroButton'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

const faqs = [
  {
    q: 'Why should I choose Dental ESTHETIQUE for my dental treatment?',
    a: 'At Dental ESTHETIQUE, we combine experienced dental professionals, advanced technology, personalized treatment planning, and a patient-first approach to provide safe, comfortable, and effective dental care. Our focus is on delivering long-term oral health while ensuring a positive treatment experience.',
  },
  {
    q: 'Do I need to book an appointment before visiting?',
    a: 'Yes. We recommend booking an appointment in advance to ensure minimal waiting time and dedicated consultation with our dental team. You can book online, call us directly, or contact us via WhatsApp.',
  },
  {
    q: 'What dental treatments do you offer?',
    a: 'We provide comprehensive dental care, including dental implants, root canal treatment, smile designing, cosmetic dentistry, teeth whitening, braces and aligners, pediatric dentistry, gum treatments, wisdom tooth extraction, and preventive dental care.',
  },
  {
    q: 'Is the clinic equipped with modern dental technology?',
    a: 'Yes. Our clinic utilizes advanced diagnostic and treatment equipment to provide accurate diagnoses, precise procedures, and a more comfortable patient experience.',
  },
  {
    q: 'Do dental treatments hurt?',
    a: 'Most modern dental procedures are performed using advanced techniques and effective anesthesia to minimize discomfort. Our team prioritizes patient comfort throughout every stage of treatment.',
  },
  {
    q: 'How often should I visit a dentist?',
    a: 'It is generally recommended to schedule a dental check-up every six months to maintain good oral health and detect potential problems early.',
  },
  {
    q: 'Do you treat children?',
    a: 'Yes. We provide comprehensive pediatric dental care in a comfortable and friendly environment designed to help children feel relaxed during their visit.',
  },
  {
    q: 'What should I expect during my first visit?',
    a: 'During your first visit, our team will conduct a comprehensive oral examination, which may include digital X-rays. We will discuss your dental history, address any immediate concerns, and create a personalized treatment plan tailored specifically to your needs.',
  },
  {
    q: 'Do you offer emergency dental care?',
    a: 'Yes, we provide prompt emergency dental services for severe toothaches, broken or chipped teeth, knocked-out teeth, and other urgent issues. Please call our emergency phone line for immediate assistance.',
  },
  {
    q: 'How can I pay for my dental treatment?',
    a: 'We accept various payment methods, including cash, major credit/debit cards, and UPI. We believe in transparent pricing and will always discuss the estimated costs and available payment options with you before beginning any extensive procedure.',
  },
  {
    q: 'Is professional teeth whitening safe for my enamel?',
    a: 'Absolutely. Professional teeth whitening performed by our experienced dentists is highly safe and effective. We use clinically approved whitening agents that protect your enamel while delivering a noticeably brighter and healthier-looking smile.',
  },
] as const

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="w-full bg-white font-poppins overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center bg-white pb-16 h-canvas">
        <PageHero
          tagline="FAQs"
          title="Frequently Asked Questions"
          description="Answers to common questions about treatments, booking, and visiting our clinic. Whether you're a new patient preparing for your first visit or looking for specific details about our advanced dental procedures, we've gathered all the information you need right here to ensure a comfortable and seamless experience at Dental Esthétique."
          taglineColor="text-[#D35B8F]"
          titleColor="text-[#28231F]"
          titleFont="font-fraunces"
          height="lg:h-[max(100vh,800px)]"
          backgroundImage="/images/about/faqsec.webp"
          bgPosition="object-cover object-right"
          hideCollage={true}
        >
          <HeroButton to={BOOK_APPOINTMENT_TO} text="Book an appointment" />
        </PageHero>

        <div className="relative mt-24 flex flex-col w-[1210px] items-center h-faq-list">
          <SectionHeading
            pill="GENERAL FAQS"
            title="Get clear answers to your questions"
            align="center"
            titleClassName="text-[42px] font-bold h-faq-sechead"
            description="Everything you need to know about our dental treatments, booking process, and what to expect during your visit."
            className="mb-6"
          />

          <Stagger className="mt-12 flex flex-col gap-5 w-full" gap={0.06}>
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <StaggerItem
                  key={faq.q}
                  y={20}
                  className={`overflow-hidden rounded-[20px] border-[1.5px] transition-all duration-300 ${
                    isOpen
                      ? 'border-[#D35B8F] bg-white shadow-[0_8px_30px_rgba(193,135,164,0.12)]'
                      : 'border-[#F0F0F0] bg-[#FAFAFA] hover:border-[#D35B8F]/40 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <span
                      className={`font-fraunces text-[22px] leading-snug transition-colors duration-300 h-faq-q ${isOpen ? 'text-[#D35B8F]' : 'text-[#28231F]'}`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#D35B8F] text-white' : 'bg-[#F2E8EB] text-[#D35B8F]'}`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      >
                        <path
                          d={isOpen ? 'M2 7H12' : 'M7 2V12M2 7H12'}
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8 pt-1">
                        <p className="font-poppins text-[16px] font-normal leading-[1.8] text-[#767676] max-w-[1000px] h-faq-a">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </div>
    </div>
  )
}
