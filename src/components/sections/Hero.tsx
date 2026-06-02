"use client"

import Link from "next/link"
import { Scissors, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="absolute inset-0 noise-overlay" />

      <div
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-5 py-2 rounded-full text-sm font-medium border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Premium Barbershop Experience
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
          Tampil{" "}
          <span className="purple-gradient-text italic">Berani</span>
          <br />
          <span className="relative">
            Percaya{" "}
            <span className="purple-gradient-text italic">Diri</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 purple-gradient-bg rounded-full opacity-60" />
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-zinc-400 text-lg sm:text-xl mb-12 leading-relaxed font-light">
          Nikmati pengalaman grooming kelas atas dengan barber profesional kami.
          Setiap potongan adalah karya seni, setiap kunjungan adalah transformasi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/booking"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white overflow-hidden"
          >
            <span className="absolute inset-0 purple-gradient-bg transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Booking Sekarang
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/layanan"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-zinc-300 border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Lihat Layanan</span>
            <Scissors className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  )
}
