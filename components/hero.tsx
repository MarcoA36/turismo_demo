// export default function Hero() {
//   return (
//     <section className="relative h-[80vh] overflow-hidden">
//       {/* Imagen de fondo */}
//       <img
//         src="/hero-2-turismo.jpg"
//         alt="Hermosa playa tropical"
//         className="w-full h-full object-cover"
//       />

//       {/* Overlay semi-transparente */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Contenido centrado */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="text-center text-white max-w-2xl px-4">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             Descubre el mundo
//           </h1>
//           <p className="text-xl md:text-2xl mb-8">
//             Viaja a los destinos más hermosos y crea recuerdos inolvidables
//           </p>
//           <a
//             href="#promociones"
//             className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
//           >
//             Ver Promociones
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client"

// import Image from "next/image"

// export default function Hero() {
//   return (
//     <section className="w-full min-h-[95vh] flex items-center bg-background">
//       <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* TEXTO (izquierda) */}
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             Descubre el mundo
//           </h1>

//           <p className="text-lg md:text-xl mb-8 text-muted-foreground">
//             Explorá destinos únicos, desde playas paradisíacas hasta ciudades llenas de historia. 
//             Organizamos tu viaje de principio a fin para que solo te preocupes por disfrutar, 
//             relajarte y crear recuerdos inolvidables en cada experiencia.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="#promociones"
//               className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
//             >
//               Ver Promociones
//             </a>

//             <a
//               href="#contacto"
//               className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition"
//             >
//               Consultar
//             </a>
//           </div>
//         </div>

//         {/* IMAGEN (derecha) */}
//         <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
//           <Image
//             src="/hero-2-turismo.jpg"
//             alt="Hermosa playa tropical"
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw, 50vw"
//             className="object-cover hover:scale-105 transition duration-700"
//           />
//         </div>

//       </div>
//     </section>
//   )
// }













"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const promotions = [
    {
      id: 1,
      title: "Caribe 50% OFF",
      description: "Paquetes completos a destinos caribeños",
      discount: "50%",
      image: "/caribbean-resort.webp",
    },
    {
      id: 2,
      title: "Europa Todo Incluido",
      description: "Tour por 10 países europeos",
      discount: "Hasta 40%",
      image: "/european-cities.webp",
    },
    {
      id: 3,
      title: "Safari en África",
      description: "Experiencia única en la naturaleza",
      discount: "35%",
      image: "/african-safari.webp",
    },
  ]

  const scrollRef = useRef<HTMLDivElement | null>(null)

  // auto scroll vertical infinito
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let scroll = 0

    const interval = setInterval(() => {
      scroll += 1
      container.scrollTop = scroll

      if (scroll >= container.scrollHeight / 2) {
        scroll = 0
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full min-h-[95vh] flex items-center bg-background">
      <div className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Descubre el mundo
          </h1>

          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Explorá destinos únicos, con promociones exclusivas y paquetes diseñados 
            para que viajes sin preocupaciones. Organizamos todo por vos para que solo disfrutes la experiencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#promociones"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Ver Promociones
            </a>

            <a
              href="#contacto"
              className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Consultar
            </a>
          </div>
        </div>

        {/* CARRUSEL VERTICAL */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            ref={scrollRef}
            className="h-full overflow-hidden space-y-6 pr-2"
          >
            {[...promotions, ...promotions].map((promo, index) => (
              <div
                key={index}
                className="relative h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover"
                />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                  <span className="bg-accent px-3 py-1 rounded-full text-sm font-bold w-fit">
                    {promo.discount}
                  </span>

                  <div>
                    <h3 className="font-bold text-lg">{promo.title}</h3>
                    <p className="text-sm text-gray-200">
                      {promo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* fade arriba/abajo */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  )
}