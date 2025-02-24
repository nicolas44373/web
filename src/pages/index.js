import React from 'react';
import Navbar from '@/pages/components/Navbar';
import { Truck, Award, Phone, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

// Predefine los productos fuera del componente para evitar recreaciones
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

// Predefine las marcas fuera del componente
const marcas = [
  { id: 1, imagen: 'becar1.png', nombre: '', width: 160, height: 130 },
  { id: 2, imagen: 'cresta1.png', nombre: '', width: 120, height: 100 },
  { id: 3, imagen: 'gta1.png', nombre: '', width: 110, height: 95 },
  { id: 4, imagen: 'maccain.png', nombre: '', width: 115, height: 85 },
  { id: 5, imagen: 'sierra.png', nombre: '', width: 135, height: 108 },
  { id: 6, imagen: 'sb.svg', nombre: '', width: 170, height: 130 },
  { id: 7, imagen: 'gran.png', nombre: '', width: 170, height: 130 },
  { id: 8, imagen: 'sha.png', nombre: '', width: 170, height: 130 },
  { id: 9, imagen: 'vidal.webp', nombre: '', width: 170, height: 130 },
  { id: 10, imagen: 'soli.png', nombre: '', width: 170, height: 130 }
];

// Crea componentes con animaciones ligeras 
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  return (
    <div 
      className={`opacity-0 translate-y-4 ${className}`}
      style={{
        animation: `fadeIn 0.8s ease forwards ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navbar */}
      <Navbar className="fixed top-0 left-0 w-full z-50" /> 
      
      {/* Hero Section - Optimizada */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
        {/* Versión móvil */}
        <div className="absolute top-0 left-0 w-full h-full block sm:hidden">
          <Image 
            src="/alenort2.png" 
            alt="Logo de la empresa"
            fill
            sizes="100vw"
            priority
            className="object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Versión desktop */}
        <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
          <Image 
            src="/alenort2.png" 
            alt="Logo de la empresa"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left drop-shadow-lg opacity-0 animate-[fadeIn_0.8s_ease_0.5s_forwards]">
              {/* Texto del hero */}
            </h1>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection className="text-3xl font-bold text-center mb-8 md:mb-12 text-black">
            ¿Por qué elegir Alenort?
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-black">
            {[ 
              { icon: <Truck className="mx-auto h-12 w-12 text-black mb-4" />, title: "Stock Permanente", description: "Podras encontrar una amplia variedad de productos y stock permanente de las mismas." },
              { icon: <Award className="mx-auto h-12 w-12 text-black mb-4" />, title: "Máxima Calidad", description: "Productos frescos y seleccionados" },
              { icon: <Phone className="mx-auto h-12 w-12 text-black mb-4" />, title: "Atención Personalizada", description: "Servicio al cliente excepcional" }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1} className="text-center text-black p-6 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors duration-300">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 sm:text-black">{item.title}</h3>
                <p className="text-gray-600 sm:text-black">{item.description}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Nuestras Marcas Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection className="text-3xl font-bold text-center mb-8 md:mb-12 text-black">
            Nuestras Marcas
          </FadeInSection>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {marcas.map((marca, index) => (
              <FadeInSection key={marca.id} delay={index * 0.05} className="flex justify-center">
                <div className="relative grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  <Image
                    src={`/${marca.imagen}`}
                    alt={marca.nombre}
                    width={marca.width}
                    height={marca.height}
                    className="transition-all duration-300"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Productos Section */}
      <div className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <FadeInSection className="text-3xl font-bold text-center mb-8 md:mb-12 text-black hover:scale-105 transition-transform duration-300">
            Nuestros Productos
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productos.map((producto, index) => (
              <FadeInSection key={producto.id} delay={index * 0.05} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Columna 1: Contacto */}
            <FadeInSection delay={0.1}>
              <h4 className="text-lg font-semibold mb-4 sm:text-white">Contacto</h4>
              <p>Email: alenortconsultas@gmail.com</p>
              <p>Teléfono: 3812224766</p>
              <p>Fijo: 2441252</p>
            </FadeInSection>

            {/* Columna 2: Horario */}
            <FadeInSection delay={0.15}>
              <h4 className="text-lg font-semibold mb-4 sm:text-white">Horario</h4>
              <p>Lunes a Viernes: 8:30 - 13:30 y 17:30 a 21:00</p>
              <p>Sábado: 8:30 - 14:00</p>
            </FadeInSection>

            {/* Columna 3: Redes Sociales */}
            <FadeInSection delay={0.2}>
              <h4 className="text-lg font-semibold mb-4 sm:text-white">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/"
                  className="text-white hover:text-blue-500 transition-colors transform hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/alenort.distribuidoraavicola/#"
                  className="text-white hover:text-pink-500 transition-colors transform hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </FadeInSection>
          </div>

          {/* Línea divisoria */}
          <div className="w-full h-px bg-gray-700 my-6" />

          {/* Texto de derechos de autor */}
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Alenort. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Estilos CSS para animaciones */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}