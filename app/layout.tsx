"use client"

import "./globals.css"
import Link from "next/link"
import { useState } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-black/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              DocuFrame
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/features"
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                Features
              </Link>

              <Link
                href="/case-studies"
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                Case Studies
              </Link>

              <Link
                href="/pricing"
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="/security"
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                Security
              </Link>

              <Link
                href="/contact"
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                Contact
              </Link>
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <Link href="/login">
                <button className="rounded-2xl border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900">
                  Login
                </button>
              </Link>

              <Link href="/signup">
                <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]">
                  Start Free Trial
                </button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1 md:hidden"
            >
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-zinc-800 bg-black md:hidden">
              <div className="flex flex-col gap-6 px-6 py-6">
                <Link href="/features" className="text-zinc-300">
                  Features
                </Link>

                <Link href="/case-studies" className="text-zinc-300">
                  Case Studies
                </Link>

                <Link href="/pricing" className="text-zinc-300">
                  Pricing
                </Link>

                <Link href="/security" className="text-zinc-300">
                  Security
                </Link>

                <Link href="/contact" className="text-zinc-300">
                  Contact
                </Link>

                <div className="flex gap-3 pt-4">
                  <Link href="/login">
                    <button className="rounded-2xl border border-zinc-700 px-4 py-2 text-white">
                      Login
                    </button>
                  </Link>

                  <Link href="/signup">
                    <button className="rounded-2xl bg-white px-4 py-2 font-semibold text-black">
                      Start Free Trial
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}