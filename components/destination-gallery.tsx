"use client"

import Link from "next/link"

export default function DestinationGallery({ destinations, onSelectDestination }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((dest) => (
        <Link
          key={dest.id}
          href={`/destino/${dest.id}`}
          className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={dest.image || "/placeholder.svg"}
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </div>
          <div className="p-4 bg-card">
            <h3 className="text-xl font-bold text-card-foreground">{dest.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{dest.country}</p>

            {/* Description preview */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{dest.description}</p>

            {/* Key info */}
            <div className="mb-4 pb-4 border-b border-border space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Duración</span>
                <span className="font-semibold text-card-foreground">{dest.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Mejor época</span>
                <span className="font-semibold text-card-foreground">{dest.bestSeason}</span>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary">${dest.price}</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                ⭐ {dest.rating} <span className="text-xs">({dest.reviews})</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
