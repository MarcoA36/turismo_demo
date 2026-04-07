"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import DestinationGallery from "./destination-gallery"
import { destinations } from "@/data/destinations"
export default function FeaturedDestinations() {
  const featured = [
    {
      id: 1,
      name: "Machu Picchu",
      country: "Perú",
      image: "/machu-picchu-peru-ruins.jpg",
    },
    {
      id: 2,
      name: "Taj Mahal",
      country: "India",
      image: "/taj-mahal-india.jpg",
    },
    {
      id: 3,
      name: "Santorini",
      country: "Grecia",
      image: "/santorini-greece-sunset.jpg",
    },
    {
      id: 4,
      name: "Maldivas",
      country: "Océano Índico",
      image: "/maldives-tropical-resort.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Proximas salidas</h2>
        <p className="text-lg text-muted-foreground mb-12">Explora nuestros destinos más populares</p>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featured.map((dest) => (
            <div
              key={dest.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{dest.name}</h3>
                <p className="text-sm text-gray-300">{dest.country}</p>
              </div>
            </div>
          ))}
        </div> */}
<DestinationGallery destinations={destinations} />
        {/* <div className="text-center">
          <Link
            href="/destinos"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Ver todos los destinos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
