import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle.tsx'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Dental Street, New York, NY 10001' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'info@dentalcare.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 6PM' },
]

export default function Contact() {
  return (
    <section className="py-20 pt-[160px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Us" subtitle="Get in touch with us" />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <item.icon className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium text-gray-900">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
