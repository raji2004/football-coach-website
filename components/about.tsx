"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("animate-fade-out-down")
          entry.target.classList.add("animate-slide-left")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div ref={titleRef} className="animate-slide-down">
              <h2 className="text-6xl sm:text-7xl font-black text-foreground mb-2 tracking-tight">2+</h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-pitch via-pitch-light to-lime bg-clip-text text-transparent mb-8 tracking-tight text-balance">
                Years of Excellence
              </h3>
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                With over two years of professional coaching experience, I specialize in developing young talent from
                grassroots to advanced levels. My mission is transforming potential into performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Whether you're 6 years old or an adult aiming to improve your skills, I provide tailored sessions
                focused on technical excellence, tactical awareness, and physical conditioning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="min-w-0 bg-gradient-to-br from-primary to-pitch-deep text-white p-5 sm:p-8 rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-count-up">
                <p className="text-4xl font-black text-lime mb-2">30</p>
                <p className="font-black text-white/90 text-xs sm:text-sm tracking-wide leading-tight">PLAYERS TRAINED</p>
              </div>
              <div
                className="min-w-0 bg-card p-5 sm:p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-count-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-4xl font-black text-primary mb-2">100%</p>
                <p className="font-black text-foreground text-xs sm:text-sm tracking-wide leading-tight">SATISFACTION</p>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-pitch/25 to-lime/25 rounded-3xl blur-2xl"></div>
            <div className="relative w-full h-96 bg-muted rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img src="/hero.jpeg" alt="Football coaching" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
