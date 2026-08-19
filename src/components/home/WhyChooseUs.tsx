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
    <div className="absolute left-[78px] top-[1534px] h-[560px] w-[1280px]">
      <Reveal x={-60} y={0} duration={0.8}>
        <img
          src="/images/home/clinic-row-60cc89.webp"
          alt="Clinic"
          className="absolute left-[60px] top-[60px] h-[342px] w-[456px] rounded-lg object-cover shadow-lg"
        />
      </Reveal>

      <Float amplitude={10} duration={4.5} delay={0.4}>
        <div className="absolute left-[34px] top-[345px] flex h-[133px] w-[161px] flex-col justify-center gap-[10px] rounded-lg bg-gradient-to-br from-[#F2F8FF] to-[#E0EFFB] p-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-[1px] border-[#165ba7]">
          <span className="font-poppins text-[34px] font-semibold leading-none text-[#165ba7]">
            <CountUp value={58} suffix="+" />
          </span>
          <span className="font-poppins text-[14px] leading-tight text-gray-500 font-medium">
            Dental
            <br />
            Treatments
          </span>
        </div>
      </Float>

      <Float amplitude={12} duration={5} delay={0.9}>
        <div className="absolute left-[364px] top-[301px] flex h-[178px] w-[226px] flex-col justify-center gap-[10px] rounded-lg bg-gradient-to-br from-[#F2F8FF] to-[#E0EFFB] p-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-[1px] border-[#165ba7]">
          <span className="font-poppins text-[34px] font-semibold leading-none text-[#165ba7]">
            <CountUp value={50} suffix="K+" />
          </span>
          <span className="font-poppins text-[14px] font-semibold leading-none text-gray-600">
            Patients Treated
          </span>
          <p className="font-poppins text-[11px] leading-relaxed text-gray-400 mt-2">
            Committed to restoring smiles every day with advanced care.
          </p>
        </div>
      </Float>

      <div className="absolute left-[660px] top-[40px] flex w-[620px] flex-col gap-6">
        <Stagger gap={0.12}>
          <StaggerItem>
            <h2 className="font-poppins text-[36px] font-bold leading-[1.2] text-[#333] whitespace-nowrap">
              Why Choose <span className="text-[#165ba7]">Dental ESTHETIQUE?</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="font-poppins text-[15px] leading-[1.6] text-gray-600 font-medium">
              Advanced dental care combining expertise, innovation, and compassion for healthier,
              brighter, confident smiles every day.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-poppins text-[13px] font-semibold tracking-[0.14em] uppercase text-[#B07399] mt-2">
              Key Highlights
            </p>
          </StaggerItem>
        </Stagger>

        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-8" gap={0.08}>
          {highlights.map(({ title, description, icon: Icon }) => (
            <StaggerItem key={title}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#B07399]/10 text-[#B07399]">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="font-poppins text-[16px] font-semibold text-[#333] leading-snug">
                    {title}
                  </h3>
                  <p className="font-poppins text-[13px] leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  )
}
