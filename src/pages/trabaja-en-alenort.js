import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle, Upload, Send, X, Users, TrendingUp, Heart, Zap, Instagram, Facebook, MessageCircle } from 'lucide-react';
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

const razones = [
  { icon: Heart, title: 'Ambiente Positivo', desc: 'Un lugar de trabajo colaborativo donde cada persona importa.', color: 'from-pink-400 to-rose-500' },
  { icon: TrendingUp, title: 'Crecimiento Real', desc: 'Oportunidades concretas de desarrollo y carrera profesional.', color: 'from-yellow-400 to-amber-500' },
  { icon: Zap, title: 'Dinamismo', desc: 'Proyectos desafiantes en una empresa en constante expansión.', color: 'from-amber-400 to-orange-500' },
  { icon: Users, title: 'Equipo Comprometido', desc: 'Rodeate de personas apasionadas por lo que hacen.', color: 'from-yellow-500 to-amber-600' },
];

export default function TrabajaEnAlenort() {
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    const fileInput = document.getElementById('cv');
    if (fileInput?.files?.[0]) formData.append('cv', fileInput.files[0]);

    try {
      const res = await fetch('/api/enviar-curriculum', { method: 'POST', body: formData });
      if (res.ok) {
        setSubmitStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setFileName('');
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Trabaja en Alenort | Oportunidades Laborales</title>
        <meta name="description" content="Únete a nuestro equipo. En Alenort buscamos constantemente profesionales talentosos." />
      </Head>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative bg-stone-900 pt-28 pb-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-1/4 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block bg-yellow-500/20 text-yellow-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-yellow-500/30">
                Sumate al equipo
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                Trabaja en <span className="text-yellow-400">ALENORT</span>
              </h1>
              <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto">
                Buscamos personas comprometidas, innovadoras y con ganas de crecer en una empresa en expansión.
              </p>
            </motion.div>
          </div>
        </section>

        <Wave from="bg-stone-900" to="fill-amber-50" />

        {/* ── ¿POR QUÉ? ────────────────────────────────────── */}
        <section className="bg-amber-50 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-3">¿Por qué Alenort?</h2>
              <p className="text-amber-700 max-w-xl mx-auto">Más que un trabajo — una oportunidad de crecer en un lugar que te valora.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {razones.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(180,83,9,0.15)' }}
                    className="bg-white border border-amber-100 rounded-2xl p-6 text-center transition-shadow duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-amber-900 mb-2">{r.title}</h3>
                    <p className="text-amber-700 text-sm leading-relaxed">{r.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Wave from="bg-amber-50" to="fill-white" />

        {/* ── FORMULARIO CV ────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-amber-900 mb-3">Envianos tu CV</h2>
              <p className="text-amber-700">Completá el formulario y adjuntá tu CV — te contactamos si tu perfil coincide.</p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-amber-50 border border-amber-200 rounded-3xl p-8 shadow-xl"
            >
              {submitStatus === 'success' ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">¡CV recibido!</h3>
                  <p className="text-gray-600 max-w-sm mx-auto">Gracias por tu interés. Te contactamos si tu perfil coincide con nuestras búsquedas.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-amber-900 text-sm font-semibold mb-1.5">Nombre completo *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800" />
                    </div>
                    <div>
                      <label className="block text-amber-900 text-sm font-semibold mb-1.5">Correo electrónico *</label>
                      <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-amber-900 text-sm font-semibold mb-1.5">Teléfono</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800" />
                  </div>

                  <div>
                    <label className="block text-amber-900 text-sm font-semibold mb-1.5">Mensaje (opcional)</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Contanos sobre tu experiencia y por qué querés unirte..."
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all text-gray-800 resize-none" />
                  </div>

                  {/* Upload CV */}
                  <div>
                    <label className="block text-amber-900 text-sm font-semibold mb-1.5">Adjuntá tu CV (PDF, DOCX) *</label>
                    <div className="relative border-2 border-dashed border-amber-300 hover:border-yellow-500 bg-white rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200">
                      <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                        <Upload size={20} className="text-amber-600" />
                      </div>
                      {fileName ? (
                        <p className="text-amber-900 font-semibold text-sm">{fileName}</p>
                      ) : (
                        <>
                          <p className="text-amber-800 font-medium text-sm">Arrastrá o hacé clic para subir</p>
                          <p className="text-amber-500 text-xs mt-1">PDF, DOC, DOCX — máx. 10MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 rounded-xl text-sm text-red-700">
                      <X size={16} className="mt-0.5 flex-shrink-0" />
                      <span>Ocurrió un error al enviar. Intentá de nuevo o escribinos directamente.</span>
                    </div>
                  )}

                  <motion.button
                    type="submit" disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(234,179,8,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg transition-colors"
                  >
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" /><span>Enviando...</span></>
                    ) : (
                      <><Send className="w-5 h-5" /><span>Enviar solicitud</span></>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Nota */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3"
            >
              <FileText size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">
                Todos los CV recibidos se almacenan por <strong>6 meses</strong>. Te contactamos si tu perfil coincide con alguna búsqueda actual o futura.
              </p>
            </motion.div>
          </div>
        </section>

        <Wave from="bg-white" to="fill-stone-900" />

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
