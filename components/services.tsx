"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/lib/services";

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

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-down">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground mb-6 text-center tracking-tight text-balance px-2">
            SERVICES
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive football coaching and fitness training tailored to
            your level and goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className="group animate-fade-in-up hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col"
              style={{ animationDelay: `${idx * 0.15}s` }}>
              <Link href={`/services/${service.slug}`} className="block flex-1">
                <div className="relative overflow-hidden mb-4 sm:mb-5 w-full aspect-[3/4] rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
                </div>
                <div className="space-y-2 min-w-0 px-1">
                  <h3 className="text-xl font-black text-foreground group-hover:text-primary transition duration-300 tracking-tight text-balance">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
              <div className="px-1 pt-4 pb-1 mt-auto">
                <Link
                  href={`/services/${service.slug}`}
                  className="block w-full py-3 border-2 border-primary text-primary font-black rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wide transform hover:scale-105 active:scale-95 text-center">
                  EXPLORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
