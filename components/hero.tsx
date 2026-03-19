export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <img src="/tropical-beach-sunset-paradise.jpg" alt="Hermosa playa tropical" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Descubre el mundo</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            Viaja a los destinos más hermosos y crea recuerdos inolvidables
          </p>
          <a
            href="#promociones"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Ver Promociones
          </a>
        </div>
      </div>
    </section>
  )
}
