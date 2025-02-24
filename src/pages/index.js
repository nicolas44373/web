import React from 'react';
import Navbar from '@/pages/components/Navbar';
import { Truck, Award, Phone, Facebook, Instagram } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Home() {
  const productos = [
    { id: 1, imagen: 'rebo1.JPG', nombre: 'Bocaditos', descripcion: 'Muzarella, Jamon y Queso, Calabaza y Muzza, Espinaca, Crocante' },
    { id: 2, imagen: 'rebo2.JPG', nombre: 'Patitas de Pollo', descripcion: 'Tradicional, Jamon y Queso, Espinaca y Queso' },
    { id: 3, imagen: 'rebo3.JPG', nombre: 'Medallones', descripcion: 'Tradicional, Jamon y Queso, Espinaca y Queso, Cheddar' },
    { id: 4, imagen: 'mmerluza.jpeg', nombre: 'Medallones de Merluza', descripcion: 'Tradicional, Jamon y Queso, Espinaca y Queso, Cheddar, Primavera, Roquefort' },
    { id: 5, imagen: 'rebo5.JPG', nombre: 'Milanesa de Merluza', descripcion: 'Tradicional, Finas hierbas, A La Romana' },
    { id: 6, imagen: 'pollo.jpeg', nombre: 'Pollo Entero', descripcion: 'Becar, Cresta, Sierra Sur' },
    { id: 7, imagen: 'pm.jpeg', nombre: 'Pata Muslo', descripcion: 'Retail, IQF, Bloque' },
    { id: 8, imagen: 'filet.JPG', nombre: 'Filet', descripcion: 'IQF, Retail, Bloque' },
    { id: 9, imagen: 'huevo.webp', nombre: 'Huevos', descripcion: 'Originales' },
    { id: 10, imagen: 'lango.avif', nombre: 'Mariscos', descripcion: 'Anillas de Calamar, Langostinos, Rabas, Mejillones, Camarones, Cazuela de mariscos' },
    { id: 11, imagen: 'salmon.JPG', nombre: 'Pescados', descripcion: 'Merluza, Atun, Salmon, Sabalo' },
    { id: 12, imagen: 'papas.jpeg', nombre: 'Papas McCain', descripcion: 'Baston, Noisette, Carita' }

  ];


  return (
    <div className="min-h-screen bg-amber-50">
{/* Navbar */}
<Navbar className="fixed top-0 left-0 w-full z-50" /> 

 {/* Hero Section - Altura reducida en móvil */}
 <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden"
      >
        {/* Contenedor con altura explícita reducida para móviles */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
          {/* Versión móvil - imagen sin recortar con altura menor */}
          <div className="absolute top-0 left-0 w-full h-full block sm:hidden">
            <Image 
              src="/alenort2.png" 
              alt="Logo de la empresa"
              layout="fill"
              objectFit="contain" 
              priority
              className="transform hover:scale-105 transition-transform duration-800"
            />
          </div>
          
          {/* Versión desktop - imagen con cover */}
          <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
            <Image 
              src="/alenort2.png" 
              alt="Logo de la empresa"
              layout="fill"
              objectFit="cover"
              objectPosition="center center" 
              priority
              className="transform hover:scale-105 transition-transform duration-800"
            />
          </div>
          
          {/* Overlay y contenido */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20, x: -40 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-full max-w-4xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left drop-shadow-lg">
                {/* Texto del hero */}
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>


  {/* Características */}
  <div className="py-12 md:py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8 md:mb-12 text-black sm:text-black"
      >
        ¿Por qué elegir Alenort?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-black">
        {[ 
          { icon: <Truck className="mx-auto h-12 w-12 text-black mb-4" />, title: "Stock Permanente", description: "Podras encontrar una amplia variedad de productos y stock permanente de las mismas." },
          { icon: <Award className="mx-auto h-12 w-12 text-black mb-4" />, title: "Máxima Calidad", description: "Productos frescos y seleccionados" },
          { icon: <Phone className="mx-auto h-12 w-12 text-black mb-4" />, title: "Atención Personalizada", description: "Servicio al cliente excepcional" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center text-black p-6 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 sm:text-black">{item.title}</h3>
            <p className="text-gray-600 sm:text-black">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

  {/* Nuestras Marcas Section */}
  <div className="py-12 md:py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8 md:mb-12 text-black sm:text-black"
      >
        Nuestras Marcas
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {[
          { id: 1, imagen: 'becar1.png', nombre: '', width: 160, height: 130 },
          { id: 2, imagen: 'cresta1.png', nombre: '', width: 120, height: 100 },
          { id: 3, imagen: 'gta1.png', nombre: '', width: 110, height: 95 },
          { id: 4, imagen: 'maccain.png', nombre: '', width: 115, height: 85 },
          { id: 5, imagen: 'sierra.png', nombre: '', width: 135, height: 108 },
          { id: 6, imagen: 'sb.svg', nombre: '', width: 170, height: 130 },
          { id: 7, imagen: 'gran.png', nombre: '', width: 170, height: 130 },
          { id: 8, imagen: 'sha.png', nombre: '', width: 170, height: 130 },
          { id: 9, imagen: 'vidal.webp', nombre: '', width: 170, height: 130 },
          { id: 9, imagen: 'soli.png', nombre: '', width: 170, height: 130 }
        ].map((marca) => (
          <motion.div
            key={marca.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: marca.id * 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className={`relative grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110`}>
              <Image
                src={`/${marca.imagen}`}
                alt={marca.nombre}
                width={marca.width}
                height={marca.height}
                objectFit="contain"
                className="transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

  {/* Productos Section */}
  <div className="py-12 md:py-16 bg-amber-50">
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8 md:mb-12 text-black sm:text-black hover:scale-105 transition-transform duration-300"
      >
        Nuestros Productos
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {productos.map((producto) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: producto.id * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <Image 
                src={`/${producto.imagen}`}
                alt={producto.nombre}
                width={400}
                height={300}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
            
            <div className="p-6 transform translate-y-0 group-hover:translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 sm:text-black group-hover:text-amber-600 transition-colors duration-300">
                {producto.nombre}
              </h3>
              <p className="text-gray-600 sm:text-black group-hover:text-gray-700 transition-colors duration-300">
                {producto.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Columna 1: Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 sm:text-white">Contacto</h4>
          <p>Email: alenortconsultas@gmail.com</p>
          <p>Teléfono: 3812224766</p>
          <p>Fijo: 2441252</p>
        </motion.div>

        {/* Columna 2: Horario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 sm:text-white">Horario</h4>
          <p>Lunes a Viernes: 8:30 - 13:30 y 17:30 a 21:00</p>
          <p>Sábado: 8:30 - 14:00</p>
        </motion.div>

        {/* Columna 3: Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 sm:text-white">Síguenos</h4>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white hover:text-black-500 transition-colors"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/alenort.distribuidoraavicola/#"
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white hover:text-black-500 transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Línea divisoria */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-px bg-gray-700 my-6"
      />

      {/* Texto de derechos de autor */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-400 sm:text-black"
      >
        © {new Date().getFullYear()} Alenort. Todos los derechos reservados.
      </motion.div>
    </div>
  </footer>
</div>

  );
}