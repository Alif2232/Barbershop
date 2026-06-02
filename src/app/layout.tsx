import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "BarberQ - Premium Barbershop",
    template: "%s | BarberQ",
  },
  description:
    "Barbershop premium dengan pelayanan terbaik. Potong rambut, grooming, dan styling untuk pria modern. Booking online sekarang!",
  keywords: ["barbershop", "potong rambut", "grooming", "barber", "Bandung"],
  openGraph: {
    title: "BarberQ - Premium Barbershop",
    description:
      "Barbershop premium dengan pelayanan terbaik. Potong rambut, grooming, dan styling untuk pria modern.",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
