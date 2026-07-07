"use client";

import { useEffect, useRef } from "react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          entry.target.classList.add("animate-fade-out-down");
        } else {
          entry.target.classList.remove("animate-fade-out-down");
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Youth Training",
      description: "Ages 6-18 • Position-specific drills",
      image: "/youth-training.jpeg",
    },
    {
      title: "Adult Coaching",
      description: "Ages 19-30 • Advanced techniques",
      image: "/adult-coaching.jpeg",
    },
    {
      title: "Position Mastery",
      description: "CB, RB, LWB, RWB, LB • Expert guidance",
      image: "/position-mastery.jpeg",
    },
    {
      title: "Group Sessions",
      description: "Team building • Match preparation",
      image: "/group-session.jpeg",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-slide-down">
          <h2 className="text-6xl sm:text-7xl font-black text-gray-900 mb-6 text-center tracking-tight">
            SERVICES
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive football coaching tailored to your level and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group cursor-pointer animate-fade-in-up hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="relative overflow-hidden mb-6 h-56 rounded-2xl">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black text-gray-900 group-hover:text-teal-600 transition duration-300 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="w-full py-3 border-2 border-teal-500 text-teal-600 font-black rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 text-sm tracking-wide transform hover:scale-105">
                  EXPLORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
