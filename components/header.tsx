"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#services", label: "SERVICES" },
  { href: "/#positions", label: "POSITIONS" },
  { href: "/#contact", label: "CONTACT" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm animate-slide-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center rounded-lg font-black text-lg shadow-lg">
              ⚽
            </div>
            <h1 className="text-2xl font-black text-gray-900 hidden sm:block tracking-tight">COACH</h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-semibold text-sm tracking-wide hover:text-teal-600 transition duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button asChild className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg hover:shadow-teal-500/50 font-black text-sm px-6 transition-all duration-300 transform hover:scale-105">
              <Link href="/#contact">BOOK NOW</Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900 font-semibold">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-100 pt-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-semibold hover:text-teal-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg font-black">
              <Link href="/#contact" onClick={() => setIsOpen(false)}>
                BOOK NOW
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
