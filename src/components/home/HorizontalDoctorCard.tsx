export default function HorizontalDoctorCard({
  name,
  role,
  description,
  imgSrc,
  colorScheme = 'blue',
  imagePosition = 'left',
  imgObjectPosition = 'object-center',
  imgClassName = '',
  bulletPoints = [],
  className = ''
}: {
  name: string
  role: string
  description: string
  imgSrc?: string
  colorScheme?: 'blue' | 'pink'
  imagePosition?: 'left' | 'right'
  imgObjectPosition?: string
  imgClassName?: string
  bulletPoints?: string[]
  className?: string
}) {
  const imageSection = (
    <div className="relative w-[500px] min-h-[320px] bg-[#f4f4f4] overflow-hidden shrink-0 group">
      {colorScheme === 'blue' ? (
        <div className="absolute top-[20px] left-[20px] w-[20px] h-[20px] bg-[#165ba7] z-10"></div>
      ) : (
        <div className="absolute top-[20px] left-[20px] w-[24px] h-[24px] border-[2px] border-[#C187A4] z-10"></div>
      )}
      <img 
        src={imgSrc || '/images/home/doctor.png'} 
        alt={name} 
        className={`absolute inset-0 w-full h-full object-cover ${imgObjectPosition} ${imgClassName} transition-transform duration-700 group-hover:scale-105`}
      />

      {/* Hover Overlays */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
      
      <div className="absolute bottom-[20px] left-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20">
        <button className="flex items-center gap-1.5 bg-gradient-to-r from-[#B07399] to-[#91587a] text-white px-5 py-2.5 rounded-sm font-[family-name:var(--font-poppins)] text-[14px] font-medium shadow-lg hover:shadow-xl transition-shadow">
          Read More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-0 right-0 bg-[#333] text-white px-3 py-1 text-[12px] font-[family-name:var(--font-poppins)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        {name}
      </div>
    </div>
  )

  const bgColor = 'bg-[#FAFAFA]'

  const contentSection = (
    <div className={`flex flex-col p-[40px] flex-grow justify-center ${bgColor}`}>
      <h3 className="font-[family-name:var(--font-poppins)] text-[32px] font-semibold text-[#165ba7]">
        {name}
      </h3>
      <p className="font-[family-name:var(--font-poppins)] text-[16px] font-medium text-[#333] mt-2">
        {role}
      </p>
      
      <div className="w-[50px] h-[2px] bg-[#C187A4] mt-5 mb-5"></div>

      <p className="font-[family-name:var(--font-poppins)] text-[15px] leading-[1.7] text-gray-500 mb-6 max-w-[700px]">
        {description}
      </p>

      {bulletPoints && bulletPoints.length > 0 && (
        <ul className="mb-8 space-y-2">
          {bulletPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5 font-[family-name:var(--font-poppins)] text-[14px] text-gray-600">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colorScheme === 'blue' ? 'bg-[#165ba7]' : 'bg-[#C187A4]'}`}></span>
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-col items-start">
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#165ba7] hover:bg-[#165ba7] hover:text-white transition-colors cursor-pointer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#165ba7] hover:bg-[#165ba7] hover:text-white transition-colors cursor-pointer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#165ba7] hover:bg-[#165ba7] hover:text-white transition-colors cursor-pointer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#C187A4] hover:text-[#a86a8a] font-[family-name:var(--font-poppins)] text-[13px] font-bold cursor-pointer group/btn transition-colors mt-6">
          Book Appointment
          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`flex w-[1250px] shadow-sm hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {imagePosition === 'left' ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  )
}
