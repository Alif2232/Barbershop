import Link from "next/link"
import { Scissors, MapPin, Phone, Clock, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <Scissors className="h-6 w-6 text-amber-500" />
              <span>Barber<span className="text-amber-500">Q</span></span>
            </Link>
            <p className="text-sm text-zinc-400">
              Barbershop premium dengan pelayanan terbaik. Potong rambut, grooming, dan styling untuk pria modern.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/layanan" className="text-sm hover:text-amber-500 transition-colors">Layanan</Link></li>
              <li><Link href="/galeri" className="text-sm hover:text-amber-500 transition-colors">Galeri</Link></li>
              <li><Link href="/tim" className="text-sm hover:text-amber-500 transition-colors">Tim</Link></li>
              <li><Link href="/kontak" className="text-sm hover:text-amber-500 transition-colors">Kontak</Link></li>
              <li><Link href="/booking" className="text-sm hover:text-amber-500 transition-colors">Booking</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm">Jam Buka</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                Senin - Sabtu: 09:00 - 19:00
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                Minggu: 10:00 - 17:00
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                Jl. Merdeka No. 123, Bandung
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500" />
                0812-3456-7890
              </li>
            </ul>
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} BarberQ. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
