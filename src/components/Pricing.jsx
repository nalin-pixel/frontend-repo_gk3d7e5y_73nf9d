import React from 'react'

const plans = {
  VPS: [
    { name: 'Starter', price: 6, specs: ['1 vCPU', '1 GB RAM', '20 GB NVMe', '1 TB Bandwidth'] },
    { name: 'Pro', price: 12, specs: ['2 vCPU', '2 GB RAM', '40 GB NVMe', '2 TB Bandwidth'] },
    { name: 'Ultra', price: 24, specs: ['4 vCPU', '4 GB RAM', '80 GB NVMe', '4 TB Bandwidth'] },
  ],
  Minecraft: [
    { name: 'Stone', price: 5, specs: ['2 GB RAM', 'NVMe Storage', 'Paper/Forge support'] },
    { name: 'Iron', price: 10, specs: ['4 GB RAM', 'Free Backups', 'DDoS Protection'] },
    { name: 'Diamond', price: 20, specs: ['8 GB RAM', 'Priority CPU', 'Modpacks ready'] },
  ],
  'Game Servers': [
    { name: 'Lite', price: 8, specs: ['1 vCPU', '2 GB RAM', 'Low-latency network'] },
    { name: 'Gamer', price: 16, specs: ['2 vCPU', '4 GB RAM', 'Global locations'] },
    { name: 'Pro', price: 28, specs: ['4 vCPU', '8 GB RAM', 'Premium bandwidth'] },
  ],
}

function Card({ title, price, specs, featured }) {
  return (
    <div className={`relative rounded-2xl border ${featured ? 'border-blue-400' : 'border-blue-100'} bg-white p-6 shadow-[0_10px_30px_rgba(58,123,255,0.12)]`}>
      {featured && (
        <div className="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-md">Popular</div>
      )}
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-slate-900">${price}</span>
        <span className="pb-1 text-sm text-slate-500">/mo</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {specs.map((s) => (
          <li key={s} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{s}
          </li>
        ))}
      </ul>
      <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700">Choose Plan</a>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Pick the plan that matches your workload. Scale up anytime.</p>
        </div>

        {Object.entries(plans).map(([group, items]) => (
          <div key={group} className="mb-12">
            <h3 className="mb-5 text-xl font-semibold text-slate-900">{group}</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p, idx) => (
                <Card key={p.name} title={p.name} price={p.price} specs={p.specs} featured={idx === 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
