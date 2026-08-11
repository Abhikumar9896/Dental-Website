const IMG = '/images/home'

type StarRatingProps = {
  large?: boolean
  filled?: number
}

export default function StarRating({ large = false, filled = 5 }: StarRatingProps) {
  const src = large ? `${IMG}/star-lg.svg` : `${IMG}/star.svg`
  const size = large ? 40 : 24
  return (
    <div className="flex items-center" style={{ gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={src}
          alt=""
          width={size}
          height={size}
          style={i >= filled ? { opacity: 0.4, filter: 'grayscale(1) brightness(1.4)' } : undefined}
        />
      ))}
    </div>
  )
}
