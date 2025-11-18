import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const primary = '#3A7BFF'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />

      {/* Accent gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,123,255,0.25),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(58,123,255,0.25),transparent_60%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Enterprise-grade performance
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Fast, Reliable & Affordable Hosting — Powered by <span className="text-blue-600">Rackly</span>.
            </h1>
            <p className="mt-5 max-w-xl text-slate-600 md:text-lg">
              Turbocharged infrastructure with NVMe storage, global network, and instant deployment. 99.99% uptime engineered for developers and teams.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
                View Plans
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-green-500" /> 99.99% uptime</div>
              <div>Instant provisioning</div>
              <div>DDoS protection</div>
            </div>
          </div>

          {/* 3D Spline */}
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-3xl border border-blue-200/40 bg-gradient-to-b from-white/60 to-white/20 shadow-[0_10px_40px_rgba(58,123,255,0.15)] backdrop-blur-sm" />
            <Spline
              scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft overlay for blending */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
