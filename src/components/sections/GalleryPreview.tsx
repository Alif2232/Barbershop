import Link from "next/link"
import Image from "next/image"
import { galleryItems } from "@/data/gallery"
import { ArrowRight } from "lucide-react"

export default function GalleryPreview() {
  const previewItems = galleryItems.slice(0, 4)

  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Galeri <span className="text-amber-600">Karya</span>
          </h2>
          <p className="max-w-lg mx-auto text-zinc-500">
            Lihat hasil potongan terbaik dari barber profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-200"
            >
              <Image
                src={item.image_url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            Lihat Galeri Lengkap
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
