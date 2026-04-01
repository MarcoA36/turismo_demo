export default function PromotionsSection() {
  const promotions = [
    {
      id: 1,
      title: "Caribe 50% OFF",
      description: "Paquetes completos a destinos caribeños con descuento especial",
      discount: "50%",
      image: "/caribbean-resort.jpg",
    },
    {
      id: 2,
      title: "Europa Todo Incluido",
      description: "Tour por 10 países europeos con alojamiento y tours",
      discount: "Hasta 40%",
      image: "/european-cities.jpg",
    },
    {
      id: 3,
      title: "Safari en África",
      description: "Experiencia única observando la vida silvestre africana",
      discount: "35%",
      image: "/african-safari.jpg",
    },
  ]

  return (
    <section id="promociones" className="py-16 md:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Promociones Especiales</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Aprovecha nuestras ofertas limitadas en los mejores destinos
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={promo.image || "/placeholder.svg"}
                alt={promo.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold w-fit">
                  {promo.discount} Descuento
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-sm text-gray-200">{promo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
