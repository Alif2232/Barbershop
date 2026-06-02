"use client"

import Image from "next/image"
import { testimonials } from "@/data/testimonials"
import { Star, Quote } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <Star className="h-3.5 w-3.5" />
            Testimoni
          </div>
          <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Kata <span className="purple-gradient-text italic">Pelanggan</span>
          </h2>
          <p className={`max-w-lg mx-auto text-zinc-500 mt-4 text-lg font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Apa kata mereka setelah mencoba layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testi, i) => (
            <div
              key={testi.id}
              className="glass-card rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-6 w-6 text-purple-500/30 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${idx < testi.rating ? "text-purple-400 fill-purple-400" : "text-zinc-700"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed italic">
                &ldquo;{testi.review}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/30">
                  <Image
                    src={testi.photo}
                    alt={testi.customer_name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testi.customer_name}</p>
                  <p className="text-xs text-zinc-600">{testi.created_at}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
