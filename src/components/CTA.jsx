import React from 'react'

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-700" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white/5 p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Deploy your server in seconds. Try Rackly today.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">Spin up production-grade infrastructure with a single click. Transparent pricing, instant performance.</p>
          <div className="mt-6">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}
