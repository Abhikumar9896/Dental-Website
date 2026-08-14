import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <div className="absolute left-0 top-0 z-[100] w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex w-[1200px] flex-col">
        
        {/* Top Row */}
        <div className="flex h-[90px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 -ml-16">
            <img src="/images/home/logo.svg" alt="Dental Esthetique" className="h-[45px] w-[42px]" />
            <span className="font-[family-name:var(--font-poppins)] text-[28px] font-bold text-[#1E73BE]">
              Dental<span className="text-[#D35B8F]">Esthetique</span>
            </span>
          </Link>

          {/* Info */}
          <div className="flex items-center gap-10 -mr-16">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#1E73BE] text-[#1E73BE]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14 2v6" />
                  <path d="M11 5h6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-poppins)] text-[14px] font-bold leading-none text-[#28231F]">
                  +91 98188 62265
                </span>
                <span className="mt-1 font-[family-name:var(--font-poppins)] text-[11px] text-gray-500">
                  24/7 Emergency Phone
                </span>
              </div>
            </div>

            {/* Clock */}
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#1E73BE] text-[#1E73BE]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-poppins)] text-[14px] font-bold leading-none text-[#28231F]">
                  Monday - Friday
                </span>
                <span className="mt-1 font-[family-name:var(--font-poppins)] text-[11px] text-gray-500">
                  9AM - 9PM
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Separator */}
        <div className="h-[1px] w-[calc(100%+8rem)] -ml-16 bg-gray-100" />

        {/* Bottom Row */}
        <div className="flex h-[64px] items-center justify-between">
          <nav className="flex items-center gap-8 -ml-16">
            <Link to="/about" className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold tracking-wide ${pathname === '/about' ? 'text-[#1E73BE]' : 'text-[#333] hover:text-[#1E73BE]'}`}>ABOUT US</Link>
            <Link to="/doctors" className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold tracking-wide ${pathname === '/doctors' ? 'text-[#1E73BE]' : 'text-[#333] hover:text-[#1E73BE]'}`}>DOCTOR PROFILE</Link>
            <Link to="/services" className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold tracking-wide ${pathname === '/services' ? 'text-[#1E73BE]' : 'text-[#333] hover:text-[#1E73BE]'}`}>TREATMENTS</Link>
            <Link to="/testimonials" className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold tracking-wide ${pathname === '/testimonials' ? 'text-[#1E73BE]' : 'text-[#333] hover:text-[#1E73BE]'}`}>TESTIMONIALS</Link>
            <Link to="/gallery" className={`font-[family-name:var(--font-poppins)] text-[13px] font-semibold tracking-wide ${pathname === '/gallery' ? 'text-[#1E73BE]' : 'text-[#333] hover:text-[#1E73BE]'}`}>GALLERY</Link>
          </nav>

          <div className="flex items-center gap-6 -mr-16">
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#1E73BE]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
