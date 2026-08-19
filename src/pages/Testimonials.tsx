import { useState, useRef, useEffect } from 'react'
import TestimonialHeroSection from '../components/testimonials/TestimonialHeroSection'
import { googleReviews } from '../data/reviews'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import GoogleIcon from '../components/ui/GoogleIcon'
import ReviewCard from '../components/ui/ReviewCard'

const VIDEO_BASE = '/images/testimonails/optimized'

const videoFiles = [
  'video-01',
  'video-02',
  'video-03',
  'video-04',
  'video-05',
  'video-06',
  'video-07',
  'video-08',
]

function VideoCard({
  id,
  isActive = true,
  shouldLoad = false,
  onCardClick,
  blurAmount = 'none',
}: {
  id: string
  isActive?: boolean
  /** Only attach src when nearby — stops live from downloading every video on page load */
  shouldLoad?: boolean
  onCardClick?: () => void
  blurAmount?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const poster = `${VIDEO_BASE}/${id}.webp`
  const src = `${VIDEO_BASE}/${id}.mp4`

  useEffect(() => {
    if (!isActive && isPlaying) {
      videoRef.current?.pause()
      setIsPlaying(false)
    }
  }, [isActive, isPlaying])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (shouldLoad && el.dataset.loaded !== '1') {
      el.src = src
      el.dataset.loaded = '1'
      el.load()
    }
  }, [shouldLoad, src])

  const handleInteraction = () => {
    if (!isActive) {
      onCardClick?.()
      return
    }
    const el = videoRef.current
    if (!el) return
    if (!el.src) {
      el.src = src
      el.dataset.loaded = '1'
      el.load()
    }
    if (isPlaying) {
      el.pause()
      setIsPlaying(false)
    } else {
      void el.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }

  return (
    <div
      className={`relative group rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] bg-black aspect-[9/16] cursor-pointer w-full h-full border-[4px] border-white transition-all duration-300 ${isActive ? 'ring-4 ring-[#165ba7]/20 shadow-[0_20px_50px_rgba(22,91,167,0.2)]' : ''}`}
      onClick={handleInteraction}
    >
      <video
        ref={videoRef}
        poster={poster}
        preload="none"
        className={`w-full h-full object-cover transition-opacity duration-500 ${isActive ? 'opacity-90 group-hover:opacity-100' : 'opacity-70'}`}
        style={{ filter: blurAmount, transition: 'filter 0.5s ease' }}
        loop
        playsInline
        muted={!isPlaying}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

      {!isPlaying && isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none">
          <div className="w-16 h-16 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

function CoverflowCarousel({ videos }: { videos: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % videos.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length)

  const getOffset = (index: number) => {
    let offset = index - activeIndex
    if (offset > Math.floor(videos.length / 2)) offset -= videos.length
    else if (offset < -Math.floor(videos.length / 2)) offset += videos.length
    return offset
  }

  return (
    <div
      ref={rootRef}
      className="relative w-full max-w-[1200px] mx-auto h-[460px] sm:h-[520px] md:h-[590px] lg:h-[640px] flex items-center justify-center overflow-visible pt-4 pb-0"
    >
      {videos.map((id, index) => {
        const offset = getOffset(index)
        const absOffset = Math.abs(offset)

        if (absOffset > 2) return null

        let transform = ''
        let zIndex = 50 - absOffset * 10
        let opacity = 1
        let filter = 'none'

        if (offset === 0) {
          transform = 'translateX(0) scale(1)'
        } else if (offset === 1) {
          transform = 'translateX(85%) scale(0.85)'
          opacity = 0.8
          filter = 'blur(2px)'
        } else if (offset === -1) {
          transform = 'translateX(-85%) scale(0.85)'
          opacity = 0.8
          filter = 'blur(2px)'
        } else if (offset === 2) {
          transform = 'translateX(160%) scale(0.7)'
          opacity = 0.5
          filter = 'blur(4px)'
        } else if (offset === -2) {
          transform = 'translateX(-160%) scale(0.7)'
          opacity = 0.5
          filter = 'blur(4px)'
        }

        return (
          <div
            key={id}
            className="absolute transition-all duration-700 ease-out w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px]"
            style={{ transform, zIndex, opacity, height: 'auto' }}
          >
            <VideoCard
              id={id}
              isActive={offset === 0}
              shouldLoad={inView && absOffset === 0}
              onCardClick={() => setActiveIndex(index)}
              blurAmount={filter}
            />
          </div>
        )
      })}

      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous video"
        className="absolute left-4 md:left-12 z-50 p-3 md:p-4 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white hover:scale-110 transition-all border border-gray-100"
      >
        <svg
          className="w-6 h-6 text-[#111827]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next video"
        className="absolute right-4 md:right-12 z-50 p-3 md:p-4 bg-white/80 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white hover:scale-110 transition-all border border-gray-100"
      >
        <svg
          className="w-6 h-6 text-[#111827]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="w-full bg-[#FAF8F9] font-poppins overflow-x-hidden">
      <div className="relative mx-auto flex w-[1440px] flex-col items-center pb-0 h-canvas">
        <TestimonialHeroSection />

        <div id="reviews" className="relative mt-8 flex w-[1200px] flex-col z-10 h-tst-in">
          <Reveal
            y={30}
            duration={0.7}
            className="flex items-center justify-between bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 mb-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full z-10 relative">
              <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center justify-center">
                  <GoogleIcon size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#111827] font-bold text-[22px] font-poppins tracking-tight leading-none mb-1">
                    Google
                  </span>
                  <span className="text-[#6B7280] text-[14px] font-medium">Customer Reviews</span>
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-[50px] bg-gray-200" />

              <div className="flex items-center gap-5">
                <h2 className="font-poppins text-[52px] font-bold text-[#111827] leading-none tracking-tight h-tst-rate">
                  4.8
                </h2>
                <div className="flex flex-col gap-1.5">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className={`w-[22px] h-[22px] ${i === 5 ? 'text-[#F4B400] fill-[#F4B400] opacity-40' : 'text-[#F4B400] fill-[#F4B400]'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#6B7280] text-[13.5px] font-medium">Out of 5 stars</span>
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-[50px] bg-gray-200" />

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#111827] font-bold text-[28px] font-poppins leading-none">
                    200+
                  </span>
                  <div className="flex items-center justify-center translate-y-[1px]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                        fill="#34A853"
                      />
                      <path
                        d="M10.5 15.5L7 12L8.41 10.59L10.5 12.67L15.59 7.58L17 9L10.5 15.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-[#6B7280] font-medium text-[14px]">Verified Reviews</span>
              </div>

              <div className="md:ml-auto">
                <a
                  href="https://www.google.com/maps/place/Dental+Esthetique/@28.5903527,77.3452027,15z/data=!4m16!1m9!3m8!1s0x390ce5081fc59025:0x8c9bf39b230a1480!2sDental+Esthetique!8m2!3d28.5904931!4d77.3451883!9m1!1b1!16s%2Fg%2F11c1rt420p!3m5!1s0x390ce5081fc59025:0x8c9bf39b230a1480!8m2!3d28.5904931!4d77.3451883!16s%2Fg%2F11c1rt420p?hl=en&entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-[#1A73E8] text-white rounded-full font-semibold text-[15.5px] hover:bg-[#1557B0] transition-all duration-300 shadow-[0_4px_14px_0_rgba(26,115,232,0.39)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.23)] flex items-center gap-3 group transform hover:-translate-y-0.5"
                >
                  Write a Review
                  <span className="bg-white/20 flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <div
            id="patient-stories"
            className="w-screen relative left-1/2 -translate-x-1/2 pt-16 pb-16 overflow-hidden flex flex-col items-center"
          >
            <SectionHeading
              pill="Patient Testimonials"
              align="center"
              title={
                <>
                  Trusted by Patients from Every{' '}
                  <span className="text-[#165ba7]">Walk of Life</span>
                </>
              }
              titleClassName="font-poppins text-[48px] font-semibold leading-[1.1] max-w-[800px] h-tst-sechead"
              description="Learn why patients across Noida trust Dental Esthétique for safe, comfortable, and long-lasting dental care. Read their genuine stories and see how our personalized treatments have transformed their smiles and restored their confidence."
              className="mb-16 relative z-10 px-4"
            />

            <div
              className="flex flex-col gap-6 relative w-full left-1/2 -translate-x-1/2 flex-nowrap"
              style={{ width: '200vw' }}
            >
              <div className="flex w-max animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused] gap-6 px-3">
                {[
                  ...googleReviews.slice(0, Math.ceil(googleReviews.length / 2)),
                  ...googleReviews.slice(0, Math.ceil(googleReviews.length / 2)),
                ].map((review, idx) => (
                  <ReviewCard key={`row1-${idx}`} review={review} />
                ))}
              </div>

              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
                {[
                  ...googleReviews.slice(Math.ceil(googleReviews.length / 2)),
                  ...googleReviews.slice(Math.ceil(googleReviews.length / 2)),
                ].map((review, idx) => (
                  <ReviewCard key={`row2-${idx}`} review={review} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#1A73E8] py-10 px-3 md:px-4 lg:px-8 xl:px-12 mb-16">
            <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[48px] pt-10 pb-6 px-6 md:px-12 relative flex flex-col items-center shadow-lg">
              <SectionHeading
                pill="Video Testimonials"
                pillColor="blue"
                align="center"
                title="Hear From Our Patients"
                titleClassName="font-poppins text-[42px] font-semibold max-w-[800px]"
                description="Watch real stories from our patients as they share their experiences at Dental Esthétique and the difference a healthy, confident smile has made in their lives."
                className="mb-4 relative z-10"
              />

              <div className="w-full max-w-[1200px] mx-auto pb-8">
                <CoverflowCarousel videos={videoFiles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
