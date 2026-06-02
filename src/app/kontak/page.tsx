"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Clock, Mail, MessageCircle, CalendarCheck, Scissors, ArrowUpRight } from "lucide-react"

export default function KontakPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <div className="pt-32 pb-20">
      <div className="absolute top-32 left-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <Scissors className="h-3.5 w-3.5" />
            Kontak & Lokasi
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Kontak & <span className="purple-gradient-text italic">Lokasi</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg font-light">
            Kunjungi barbershop kami atau hubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="glass-card rounded-2xl p-7">
              <h2 className="text-xl font-bold text-white mb-6">Informasi Kontak</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "Alamat", detail: "Jl. Merdeka No. 123, Bandung, Jawa Barat 40123" },
                  { icon: Phone, title: "Telepon", detail: "0812-3456-7890" },
                  { icon: Mail, title: "Email", detail: "hello@barberq.id" },
                  { icon: Clock, title: "Jam Buka", detail: "Sen-Sab 09:00-19:00 | Min 10:00-17:00" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-sm">{item.title}</h3>
                      <p className="text-sm text-zinc-500 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 border-purple-500/20">
              <h2 className="text-xl font-bold text-white mb-4">Booking Cepat</h2>
              <p className="text-sm text-zinc-500 mb-5 font-light">
                Ingin booking tanpa ribet? Hubungi kami langsung via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/booking"
                  className="group inline-flex items-center justify-center gap-2 purple-gradient-bg text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Booking Online
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600/20 text-green-400 border border-green-600/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-600/30 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className={`rounded-2xl overflow-hidden min-h-[450px] border border-white/5 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.318948748769!2d107.60916927463536!3d-6.915793667448857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6281c5a0f7d%3A0x2e68e6281c5a0f7d!2sBandung!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi BarberQ"
              className="grayscale-[30%] invert-[5%] hue-rotate-[240deg] saturate-[0.7]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
