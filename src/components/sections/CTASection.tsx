import Link from "next/link"
import { CalendarCheck, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Siap Tampil Keren?
        </h2>
        <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
          Booking sekarang dan dapatkan potongan rambut terbaik dari barber profesional kami.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-white text-amber-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-amber-50 transition-colors"
          >
            <CalendarCheck className="h-5 w-5" />
            Booking Online
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Booking via WA
          </a>
        </div>
      </div>
    </section>
  )
}
