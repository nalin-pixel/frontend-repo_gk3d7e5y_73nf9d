import React from 'react'
import { HardDrive, Headphones, ShieldCheck, Zap, Globe2, PanelTop } from 'lucide-react'

const reasons = [
  { icon: HardDrive, text: 'Ultra-fast NVMe storage' },
  { icon: Headphones, text: '24/7 support' },
  { icon: ShieldCheck, text: 'Free DDoS protection' },
  { icon: Zap, text: 'Instant deployment' },
  { icon: Globe2, text: 'Global network' },
  { icon: PanelTop, text: 'Powerful control panel' },
]

export default function WhyChoose() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Why choose Rackly</h2>
          <p className="mt-3 text-slate-600">Built for speed, reliability, and a developer-first experience.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_10px_30px_rgba(58,123,255,0.08)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-5 w-5" /></div>
              <p className="font-medium text-slate-800">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
