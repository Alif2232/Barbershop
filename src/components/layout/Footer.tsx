import Link from "next/link"
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050505] border-t border-purple-900/20 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tight">
                <span className="text-white">BARBER</span>
                <span className="purple-gradient-text">Q</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed font-light">
              Premium barbershop dengan pelayanan terbaik. Potong rambut, grooming, dan styling untuk pria modern.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-500 hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em]">Menu</h3>
            <ul className="space-y-3">
              {[
                { href: "/layanan", label: "Layanan" },
                { href: "/galeri", label: "Galeri" },
                { href: "/tim", label: "Tim" },
                { href: "/kontak", label: "Kontak" },
                { href: "/booking", label: "Booking" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em]">Jam Buka</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-purple-400/60" />
                <span>Senin - Sabtu: 09:00 - 19:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-purple-400/60" />
                <span>Minggu: 10:00 - 17:00</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.15em]">Kontak</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-purple-400/60 shrink-0" />
                <span>Jl. Merdeka No. 123, Bandung</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-purple-400/60 shrink-0" />
                <span>0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-purple-400/60 shrink-0" />
                <span>hello@barberq.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            &copy; {year} BARBER<span className="text-purple-400">Q</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
