export default function VerticalDoctorCard({
  name,
  role,
  description,
  imgSrc,
  colorScheme = 'blue',
  className = ''
}: {
  name: string
  role: string
  description: string
  imgSrc?: string
  colorScheme?: 'blue' | 'pink'
  className?: string
}) {
  return (
    <div className={`flex flex-col h-full w-[300px] group overflow-hidden bg-[#FAFAFA] shadow-sm hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Image Section */}
      <div className="relative w-full h-[280px] bg-[#f4f4f4] overflow-hidden">
        {colorScheme === 'blue' ? (
          <div className="absolute top-[20px] left-[20px] w-[20px] h-[20px] bg-[#165ba7] z-10"></div>
        ) : (
          <div className="absolute top-[20px] left-[20px] w-[24px] h-[24px] border-[2px] border-[#C187A4] z-10"></div>
        )}
        <img 
          src={imgSrc || '/images/home/doctor.png'} 
          alt={name} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Overlays */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
        
        <div className="absolute bottom-[20px] left-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20">
          <button className="flex items-center gap-1.5 bg-gradient-to-r from-[#B07399] to-[#91587a] text-white px-4 py-2 rounded-sm font-[family-name:var(--font-poppins)] text-[12px] font-medium shadow-lg hover:shadow-xl transition-shadow">
            Read More
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 right-0 bg-[#333] text-white px-2 py-0.5 text-[11px] font-[family-name:var(--font-poppins)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {name}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-[24px] flex-grow">
        <h3 className="font-[family-name:var(--font-poppins)] text-[22px] font-semibold text-[#165ba7]">
          {name}
        </h3>
        <p className="font-[family-name:var(--font-poppins)] text-[13px] font-medium text-[#333] mt-1">
          {role}
        </p>
        
        <div className="w-[30px] h-[2px] bg-[#C187A4] mt-4 mb-4"></div>

        <p className="font-[family-name:var(--font-poppins)] text-[12px] leading-[1.6] text-gray-500 mb-5">
          {description}
        </p>

        <div className="mt-auto pt-3">
          <div className="flex items-center gap-2">
            {/* Social Icons */}
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#165ba7] hover:bg-[#165ba7] hover:text-white transition-colors cursor-pointer">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#165ba7] hover:bg-[#165ba7] hover:text-white transition-colors cursor-pointer">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#165ba7] hover:bg-[#165ba7] hover:text-white transition-colors cursor-pointer">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
