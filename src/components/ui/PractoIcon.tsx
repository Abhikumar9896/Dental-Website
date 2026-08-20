export default function PractoIcon({ size = 24 }: { size?: number }) {
  return (
    <img
      src="/images/gallery/image.png"
      alt="Practo"
      width={size}
      height={size}
      className="object-contain rounded-lg"
    />
  )
}
