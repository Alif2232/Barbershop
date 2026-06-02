import Link from "next/link"
import { services } from "@/data/services"
import { formatPrice } from "@/lib/utils"
import { ArrowRight, Scissors, Zap, Sparkles, Crown } from "lucide-react"

const categoryIcons: Record<string, React.ReactNode> = {
  "service-1": <Scissors className="h-8 w-8" />,
  "service-2": <Sparkles className="h-8 w-8" />,
  "service-3": <Zap className="h-8 w-8" />,
  "service-8": <Crown className="h-8 w-8" />,
}

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 4)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
            Layanan <span className="text-amber-600">Kami</span>
          </h2>
          <p className="max-w-lg mx-auto text-zinc-500">
            Dari potongan klasik hingga gaya modern, kami punya layanan untuk setiap kebutuhan groomingmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300"
            >
              <div className="text-amber-600 mb-4">
                {categoryIcons[service.id] || <Scissors className="h-8 w-8" />}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">{service.name}</h3>
              <p className="text-sm text-zinc-500 mb-4 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-amber-600 font-bold text-lg">{formatPrice(service.price)}</span>
                <span className="text-xs text-zinc-400">{service.duration_minutes} menit</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            Lihat Semua Layanan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
