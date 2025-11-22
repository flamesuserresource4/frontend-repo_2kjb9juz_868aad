import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Visit from './components/Visit'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* subtle texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(800px_circle_at_100%_0%,rgba(255,255,255,0.04),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Pricing />
        <Visit />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
            <p>© {new Date().getFullYear()} Studio Barber. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#visit" className="hover:text-white">Visit</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
