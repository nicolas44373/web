import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/pages/components/Navbar';
import { motion } from 'motion/react';
import {
  Truck, Award, Phone, Facebook, Instagram, Mail,
  Calendar, MessageCircle, MapPin, ChevronLeft, ChevronRight,
  ExternalLink, ShoppingCart
} from 'lucide-react';
import Image from 'next/image';

const PRICE_LIST_URL = 'https://qr-six-alpha.vercel.app/';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  })
};

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
  { id: 11, imagen: 'salmon.JPG', nombre: 'Pescados', descripcion: 'Merluza, Atún, Salmón, Sábalo' },
  { id: 12, imagen: 'papas.jpeg', nombre: 'Papas McCain', descripcion: 'Bastón, Noisette, Carita' }
];

const marcas = [
  { id: 1, imagen: 'becar1.png', width: 160, height: 130 },
  { id: 2, imagen: 'cresta1.png', width: 120, height: 100 },
  { id: 3, imagen: 'gta1.png', width: 110, height: 95 },
  { id: 4, imagen: 'maccain.png', width: 115, height: 85 },
  { id: 5, imagen: 'sie.png', width: 200, height: 108, maxH: 120 },
  { id: 6, imagen: 'sansebastian.png', width: 170, height: 130 },
  { id: 7, imagen: 'gran.png', width: 170, height: 130 },
  { id: 8, imagen: 'sha.png', width: 170, height: 130 },
  { id: 9, imagen: 'vidal.webp', width: 170, height: 130, maxH: 100 },
  { id: 10, imagen: 'soli.png', width: 170, height: 130 }
];

const sucursalImages = ['suc1.webp'];

/* Onda SVG — block + ancho extra + solape evitan la línea blanca en móvil */
const Wave = ({ from, to }) => (
  <div className={`${from} relative overflow-hidden leading-[0]`}>
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-[1] block h-12 w-[calc(100%+4px)] max-w-none -left-[2px] -mb-px md:h-16"
      aria-hidden="true"
    >
      <path className={to} d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
    </svg>
  </div>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasMultipleSlides = sucursalImages.length > 1;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === sucursalImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? sucursalImages.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!hasMultipleSlides) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, hasMultipleSlides]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="w-full bg-white flex items-center justify-center px-6 pt-20 pb-2 sm:pt-24 sm:pb-4 md:pt-28 md:pb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
        >
          <Image
            src="/alenort2.png"
            alt="Alenort Distribuidora Avícola"
            width={900}
            height={340}
            priority
            className="w-full h-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
        </motion.div>
      </section>

      {/* ola blanco → amber-50 */}
      <Wave from="bg-white" to="fill-amber-50" />

      {/* ── QR / LISTA DE PRECIOS ──────────────────────────── */}
      <section className="bg-amber-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
              ¡Consultá nuestra lista de precios!
            </h2>
            <p className="text-amber-700 text-lg mb-10">
              Escaneá el QR o hacé clic en el botón — siempre actualizado.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            {/* QR card */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 border-2 border-amber-200 p-6 md:p-8 rounded-2xl shadow-xl max-w-xs"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-4">
                <Image
                  src="/frame.png"
                  alt="Código QR lista de precios Alenort"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
              <p className="text-sm text-amber-700 font-medium">Escaneá con la cámara de tu teléfono</p>
            </motion.div>

            {/* separador */}
            <div className="flex sm:flex-col items-center gap-3 text-amber-400">
              <div className="w-12 sm:w-px h-px sm:h-12 bg-amber-300" />
              <span className="text-sm font-bold uppercase tracking-widest">o</span>
              <div className="w-12 sm:w-px h-px sm:h-12 bg-amber-300" />
            </div>

            {/* botón */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-amber-700 font-medium max-w-xs text-center">
                Accedé directamente desde cualquier dispositivo
              </p>
              <motion.a
                href={PRICE_LIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.07, boxShadow: '0 0 30px rgba(234,179,8,0.5)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl shadow-lg text-lg"
              >
                <ShoppingCart size={22} />
                Ver Lista de Precios
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ola amber-50 → amber-100 */}
      <Wave from="bg-amber-50" to="fill-amber-100" />

      {/* ── ¿POR QUÉ ELEGIR ALENORT? ─────────────────────── */}
      <section className="bg-amber-100 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900"
          >
            ¿Por qué elegir Alenort?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Truck className="h-12 w-12 text-yellow-600 mb-4 mx-auto" />, title: 'Stock Permanente', desc: 'Amplia variedad de productos con stock garantizado todo el año.' },
              { icon: <Award className="h-12 w-12 text-yellow-600 mb-4 mx-auto" />, title: 'Máxima Calidad', desc: 'Productos frescos y seleccionados de las mejores marcas del mercado.' },
              { icon: <Phone className="h-12 w-12 text-yellow-600 mb-4 mx-auto" />, title: 'Atención Personalizada', desc: 'Un equipo dedicado para asesorarte en cada compra.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(180,83,9,0.15)' }}
                className="text-center p-8 bg-yellow-50 rounded-2xl border border-amber-200 transition-shadow duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2 text-amber-900">{item.title}</h3>
                <p className="text-amber-800">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ola amber-100 → white */}
      <Wave from="bg-amber-100" to="fill-white" />

      {/* ── NUESTRAS MARCAS ───────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900"
          >
            Nuestras Marcas
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {marcas.map((marca, i) => (
              <motion.div
                key={marca.id}
                variants={fadeUp} custom={i * 0.05} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(180,83,9,0.15)' }}
                className="group flex items-center justify-center bg-white border border-amber-100 rounded-xl p-4 h-24 cursor-pointer"
              >
                <Image
                  src={`/${marca.imagen}`}
                  alt={`Marca ${marca.imagen.split('.')[0]}`}
                  width={marca.width}
                  height={marca.height}
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  style={{ objectFit: 'contain', maxHeight: `${marca.maxH ?? 64}px`, width: 'auto', height: 'auto' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ola white → amber-50 */}
      <Wave from="bg-white" to="fill-amber-50" />

      {/* ── NUESTROS PRODUCTOS ────────────────────────────── */}
      <section className="bg-amber-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">Nuestros Productos</h2>
            <a
              href={PRICE_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm font-semibold underline underline-offset-2 transition-colors"
            >
              Ver lista de precios completa <ExternalLink size={13} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto, i) => (
              <motion.div
                key={producto.id}
                variants={fadeUp} custom={i * 0.04} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(180,83,9,0.18)' }}
                className="group bg-yellow-50 rounded-2xl overflow-hidden border border-amber-200 shadow-md transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/${producto.imagen}`}
                    alt={producto.nombre}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 text-amber-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {producto.nombre}
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">{producto.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ola amber-50 → amber-100 */}
      <Wave from="bg-amber-50" to="fill-amber-100" />

      {/* ── SUCURSALES ────────────────────────────────────── */}
      <section className="bg-amber-100 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">NUESTRA SUCURSAL</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
            <p className="text-amber-800 mt-4 max-w-2xl mx-auto">
              Visitanos y encontrá la mejor calidad en productos avícolas con atención personalizada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Carrusel */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-yellow-50 border border-amber-200 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-72">
                <div
                  className="h-full w-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sucursalImages.map((img, index) => (
                    <div key={index} className="relative min-w-full h-72 flex-shrink-0">
                      <Image src={`/${img}`} alt="Sucursal Juan B. Justo 1111" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                {hasMultipleSlides && (
                  <>
                    <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all" aria-label="Anterior">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all" aria-label="Siguiente">
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              {hasMultipleSlides && (
                <div className="flex justify-center gap-2 py-3">
                  {sucursalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? 'bg-yellow-500 scale-125' : 'bg-amber-300'}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-yellow-50 border border-amber-200 rounded-2xl shadow-lg p-6 flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-6 border-b border-amber-200 pb-4">Información de la Sucursal</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-yellow-600 mt-0.5 flex-shrink-0" size={22} />
                  <div>
                    <p className="font-semibold text-amber-900 text-lg">Juan B. Justo 1111</p>
                    <p className="text-amber-700 text-sm">San Miguel de Tucumán, Tucumán</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-yellow-600 mt-0.5 flex-shrink-0" size={22} />
                  <div>
                    <p className="text-amber-800 font-medium">Fijo: <a href="tel:2441252" className="text-amber-600 hover:text-amber-900 underline">2441252</a></p>
                    <p className="text-amber-800 font-medium">Móvil: <a href="tel:+5493812224766" className="text-amber-600 hover:text-amber-900 underline">+549 381 222-4766</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-yellow-600 mt-0.5 flex-shrink-0" size={22} />
                  <div className="text-sm text-amber-800 space-y-1">
                    <p><span className="font-semibold text-amber-900">Lun–Vie:</span> 8:30–13:30 y 17:30–21:00</p>
                    <p><span className="font-semibold text-amber-900">Sábado:</span> 8:30–14:00</p>
                    <p><span className="font-semibold text-amber-900">Domingo:</span> Cerrado</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://maps.google.com/?q=Av.+Juan+B.+Justo+1111,+San+Miguel+de+Tucumán,+Tucumán" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium bg-amber-200 hover:bg-amber-300 text-amber-900 border border-amber-300 py-2 px-4 rounded-lg transition-colors">
                  <ExternalLink size={15} /> Ver en Google Maps
                </a>
                <a href="https://wa.me/5493812224766" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium bg-amber-200 hover:bg-amber-300 text-amber-900 border border-amber-300 py-2 px-4 rounded-lg transition-colors">
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mapa */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-yellow-50 border border-amber-200 rounded-2xl shadow-lg overflow-hidden"
          >
            <h3 className="text-lg font-bold text-amber-900 px-5 py-4 border-b border-amber-200">Encuéntranos en el mapa</h3>
            <div className="h-80">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.486426939992!2d-65.2172!3d-26.8355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942243be7c5e62b1%3A0x7a6f24f4d8e91b9a!2sAv%20Juan%20B%20Justo%201111%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1708796498910!5m2!1ses!2sar"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa sucursal Alenort Juan B. Justo 1111"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ola amber-100 → stone-900 */}
      <Wave from="bg-amber-100" to="fill-stone-900" />

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h4 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-stone-700 pb-2">Contacto</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="text-yellow-400 flex-shrink-0" size={18} />
                  <a href="mailto:alenortconsultas@gmail.com" className="hover:text-yellow-300 transition-colors text-sm">alenortconsultas@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                  <a href="tel:+5493812224766" className="hover:text-yellow-300 transition-colors text-sm">Móvil: +549 381 222-4766</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-yellow-400 flex-shrink-0" size={18} />
                  <a href="tel:2441252" className="hover:text-yellow-300 transition-colors text-sm">Fijo: 2441252</a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h4 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-stone-700 pb-2">Horario de Atención</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Calendar className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} /><span>Lun–Vie: 8:30–13:30 y 17:30–21:00</span></li>
                <li className="flex items-start gap-2"><Calendar className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} /><span>Sábado: 8:30–14:00</span></li>
                <li className="flex items-start gap-2"><Calendar className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} /><span>Domingo: Cerrado</span></li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h4 className="text-xl font-semibold mb-4 text-yellow-400 border-b border-stone-700 pb-2">Síguenos</h4>
              <div className="flex space-x-4 mb-4">
                <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors" aria-label="Facebook"><Facebook size={28} /></motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/alenort.distribuidoraavicola/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors" aria-label="Instagram"><Instagram size={28} /></motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://wa.me/5493812224766" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors" aria-label="WhatsApp"><MessageCircle size={28} /></motion.a>
              </div>
              <p className="text-stone-400 text-sm mb-4">Seguinos para ver ofertas y novedades.</p>
              <Link href="/contacto" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2.5 px-5 rounded-lg transition-all shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 text-sm">
                Contáctanos
              </Link>
            </motion.div>
          </div>

          <div className="w-full h-px bg-stone-700 my-8" />
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center"
          >
            <p className="flex items-center justify-center text-sm text-stone-400 mb-3">
              <MapPin className="mr-1 text-yellow-400" size={15} />
              Juan B. Justo 1111, San Miguel de Tucumán, Tucumán, Argentina
            </p>
            <p className="text-xs text-stone-600">© {new Date().getFullYear()} Alenort Distribuidora Avícola. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP ───────────────────────── */}
      <motion.a
        href="https://wa.me/5493812224766"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/40"
      >
        <MessageCircle size={28} fill="white" />
        {/* pulso */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40 pointer-events-none" />
      </motion.a>
    </div>
  );
}
