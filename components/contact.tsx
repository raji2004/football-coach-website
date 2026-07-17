"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const sectionRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-slide-down">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground mb-2 text-center tracking-tight text-balance px-2">
            GET IN TOUCH
          </h2>
          <p className="text-center text-muted-foreground text-lg font-medium">Let's discuss your coaching journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-black text-primary mb-3 tracking-wide">LOCATION</h3>
              <p className="text-foreground font-semibold">Whittington Park</p>
              <p className="text-muted-foreground">London</p>
            </div>

            <div className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-black text-primary mb-3 tracking-wide">PHONE</h3>
              <a href="tel:07857121119" className="text-foreground font-semibold hover:text-primary transition">
                07857 121119
              </a>
            </div>

            <div className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-black text-primary mb-3 tracking-wide">EMAIL</h3>
              <a href="mailto:abdullaholadega@gmail.com" className="text-foreground font-semibold hover:text-primary transition break-all">
                abdullaholadega@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary to-pitch-deep p-8 rounded-2xl border-2 border-primary/20">
              <h3 className="font-black text-lime mb-4 tracking-wide">TARGET AGE GROUPS</h3>
              <p className="text-white/90 font-semibold">Youth Players: 6-18 years</p>
              <p className="text-white/90 font-semibold">Adult Players: 19-30 years</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <label className="block text-sm font-black text-primary mb-3 tracking-wide">NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-card border-2 border-border text-foreground rounded-xl focus:border-primary focus:shadow-lg outline-none transition duration-300 placeholder:text-muted-foreground font-medium"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-primary mb-3 tracking-wide">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-card border-2 border-border text-foreground rounded-xl focus:border-primary focus:shadow-lg outline-none transition duration-300 placeholder:text-muted-foreground font-medium"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-primary mb-3 tracking-wide">PHONE</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-card border-2 border-border text-foreground rounded-xl focus:border-primary focus:shadow-lg outline-none transition duration-300 placeholder:text-muted-foreground font-medium"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-primary mb-3 tracking-wide">MESSAGE</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-card border-2 border-border text-foreground rounded-xl focus:border-primary focus:shadow-lg outline-none transition duration-300 resize-none placeholder:text-muted-foreground font-medium"
                placeholder="Tell me about your goals..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pitch to-pitch-deep text-white font-black py-4 rounded-full border-none hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 text-lg transform hover:scale-105 active:scale-95 uppercase tracking-wide"
            >
              BOOK FIRST SESSION
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
