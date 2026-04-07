// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"

// export default function ScrollHero() {
//   const { scrollYProgress } = useScroll()

//   const dayOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
//   const sunsetOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
//   const nightOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1])

//   return (
//     <section className="h-[300vh] relative">

//       <div className="sticky top-0 h-screen overflow-hidden">

//         <motion.img
//           src="/amanecer.jpg"
//           style={{ opacity: dayOpacity }}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <motion.img
//           src="/tarde.jpg"
//           style={{ opacity: sunsetOpacity }}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <motion.img
//           src="/noche.jpg"
//           style={{ opacity: nightOpacity }}
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="relative z-10 h-full flex items-center justify-center text-white text-6xl font-bold">
//           Tu viaje empieza acá
//         </div>

//       </div>
//     </section>
//   )
// }
export default function ScrollHero() {
  return (
    <section className="relative h-[300vh]">

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* AMANECER */}
        <img
          src="/african-safari.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* TARDE */}
        <img
          src="/collage-hero.png"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeInMid"
        />

        {/* NOCHE */}
        <img
          src="/hero-turismo-2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeInEnd"
        />

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex items-center justify-center text-white text-5xl">
          Explorá Argentina
        </div>

      </div>
    </section>
  )
}