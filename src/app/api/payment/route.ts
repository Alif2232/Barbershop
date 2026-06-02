import { NextResponse } from "next/server"

function isMidtransConfigured(): boolean {
  return !!(process.env.MIDTRANS_SERVER_KEY && process.env.MIDTRANS_CLIENT_KEY)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { orderId, amount, customerName, customerPhone } = body

    if (!orderId || !amount || !customerName || !customerPhone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    if (!isMidtransConfigured()) {
      const demoRedirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment/demo?order_id=${orderId}&amount=${amount}&name=${encodeURIComponent(customerName)}&phone=${encodeURIComponent(customerPhone)}`
      return NextResponse.json({
        demo: true,
        redirect_url: demoRedirectUrl,
        token: "demo-token",
      })
    }

    const Snap = require("midtrans-client").Snap
    const snap = new Snap({
      isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
    })

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: customerName,
        phone: customerPhone,
        email: body.customerEmail || `${customerName.replace(/\s/g, "").toLowerCase()}@email.com`,
      },
      callbacks: {
        finish: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment/success?order_id=${orderId}`,
        error: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment?error=1`,
      },
    }

    const transaction = await snap.createTransaction(parameter)

    return NextResponse.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Payment failed"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
