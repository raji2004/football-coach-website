"use client"

import { useEffect, useRef } from "react"

export default function Positions() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate-fade-out-down")
          entry.target.classList.add("animate-fade-in-up")
        } else {
          entry.target.classList.remove("animate-fade-in-up")
          entry.target.classList.add("animate-fade-out-down")
        }
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const positions = [
    { code: "CB", name: "Center Back", skills: ["Positioning", "Heading", "Tackling"] },
    { code: "RB", name: "Right Back", skills: ["Pace", "Crossing", "Defense"] },
    { code: "LB", name: "Left Back", skills: ["Pace", "Crossing", "Defense"] },
    { code: "RWB", name: "Right Wing Back", skills: ["Pace", "Crossing", "Stamina"] },
    { code: "LWB", name: "Left Wing Back", skills: ["Pace", "Crossing", "Stamina"] },
  ]

  return (
    <section ref={containerRef} id="positions" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground mb-20 text-center animate-slide-down tracking-tight text-balance px-2">
          SPECIALIZED POSITIONS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-card border-2 border-border p-8 rounded-2xl hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pitch to-pitch-deep text-lime rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">
                  {pos.code}
                </div>
                <h3 className="min-w-0 text-lg font-black text-foreground tracking-wide">{pos.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {pos.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/10 text-primary text-xs font-black rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pitch to-pitch-deep text-white rounded-3xl p-6 sm:p-10 lg:p-16 text-center border-none animate-fade-in-up shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tight px-2 text-lime">
            <span className="whitespace-nowrap">PROFESSIONAL</span>{" "}
            <span className="whitespace-nowrap">EQUIPMENT</span>
          </h3>
          <p className="text-lg mb-12 text-white/90 font-medium">All sessions include elite training gear:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Agility Ladders", "Training Cones", "Premier League Balls", "Resistance Bands"].map((item, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white text-pitch-deep font-black rounded-full border-none hover:scale-110 transition-transform duration-300 text-sm tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
