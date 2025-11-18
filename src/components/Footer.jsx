import React from 'react'
import { Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-blue-700">
      <div className="mx-auto max-w-7xl px-6 py-12 text-blue-50">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white font-bold">R</div>
            <div>
              <div className="text-lg font-semibold">Rackly</div>
              <div className="text-xs text-blue-100/80">Fast. Reliable. Affordable.</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Status</a>
          </div>

          <div className="flex items-center gap-4">
            <a aria-label="Twitter" href="#" className="rounded-lg p-2 hover:bg-white/10"><Twitter className="h-5 w-5" /></a>
            <a aria-label="GitHub" href="#" className="rounded-lg p-2 hover:bg-white/10"><Github className="h-5 w-5" /></a>
            <a aria-label="Email" href="mailto:hello@rackly.io" className="rounded-lg p-2 hover:bg-white/10"><Mail className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-blue-100/80">
          © {new Date().getFullYear()} Rackly. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
