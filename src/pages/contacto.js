import React, { useState } from 'react';
import Navbar from '@/pages/components/Navbar';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
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

const infoContacto = [
  {
    icon: <Phone className="w-7 h-7 text-yellow-600" />,
    titulo: 'Teléfono',
    detalle: '+549 381 222-4766',
    sub: 'Fijo: 2441252',
    href: 'tel:+5493812224766',
    bg: 'bg-yellow-50 border-yellow-200'
  },
  {
    icon: <Mail className="w-7 h-7 text-yellow-600" />,
    titulo: 'Email',
    detalle: 'alenortconsultas@gmail.com',
    sub: 'Respondemos en menos de 24hs',
    href: 'mailto:alenortconsultas@gmail.com',
    bg: 'bg-amber-50 border-amber-200'
  },
  {
    icon: <MapPin className="w-7 h-7 text-yellow-600" />,
    titulo: 'Ubicación',
    detalle: 'Juan B. Justo 1111',
    sub: 'San Miguel de Tucumán, Argentina',
    href: 'https://maps.google.com/?q=Av.+Juan+B.+Justo+1111,+San+Miguel+de+Tucumán',
    bg: 'bg-yellow-50 border-yellow-200'
  },
  {
    icon: <Clock className="w-7 h-7 text-yellow-600" />,
    titulo: 'Horario',
    detalle: 'Lun–Vie: 8:30–13:30 / 17:30–21:00',
    sub: 'Sáb: 8:30–14:00 · Dom: Cerrado',
    href: null,
    bg: 'bg-amber-50 border-amber-200'
  }
];

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  const [estado, setEstado] = useState({ enviando: false, enviado: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado({ enviando: true, enviado: false, error: null });
    try {
      const response = await fetch('/api/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Error al enviar el mensaje');
      setEstado({ enviando: false, enviado: true, error: null });
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      setTimeout(() => setEstado(prev => ({ ...prev, enviado: false })), 5000);
    } catch (error) {
      setEstado({ enviando: false, enviado: false, error: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-stone-900 pt-28 pb-4 overflow-hidden">
        {/* fondo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-yellow-500/20 text-yellow-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-yellow-500/30">
              Estamos para ayudarte
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">Contá</span>
              <span style={{
                background: 'linear-gradient(to right, #ffffff 50%, #facc15 50%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>c</span>
              <span className="text-yellow-400">tanos</span>
            </h1>
            <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto">
              Escribinos, llamanos o visitanos — respondemos rápido y con atención personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      <Wave from="bg-stone-900" to="fill-amber-50" />

      {/* ── TARJETAS DE CONTACTO ─────────────────────────── */}
      <section className="bg-amber-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoContacto.map((info, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(180,83,9,0.15)' }}
                className={`${info.bg} border rounded-2xl p-6 transition-shadow duration-300`}
              >
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    <div className="bg-white rounded-xl p-3 w-fit mb-4 shadow-sm">{info.icon}</div>
                    <h3 className="font-bold text-amber-900 mb-1">{info.titulo}</h3>
                    <p className="text-amber-800 text-sm font-medium">{info.detalle}</p>
                    <p className="text-amber-600 text-xs mt-1">{info.sub}</p>
                  </a>
                ) : (
                  <>
                    <div className="bg-white rounded-xl p-3 w-fit mb-4 shadow-sm">{info.icon}</div>
                    <h3 className="font-bold text-amber-900 mb-1">{info.titulo}</h3>
                    <p className="text-amber-800 text-sm font-medium">{info.detalle}</p>
                    <p className="text-amber-600 text-xs mt-1">{info.sub}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Wave from="bg-amber-50" to="fill-white" />

      {/* ── FORMULARIO ───────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-3">Envianos un mensaje</h2>
            <p className="text-amber-700">Completá el formulario y te respondemos a la brevedad.</p>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-3xl p-8 shadow-xl"
          >
            {estado.enviado ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600">Gracias por contactarnos. Te respondemos a la brevedad.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 w-4 h-4" />
                    <input type="text" required placeholder="Nombre completo" value={formData.nombre}
                      onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                      className="pl-11 w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800 placeholder-amber-300" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 w-4 h-4" />
                    <input type="email" required placeholder="Correo electrónico" value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="pl-11 w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800 placeholder-amber-300" />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 w-4 h-4" />
                  <input type="text" placeholder="Teléfono (opcional)" value={formData.telefono}
                    onChange={e => setFormData({ ...formData, telefono: e.target.value })}
                    className="pl-11 w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800 placeholder-amber-300" />
                </div>

                <input type="text" required placeholder="Asunto" value={formData.asunto}
                  onChange={e => setFormData({ ...formData, asunto: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800 placeholder-amber-300" />

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-amber-400 w-4 h-4" />
                  <textarea required placeholder="Escribí tu mensaje aquí..." rows={5} value={formData.mensaje}
                    onChange={e => setFormData({ ...formData, mensaje: e.target.value })}
                    className="pl-11 w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800 placeholder-amber-300 resize-none" />
                </div>

                {estado.error && (
                  <div className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl text-center text-sm">
                    {estado.error}
                  </div>
                )}

                <motion.button
                  type="submit" disabled={estado.enviando}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(234,179,8,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg transition-colors"
                >
                  {estado.enviando ? (
                    <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" /><span>Enviando...</span></>
                  ) : (
                    <><Send className="w-5 h-5" /><span>Enviar Mensaje</span></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Wave from="bg-white" to="fill-stone-900" />

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

      {/* Botón flotante WhatsApp */}
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
