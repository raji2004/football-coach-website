"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#services", label: "SERVICES" },
  { href: "/#positions", label: "POSITIONS" },
  { href: "/#contact", label: "CONTACT" },
]

function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:text-primary hover:border-primary transition-all duration-300 active:scale-90 ${className}`}
    >
      {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border shadow-sm animate-slide-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Coach logo"
              className="w-10 h-10 rounded-lg object-cover object-center shadow-lg ring-2 ring-accent/40"
            />
            <h1 className="text-2xl font-black text-foreground hidden sm:block tracking-tight">COACH</h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 font-semibold text-sm tracking-wide hover:text-primary transition duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="bg-gradient-to-r from-pitch to-pitch-deep text-white hover:shadow-lg hover:shadow-accent/40 font-black text-sm px-6 transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Link href="/#contact">BOOK NOW</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-foreground font-semibold">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground/80 font-semibold hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-gradient-to-r from-pitch to-pitch-deep text-white hover:shadow-lg font-black">
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
