import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Visit() {
  return (
    <section id="visit" className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Visit us
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
          >
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <p>123 Studio Street, Suite B, Your City</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Clock size={18} />
              <div>
                <p>Tue–Fri: 10am – 7pm</p>
                <p>Sat: 9am – 4pm</p>
                <p>Sun–Mon: Closed</p>
              </div>
            </div>

            <a
              href="#"
              className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Get directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?q=80&w=1200&auto=format&fit=crop"
              alt="Barber chair"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
