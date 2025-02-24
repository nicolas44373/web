import React from 'react';
import Navbar from '@/pages/components/Navbar';
import { Truck, PackageCheck, Clock, Headset, ClipboardCheck, Star, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Servicios() {
  const servicios = [
    {
      icon: <Truck className="w-12 h-12 text-yellow-600" />,
      title: "Distribución",
      description: "Entrega eficiente y puntual de productos avícolas en todo el territorio nacional, con flota refrigerada y sistema de seguimiento en tiempo real."
    },
    {
      icon: <PackageCheck className="w-12 h-12 text-yellow-600" />,
      title: "Control de Calidad",
      description: "Rigurosos procesos de control de calidad y cadena de frío para garantizar la frescura y seguridad de todos nuestros productos."
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-600" />,
      title: "Entregas Programadas",
      description: "Contactate con nuestro Equipo de ventas coordinamos tu entrega y recibi tu mercaderia directamente en tu negocio"
    },
    {
      icon: <Headset className="w-12 h-12 text-yellow-600" />,
      title: "Atención Personalizada",
      description: "Equipo de atención al cliente dedicado para responder consultas y resolver cualquier inquietud de manera inmediata."
    },
    {
      icon: <ClipboardCheck className="w-12 h-12 text-yellow-600" />,
      title: "Gestión de Pedidos",
      description: "Sistema de pedidos eficiente y personalizado, con opciones de pedidos recurrentes y gestión de inventario."
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-600" />,
      title: "Productos Premium",
      description: "Selección de productos avícolas de la más alta calidad, cumpliendo con todos los estándares de la industria."
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-yellow-200 to-yellow-400 py-20 md:py-28"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('/img/poultry-pattern.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-md">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
              Brindamos soluciones integrales en distribución avícola con los más altos estándares de calidad y servicio
            </p>
          </div>
        </div>
      </motion.div>

      {/* Servicios Grid */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 -mt-16 md:-mt-20">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-b-4 border-yellow-400 transform hover:-translate-y-1"
            >
              <div className="mb-6 bg-amber-100 p-4 inline-block rounded-full">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {servicio.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección de Contacto */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-amber-100 py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              ¿Necesitas más información?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo está disponible para atender todas tus consultas y brindarte la mejor solución para tu negocio.
            </p>
            <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contáctanos
            </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Footer con redes sociales */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
            <Image src="/alenort3.png" width={150} height={100} alt="" />
              <p className="mt-3 text-sm text-gray-400 max-w-md">
                Líderes en distribución avícola, llevando calidad y frescura.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold mb-4">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/alenort.distribuidoraavicola/#"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/"
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Alenort. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}