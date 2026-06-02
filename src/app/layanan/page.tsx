import type { Metadata } from "next"
import { services } from "@/data/services"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { Clock, CalendarCheck, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan & Harga",
  description: "Lihat daftar lengkap layanan dan price list barbershop kami. Dari haircut hingga royal grooming.",
}

export default function LayananPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Layanan & <span className="text-amber-600">Harga</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg">
            Pilih layanan yang sesuai dengan kebutuhan groomingmu. Harga terjangkau dengan kualitas premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900">{service.name}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-400 bg-zinc-100 px-2 py-1 rounded-full">
                  <Clock className="h-3 w-3" />
                  {service.duration_minutes} menit
                </span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-amber-600">{formatPrice(service.price)}</div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 rounded-2xl p-8 text-center border border-zinc-200">
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Siap Booking?</h2>
          <p className="text-zinc-500 mb-6">
            Pilih layanan favoritmu dan booking sekarang untuk mendapatkan slot terbaik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
            >
              <CalendarCheck className="h-5 w-5" />
              Booking Online
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full font-medium hover:border-amber-600 hover:text-amber-600 transition-colors"
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
