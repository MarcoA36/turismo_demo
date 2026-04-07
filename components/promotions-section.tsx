"use client";

import Image from "next/image";

export default function PromotionsSection() {
  const promotions = [
    {
      id: 1,
      title: "Cataratas del Iguazú",
      description: "Viaje en bus + hotel + excursiones incluidas",
      discount: "50%",
      price: "$60.000",
      originalPrice: "$120.000",
      installments: "6 cuotas sin interés",
      image: "/cataratas-1x800.jpg",
    },
    {
      id: 2,
      title: "Bariloche & Patagonia",
      description: "Lagos, nieve y paisajes únicos todo el año",
      discount: "40%",
      price: "$95.000",
      originalPrice: "$160.000",
      installments: "9 cuotas sin interés",
      image: "/bariloche.webp",
    },
    {
      id: 3,
      title: "Norte Argentino",
      description: "Jujuy, Salta y cerros de colores inolvidables",
      discount: "35%",
      price: "$70.000",
      originalPrice: "$108.000",
      installments: "6 cuotas sin interés",
      image: "/salta-jujuy.webp",
    },
  ];

  return (
    <section
      id="promociones"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black/80 mb-6 tracking-tight">
            Promociones
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">
              imperdibles
            </span>
          </h2>

          <p className="text-lg text-black/70">
            Descubrí los mejores destinos de Argentina con descuentos exclusivos
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* IMAGEN */}
              <Image
                src={promo.image}
                alt={promo.title}
                width={500}
                height={400}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/60 to-transparent transition-all duration-500" />

              {/* CONTENIDO */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* BADGE */}
                <div className="self-start px-4 py-1.5 rounded-full text-sm font-bold text-black bg-white shadow-lg">
                  {promo.discount} OFF
                </div>

                {/* INFO */}
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {promo.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition duration-500">
                    {promo.description}
                  </p>

                  {/* PRECIOS */}
                  <div className="mb-4">
                    {/* PRECIO PRINCIPAL */}
                    <div className="flex flex-col gap-3">
                      <span className="text-white line-through text-2xl">
                        {promo.originalPrice}
                      </span>

                      <span className="text-4xl md:text-5xl font-semibold text-white leading-none drop-shadow-[0_5px_20px_rgba(0,0,0,0.9)]">
                        {promo.price}
                      </span>
                    </div>

                    {/* INFO EXTRA */}
                    <div className="mt-1">
                      <span className="text-sm md:text-base text-green-300 font-bold">
                        {promo.installments}
                      </span>
                    </div>
                  </div>

                  {/* URGENCIA */}
                  <div className="text-sm md:text-base text-orange-600 mb-4 opacity-0 group-hover:opacity-100 transition bg-white/90 p-3 w-auto rounded-2xl">
                    Oferta por tiempo limitado
                  </div>

                  {/* CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transition duration-500">
                    <button className="px-5 py-2 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition">
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              {/* BORDE */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
