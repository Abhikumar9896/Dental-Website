export const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>, phone: string) => {
  if (window.innerWidth >= 1024) {
    e.preventDefault()
    navigator.clipboard.writeText(phone)
    window.dispatchEvent(
      new CustomEvent('show-toast', {
        detail: { message: `Call the clinic at: ${phone}\n(Number copied to clipboard)` },
      }),
    )
  }
}
