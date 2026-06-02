"use client"

import { Scissors, Users, Shield, Star, ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const stats = [
  { icon: Users, value: "5000+", label: "Pelanggan Puas" },
  { icon: Scissors, value: "8+", label: "Barber Profesional" },
  { icon: Shield, value: "5+", label: "Tahun Pengalaman" },
  { icon: Star, value: "4.9", label: "Rating Rata-rata" },
]

const features = [
  { icon: Scissors, title: "Teknik Modern", desc: "Menggunakan teknik dan alat terkini" },
  { icon: Users, title: "Tim Ahli", desc: "Barber berpengalaman & tersertifikasi" },
  { icon: Shield, title: "Higienis", desc: "Alat steril & ruangan bersih" },
  { icon: Star, title: "Terjangkau", desc: "Harga bersahabat, kualitas premium" },
]

export default function AboutSection() {
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
              <Star className="h-3.5 w-3.5" />
              Tentang Kami
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Lebih dari Sekadar{" "}
              <span className="purple-gradient-text italic">Potong Rambut</span>
            </h2>
            <p className="text-zinc-400 mb-4 leading-relaxed text-lg font-light">
              BarberQ berdiri sejak 2020 dengan visi menjadi barbershop terbaik di Indonesia.
              Kami menggabungkan teknik klasik dengan sentuhan modern untuk memberikan
              pengalaman grooming yang tak terlupakan.
            </p>
            <p className="text-zinc-500 leading-relaxed font-light">
              Setiap barber kami adalah profesional terlatih yang selalu mengikuti
              perkembangan tren terbaru. Kami percaya bahwa penampilan yang rapi
              adalah investasi untuk kepercayaan diri.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group glass-card rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] ${
                  i % 2 === 1 ? "translate-y-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <f.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-zinc-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center p-6 glass-card rounded-2xl hover:border-purple-500/30 transition-all duration-500">
              <stat.icon className="h-6 w-6 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold font-[family-name:var(--font-display)] purple-gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
