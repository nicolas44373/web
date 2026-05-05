import React from 'react';
import Navbar from '@/pages/components/Navbar';
import { motion } from 'motion/react';
import { Truck, PackageCheck, Clock, Headset, ClipboardCheck, Star, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' }
  })
};

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

const servicios = [
  {
    icon: Truck,
    title: 'Distribución',
    description: 'Entrega eficiente y puntual de productos avícolas con flota refrigerada y seguimiento en tiempo real.',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    icon: PackageCheck,
    title: 'Control de Calidad',
    description: 'Rigurosos procesos de control de calidad y cadena de frío para garantizar frescura y seguridad.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: Clock,
    title: 'Entregas Programadas',
    description: 'Coordinamos tu entrega y recibís tu mercadería directamente en tu negocio cuando más lo necesitás.',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    icon: Headset,
    title: 'Atención Personalizada',
    description: 'Equipo dedicado para responder consultas y resolver cualquier inquietud de manera inmediata.',
    color: 'from-amber-500 to-yellow-600'
  },
  {
    icon: ClipboardCheck,
    title: 'Gestión de Pedidos',
    description: 'Sistema de pedidos eficiente con opciones de pedidos recurrentes y gestión de inventario personalizada.',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    icon: Star,
    title: 'Productos Premium',
    description: 'Selección de productos avícolas de la más alta calidad, cumpliendo con todos los estándares de la industria.',
    color: 'from-amber-400 to-yellow-500'
  }
];

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-stone-900 pt-28 pb-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-yellow-500/20 text-yellow-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-yellow-500/30">
              Lo que ofrecemos
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Nuestros <span className="text-yellow-400">Servicios</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto">
              Soluciones integrales en distribución avícola con los más altos estándares de calidad y servicio.
            </p>
          </motion.div>
        </div>
      </section>

      <Wave from="bg-stone-900" to="fill-amber-50" />

      {/* ── GRID DE SERVICIOS ────────────────────────────── */}
      <section className="bg-amber-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, i) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(180,83,9,0.18)' }}
                  className="bg-white border border-amber-100 rounded-2xl p-8 group transition-shadow duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${servicio.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">{servicio.title}</h3>
                  <p className="text-amber-700 leading-relaxed">{servicio.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Wave from="bg-amber-50" to="fill-amber-100" />

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-amber-100 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-4">
              ¿Necesitás más información?
            </h2>
            <p className="text-amber-700 text-lg mb-8 max-w-xl mx-auto">
              Nuestro equipo está listo para atender todas tus consultas y brindarte la mejor solución para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contacto"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all text-lg">
                  Contactarnos <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a href="https://wa.me/5493812224766" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-900 font-bold py-4 px-8 rounded-xl shadow-md border border-amber-200 transition-all text-lg">
                  <MessageCircle size={20} className="text-green-500" /> WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Wave from="bg-amber-100" to="fill-stone-900" />

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-stone-900 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="text-2xl font-black">
              <span className="text-yellow-400">ALE</span>NORT
            </Link>
            <p className="text-stone-400 text-sm mt-1">Distribuidora Avícola — Tucumán</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/alenort.distribuidoraavicola/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-pink-400 transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-blue-400 transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="https://wa.me/5493812224766" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-green-400 transition-colors"><MessageCircle className="w-6 h-6" /></a>
          </div>
          <p className="text-stone-600 text-xs">© {new Date().getFullYear()} Alenort. Todos los derechos reservados.</p>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/5493812224766" target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/40"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40 pointer-events-none" />
      </motion.a>
    </div>
  );
}
