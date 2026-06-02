import { Scissors, Users, Shield, Star } from "lucide-react"

const stats = [
  { icon: Users, value: "5000+", label: "Pelanggan Puas" },
  { icon: Scissors, value: "8+", label: "Barber Profesional" },
  { icon: Shield, value: "5+", label: "Tahun Pengalaman" },
  { icon: Star, value: "4.9", label: "Rating Rata-rata" },
]

export default function AboutSection() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
              Lebih dari Sekadar <span className="text-amber-600">Potong Rambut</span>
            </h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              BarberQ berdiri sejak 2020 dengan visi menjadi barbershop terbaik di Indonesia.
              Kami menggabungkan teknik klasik dengan sentuhan modern untuk memberikan
              pengalaman grooming yang tak terlupakan.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Setiap barber kami adalah profesional terlatih yang selalu mengikuti
              perkembangan tren terbaru. Kami percaya bahwa penampilan yang rapi
              adalah investasi untuk kepercayaan diri.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <Scissors className="h-8 w-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-zinc-900 mb-1">Teknik Modern</h3>
              <p className="text-sm text-zinc-500">Menggunakan teknik dan alat terkini</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm mt-6">
              <Users className="h-8 w-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-zinc-900 mb-1">Tim Ahli</h3>
              <p className="text-sm text-zinc-500">Barber berpengalaman & tersertifikasi</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm">
              <Shield className="h-8 w-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-zinc-900 mb-1">Higienis</h3>
              <p className="text-sm text-zinc-500">Alat steril & ruangan bersih</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm mt-6">
              <Star className="h-8 w-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-zinc-900 mb-1">Terjangkau</h3>
              <p className="text-sm text-zinc-500">Harga bersahabat, kualitas premium</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-6 w-6 text-amber-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-zinc-900">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
