import Reveal, { Float, Stagger, StaggerItem, CountUp } from '../ui/Reveal'
import { Users, Cpu, HeartHandshake, ShieldCheck, MessageSquare, Smile } from 'lucide-react'

const highlights = [
  {
    title: 'Experienced Dental Professionals',
    description: 'Skilled specialists delivering advanced, personalized treatment.',
    icon: Users,
  },
  {
    title: 'Modern Technology',
    description: 'Precise, comfortable care powered by advanced equipment.',
    icon: Cpu,
  },
  {
    title: 'Personalized Care',
    description: 'Treatment plans tailored to your unique dental needs.',
    icon: HeartHandshake,
  },
  {
    title: 'Sterilized Environment',
    description: 'Strict sterilisation protocols for your safety and peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Consultation',
    description: 'Clear explanations of options, steps, and costs before treatment.',
    icon: MessageSquare,
  },
  {
    title: 'Comfortable Procedures',
    description: 'Gentle techniques focused on a calm, pain-free experience.',
    icon: Smile,
  },
] as const

export default function WhyChooseUs() {
  return (
    <div className="relative w-full h-auto lg:absolute lg:left-[78px] lg:top-[1506px] lg:h-[560px] lg:w-[1280px] h-why">
      <Reveal x={-60} y={0} duration={0.8} className="h-why-img-wrap">
        <img
          src="/images/home/clinic-row-60cc89.webp"
          alt="Clinic"
          loading="lazy"
          decoding="async"
          className="relative lg:absolute left-0 lg:left-[60px] top-0 lg:top-[60px] w-full lg:w-[456px] h-auto lg:h-[342px] rounded-xl lg:rounded-lg object-cover shadow-lg h-why-img"
        />
      </Reveal>

      <Float amplitude={10} duration={4.5} delay={0.4} className="h-why-f1">
        <div className="relative lg:absolute left-0 lg:left-[34px] top-0 lg:top-[345px] flex h-full min-h-[100px] lg:h-[133px] w-full lg:w-[161px] flex-col justify-center gap-1.5 lg:gap-[10px] rounded-xl lg:rounded-lg bg-gradient-to-br from-[#F2F8FF] to-[#E0EFFB] p-3.5 lg:p-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#165ba7]">
          <span className="font-poppins text-[26px] lg:text-[34px] font-semibold leading-none text-[#165ba7]">
            <CountUp value={58} suffix="+" />
          </span>
          <span className="font-poppins text-[12px] lg:text-[14px] leading-tight text-gray-500 font-medium">
            Dental
            <br />
            Treatments
          </span>
        </div>
      </Float>

      <Float amplitude={12} duration={5} delay={0.9} className="h-why-f2">
        <div className="relative lg:absolute left-0 lg:left-[364px] top-0 lg:top-[301px] flex h-full min-h-[100px] lg:h-[178px] w-full lg:w-[226px] flex-col justify-center gap-1.5 lg:gap-[10px] rounded-xl lg:rounded-lg bg-gradient-to-br from-[#F2F8FF] to-[#E0EFFB] p-3.5 lg:p-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#165ba7]">
          <span className="font-poppins text-[26px] lg:text-[34px] font-semibold leading-none text-[#165ba7]">
            <CountUp value={50} suffix="K+" />
          </span>
          <span className="font-poppins text-[12px] lg:text-[14px] font-semibold leading-none text-gray-600">
            Patients Treated
          </span>
          <p className="hidden lg:block font-poppins text-[11px] leading-relaxed text-gray-400 mt-2">
            Committed to restoring smiles every day with advanced care.
          </p>
        </div>
      </Float>

      <div className="relative lg:absolute left-0 lg:left-[660px] top-0 lg:top-[40px] flex w-full lg:w-[620px] flex-col gap-3 lg:gap-6 h-why-c">
        <Stagger className="h-why-intro" gap={0.12}>
          <StaggerItem>
            <h2 className="font-poppins text-[22px] lg:text-[36px] font-bold leading-[1.2] text-[#333] whitespace-normal lg:whitespace-nowrap h-why-h">
              Why Choose <span className="text-[#165ba7]">Dental ESTHETIQUE?</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="font-poppins text-[13px] lg:text-[15px] leading-[1.6] text-gray-600 font-medium mt-2 lg:mt-3">
              Advanced dental care combining expertise, innovation, and compassion for healthier,
              brighter, confident smiles every day.
            </p>
          </StaggerItem>
        </Stagger>

        <div className="flex flex-col gap-3 lg:gap-4 h-why-highlights">
          <p className="font-poppins text-[11px] lg:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#9E6187]">
            Key Highlights
          </p>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 lg:gap-y-8 h-why-grid" gap={0.08}>
            {highlights.map(({ title, description, icon: Icon }) => (
              <StaggerItem key={title}>
                <div className="flex items-start gap-2.5 lg:gap-3">
                  <div className="mt-0.5 flex h-[32px] w-[32px] lg:h-[46px] lg:w-[46px] shrink-0 items-center justify-center rounded-full bg-[#B07399]/10 text-[#B07399]">
                    <Icon size={15} className="lg:w-[22px] lg:h-[22px]" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-0.5 lg:gap-1 min-w-0">
                    <h3 className="font-poppins text-[13px] lg:text-[16px] font-semibold text-[#333] leading-snug">
                      {title}
                    </h3>
                    <p className="font-poppins text-[12px] lg:text-[13px] leading-relaxed text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  )
}
