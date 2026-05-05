import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, Truck, DollarSign, CreditCard, Phone, ArrowRight, Star, Instagram, Facebook, MessageCircle } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/Navbar';

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

const beneficios = [
  {
    icon: CreditCard,
    title: 'Facilidades de Pago',
    color: 'from-yellow-400 to-amber-500',
    items: ['Trabajamos contra boleta', 'Cuentas corrientes para emprendedores', 'Facilidades de pago flexibles']
  },
  {
    icon: DollarSign,
    title: 'Beneficios Económicos',
    color: 'from-amber-400 to-orange-500',
    items: ['Precios diferenciados para emprendedores', 'Descuentos por volumen de compra', 'Promociones especiales para nuevos negocios']
  },
  {
    icon: Truck,
    title: 'Logística y Entrega',
    color: 'from-yellow-500 to-amber-600',
    items: ['Entrega a domicilio', 'Seguimiento de pedidos en tiempo real', 'Planificación logística personalizada']
  },
  {
    icon: Star,
    title: 'Beneficios Adicionales',
    color: 'from-amber-500 to-yellow-600',
    items: ['Asesoramiento personalizado', 'Acceso prioritario a nuevos productos', 'Programa de fidelización']
  }
];

const stats = [
  { value: '+5', label: 'Años de experiencia' },
  { value: '+100', label: 'Emprendedores activos' },
  { value: '10', label: 'Marcas líderes' },
  { value: '100%', label: 'Compromiso' }
];

export default function EmprendeConAlenort() {
  return (
    <>
      <Head>
        <title>Emprende con Alenort | Tu Negocio Comienza Aquí</title>
        <meta name="description" content="Emprende con confianza respaldado por Alenort. Precios diferenciados, descuentos por volumen y más beneficios." />
      </Head>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative bg-stone-900 pt-28 pb-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block bg-yellow-500/20 text-yellow-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-yellow-500/30">
                Tu socio estratégico
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                Emprende con <span className="text-yellow-400">ALENORT</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto">
                Respaldamos tu emprendimiento con los mejores productos, precios y logística del norte argentino.
              </p>
            </motion.div>
          </div>
        </section>

        <Wave from="bg-stone-900" to="fill-amber-50" />

        {/* ── STATS ────────────────────────────────────────── */}
        <section className="bg-amber-50 py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-black text-yellow-500 mb-1">{stat.value}</p>
                  <p className="text-amber-800 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Wave from="bg-amber-50" to="fill-white" />

        {/* ── INTRO ────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                <TrendingUp size={18} className="text-yellow-600" />
                <span className="font-semibold text-sm">Impulsá tu negocio</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-4">
                Tu crecimiento es nuestro éxito
              </h2>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto leading-relaxed">
                En Alenort sabemos lo importante que es contar con un respaldo confiable cuando comenzás. 
                Ofrecemos soluciones diseñadas para emprendedores que quieren crecer con un aliado estratégico de verdad.
              </p>
            </motion.div>
          </div>
        </section>

        <Wave from="bg-white" to="fill-amber-100" />

        {/* ── BENEFICIOS ───────────────────────────────────── */}
        <section className="bg-amber-100 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-amber-900 text-center mb-12"
            >
              ¿Qué obtenés al emprender con nosotros?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficios.map((ben, i) => {
                const Icon = ben.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(180,83,9,0.15)' }}
                    className="bg-white border border-amber-200 rounded-2xl p-8 transition-shadow duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ben.color} flex items-center justify-center mb-5 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-amber-900 mb-4">{ben.title}</h3>
                    <ul className="space-y-3">
                      {ben.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-amber-800 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Wave from="bg-amber-100" to="fill-amber-50" />

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section className="bg-amber-50 py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bg-white border border-amber-200 rounded-3xl p-10 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-amber-900 mb-3">
                  ¿Listo para emprender con nosotros?
                </h2>
                <p className="text-amber-700 mb-8 max-w-md mx-auto">
                  Contactá a nuestro equipo y descubrí cómo podemos ayudarte a hacer crecer tu negocio desde el primer día.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contacto"
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all text-lg">
                      <Phone size={20} /> Contáctanos ahora <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <a href="https://wa.me/5493812224766" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-900 font-bold py-4 px-8 rounded-xl shadow-md border border-amber-200 transition-all text-lg">
                      <MessageCircle size={20} className="text-green-500" /> WhatsApp
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Wave from="bg-amber-50" to="fill-stone-900" />

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="bg-stone-900 text-white py-10">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Link href="/" className="text-2xl font-black"><span className="text-yellow-400">ALE</span>NORT</Link>
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
    </>
  );
}
