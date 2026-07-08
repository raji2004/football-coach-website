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
      className="bg-gradient-to-b from-white to-gray-50 text-gray-900 border-t-2 border-gray-200 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center rounded-lg font-black text-xl shadow-lg">
                ⚽
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">COACH</h3>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed">
              Elite football coaching for all levels and ages.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-8 text-gray-900 text-lg tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-600 transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#positions"
                  className="hover:text-teal-600 transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  Positions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-600 transition font-semibold hover:translate-x-2 inline-block duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-gray-900 text-lg tracking-wide">FOLLOW US</h4>
            <div className="space-y-4 text-gray-600">
              <a
                href="https://instagram.com/abdullah_oladega"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold hover:text-teal-600 transition"
              >
                Instagram: @abdullah_oladega
              </a>
              <a
                href="https://tiktok.com/@abdullah_oladega"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold hover:text-teal-600 transition"
              >
                TikTok: @abdullah_oladega
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 text-center text-gray-600 font-semibold">
          <p className="text-sm sm:text-base text-balance px-2">&copy; 2025 Coach Pro. All rights reserved. | Whittington Park</p>
        </div>
      </div>
    </footer>
  )
}
