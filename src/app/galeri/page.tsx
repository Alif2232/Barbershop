"use client"

import type { Metadata } from "next"
import { useState } from "react"
import Image from "next/image"
import { galleryItems } from "@/data/gallery"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["Semua", ...new Set(galleryItems.map((item) => item.category))]

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Galeri <span className="text-amber-600">Karya</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg">
            Koleksi hasil potongan dan grooming terbaik dari barber kami.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-amber-600 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
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
              className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-100"
            >
              <Image
                src={item.image_url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-left">
                  {item.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-4xl aspect-square mx-4">
            <Image
              src={filteredItems[lightboxIndex].image_url}
              alt={filteredItems[lightboxIndex].caption}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 text-center text-white/80 text-sm">
            {filteredItems[lightboxIndex].caption}
          </div>
        </div>
      )}
    </div>
  )
}
