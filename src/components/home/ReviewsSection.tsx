import { Link } from 'react-router-dom'
import StarRating from '../ui/StarRating'

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
          className="ml-[55px] inline-flex h-[47px] w-auto px-6 items-center justify-center rounded-md bg-[#C187A4]"
          style={{ gap: 10 }}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <svg width="16" height="16" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>
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
            <div className="flex h-[147px] w-[591px] items-start rounded-r-md border border-[rgba(0,0,0,0.04)] bg-[#F9F4F1] px-[23px] py-[21px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
              <div className="flex w-full items-start" style={{ gap: 28 }}>
                <div 
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[36px]"
                  style={{ backgroundColor: review.accent }}
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-[32px] font-semibold leading-none text-white">
                    {review.initial}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col" style={{ gap: 8 }}>
                  <div className="flex items-center justify-between" style={{ gap: 4 }}>
                    <p className="font-[family-name:var(--font-fraunces)] text-xl font-semibold leading-none text-[rgba(40,35,31,0.82)]">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-3">
                      <StarRating />
                      <svg width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                    </div>
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
