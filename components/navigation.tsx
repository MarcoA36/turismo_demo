"use client"

import Link from "next/link"
import { MapPin, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      
      {/* CONTENEDOR GLASS */}
      <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] px-6">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-semibold tracking-tight group"
          >
            <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
              <MapPin className="w-5 h-5" />
            </div>

            <span className="text-lg md:text-xl">
              Explore <span className="text-white/70">Travel</span>
            </span>
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-white/80 hover:text-white transition relative"
            >
              Inicio
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white/80 transition-all group-hover:w-full" />
            </Link>

            <Link
              href="/destinos"
              className="text-white/80 hover:text-white transition"
            >
              Destinos
            </Link>

            {/* CTA PRO */}
            <button className="px-6 py-2.5 rounded-xl font-semibold text-sm text-black bg-white hover:bg-white/90 transition shadow-lg shadow-black/30">
              Reservar
            </button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-white/10">

            <Link
              href="/"
              className="text-white/80 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>

            <Link
              href="/destinos"
              className="text-white/80 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Destinos
            </Link>

            <button className="mt-2 w-full px-6 py-3 rounded-xl font-semibold text-black bg-white hover:bg-white/90 transition">
              Reservar
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}