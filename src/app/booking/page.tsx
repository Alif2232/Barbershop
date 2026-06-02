"use client"

import { useState } from "react"
import { services } from "@/data/services"
import { barbers } from "@/data/barbers"
import { formatPrice, generateTimeSlots } from "@/lib/utils"
import { formatMidtransOrderId } from "@/lib/midtrans"
import { CalendarCheck, MessageCircle, CheckCircle, ChevronLeft, CreditCard, Loader2 } from "lucide-react"

const steps = ["Layanan", "Barber", "Jadwal", "Data Diri", "Konfirmasi"]
const timeSlots = generateTimeSlots()

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState("")
  const [selectedBarber, setSelectedBarber] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isPaying, setIsPaying] = useState(false)
  const [paymentError, setPaymentError] = useState("")

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedBarberData = barbers.find((b) => b.id === selectedBarber)

  const canProceed = () => {
    switch (step) {
      case 0: return selectedService !== ""
      case 1: return selectedBarber !== ""
      case 2: return selectedDate !== "" && selectedTime !== ""
      case 3: return customerName.trim() !== "" && customerPhone.trim() !== ""
      default: return false
    }
  }

  const handlePayNow = async () => {
    if (!selectedServiceData) return
    setIsPaying(true)
    setPaymentError("")

    try {
      const orderId = formatMidtransOrderId("BRQ")

      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          amount: selectedServiceData.price,
          customerName,
          customerPhone,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Gagal memproses pembayaran")
      }

      if (data.demo) {
        window.location.href = data.redirect_url
        return
      }

      window.snap.pay(data.token, {
        onSuccess: () => {
          setIsSubmitted(true)
        },
        onPending: () => {
          setIsSubmitted(true)
        },
        onError: () => {
          setPaymentError("Pembayaran gagal. Silakan coba lagi.")
          setIsPaying(false)
        },
        onClose: () => {
          setIsPaying(false)
        },
      })
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : "Gagal memproses pembayaran")
      setIsPaying(false)
    }
  }

  const handleSubmit = () => {
    handlePayNow()
  }

  const resetForm = () => {
    setStep(0)
    setSelectedService("")
    setSelectedBarber("")
    setSelectedDate("")
    setSelectedTime("")
    setCustomerName("")
    setCustomerPhone("")
    setIsSubmitted(false)
    setIsPaying(false)
    setPaymentError("")
  }

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Booking Berhasil!</h1>
          <p className="text-zinc-500 mb-2">
            Terima kasih, <strong>{customerName}</strong>!
          </p>
          <p className="text-sm text-zinc-400 mb-6">
            Pembayaran kamu sedang diproses. Kami akan mengirimkan konfirmasi via WhatsApp.
          </p>
          <div className="bg-zinc-50 rounded-xl p-6 text-left space-y-2 text-sm mb-6">
            <p><span className="font-semibold">Layanan:</span> {selectedServiceData?.name}</p>
            <p><span className="font-semibold">Barber:</span> {selectedBarberData?.name}</p>
            <p><span className="font-semibold">Tanggal:</span> {selectedDate}</p>
            <p><span className="font-semibold">Jam:</span> {selectedTime}</p>
            <p><span className="font-semibold">Total:</span> {selectedServiceData ? formatPrice(selectedServiceData.price) : "-"}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetForm}
              className="inline-flex items-center justify-center gap-2 border border-zinc-300 text-zinc-700 px-6 py-3 rounded-full font-medium hover:border-amber-600 hover:text-amber-600 transition-colors"
            >
              Booking Lagi
            </button>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Hubungi WA
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
            Booking <span className="text-amber-600">Sekarang</span>
          </h1>
          <p className="text-zinc-500">Isi data berikut untuk melakukan reservasi.</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  i <= step ? "bg-amber-600 text-white" : "bg-zinc-200 text-zinc-400"
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-12 h-1 mx-1 rounded transition-colors ${
                    i < step ? "bg-amber-600" : "bg-zinc-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Kembali
            </button>
          )}

          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Pilih Layanan</h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedService === service.id
                        ? "border-amber-600 bg-amber-50 ring-1 ring-amber-600"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-zinc-900">{service.name}</h3>
                        <p className="text-sm text-zinc-500">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-amber-600">{formatPrice(service.price)}</div>
                        <div className="text-xs text-zinc-400">{service.duration_minutes} menit</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Pilih Barber</h2>
              <div className="space-y-3">
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedBarber === barber.id
                        ? "border-amber-600 bg-amber-50 ring-1 ring-amber-600"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-200 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-zinc-900">{barber.name}</h3>
                        <p className="text-sm text-zinc-500">{barber.specialties.join(", ")}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Pilih Jadwal</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-700 mb-2">Tanggal</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                />
              </div>
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Jam</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-amber-600 text-white"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Data Diri</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Masukkan nama kamu"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">No. WhatsApp</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-6">Konfirmasi Booking</h2>
              <div className="bg-zinc-50 rounded-xl p-6 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Layanan</span>
                  <span className="font-semibold text-zinc-900">{selectedServiceData?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Barber</span>
                  <span className="font-semibold text-zinc-900">{selectedBarberData?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Tanggal</span>
                  <span className="font-semibold text-zinc-900">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Jam</span>
                  <span className="font-semibold text-zinc-900">{selectedTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Durasi</span>
                  <span className="font-semibold text-zinc-900">{selectedServiceData?.duration_minutes} menit</span>
                </div>
                <div className="border-t border-zinc-200 pt-3 flex justify-between">
                  <span className="text-zinc-500">Total</span>
                  <span className="font-bold text-lg text-amber-600">
                    {selectedServiceData ? formatPrice(selectedServiceData.price) : "-"}
                  </span>
                </div>
              </div>

              {paymentError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-red-600">{paymentError}</p>
                </div>
              )}

              <p className="text-xs text-zinc-400 mb-4">
                Dengan melakukan booking, kamu menyetujui syarat dan ketentuan yang berlaku.
                Pembayaran akan diproses melalui Midtrans.
              </p>
            </div>
          )}

          <div className="mt-8">
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="w-full bg-amber-600 text-white py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
              >
                {step === 3 ? "Review Booking" : "Lanjut"}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isPaying}
                className="w-full bg-amber-600 text-white py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {isPaying ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Memproses Pembayaran...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    Bayar Sekarang
                  </>
                )}
              </button>
            )}
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Atau booking via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY && (
        <script
          id="midtrans-snap"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          async
        />
      )}
    </div>
  )
}
