export default function Footer() {
  return (
    <footer className="bg-black/90 text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Explore Travel</h3>
            <p className="text-sm text-primary-foreground/80">
              Tu agencia de viajes de confianza para descubrir el mundo
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Destinos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/destinos" className="hover:underline">
                  Todos los destinos
                </a>
              </li>
              <li>
                <a href="/destinos" className="hover:underline">
                  Promociones
                </a>
              </li>
              <li>
                <a href="/destinos" className="hover:underline">
                  Últimas ofertas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancelaciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Explore Travel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
