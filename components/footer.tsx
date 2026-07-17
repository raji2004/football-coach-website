"use client"

import { useEffect, useRef } from "react"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.3 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-background to-secondary/40 text-foreground border-t-2 border-border py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.jpeg"
                alt="Coach logo"
                className="w-12 h-12 rounded-lg object-cover object-center shadow-lg ring-2 ring-accent/40"
              />
              <h3 className="text-2xl font-black text-foreground tracking-tight">COACH</h3>
            </div>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Elite football coaching for all levels and ages.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-8 text-foreground text-lg tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  href="/#about"
                  className="hover:text-primary transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-primary transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#positions"
                  className="hover:text-primary transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  Positions
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-primary transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-foreground text-lg tracking-wide">FOLLOW US</h4>
            <div className="space-y-4 text-muted-foreground">
              <a
                href="https://instagram.com/abdullah_oladega"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold hover:text-primary transition"
              >
                Instagram: @abdullah_oladega
              </a>
              <a
                href="https://tiktok.com/@abdullah_oladega"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold hover:text-primary transition"
              >
                TikTok: @abdullah_oladega
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12 text-center text-muted-foreground font-semibold">
          <p className="text-sm sm:text-base text-balance px-2">&copy; 2025 Coach Pro. All rights reserved. | Whittington Park</p>
        </div>
      </div>
    </footer>
  )
}
