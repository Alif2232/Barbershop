"use client"

import { useState, useEffect } from "react"
import { services } from "@/data/services"
import { barbers } from "@/data/barbers"
import { formatPrice, generateTimeSlots } from "@/lib/utils"
import { formatMidtransOrderId } from "@/lib/midtrans"
import { CalendarCheck, MessageCircle, CheckCircle, ChevronLeft, CreditCard, Loader2, Scissors } from "lucide-react"

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
  const [loaded, setLoaded] = useState(false)

  useEffect(() => { setLoaded(true) }, [])

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
      if (!res.ok) throw new Error(data.error || "Gagal memproses pembayaran")

      if (data.demo) {
        window.location.href = data.redirect_url
        return
      }

      window.snap.pay(data.token, {
        onSuccess: () => setIsSubmitted(true),
        onPending: () => setIsSubmitted(true),
        onError: () => { setPaymentError("Pembayaran gagal. Silakan coba lagi."); setIsPaying(false) },
        onClose: () => setIsPaying(false),
      })
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : "Gagal memproses pembayaran")
      setIsPaying(false)
    }
  }

  const handleSubmit = () => handlePayNow()

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
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full purple-gradient-bg flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white mb-4">Booking Berhasil!</h1>
          <p className="text-zinc-400 mb-2 font-light">
            Terima kasih, <strong className="text-purple-300">{customerName}</strong>!
          </p>
          <p className="text-sm text-zinc-600 mb-6">Pembayaran kamu sedang diproses. Kami akan mengirimkan konfirmasi via WhatsApp.</p>
          <div className="glass-card rounded-xl p-6 text-left space-y-2 text-sm mb-6">
            <p><span className="text-zinc-500">Layanan:</span> <span className="text-white">{selectedServiceData?.name}</span></p>
            <p><span className="text-zinc-500">Barber:</span> <span className="text-white">{selectedBarberData?.name}</span></p>
            <p><span className="text-zinc-500">Tanggal:</span> <span className="text-white">{selectedDate}</span></p>
            <p><span className="text-zinc-500">Jam:</span> <span className="text-white">{selectedTime}</span></p>
            <p><span className="text-zinc-500">Total:</span> <span className="font-bold purple-gradient-text">{selectedServiceData ? formatPrice(selectedServiceData.price) : "-"}</span></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={resetForm} className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-400 px-6 py-3 rounded-full font-medium hover:border-purple-500/50 hover:text-purple-300 transition-all">
              Booking Lagi
            </button>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600/20 text-green-400 border border-green-600/30 px-6 py-3 rounded-full font-medium hover:bg-green-600/30 transition-all">
              <MessageCircle className="h-4 w-4" />
              Hubungi WA
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 mb-6">
            <CalendarCheck className="h-3.5 w-3.5" />
            Booking
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white">
            Booking <span className="purple-gradient-text italic">Sekarang</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-light">Isi data berikut untuk melakukan reservasi.</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i <= step ? "purple-gradient-bg text-white shadow-md shadow-purple-500/30" : "bg-white/5 text-zinc-600 border border-white/5"
              }`}>
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 sm:w-14 h-0.5 mx-1 rounded transition-all duration-300 ${i < step ? "bg-purple-500" : "bg-white/10"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 sm:p-8 border-purple-500/10">
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="flex items-center gap-1 text-sm text-zinc-500 hover:text-purple-400 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4" />
              Kembali
            </button>
          )}

          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Pilih Layanan</h2>
              <div className="space-y-3">
                {services.map((service) => (
                  <button key={service.id} onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedService === service.id ? "border-purple-500 bg-purple-500/10 ring-1 ring-purple-500" : "border-white/5 hover:border-white/20 bg-white/[0.02]"
                    }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-zinc-500">{service.description}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="font-bold purple-gradient-text">{formatPrice(service.price)}</div>
                        <div className="text-xs text-zinc-600">{service.duration_minutes} menit</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Pilih Barber</h2>
              <div className="space-y-3">
                {barbers.map((barber) => (
                  <button key={barber.id} onClick={() => setSelectedBarber(barber.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedBarber === barber.id ? "border-purple-500 bg-purple-500/10 ring-1 ring-purple-500" : "border-white/5 hover:border-white/20 bg-white/[0.02]"
                    }`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Scissors className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{barber.name}</h3>
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
              <h2 className="text-xl font-bold text-white mb-6">Pilih Jadwal</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-zinc-400 mb-2">Tanggal</label>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent [color-scheme:dark]"
                />
              </div>
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Jam</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button key={time} onClick={() => setSelectedTime(time)}
                        className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time ? "purple-gradient-bg text-white shadow-sm" : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/5"
                        }`}>
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
              <h2 className="text-xl font-bold text-white mb-6">Data Diri</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Nama Lengkap</label>
                  <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Masukkan nama kamu"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">No. WhatsApp</label>
                  <input type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Konfirmasi Booking</h2>
              <div className="bg-white/5 rounded-xl p-6 space-y-3 mb-6 border border-white/5">
                {[
                  { label: "Layanan", value: selectedServiceData?.name },
                  { label: "Barber", value: selectedBarberData?.name },
                  { label: "Tanggal", value: selectedDate },
                  { label: "Jam", value: selectedTime },
                  { label: "Durasi", value: `${selectedServiceData?.duration_minutes} menit` },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="font-medium text-white">{item.value}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="text-zinc-500">Total</span>
                  <span className="font-bold text-lg purple-gradient-text">
                    {selectedServiceData ? formatPrice(selectedServiceData.price) : "-"}
                  </span>
                </div>
              </div>

              {paymentError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
                  <p className="text-sm text-red-400">{paymentError}</p>
                </div>
              )}

              <p className="text-xs text-zinc-600 mb-4">
                Dengan melakukan booking, kamu menyetujui syarat dan ketentuan yang berlaku.
                Pembayaran akan diproses melalui Midtrans.
              </p>
            </div>
          )}

          <div className="mt-8">
            {step < 4 ? (
              <button onClick={() => setStep(step + 1)} disabled={!canProceed()}
                className="w-full purple-gradient-bg text-white py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:bg-white/5 disabled:text-zinc-600 disabled:cursor-not-allowed disabled:shadow-none">
                {step === 3 ? "Review Booking" : "Lanjut"}
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={isPaying}
                className="w-full purple-gradient-bg text-white py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:bg-white/5 disabled:text-zinc-600 disabled:cursor-not-allowed disabled:shadow-none inline-flex items-center justify-center gap-2">
                {isPaying ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Memproses Pembayaran...</>
                ) : (
                  <><CreditCard className="h-5 w-5" /> Bayar Sekarang</>
                )}
              </button>
            )}
          </div>

          <div className="mt-4 text-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400/70 hover:text-green-400 transition-colors">
              <MessageCircle className="h-4 w-4" />
              Atau booking via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY && (
        <script id="midtrans-snap" src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY} async />
      )}
    </div>
  )
}
