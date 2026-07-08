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
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-slide-down">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-2 text-center tracking-tight text-balance px-2">
            GET IN TOUCH
          </h2>
          <p className="text-center text-gray-600 text-lg font-medium">Let's discuss your coaching journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-black text-teal-600 mb-3 tracking-wide">LOCATION</h3>
              <p className="text-gray-700 font-semibold">Whittington Park</p>
              <p className="text-gray-600">London</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-black text-teal-600 mb-3 tracking-wide">PHONE</h3>
              <a href="tel:07857121119" className="text-gray-700 font-semibold hover:text-teal-600 transition">
                07857 121119
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-500 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-black text-teal-600 mb-3 tracking-wide">EMAIL</h3>
              <a href="mailto:abdullaholadega@gmail.com" className="text-gray-700 font-semibold hover:text-teal-600 transition break-all">
                abdullaholadega@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border-2 border-teal-300">
              <h3 className="font-black text-teal-600 mb-4 tracking-wide">TARGET AGE GROUPS</h3>
              <p className="text-gray-700 font-semibold">Youth Players: 6-18 years</p>
              <p className="text-gray-700 font-semibold">Adult Players: 19-30 years</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <label className="block text-sm font-black text-teal-600 mb-3 tracking-wide">NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl focus:border-teal-500 focus:shadow-lg outline-none transition duration-300 placeholder-gray-500 font-medium"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-teal-600 mb-3 tracking-wide">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl focus:border-teal-500 focus:shadow-lg outline-none transition duration-300 placeholder-gray-500 font-medium"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-teal-600 mb-3 tracking-wide">PHONE</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl focus:border-teal-500 focus:shadow-lg outline-none transition duration-300 placeholder-gray-500 font-medium"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-teal-600 mb-3 tracking-wide">MESSAGE</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl focus:border-teal-500 focus:shadow-lg outline-none transition duration-300 resize-none placeholder-gray-500 font-medium"
                placeholder="Tell me about your goals..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black py-4 rounded-full border-none hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 text-lg transform hover:scale-105 uppercase tracking-wide"
            >
              BOOK FIRST SESSION
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
