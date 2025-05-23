import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/pages/components/Navbar';
import { Truck, Award, Phone, Facebook, Instagram, Mail, Calendar, MessageCircle, MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
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
  { id: 1, imagen: 'becar1.png', width: 160, height: 130 },
  { id: 2, imagen: 'cresta1.png', width: 120, height: 100 },
  { id: 3, imagen: 'gta1.png', width: 110, height: 95 },
  { id: 4, imagen: 'maccain.png', width: 115, height: 85 },
  { id: 5, imagen: 'sie.png', width: 200, height: 108 },
  { id: 6, imagen: 'sansebastian.png', width: 170, height: 130 },
  { id: 7, imagen: 'gran.png', width: 170, height: 130 },
  { id: 8, imagen: 'sha.png', width: 170, height: 130 },
  { id: 9, imagen: 'vidal.webp', width: 170, height: 130 },
  { id: 10, imagen: 'soli.png', width: 170, height: 130 }
];




// Imágenes para el carrusel de sucursales
const sucursalImages = [
  'suc1.webp',   // Reemplaza estos con tus imágenes real
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
  // Estado para el carrusel de sucursales
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funciones para controlar el carrusel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sucursalImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sucursalImages.length - 1 : prev - 1));
  };

  // Auto rotación del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Sección QR Code */}
      <div className="py-12 md:py-16 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInSection className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              ¡Escanea y Conecta!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Escanea nuestro código QR para acceder rápidamente a nuestros servicios
            </p>
          </FadeInSection>
          
          <FadeInSection delay={0.2} className="flex justify-center">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 max-w-sm">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-4">
                <Image
                  src="/qr-code.png"
                  alt="Código QR de Alenort"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Escanea con la cámara de tu teléfono
              </p>
            </div>
          </FadeInSection>
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
              src={`/${marca.imagen}`} // Ruta relativa a /public
              alt={marca.imagen}
              width={marca.width}
              height={marca.height}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }} // Ajuste del tamaño
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

     {/* Sección de Nuestras Sucursales - CON CARRUSEL FUNCIONAL */}
     <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">NUESTRAS SUCURSALES</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Visita nuestras tiendas donde encontrarás la mejor calidad en productos avícolas y atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <div 
                className="h-full w-full flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {sucursalImages.map((img, index) => (
                    <div key={index} className="relative min-w-full h-64 flex-shrink-0">
                    <Image 
                      src={`/${img}`} 
                      alt={`Sucursal ${index + 1}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                        ))} 
                    </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex justify-center p-4">
              {sucursalImages.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all ${
                    currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Sucursales</h3>

  {/* Sucursal Juan B. Justo */}
  <div className="mb-6 pb-6 border-b border-gray-200">
    <h4 className="font-semibold text-lg text-gray-800 mb-2">
      <MapPin className="inline-block mr-2 text-yellow-500" size={20} />
      Sucursal Juan B. Justo
    </h4>
    <p className="text-gray-600 mb-2">Av. Juan B. Justo 1111</p>
    <p className="text-gray-600 mb-3">San Miguel de Tucumán, Tucumán</p>
    <div className="flex space-x-3">
      <a href="tel:2441252" className="flex items-center text-sm text-blue-600 hover:text-blue-800">
        <Phone size={16} className="mr-1" /> Llamar
      </a>
      <a 
        href="https://maps.google.com/?q=Av. Juan B. Justo 1111, San Miguel de Tucumán, Tucumán" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-sm text-blue-600 hover:text-blue-800"
      >
        <ExternalLink size={16} className="mr-1" /> Ver en mapa
      </a>
    </div>
  </div>

  {/* Sucursal Av. Colón 428 */}
  <div>
    <h4 className="font-semibold text-lg text-gray-800 mb-2">
      <MapPin className="inline-block mr-2 text-yellow-500" size={20} />
      Sucursal Av. Colón
    </h4>
    <p className="text-gray-600 mb-2">Av. Colón 428</p>
    <p className="text-gray-600 mb-3">San Miguel de Tucumán, Tucumán</p>
    <div className="flex space-x-3">
      <a href="tel:2441252" className="flex items-center text-sm text-blue-600 hover:text-blue-800">
        <Phone size={16} className="mr-1" /> Llamar
      </a>
      <a 
        href="https://maps.google.com/?q=Av. Colón 428, San Miguel de Tucumán, Tucumán" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center text-sm text-blue-600 hover:text-blue-800"
      >
        <ExternalLink size={16} className="mr-1" /> Ver en mapa
      </a>
    </div>
  </div>
</div>

        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-xl font-bold text-gray-800 p-4 border-b border-gray-200">Encuéntranos en el mapa</h3>
          <div className="aspect-w-16 aspect-h-9 h-80">
            <iframe 
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.486426939992!2d-65.2172!3d-26.8355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942243be7c5e62b1%3A0x7a6f24f4d8e91b9a!2sAv%20Juan%20B%20Justo%201111%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1708796498910!5m2!1ses!2sar"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1: Contacto */}
            <FadeInSection delay={0.1}>
              <h4 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2 text-yellow-400" size={18} />
                  <p>Email: alenortconsultas@gmail.com</p>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 text-yellow-400" size={18} />
                  <p>Móvil: 3812224766</p>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 text-yellow-400" size={18} />
                  <p>Fijo: 2441252</p>
                </li>
              </ul>
            </FadeInSection>

            {/* Columna 2: Horario */}
            <FadeInSection delay={0.15}>
              <h4 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">Horario de Atención</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Calendar className="mr-2 text-yellow-400" size={18} />
                  <p>Lunes a Viernes: 8:30 - 13:30 y 17:30 a 21:00</p>
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 text-yellow-400" size={18} />
                  <p>Sábado: 8:30 - 14:00</p>
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 text-yellow-400" size={18} />
                  <p>Domingo: Cerrado</p>
                </li>
              </ul>
            </FadeInSection>

            {/* Columna 3: Redes Sociales */}
            <FadeInSection delay={0.2}>
              <h4 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">Síguenos</h4>
              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  <a
                    href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/"
                    className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/alenort.distribuidoraavicola/"
                    className="text-white hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://wa.me/5493812224766"
                    className="text-white hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={28} />
                  </a>
                </div>
                <p className="text-gray-300">Mantente al día con nuestras ofertas y novedades.</p>
              </div>

              {/* Botón de Contáctanos */}
              <Link
                href="/contacto"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contáctanos
              </Link>
            </FadeInSection>
          </div>

          {/* Ubicación */}
          <FadeInSection delay={0.25}>
            <div className="w-full h-px bg-gray-700 my-8" />
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2 text-white">Ubicación</h4>
              <p className="flex items-center justify-center">
                <MapPin className="mr-2 text-yellow-400" size={18} />
                San Miguel de Tucumán, Tucumán, Argentina
              </p>
            </div>
          </FadeInSection>

          {/* Línea divisoria */}
          <div className="w-full h-px bg-gray-700 my-6" />

          {/* Texto de derechos de autor */}
          <div className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Alenort Distribuidora Avícola. Todos los derechos reservados.
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