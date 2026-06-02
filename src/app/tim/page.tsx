"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { barbers } from "@/data/barbers"
import { Scissors, Star } from "lucide-react"

export default function TimPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <div className="pt-32 pb-20">
      <div className="absolute top-32 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <Star className="h-3.5 w-3.5" />
            Tim Barber
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Tim <span className="purple-gradient-text italic">Barber</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 text-lg font-light">
            Kenali barber profesional kami yang siap memberikan grooming terbaik untukmu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber, i) => (
            <div
              key={barber.id}
              className="group glass-card rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(124,58,237,0.08)] transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden">
                <Image
                  src={barber.photo}
                  alt={barber.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{barber.name}</h3>
                  <p className="text-sm text-purple-300/80">{barber.specialties.slice(0, 2).join(" • ")}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">{barber.bio}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {barber.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1 text-xs bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full border border-purple-500/20"
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
