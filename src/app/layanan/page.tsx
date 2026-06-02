"use client"

import { services } from "@/data/services"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { Clock, CalendarCheck, MessageCircle, Scissors, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function LayananPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <div className="pt-32 pb-20">
      <div className="absolute top-32 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <Scissors className="h-3.5 w-3.5" />
            Layanan & Harga
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Layanan & <span className="purple-gradient-text italic">Harga</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg font-light">
            Pilih layanan yang sesuai dengan kebutuhan groomingmu. Harga terjangkau dengan kualitas premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-7 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full">
                  <Clock className="h-3 w-3" />
                  {service.duration_minutes} menit
                </span>
              </div>
              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">{service.description}</p>
              <div className="text-2xl font-bold font-[family-name:var(--font-display)] purple-gradient-text">
                {formatPrice(service.price)}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-10 text-center border-purple-500/20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-3">Siap Booking?</h2>
          <p className="text-zinc-500 mb-8 font-light">
            Pilih layanan favoritmu dan booking sekarang untuk mendapatkan slot terbaik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 purple-gradient-bg text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <CalendarCheck className="h-5 w-5" />
              Booking Online
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-7 py-3.5 rounded-full font-medium hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Booking via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
