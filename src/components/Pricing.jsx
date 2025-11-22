import { motion } from 'framer-motion'

const tiers = [
  { name: 'Classic Cut', price: '$28' },
  { name: 'Skin Fade', price: '$35' },
  { name: 'Beard Trim', price: '$18' },
  { name: 'Cut + Beard', price: '$45' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Pricing
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tiers.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
            >
              <span className="text-base">{item.name}</span>
              <span className="text-lg font-medium">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
