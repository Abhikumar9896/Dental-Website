import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function ToastManager() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const handleShowToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string }>
      setMessage(customEvent.detail.message)
      setTimeout(() => {
        setMessage(null)
      }, 4000)
    }

    window.addEventListener('show-toast', handleShowToast)
    return () => window.removeEventListener('show-toast', handleShowToast)
  }, [])

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-xl border border-gray-100"
        >
          <CheckCircle2 className="w-5 h-5 text-green-500" />
          <span className="font-poppins text-[14px] font-medium text-gray-800 whitespace-pre-line">
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
