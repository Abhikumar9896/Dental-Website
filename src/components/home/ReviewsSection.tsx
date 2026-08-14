import { Link } from 'react-router-dom'
import StarRating from '../ui/StarRating'

const IMG = '/images/home'

const reviews = [
  {
    initial: 'S',
    name: 'Sushil Gupta',
    accent: '#C8C3C0',
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
    accent: '#C8C3C0',
    x: 87,
    text: 'Dental esthetique, Dr Deepika and Dr Abhinav made sure my wisdom tooth extraction and root canal went smoothly.',
  },
] as const

export default function ReviewsSection() {
  return (
    <div
      className="absolute left-[117px] top-[4336px] flex h-[489px] w-[1206px]"
      style={{ gap: 120 }}
    >
      <div className="flex w-[398px] flex-col" style={{ gap: 24 }}>
        <div className="relative flex flex-col" style={{ gap: 15 }}>
          <img
            src={`${IMG}/quotes.svg`}
            alt=""
            className="pointer-events-none absolute left-[-90px] top-[-60px] z-0 h-[167px] w-[163px]"
          />
          <div className="relative z-10 flex flex-col pl-[55px]" style={{ gap: 15 }}>
            <h2 className="w-[287px] font-[family-name:var(--font-fraunces)] text-[36px] font-semibold leading-none text-[#28231F]">
              What our customers says
            </h2>
            <p className="w-[343px] font-[family-name:var(--font-poppins)] text-xl font-normal leading-[1.2] tracking-[0.04em] text-[rgba(43,35,31,0.7)]">
              Real feedback from real patients, gathered from verified Google reviews across every
              treatment offered.
            </p>
          </div>
        </div>
        <Link
          to="/about"
          className="ml-[55px] inline-flex h-[47px] w-[200px] items-center justify-center rounded-md bg-[#C187A4]"
          style={{ padding: '11px 16px', gap: 10 }}
        >
          <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold leading-none text-white">
            View All Reviews
          </span>
        </Link>
      </div>

      <div className="relative h-[489px] w-[688px]">
        {reviews.map((review, i) => (
          <div
            key={review.name}
            className="absolute flex h-[147px] w-[601px]"
            style={{ left: review.x, top: i * 171 }}
          >
            <div
              className="h-[147px] w-2.5 shrink-0 rounded-l"
              style={{ backgroundColor: review.accent }}
            />
            <div className="flex h-[147px] w-[591px] items-start rounded-r-xl border border-[rgba(0,0,0,0.04)] bg-[#F9F4F1] px-[23px] py-[21px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
              <div className="flex w-full items-start" style={{ gap: 28 }}>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[36px] bg-[#C187A4]">
                  <span className="font-[family-name:var(--font-fraunces)] text-[32px] font-semibold leading-none text-white">
                    {review.initial}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col" style={{ gap: 8 }}>
                  <div className="flex items-center justify-between" style={{ gap: 4 }}>
                    <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-none text-[rgba(40,35,31,0.82)]">
                      {review.name}
                    </p>
                    <StarRating />
                  </div>
                  <p className="font-[family-name:var(--font-poppins)] text-base font-normal leading-snug tracking-[0.04em] text-[rgba(40,35,31,0.7)]">
                    {review.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
