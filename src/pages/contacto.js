import React, { useState } from 'react';
import Navbar from '@/pages/components/Navbar';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [estado, setEstado] = useState({
    enviando: false,
    enviado: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado({ enviando: true, enviado: false, error: null });

    try {
      // Simulación de envío
      const response = await fetch('/api/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      setEstado({ enviando: false, enviado: true, error: null });
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });

      setTimeout(() => {
        setEstado(prev => ({ ...prev, enviado: false }));
      }, 5000);

    } catch (error) {
      setEstado({ enviando: false, enviado: false, error: error.message });
    }
  };

  const infoContacto = [
    { icon: <Phone className="w-6 h-6 text-yellow-600" />, titulo: "Teléfono", detalle: "+549 3812224766" },
    { icon: <Mail className="w-6 h-6 text-yellow-600" />, titulo: "Email", detalle: "alenortconsultas@gmail.com" },
    { icon: <MapPin className="w-6 h-6 text-yellow-600" />, titulo: "Ubicación", detalle: "San Miguel de Tucumán, Argentina" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4 bg-gradient-to-r from-yellow-200 to-yellow-400"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Contáctanos</h1>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
        </p>
      </motion.div>

      {/* Información de Contacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {infoContacto.map((info, index) => (
          <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4 text-yellow-600">
              {info.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{info.titulo}</h3>
            <p className="text-gray-600">{info.detalle}</p>
          </div>
        ))}
      </motion.div>

      {/* Formulario de Contacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 py-12 max-w-2xl"
      >
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Envíanos un mensaje</h2>

          {estado.enviado ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">¡Mensaje enviado con éxito!</h3>
              <p className="text-gray-600">Gracias por contactarnos. Te responderemos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    placeholder="Nombre Completo"
                    className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    placeholder="Correo Electrónico"
                    className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Teléfono (opcional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Asunto"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                  value={formData.asunto}
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  className="pl-12 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                />
              </div>

              {estado.error && (
                <div className="text-red-600 bg-red-50 p-3 rounded-lg text-center">
                  {estado.error}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={estado.enviando}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 mx-auto disabled:opacity-50 transition-all"
                >
                  {estado.enviando ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
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
                <a href="https://www.instagram.com/alenort.distribuidoraavicola/#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/p/Alenort-Distribuidora-Avicola-100070169381073/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                
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