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
    if (searchParams.get("error") === "1") {
      setError(true)
    }
    setLoading(false)
  }, [searchParams])

  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-amber-600 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Pembayaran Gagal</h1>
          <p className="text-zinc-500 mb-6">
            Terjadi kesalahan saat memproses pembayaran. Silakan coba lagi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Booking Ulang
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full font-medium hover:border-amber-600 hover:text-amber-600 transition-colors"
            >
              Hubungi WA
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CreditCard className="h-8 w-8 text-amber-600" />
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">Menunggu Pembayaran</h1>
        <p className="text-zinc-500 mb-6">
          Halaman pembayaran akan terbuka. Silakan selesaikan pembayaran di jendela pop-up.
        </p>
        <p className="text-sm text-zinc-400">
          Jika pop-up tidak muncul, hubungi kami via WhatsApp.
        </p>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-amber-600 animate-spin" />
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  )
}
