import React from 'react'

const testimonials = [
  {
    name: 'Liam Carter',
    role: 'Game Studio Founder',
    quote: 'We moved our fleet to Rackly and cut latency by 30%. The deployment speed is mind-blowing.',
  },
  {
    name: 'Ava Thompson',
    role: 'Minecraft Community Owner',
    quote: 'Our servers hit 20x player spikes and stayed buttery smooth. The panel is super friendly.',
  },
  {
    name: 'Ethan Park',
    role: 'DevOps Lead',
    quote: 'Reliable, transparent pricing and excellent support. Exactly what our teams needed.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Loved by builders</h2>
          <p className="mt-3 text-slate-600">Real teams shipping real projects on Rackly.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_10px_30px_rgba(58,123,255,0.1)]">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-slate-900">{t.name}</div>
              <div className="text-xs text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
