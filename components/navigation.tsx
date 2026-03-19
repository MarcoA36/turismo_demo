"use client"

import Link from "next/link"
import { MapPin, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <MapPin className="w-6 h-6" />
            <span>Explore Travel</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Inicio
            </Link>
            <Link href="/destinos" className="text-foreground hover:text-primary transition">
              Destinos
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
              Reservar
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition">
              Inicio
            </Link>
            <Link href="/destinos" className="block py-2 text-foreground hover:text-primary transition">
              Destinos
            </Link>
            <button className="w-full mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
              Reservar
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
