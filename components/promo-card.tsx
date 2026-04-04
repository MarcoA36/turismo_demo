"use client"

import Image from "next/image"
const promo = {
  destino: "San Bernardo",
  fecha: "24 al 26 de Abril",
  precio: "$155.000",
  detalles: [
    "3 días / 2 noches",
    "Pileta climatizada",
    "Desayuno incluido"
  ],
  imagen: "/san-bernardo.jpg"
}
export default function PromoCard() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl">

      {/* Fondo */}
      <Image
        src={promo.imagen}
        alt={promo.destino}
        fill
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENIDO */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">

        {/* TOP */}
        <div>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur">
            Escapate a
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            {promo.destino}
          </h2>
        </div>

        {/* MEDIO */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 text-center">
          <p className="text-sm">📅 {promo.fecha}</p>
        </div>

        {/* PRECIO */}
        <div className="flex justify-between items-end">

          <div className="text-xs space-y-1">
            {promo.detalles.map((d, i) => (
              <p key={i}>• {d}</p>
            ))}
          </div>

          <div className="bg-yellow-400 text-black px-3 py-2 rounded-lg font-bold text-lg">
            {promo.precio}
          </div>

        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/549XXXXXXXXXX?text=Hola! Me interesa ${promo.destino}`}
          target="_blank"
          className="mt-2 bg-accent text-center py-2 rounded-lg font-semibold"
        >
          Consultar
        </a>

      </div>
    </div>
  )
}