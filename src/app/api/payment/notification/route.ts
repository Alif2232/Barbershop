import { NextResponse } from "next/server"

const Snap = require("midtrans-client").Snap

const snap = new Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
  serverKey: process.env.MIDTRANS_SERVER_KEY || "",
  clientKey: process.env.MIDTRANS_CLIENT_KEY || "",
})

export async function POST(request: Request) {
  try {
    const notificationJson = await request.json()

    const statusResponse = await snap.transaction.notification(notificationJson)

    const orderId = statusResponse.order_id
    const transactionStatus = statusResponse.transaction_status
    const fraudStatus = statusResponse.fraud_status
    const paymentType = statusResponse.payment_type
    const grossAmount = statusResponse.gross_amount

    console.log(`Payment notification received:
      Order ID: ${orderId}
      Transaction status: ${transactionStatus}
      Fraud status: ${fraudStatus}
      Payment type: ${paymentType}
      Amount: ${grossAmount}
    `)

    let bookingStatus = "pending"
    if (transactionStatus === "capture") {
      if (fraudStatus === "accept") {
        bookingStatus = "confirmed"
      }
    } else if (transactionStatus === "settlement") {
      bookingStatus = "confirmed"
    } else if (
      transactionStatus === "cancel" ||
      transactionStatus === "deny" ||
      transactionStatus === "expire"
    ) {
      bookingStatus = "cancelled"
    }

    console.log(`Booking ${orderId} status updated to: ${bookingStatus}`)

    return NextResponse.json({
      status: "ok",
      booking_status: bookingStatus,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Notification processing failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
