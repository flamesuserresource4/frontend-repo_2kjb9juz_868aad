import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black"></div>
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Minimal cuts. Maximum confidence.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-5 max-w-md text-base leading-relaxed text-white/70 md:text-lg"
            >
              A clean, modern barbershop focused on sharp lines, subtle fades, and effortless style. No fuss—just great hair.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#visit"
                className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Book an appointment
              </a>
              <a href="#services" className="text-sm text-white/70 hover:text-white">See services</a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
              <img
                src="https://images.unsplash.com/photo-1593702295094-22ad3b49d4ad?q=80&w=1640&auto=format&fit=crop"
                alt="Barber working on a clean fade"
                className="h-full w-full object-cover mix-blend-luminosity"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
