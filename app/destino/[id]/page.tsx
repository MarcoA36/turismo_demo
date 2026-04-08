"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { destinations } from "@/data/destinations";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function DestinationDetailPage() {
  const params = useParams();
  const id = Number.parseInt(params.id as string);
  const destination = destinations.find((d) => d.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!destination) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground">
            Destino no encontrado
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % destination.gallery.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? destination.gallery.length - 1 : prev - 1,
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          Volver
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            {destination.name}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {destination.country}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {destination.duration}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              {destination.rating} ({destination.reviews} reviews)
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div
                className="relative h-96 md:h-[500px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={destination.gallery[selectedImageIndex]}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Flechas */}
                {destination.gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {destination.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      idx === selectedImageIndex
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Destination description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-card-foreground">
                Sobre este destino
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {destination.description}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-card-foreground">
                Atractivos principales
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    <span className="text-2xl text-primary flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-card-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical info */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-card-foreground">
                Información práctica
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Mejor época para visitar
                  </p>
                  <p className="text-2xl font-bold text-card-foreground">
                    {destination.bestSeason}
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Duración recomendada
                  </p>
                  <p className="text-2xl font-bold text-card-foreground">
                    {destination.duration}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border border-border p-8">
              {/* Price */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-2">
                  Precio desde
                </p>
                <p className="text-5xl font-bold text-primary mb-2">
                  ${destination.price}
                </p>
                <p className="text-sm text-muted-foreground">por persona</p>
              </div>

              {/* Divider */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <p className="font-bold text-lg text-card-foreground">
                      {destination.rating}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {destination.reviews} reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <button className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:bg-primary/90 transition mb-3 text-lg">
                Reservar ahora
              </button>
              <button className="w-full border-2 border-primary text-primary font-semibold py-4 rounded-lg hover:bg-primary/5 transition">
                Obtener información
              </button>

              {/* Additional info */}
              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {destination.country}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {destination.bestSeason}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {destination.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related destinations */}
        <section className="mt-20 pt-12 border-t border-border">
          <h2 className="text-3xl font-bold mb-8 text-card-foreground">
            Otros destinos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations
              .filter((d) => d.id !== destination.id)
              .slice(0, 3)
              .map((dest) => (
                <Link
                  key={dest.id}
                  href={`/destino/${dest.id}`}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dest.image || "/placeholder.svg"}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <h3 className="font-bold text-card-foreground">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {dest.country}
                    </p>
                    <p className="text-primary font-bold mt-2">${dest.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={destination.gallery[selectedImageIndex]}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      <Footer />
    </main>
  );
}
