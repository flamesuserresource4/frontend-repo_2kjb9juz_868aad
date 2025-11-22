import { motion } from 'framer-motion'
import { Scissors, Sparkles, Beard, Clock } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Classic Cut',
    desc: 'Tailored to your face, clean edges, blow-dry finish.',
  },
  {
    icon: Beard,
    title: 'Beard Trim',
    desc: 'Line-up, shape, and conditioning for a sharp look.',
  },
  {
    icon: Sparkles,
    title: 'Skin Fade',
    desc: 'Seamless blend with crisp detail around the edges.',
  },
  {
    icon: Clock,
    title: 'Express Cut',
    desc: 'Quick tidy-up for in-between appointments.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Services
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
