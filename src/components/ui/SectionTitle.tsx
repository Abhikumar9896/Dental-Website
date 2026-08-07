import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </motion.div>
  )
}
