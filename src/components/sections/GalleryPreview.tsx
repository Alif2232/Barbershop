"use client"

import Link from "next/link"
import Image from "next/image"
import { galleryItems } from "@/data/gallery"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function GalleryPreview() {
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

  const previewItems = galleryItems.slice(0, 4)

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-700/8 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            Galeri
          </div>
          <h2 className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Galeri <span className="purple-gradient-text italic">Karya</span>
          </h2>
          <p className={`max-w-lg mx-auto text-zinc-500 mt-4 text-lg font-light transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Lihat hasil potongan terbaik dari barber profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewItems.map((item, i) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={item.image_url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <span className="text-white font-semibold text-sm">{item.caption}</span>
                <span className="text-purple-300 text-xs mt-1">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/galeri"
            className="group inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors"
          >
            Lihat Galeri Lengkap
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
