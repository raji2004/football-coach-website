"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm animate-slide-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center rounded-lg font-black text-lg shadow-lg">
              ⚽
            </div>
            <h1 className="text-2xl font-black text-gray-900 hidden sm:block tracking-tight">COACH</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-700 font-semibold text-sm tracking-wide hover:text-teal-600 transition duration-300 relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="text-gray-700 font-semibold text-sm tracking-wide hover:text-teal-600 transition duration-300 relative group"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#positions"
              className="text-gray-700 font-semibold text-sm tracking-wide hover:text-teal-600 transition duration-300 relative group"
            >
              POSITIONS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-700 font-semibold text-sm tracking-wide hover:text-teal-600 transition duration-300 relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg hover:shadow-teal-500/50 font-black text-sm px-6 transition-all duration-300 transform hover:scale-105">
              BOOK NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900 font-semibold">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-100 pt-4 animate-fade-in-up">
            <a href="#about" className="block text-gray-700 font-semibold hover:text-teal-600 transition">
              ABOUT
            </a>
            <a href="#services" className="block text-gray-700 font-semibold hover:text-teal-600 transition">
              SERVICES
            </a>
            <a href="#positions" className="block text-gray-700 font-semibold hover:text-teal-600 transition">
              POSITIONS
            </a>
            <a href="#contact" className="block text-gray-700 font-semibold hover:text-teal-600 transition">
              CONTACT
            </a>
            <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-lg font-black">
              BOOK NOW
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
