"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import PromotionsSection from "@/components/promotions-section"
import FeaturedDestinations from "@/components/featured-destinations"
import Footer from "@/components/footer"
import DemoBadge from "@/components/DemoBadge"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DemoBadge/>
      <PromotionsSection />
      <FeaturedDestinations />
      <Footer />
    </main>
  )
}
