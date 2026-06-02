import type { Metadata } from "next"
import Image from "next/image"
import { barbers } from "@/data/barbers"
import { Star, Scissors } from "lucide-react"

export const metadata: Metadata = {
  title: "Tim Barber",
  description: "Kenali barber profesional kami yang siap memberikan grooming terbaik untukmu.",
}

export default function TimPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Tim <span className="text-amber-600">Barber</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg">
            Kenali barber profesional kami yang siap memberikan grooming terbaik untukmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:border-amber-200 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
                <Image
                  src={barber.photo}
                  alt={barber.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-900 mb-1">{barber.name}</h3>
                <p className="text-sm text-zinc-500 mb-3 line-clamp-2">{barber.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {barber.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full"
                    >
                      <Scissors className="h-3 w-3" />
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
