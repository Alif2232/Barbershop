"use client"

import Link from "next/link"
import { services } from "@/data/services"
import { formatPrice } from "@/lib/utils"
import { ArrowRight, Scissors, Zap, Sparkles, Crown, ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const categoryIcons: Record<string, React.ReactNode> = {
  "service-1": <Scissors className="h-7 w-7" />,
  "service-2": <Sparkles className="h-7 w-7" />,
  "service-3": <Zap className="h-7 w-7" />,
  "service-8": <Crown className="h-7 w-7" />,
}

export default function ServicesPreview() {
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

  const featuredServices = services.slice(0, 4)

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-purple-500/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <Scissors className="h-3.5 w-3.5" />
            Layanan
          </div>
          <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Layanan <span className="purple-gradient-text italic">Premium</span>
          </h2>
          <p className={`max-w-lg mx-auto text-zinc-500 mt-4 text-lg font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Dari potongan klasik hingga gaya modern, setiap layanan dirancang untuk grooming terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, i) => (
            <div
              key={service.id}
              className="group glass-card rounded-2xl p-7 transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.08)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300">
                {categoryIcons[service.id] || <Scissors className="h-7 w-7" />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-sm text-zinc-500 mb-6 line-clamp-2 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-2xl font-bold font-[family-name:var(--font-display)] purple-gradient-text">
                  {formatPrice(service.price)}
                </span>
                <span className="text-xs text-zinc-600 bg-white/5 px-3 py-1 rounded-full">{service.duration_minutes} menit</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/layanan"
            className="group inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors"
          >
            Lihat Semua Layanan
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
