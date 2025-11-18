import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-[0_10px_20px_rgba(58,123,255,0.35)]">R</div>
            <span className="text-lg font-semibold tracking-tight">Rackly</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#why" className="hover:text-slate-900">Why Rackly</a>
            <a href="#" className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-700 hover:bg-blue-100">Sign In</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <div id="why"><WhyChoose /></div>
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
