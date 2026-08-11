const IMG = '/images/home'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919818862265"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      style={{ filter: 'drop-shadow(0px 4px 24.5px rgba(50, 217, 81, 1))' }}
      aria-label="WhatsApp"
    >
      <img src={`${IMG}/whatsapp-345821.png`} alt="WhatsApp" width={52} height={55} />
    </a>
  )
}
