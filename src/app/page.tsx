"use client"

import Hero from "@/components/sections/Hero"
import AboutSection from "@/components/sections/AboutSection"
import ServicesPreview from "@/components/sections/ServicesPreview"
import GalleryPreview from "@/components/sections/GalleryPreview"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
