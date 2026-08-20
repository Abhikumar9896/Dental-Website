import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import StarRating from '../ui/StarRating'
import GoogleIcon from '../ui/GoogleIcon'
import { Stagger, StaggerItem } from '../ui/Reveal'

const IMG = '/images/home'

const reviews = [
  {
    initial: 'S',
    name: 'Sushil Gupta',
    accent: '#165ba7',
    x: 87,
    text: 'Got my crown refixed and it was a very good experience. The doctor knew what they were doing and I hardly felt any pain during the procedure.',
  },
  {
    initial: 'R',
    name: 'Rishabh Mudgal',
    accent: '#D35B8F',
    x: 0,
    text: 'One of the best dentists in Sec 22, Noida. I would like to thank Dr. Abhinav for the treatment.',
  },
  {
    initial: 'A',
    name: 'Amar Aggarwal',
    accent: '#165ba7',
    x: 87,
    text: 'Dental Esthetique, Dr. Deepika and Dr. Abhinav made sure my wisdom tooth extraction and root canal went smoothly.',
  },
] as const

function ViewAllReviewsLink({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/testimonials"
      className={`inline-flex h-[44px] lg:h-[47px] w-auto px-5 lg:px-6 items-center justify-center rounded-md bg-[#C1497D] ${className}`}
      style={{ gap: 10 }}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
        <GoogleIcon size={16} />
      </div>
      <span className="font-fraunces text-lg lg:text-xl font-bold leading-none text-white">
        View All Reviews
      </span>
    </Link>
  )
}

export default function ReviewsSection() {
  return (
    <div className="relative left-0 top-0 flex h-auto w-full flex-col gap-8 px-5 py-10 lg:absolute lg:left-[117px] lg:top-[4315px] lg:h-[489px] lg:w-[1286px] lg:flex-row lg:gap-[200px] lg:px-0 lg:py-0 h-rev">
      <div className="flex w-full lg:w-[398px] flex-col justify-center pb-0 lg:pb-16 h-rev-l" style={{ gap: 24 }}>
        <Stagger gap={0.14}>
          <StaggerItem>
            <div className="relative flex flex-col" style={{ gap: 15 }}>
              <img
                src={`${IMG}/quotes.svg`}
                alt=""
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute left-[-90px] top-[-60px] z-0 h-[167px] w-[163px] h-rev-quotes"
              />
              <div className="relative z-10 flex flex-col pl-0 lg:pl-[55px] h-rev-in" style={{ gap: 15 }}>
                <h2 className="w-full lg:w-[287px] font-fraunces text-[28px] lg:text-[36px] font-semibold leading-tight lg:leading-none text-[#28231F]">
                  What our customers say
                </h2>
                <p className="w-full lg:w-[343px] font-poppins text-[14px] lg:text-xl font-normal leading-relaxed lg:leading-[1.2] tracking-[0.02em] lg:tracking-[0.04em] text-[rgba(43,35,31,0.7)]">
                  Real feedback from real patients, gathered from verified Google reviews across
                  every treatment offered.
                </p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>

            <div className="hidden lg:block h-rev-btn-d">
              <ViewAllReviewsLink className="ml-[55px] mt-8" />
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      <Stagger className="relative h-auto lg:h-[489px] w-full lg:w-[688px] flex flex-col gap-4 lg:block h-rev-r" gap={0.2}>
        {reviews.map((review, i) => (
          <StaggerItem
            key={review.name}
            x={0}
            className="relative lg:absolute flex h-auto lg:h-[147px] w-full lg:w-[601px] h-rev-card"
            style={
              {
                '--rev-left': `${review.x}px`,
                '--rev-top': `${i * 171}px`,
              } as CSSProperties
            }
          >
            <div
              className="h-auto lg:h-[147px] w-2.5 shrink-0 rounded-l self-stretch"
              style={{ backgroundColor: review.accent }}
            />
            <div className="flex h-auto min-h-0 lg:h-[147px] w-full lg:w-[591px] items-start rounded-r-md border border-[rgba(0,0,0,0.04)] bg-[#F9F4F1] px-4 py-4 lg:px-[23px] lg:py-[21px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
              <div className="flex w-full items-start gap-4 lg:gap-7">
                <div
                  className="flex h-12 w-12 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full lg:rounded-[36px]"
                  style={{ backgroundColor: review.accent }}
                >
                  <span className="font-fraunces text-[24px] lg:text-[32px] font-semibold leading-none text-white">
                    {review.initial}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-fraunces text-lg lg:text-xl font-semibold leading-none text-[rgba(40,35,31,0.82)]">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-3">
                      <StarRating />
                      <GoogleIcon size={20} />
                    </div>
                  </div>
                  <p className="font-poppins text-sm lg:text-base font-normal leading-snug tracking-[0.04em] text-[rgba(40,35,31,0.7)] break-words">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>


      <div className="flex w-full justify-start lg:hidden h-rev-btn-m">
        <ViewAllReviewsLink />
      </div>
    </div>
  )
}
