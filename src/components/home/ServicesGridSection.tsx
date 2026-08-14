import { 
  Monitor, 
  Syringe, 
  ClipboardPlus, 
  AlignVerticalSpaceAround, 
  Sparkles, 
  SmilePlus, 
  Pill, 
  ShieldPlus 
} from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Competently parallel task researched data process.',
    iconColor: '#C187A4', // Pink
    icon: <Monitor size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Implants',
    description: 'Leverage other resource leveling convergence data.',
    iconColor: '#165ba7', // Blue
    icon: <Syringe size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Dental Surgery',
    description: 'Engage fully tested process top line platform clients.',
    iconColor: '#C187A4', // Pink
    icon: <ClipboardPlus size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Alignment',
    description: 'User generated content in real time offshoring.',
    iconColor: '#165ba7', // Blue
    icon: <AlignVerticalSpaceAround size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Whitening',
    description: 'Incubate standards great channels scalable benefits.',
    iconColor: '#165ba7', // Blue
    icon: <Sparkles size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Teeth Braces',
    description: 'Synthesize integrated schemas with networks.',
    iconColor: '#C187A4', // Pink
    icon: <SmilePlus size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Prosthesis',
    description: 'Revolutionize global sources through dental services.',
    iconColor: '#165ba7', // Blue
    icon: <Pill size={38} strokeWidth={1.5} />,
  },
  {
    title: 'Teeth Protection',
    description: 'Evisculate holistic innovation rather than centric data.',
    iconColor: '#C187A4', // Pink
    icon: <ShieldPlus size={38} strokeWidth={1.5} />,
  },
];

export default function ServicesGridSection() {
  return (
    <div className="absolute left-0 top-[6351px] w-full flex flex-col items-center bg-[#EDEDED] pt-16">
      <div className="w-[1320px] grid grid-cols-4 gap-x-10 gap-y-14">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-4 group">
            <div className="flex gap-3 items-start">
              <div 
                className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ color: service.iconColor }}
              >
                {service.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-[family-name:var(--font-poppins)] text-[17px] font-semibold text-[#28231F]">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[#777] text-[13px] leading-[1.6]">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center mb-[-27px]">
        <button className="flex h-[54px] items-center justify-center rounded-md bg-[#C187A4] px-8 font-[family-name:var(--font-poppins)] font-medium text-white hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(193,135,164,0.4)] text-base">
          View Dental Esthetique Solutions
        </button>
      </div>
    </div>
  );
}
