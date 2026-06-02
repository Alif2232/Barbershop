"use client"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CreditCard, Banknote, Smartphone, Loader2, CheckCircle } from "lucide-react"

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
    setTimeout(() => {
      router.push(`/payment/success?order_id=${orderId}`)
    }, 2000)
  }

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900">Demo Pembayaran</h1>
          <p className="text-zinc-500 text-sm mt-1">
            Mode demo — pilih metode pembayaran untuk simulasi
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-4">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-100">
            <span className="text-sm text-zinc-500">Total Pembayaran</span>
            <span className="text-2xl font-bold text-amber-600">
              Rp {parseInt(amount).toLocaleString("id-ID")}
            </span>
          </div>
          <p className="text-xs text-zinc-400 mb-1">
            <span className="font-semibold">Order:</span> {orderId}
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold">Pelanggan:</span> {customerName}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4">Pilih Metode Pembayaran</h2>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  selectedMethod === method.id
                    ? "border-amber-600 bg-amber-50 ring-1 ring-amber-600"
                    : "border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <method.icon className="h-5 w-5 text-zinc-600" />
                <span className="text-sm font-medium text-zinc-900">{method.label}</span>
                {selectedMethod === method.id && (
                  <CheckCircle className="h-4 w-4 text-amber-600 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-zinc-400 text-center mb-4">
          Mode demo — tidak ada transaksi sungguhan. Klik &ldquo;Bayar&rdquo; untuk simulasi sukses.
        </p>

        <button
          onClick={handlePay}
          disabled={!selectedMethod || isProcessing}
          className="w-full bg-amber-600 text-white py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Memproses...
            </>
          ) : (
            <>
              <CreditCard className="h-5 w-5" />
              Bayar Rp {parseInt(amount).toLocaleString("id-ID")}
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default function DemoPaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-amber-600 animate-spin" />
        </div>
      }
    >
      <DemoPaymentContent />
    </Suspense>
  )
}
