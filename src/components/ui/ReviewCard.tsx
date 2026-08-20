import GoogleIcon from './GoogleIcon'
import PractoIcon from './PractoIcon'
import type { googleReviews } from '../../data/reviews'

export default function ReviewCard({
  review,
  platform = 'google',
}: {
  review: Omit<(typeof googleReviews)[number], 'image'> & { image?: string }
  platform?: 'google' | 'practo'
}) {
  return (
    <div className="flex h-[380px] w-[340px] flex-none cursor-default flex-col justify-between overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F3F4F6] p-6 transition-colors hover:bg-[#E5E7EB] h-tst-rcard">
      <div className="min-h-0 flex-1 overflow-hidden">
        <div className="mb-4 flex items-start justify-between">
          <svg
            className="h-8 w-8 shrink-0 text-[#4353FF] opacity-70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
          {platform === 'practo' ? <PractoIcon size={20} /> : <GoogleIcon size={20} />}
        </div>
        <p className="text-[14px] font-medium leading-relaxed text-[#374151] h-tst-rcard-text">
          {review.text}
        </p>
      </div>
      <div className="mt-4 flex shrink-0 items-center gap-3 lg:gap-4 h-tst-rcard-foot">
        {review.image ? (
          <img
            src={review.image}
            alt={review.name}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm h-tst-rcard-dp"
          />
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] text-[#9CA3AF] h-tst-rcard-dp">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[14px] font-semibold leading-tight text-[#111827]">
            {review.name}
          </span>
          {review.time && <span className="mt-0.5 text-[12px] text-gray-500">{review.time}</span>}
        </div>
      </div>
    </div>
  )
}
