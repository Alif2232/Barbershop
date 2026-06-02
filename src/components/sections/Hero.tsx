import Link from "next/link"
import { Scissors, CalendarCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-zinc-900 to-zinc-900" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-600/30">
            <Scissors className="h-4 w-4" />
            Premium Barbershop
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Tampil <span className="text-amber-500">Rapi</span>,{" "}
          <br className="hidden sm:block" />
          Percaya <span className="text-amber-500">Diri</span>
        </h1>

        <p className="max-w-xl mx-auto text-zinc-400 text-lg mb-10">
          Nikmati pengalaman grooming terbaik dengan barber profesional kami.
          Potongan rambut yang presisi, gaya yang sesuai kepribadianmu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-600/25"
          >
            <CalendarCheck className="h-5 w-5" />
            Booking Sekarang
          </Link>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 px-8 py-3 rounded-full text-base font-medium hover:border-amber-600 hover:text-amber-400 transition-colors"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
    </section>
  )
}
