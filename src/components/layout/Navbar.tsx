"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/layanan", label: "Layanan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/tim", label: "Tim" },
  { href: "/kontak", label: "Kontak" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-purple-900/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <span className="text-2xl font-bold font-[family-name:var(--font-display)] tracking-tight">
              <span className="text-white">BARBER</span>
              <span className="purple-gradient-text">Q</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 purple-gradient-bg transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/booking"
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group"
            >
              <span className="absolute inset-0 purple-gradient-bg transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-purple-900/30 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="block text-center purple-gradient-bg text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
