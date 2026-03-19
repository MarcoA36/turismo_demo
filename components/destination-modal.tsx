"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function DestinationModal({ destination, onClose }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!destination) return null

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % destination.gallery.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? destination.gallery.length - 1 : prev - 1))
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-8 bg-card rounded-lg shadow-2xl z-50 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
            <h2 className="text-3xl font-bold text-card-foreground">{destination.name}</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative bg-black rounded-lg overflow-hidden mb-4 h-96 md:h-[500px]">
                <img
                  src={destination.gallery[selectedImageIndex] || "/placeholder.svg"}
                  alt={`${destination.name} ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation buttons */}
                {destination.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {selectedImageIndex + 1} / {destination.gallery.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail gallery */}
              {destination.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {destination.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        idx === selectedImageIndex ? "border-primary" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Destination Info */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Sobre este destino</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{destination.description}</p>

                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Atractivos principales</h3>
                <ul className="space-y-3 mb-6">
                  {destination.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Información práctica</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Mejor época</p>
                    <p className="font-semibold text-card-foreground">{destination.bestSeason}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duración recomendada</p>
                    <p className="font-semibold text-card-foreground">{destination.duration}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="bg-primary/5 rounded-lg p-6 h-fit">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Precio desde</p>
                  <p className="text-4xl font-bold text-primary mb-2">${destination.price}</p>
                  <p className="text-sm text-muted-foreground">por persona</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐</span>
                    <span className="font-semibold">{destination.rating}</span>
                    <span className="text-sm text-muted-foreground">({destination.reviews} reviews)</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition mb-3">
                  Reservar ahora
                </button>
                <button className="w-full border border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary/5 transition">
                  Obtener información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
