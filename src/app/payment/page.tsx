"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CreditCard, ArrowLeft, AlertCircle, Loader2 } from "lucide-react"

function PaymentContent() {
  const searchParams = useSearchParams()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (searchParams.get("error") === "1") setError(true)
    setLoading(false)
  }, [searchParams])

  if (loading) return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 text-purple-400 animate-spin" />
    </div>
  )

  if (error) return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6 border border-red-500/30">
          <AlertCircle className="h-10 w-10 text-red-400" />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white mb-4">Pembayaran Gagal</h1>
        <p className="text-zinc-400 mb-6 font-light">Terjadi kesalahan. Silakan coba lagi.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/booking" className="purple-gradient-bg text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Booking Ulang
          </Link>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
            className="border border-zinc-700 text-zinc-400 px-6 py-3 rounded-full font-medium hover:border-purple-500/50 hover:text-purple-300 transition-all">
            Hubungi WA
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
          <CreditCard className="h-10 w-10 text-purple-400" />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white mb-4">Menunggu Pembayaran</h1>
        <p className="text-zinc-400 mb-6 font-light">Halaman pembayaran akan terbuka. Silakan selesaikan pembayaran di jendela pop-up.</p>
        <p className="text-sm text-zinc-600">Jika pop-up tidak muncul, hubungi kami via WhatsApp.</p>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-purple-400 animate-spin" />
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}
