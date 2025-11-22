import { Menu, Scissors } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Hours & Location', href: '#visit' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white">
                <Scissors size={18} />
              </span>
              <span className="text-sm tracking-widest text-white/80">STUDIO BARBER</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#visit"
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Book now
              </a>
            </nav>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-white/80"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-black"
                >
                  Book now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
