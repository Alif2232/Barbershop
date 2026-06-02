"use client"

import Link from "next/link"
import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-full purple-gradient-bg flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white mb-4">Pembayaran Berhasil!</h1>
        <p className="text-zinc-400 mb-8 font-light">
          Terima kasih! Pembayaran kamu telah diterima. Kami akan mengirimkan konfirmasi booking via WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="purple-gradient-bg text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Home
          </Link>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
            className="bg-green-600/20 text-green-400 border border-green-600/30 px-6 py-3 rounded-full font-medium hover:bg-green-600/30 transition-all inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Hubungi WA
          </a>
        </div>
      </div>
    </div>
  )
}
