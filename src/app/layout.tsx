import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: {
    default: "BarberQ — Where Style Meets Precision",
    template: "%s | BarberQ",
  },
  description:
    "Premium barbershop dengan pengalaman grooming kelas atas. Potong rambut, beard grooming, dan styling untuk pria modern. Booking online.",
  keywords: ["barbershop", "potong rambut", "grooming", "barber", "Bandung", "premium"],
  openGraph: {
    title: "BarberQ — Where Style Meets Precision",
    description:
      "Premium barbershop dengan pengalaman grooming kelas atas.",
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
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
