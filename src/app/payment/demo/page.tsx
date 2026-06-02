"use client"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CreditCard, Banknote, Smartphone, Loader2, CheckCircle, Scissors } from "lucide-react"

const paymentMethods = [
  { id: "bca", label: "BCA Virtual Account", icon: Banknote },
  { id: "bri", label: "BRI Virtual Account", icon: Banknote },
  { id: "mandiri", label: "Mandiri Bill Payment", icon: Banknote },
  { id: "gopay", label: "GoPay", icon: Smartphone },
  { id: "qris", label: "QRIS", icon: Smartphone },
]

function DemoPaymentContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const orderId = searchParams.get("order_id") || ""
  const amount = searchParams.get("amount") || "0"
  const customerName = searchParams.get("name") || ""

  const handlePay = () => {
    if (!selectedMethod) return
    setIsProcessing(true)
    setTimeout(() => router.push(`/payment/success?order_id=${orderId}`), 2000)
  }

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
            <CreditCard className="h-8 w-8 text-purple-400" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">Demo Pembayaran</h1>
          <p className="text-zinc-500 text-sm mt-1 font-light">Mode demo — pilih metode pembayaran untuk simulasi</p>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-4">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
            <span className="text-sm text-zinc-500">Total Pembayaran</span>
            <span className="text-2xl font-bold font-[family-name:var(--font-display)] purple-gradient-text">
              Rp {parseInt(amount).toLocaleString("id-ID")}
            </span>
          </div>
          <p className="text-xs text-zinc-600 mb-1"><span className="font-medium text-zinc-500">Order:</span> {orderId}</p>
          <p className="text-xs text-zinc-600"><span className="font-medium text-zinc-500">Pelanggan:</span> {customerName}</p>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-4">
          <h2 className="text-sm font-semibold text-white mb-4">Pilih Metode Pembayaran</h2>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <button key={method.id} onClick={() => setSelectedMethod(method.id)}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                  selectedMethod === method.id ? "border-purple-500 bg-purple-500/10 ring-1 ring-purple-500" : "border-white/5 hover:border-white/20 bg-white/[0.02]"
                }`}>
                <method.icon className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-white">{method.label}</span>
                {selectedMethod === method.id && <CheckCircle className="h-4 w-4 text-purple-400 ml-auto" />}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-zinc-600 text-center mb-4 font-light">
          Mode demo — tidak ada transaksi sungguhan. Klik bayar untuk simulasi sukses.
        </p>

        <button onClick={handlePay} disabled={!selectedMethod || isProcessing}
          className="w-full purple-gradient-bg text-white py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:bg-white/5 disabled:text-zinc-600 disabled:cursor-not-allowed disabled:shadow-none inline-flex items-center justify-center gap-2">
          {isProcessing ? (
            <><Loader2 className="h-5 w-5 animate-spin" /> Memproses...</>
          ) : (
            <><CreditCard className="h-5 w-5" /> Bayar Rp {parseInt(amount).toLocaleString("id-ID")}</>
          )}
        </button>
      </div>
    </div>
  )
}

export default function DemoPaymentPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-purple-400 animate-spin" />
      </div>
    }>
      <DemoPaymentContent />
    </Suspense>
  )
}
