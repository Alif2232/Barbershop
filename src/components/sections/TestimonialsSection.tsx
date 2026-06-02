import Image from "next/image"
import { testimonials } from "@/data/testimonials"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Kata <span className="text-amber-600">Pelanggan</span>
          </h2>
          <p className="max-w-lg mx-auto text-zinc-500">
            Apa kata mereka setelah mencoba layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testi.rating ? "text-amber-400 fill-amber-400" : "text-zinc-200"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                &ldquo;{testi.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
                  <Image
                    src={testi.photo}
                    alt={testi.customer_name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{testi.customer_name}</p>
                  <p className="text-xs text-zinc-400">{testi.created_at}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
