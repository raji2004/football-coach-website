"use client"

import { useEffect, useRef } from "react"

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
      className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="z-10 space-y-8">
            <div className="animate-slide-down">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-2 text-balance leading-tight tracking-tight">
                We Put In
              </h1>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-8 text-balance leading-tight tracking-tight">
                The Method
              </h2>
            </div>

            <p
              className="text-lg sm:text-xl text-gray-600 mb-8 font-medium leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Elite football coaching for youth and adult players. Master your position with scientifically-designed
              drills at Whittington Park.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <button className="px-10 py-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black text-lg rounded-full hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
                Start Training
              </button>
              <button className="px-10 py-5 border-2 border-gray-300 text-gray-900 font-black text-lg rounded-full hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-300 uppercase tracking-wide">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
              <img
                src="/hero.jpeg"
                alt="Football player training"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl animate-glow-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
