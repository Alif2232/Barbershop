"use client"

import Link from "next/link"
import { CalendarCheck, MessageCircle, ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 purple-gradient-bg opacity-95" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Siap Tampil Keren?
          </div>
        </div>

        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
  Jangan Tunda <span className="italic">Gaya Barumu</span>
</h2>
        <p className="text-purple-100/70 text-lg mb-10 max-w-xl mx-auto font-light">
          Booking sekarang dan dapatkan potongan rambut terbaik dari barber profesional kami.
          Transformasi dimulai dari satu langkah kecil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="group inline-flex items-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-full text-base font-semibold hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <CalendarCheck className="h-5 w-5" />
            Booking Online
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle className="h-5 w-5" />
            Booking via WA
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
