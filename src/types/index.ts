export interface Barber {
  id: string
  name: string
  photo: string
  bio: string
  specialties: string[]
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration_minutes: number
  barber_id?: string
}

export interface Booking {
  id: string
  customer_name: string
  customer_phone: string
  service_id: string
  barber_id: string
  date: string
  time_slot: string
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}

export interface GalleryItem {
  id: string
  image_url: string
  caption: string
  category: string
}

export interface Testimonial {
  id: string
  customer_name: string
  photo: string
  rating: number
  review: string
  created_at: string
}

export interface TimeSlot {
  time: string
  available: boolean
}
