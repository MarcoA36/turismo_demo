"use client"

import Image from "next/image"

export default function Hero() {
  return (
    // <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">

    //   {/* IMAGEN DE FONDO */}
    //   <Image
    //     src="/collage-hero.png"
    //     alt="Destinos"
    //     fill
    //     priority
    //     className="object-cover"
    //   />

    //   {/* OVERLAY OSCURO */}
    //   <div className="absolute inset-0 bg-black/20" />

    //   {/* CONTENIDO */}
    //   <div className="relative z-10 text-center px-6 max-w-3xl">

    //     <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
    //       Descubrí destinos increíbles
    //     </h1>

    //     <p className="text-lg md:text-xl text-gray-200 mb-8">
    //       Viajes únicos, promociones exclusivas y experiencias inolvidables.
    //     </p>

    //     <div className="flex flex-col sm:flex-row gap-4 justify-center">

    //       <a
    //         href="#promociones"
    //         className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
    //       >
    //         Ver Promociones
    //       </a>

    //       <a
    //         href="#contacto"
    //         className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition"
    //       >
    //         Consultar
    //       </a>

    //     </div>
    //   </div>

    //   {/* DEGRADADO ABAJO (para que corte lindo con la sección siguiente) */}
    //   <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

    // </section>
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">

  {/* IMAGEN */}
  <Image
    src="/collage-hero.webp"
    alt="Destinos"
    fill
    priority
    className="object-cover"
  />

  {/* GRADIENTE SUAVE GLOBAL */}

  {/* HALO DETRÁS DEL TEXTO */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-full max-w-3xl h-[60%] bg-black/50 blur-3xl opacity-60 rounded-full" />
  </div>

  {/* CONTENIDO */}
  <div className="relative z-10 text-center p-6 max-w-3xl bg-black/30">

    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
      Descubrí destinos increíbles
    </h1>

    <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
      Viajes únicos, promociones exclusivas y experiencias inolvidables.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#promociones"
        className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
      >
        Ver Promociones
      </a>

      <a
        href="#contacto"
        className="px-8 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition"
      >
        Consultar
      </a>
    </div>

  </div>

  {/* CORTE ABAJO */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

</section>
  )
}