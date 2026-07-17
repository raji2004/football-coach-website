"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          entry.target.classList.add("animate-fade-out-down")
        } else {
          entry.target.classList.remove("animate-fade-out-down")
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-background via-secondary/40 to-background overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-48 h-48 sm:top-20 sm:right-20 sm:w-96 sm:h-96 bg-pitch rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 sm:bottom-20 sm:left-20 sm:w-96 sm:h-96 bg-lime rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10 space-y-8">
            <div className="animate-slide-down">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-2 text-balance leading-tight tracking-tight">
                We Put In
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-pitch via-pitch-light to-lime bg-clip-text text-transparent mb-8 text-balance leading-tight tracking-tight">
                The Method
              </h2>
            </div>

            <p
              className="text-lg sm:text-xl text-muted-foreground mb-8 font-medium leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Elite football coaching for youth and adult players. Master your position with scientifically-designed
              drills at Whittington Park.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/#contact"
                className="inline-flex justify-center px-10 py-5 bg-gradient-to-r from-pitch to-pitch-deep text-white font-black text-lg rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
              >
                Start Training
              </Link>
              <Link
                href="/#about"
                className="inline-flex justify-center px-10 py-5 border-2 border-border text-foreground font-black text-lg rounded-full hover:border-primary hover:text-primary hover:bg-secondary transition-all duration-300 uppercase tracking-wide text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-pitch/25 to-lime/25 rounded-3xl blur-2xl"></div>
              <img
                src="/hero.jpeg"
                alt="Football player training"
                className="relative w-full h-full object-cover object-center rounded-3xl shadow-2xl animate-glow-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
