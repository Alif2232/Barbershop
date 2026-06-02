<div align="center">
  <h1>✂️ BarberQ — Premium Barbershop</h1>
  <p>
    <strong>Website profil + sistem booking online untuk barbershop modern.</strong>
    <br />
    Mobile-first · SEO friendly · Mudah di-update
  </p>
  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js%2016-000000?logo=next.js&logoColor=white" alt="Next.js 16" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://midtrans.com/"><img src="https://img.shields.io/badge/Midtrans-0055B8?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjAgMzJoMjRsLTEyLTE2eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44Ii8+PC9zdmc+&logoColor=white" alt="Midtrans" /></a>
    <a href="https://supabase.com/"><img src="https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white" alt="Supabase" /></a>
  </p>
</div>

---

## ✨ Fitur

### 🟢 MVP (Selesai)
| Fitur | Detail |
|-------|--------|
| **Landing Page** | Hero section, branding, about, CTA booking |
| **Layanan & Harga** | Daftar jasa + price list (card layout) |
| **Booking Online** | Multi-step form: Pilih layanan → Barber → Jadwal → Data diri → Bayar |
| **Payment Gateway** | Midtrans Snap (VA, QRIS, GoPay, Credit Card) + Demo Mode |
| **Galeri Portofolio** | Grid foto + filter kategori + lightbox preview |
| **Tim Barber** | Profil 4 barber dengan spesialisasi |
| **Lokasi & Kontak** | Google Maps embed, alamat, jam buka, tombol WA |

### 🟡 Stage 2 (Rencana)
- Testimoni pelanggan dengan rating
- Manajemen janji (dashboard admin)
- Integrasi Supabase database

### 🔵 Stage 3 (Bonus)
- Blog / Tips rambut untuk SEO
- Loyalty program
- Integrasi CMS Sanity

---

## 🚀 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS |
| **Animasi** | Framer Motion |
| **Icons** | Lucide React + Custom SVG |
| **Payment** | Midtrans Snap |
| **Database** | Supabase + Prisma ORM |
| **Deploy** | Vercel |

---

## 📸 Screenshots

> _Coming soon — tambahkan screenshot web di sini_

| Halaman | Preview |
|---------|---------|
| Landing Page | ![]() |
| Layanan | ![]() |
| Galeri | ![]() |
| Booking | ![]() |

---

## 🛠️ Cara Instalasi

```bash
# Clone repo
git clone https://github.com/Alif2232/Barbershop.git
cd Barbershop

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Isi .env.local dengan credentials Midtrans dan Supabase

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🔐 Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Midtrans (kosongkan untuk Demo Mode)
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-xxx
MIDTRANS_SERVER_KEY=SB-Mid-server-xxx
MIDTRANS_IS_PRODUCTION=false

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> **Demo Mode:** Jika `MIDTRANS_CLIENT_KEY` tidak diisi, pembayaran akan menggunakan mode demo simulasi.

---

## 📁 Struktur Project

```
src/
├── app/
│   ├── api/payment/       # Midtrans API routes
│   ├── booking/           # Multi-step booking form
│   ├── galeri/            # Gallery + lightbox
│   ├── kontak/            # Contact + Google Maps
│   ├── layanan/           # Services & price list
│   ├── payment/           # Payment pages (demo, success, error)
│   └── tim/               # Barber team profiles
├── components/
│   ├── layout/            # Navbar, Footer
│   └── sections/          # Hero, About, Services, Gallery, Testimonials, CTA
├── data/                  # Dummy data (barbers, services, gallery, testimonials)
├── lib/                   # Utilities (utils, midtrans, supabase)
└── types/                 # TypeScript interfaces
```

---

## 🌐 Deploy ke Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Klik tombol di atas, hubungkan dengan repo GitHub, dan Vercel akan otomatis mendeploy project.

---

## 📞 Kontak

- **WhatsApp:** 0812-3456-7890
- **Email:** hello@barberq.id
- **Instagram:** @barberq.id

---

<div align="center">
  <p>Dibuat dengan ❤️ untuk para barber dan pelanggan setia</p>
  <p>
    <a href="https://github.com/Alif2232/Barbershop/issues">Laporkan Bug</a>
    ·
    <a href="https://github.com/Alif2232/Barbershop/issues">Request Fitur</a>
  </p>
</div>
