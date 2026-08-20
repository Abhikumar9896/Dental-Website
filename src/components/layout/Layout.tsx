import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import WhatsAppFloat from './../ui/WhatsAppFloat'
import ToastManager from '../ui/ToastManager'
import { StructuredData } from '../ui/StructuredData'
import { scrollToId } from '../../utils/scroll'

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '')
  if (!id) return

  let attempts = 0
  const maxAttempts = 40

  const tryScroll = () => {
    if (scrollToId(id)) return
    attempts += 1
    if (attempts < maxAttempts) {
      setTimeout(tryScroll, 50)
    }
  }

  setTimeout(tryScroll, 50)
}

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      scrollToHash(hash)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="relative flex min-h-screen flex-col">
      <StructuredData />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ToastManager />
    </div>
  )
}
