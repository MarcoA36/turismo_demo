"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">

      {/* IMAGEN BASE */}
      <Image
        src="/hero-turismo-2.webp"
        alt="Destinos por Argentina"
        fill
        priority
        className="object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
      />

      {/* OVERLAY OSCURO GRADIENTE (mejor contraste) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* LUZ RADIAL CENTRAL (focus visual) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[400px] bg-white/10 blur-3xl rounded-full opacity-40" />
      </div>

      {/* GRAIN / TEXTURA (detalle premium) */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('/noise.png')]" />

      {/* CONTENIDO */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Explorá Argentina
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
            como nunca antes
          </span>
        </h1>

        <h3 className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Viajes a los destinos más increíbles del país: sierras, cataratas,
          Patagonia y el norte argentino.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#promociones"
            className="px-8 py-4 rounded-xl font-semibold text-lg bg-white text-black hover:bg-white/90 transition shadow-xl shadow-black/40"
          >
            Ver viajes
          </a>

          <a
            href="#contacto"
            className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/40 text-white hover:bg-white/10 backdrop-blur transition"
          >
            Consultar ahora
          </a>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        ↓
      </div>

      {/* GRADIENTE INFERIOR */}
      {/* <div className="absolute bottom-0 left-0 w-full h-md-30 bg-gradient-to-t from-background to-transparent" /> */}

      {/* ANIMACIÓN CUSTOM */}
      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
      `}</style>

    </section>
  )
}