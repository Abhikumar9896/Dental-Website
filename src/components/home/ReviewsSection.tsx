import { Link } from 'react-router-dom'
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
    text: 'Got my crown refixed and it was a very good experience the doctor knew what they were doing and I hardly felt any pain during the procedure.',
  },
  {
    initial: 'R',
    name: 'Rishabh Mudgal',
    accent: '#C187A4',
    x: 0,
    text: 'One of the best dentist in sec 22 noida.I would like to thank Dr Abhinav for the treatment',
  },
  {
    initial: 'A',
    name: 'Amar Aggarwal',
    accent: '#165ba7',
    x: 87,
    text: 'Dental esthetique, Dr Deepika and Dr Abhinav made sure my wisdom tooth extraction and root canal went smoothly.',
  },
] as const

export default function ReviewsSection() {
  return (
    <div
      className="absolute left-[117px] top-[4315px] flex h-[489px] w-[1286px]"
      style={{ gap: 200 }}
    >
      <div className="flex w-[398px] flex-col justify-center pb-16" style={{ gap: 24 }}>
        <Stagger gap={0.14}>
          <StaggerItem>
            <div className="relative flex flex-col" style={{ gap: 15 }}>
              <img
                src={`${IMG}/quotes.svg`}
                alt=""
                className="pointer-events-none absolute left-[-90px] top-[-60px] z-0 h-[167px] w-[163px]"
              />
              <div className="relative z-10 flex flex-col pl-[55px]" style={{ gap: 15 }}>
                <h2 className="w-[287px] font-fraunces text-[36px] font-semibold leading-none text-[#28231F]">
                  What our customers says
                </h2>
                <p className="w-[343px] font-poppins text-xl font-normal leading-[1.2] tracking-[0.04em] text-[rgba(43,35,31,0.7)]">
                  Real feedback from real patients, gathered from verified Google reviews across
                  every treatment offered.
                </p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <Link
              to="/about"
              className="ml-[55px] inline-flex h-[47px] w-auto px-6 items-center justify-center rounded-md bg-[#C187A4]"
              style={{ gap: 10 }}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <GoogleIcon size={16} />
              </div>
              <span className="font-fraunces text-xl font-bold leading-none text-white">
                View All Reviews
              </span>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>

      <Stagger className="relative h-[489px] w-[688px]" gap={0.2}>
        {reviews.map((review, i) => (
          <StaggerItem
            key={review.name}
            x={0}
            className="absolute flex h-[147px] w-[601px]"
            style={{ left: review.x, top: i * 171 }}
          >
            <div
              className="h-[147px] w-2.5 shrink-0 rounded-l"
              style={{ backgroundColor: review.accent }}
            />
            <div className="flex h-[147px] w-[591px] items-start rounded-r-md border border-[rgba(0,0,0,0.04)] bg-[#F9F4F1] px-[23px] py-[21px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
              <div className="flex w-full items-start" style={{ gap: 28 }}>
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[36px]"
                  style={{ backgroundColor: review.accent }}
                >
                  <span className="font-fraunces text-[32px] font-semibold leading-none text-white">
                    {review.initial}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col" style={{ gap: 8 }}>
                  <div className="flex items-center justify-between" style={{ gap: 4 }}>
                    <p className="font-fraunces text-xl font-semibold leading-none text-[rgba(40,35,31,0.82)]">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-3">
                      <StarRating />
                      <GoogleIcon size={20} />
                    </div>
                  </div>
                  <p className="font-poppins text-base font-normal leading-snug tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}
