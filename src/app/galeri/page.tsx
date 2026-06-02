"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { galleryItems } from "@/data/gallery"
import { X, ChevronLeft, ChevronRight, Scissors } from "lucide-react"

const categories = ["Semua", ...new Set(galleryItems.map((item) => item.category))]

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  const filteredItems =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }

  return (
    <div className="pt-32 pb-20">
      <div className="absolute top-32 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <Scissors className="h-3.5 w-3.5" />
            Galeri Karya
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Galeri <span className="purple-gradient-text italic">Karya</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg font-light">
            Koleksi hasil potongan dan grooming terbaik dari barber kami.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "purple-gradient-bg text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all duration-500"
            >
              <Image
                src={item.image_url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <span className="text-white font-semibold text-sm">{item.caption}</span>
                <span className="text-purple-300 text-xs mt-0.5">{item.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            className="absolute top-6 right-6 text-white/60 hover:text-white p-2 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-6 text-white/60 hover:text-purple-400 p-2 transition-colors z-10"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-6 text-white/60 hover:text-purple-400 p-2 transition-colors z-10"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="relative w-full max-w-4xl aspect-square mx-8" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredItems[lightboxIndex].image_url}
              alt={filteredItems[lightboxIndex].caption}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-8 text-center">
            <p className="text-white/80 font-medium">{filteredItems[lightboxIndex].caption}</p>
            <p className="text-purple-300/60 text-sm mt-1">{filteredItems[lightboxIndex].category}</p>
          </div>
        </div>
      )}
    </div>
  )
}
