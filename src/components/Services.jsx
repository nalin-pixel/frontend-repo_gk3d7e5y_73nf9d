import React from 'react'
import { Server, Gamepad2, Cuboid, Globe } from 'lucide-react'

const services = [
  {
    title: 'VPS Hosting',
    icon: Server,
    features: ['NVMe SSDs', 'DDoS protection', 'Instant setup'],
  },
  {
    title: 'Minecraft Servers',
    icon: Cuboid,
    features: ['High TPS', 'Modpack support', 'Easy panel'],
  },
  {
    title: 'Game Servers',
    icon: Gamepad2,
    features: ['Scalable compute', 'Low latency', 'Global network'],
  },
  {
    title: 'Web Hosting',
    icon: Globe,
    features: ['Simple', 'Fast', 'Secure'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Powerful Services</h2>
          <p className="mt-3 text-slate-600">Everything you need to deploy and scale with confidence.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, icon: Icon, features }) => (
            <div key={title} className="group rounded-2xl border border-blue-200 bg-white p-6 shadow-[0_10px_30px_rgba(58,123,255,0.08)] transition hover:shadow-[0_20px_50px_rgba(58,123,255,0.15)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none mt-6 h-0.5 w-full scale-x-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition-all group-hover:scale-x-100 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
