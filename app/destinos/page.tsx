"use client"

import Navigation from "@/components/navigation"
import DestinationGallery from "@/components/destination-gallery"
import Footer from "@/components/footer"
import { destinations } from "@/data/destinations"

export default function DestinosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">Todos nuestros destinos</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Explora los mejores lugares del mundo y reserva tu próxima aventura
        </p>
        <DestinationGallery destinations={destinations} />
      </div>
      <Footer />
    </main>
  )
}
