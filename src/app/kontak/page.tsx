import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Clock, Mail, MessageCircle, CalendarCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description: "Hubungi kami, lihat lokasi barbershop di Google Maps, dan cek jam buka.",
}

export default function KontakPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Kontak & <span className="text-amber-600">Lokasi</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg">
            Kunjungi barbershop kami atau hubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6">
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Alamat</h3>
                    <p className="text-sm text-zinc-500">Jl. Merdeka No. 123, Bandung, Jawa Barat 40123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Telepon</h3>
                    <p className="text-sm text-zinc-500">0812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Email</h3>
                    <p className="text-sm text-zinc-500">hello@barberq.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">Jam Buka</h3>
                    <p className="text-sm text-zinc-500">Senin - Sabtu: 09:00 - 19:00</p>
                    <p className="text-sm text-zinc-500">Minggu: 10:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">Booking Cepat</h2>
              <p className="text-sm text-zinc-500 mb-4">
                Ingin booking tanpa ribet? Hubungi kami langsung via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-amber-700 transition-colors"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Booking Online
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-200 rounded-2xl overflow-hidden min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.318948748769!2d107.60916927463536!3d-6.915793667448857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6281c5a0f7d%3A0x2e68e6281c5a0f7d!2sBandung!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi BarberQ"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
