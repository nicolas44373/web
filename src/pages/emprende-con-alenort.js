import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Truck, DollarSign, CreditCard, Phone } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar"; // Ajusta la ruta según tu estructura de carpetas

const EmprendeConAlenort = () => {
  return (
    <>
      <Head>
        <title>Emprende con Alenort | Tu Negocio Comienza Aquí</title>
        <meta
          name="description"
          content="Emprende con confianza respaldado por Alenort. Ofrecemos precios diferenciados, descuentos por volumen y más beneficios para emprendedores."
        />
      </Head>

      <Navbar />

      <div className="pt-24 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Emprende con <span className="text-yellow-500">ALE</span>NORT
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl text-black font-semibold mb-6 flex items-center">
                <TrendingUp size={24} className="text-yellow-500 mr-3" />
                Impulsa tu negocio con nosotros
              </h2>
              
              <p className="text-gray-700 mb-6">
                En Alenort sabemos lo importante que es contar con un respaldo confiable cuando estás comenzando tu emprendimiento. Por eso, ofrecemos soluciones diseñadas especialmente para emprendedores que buscan hacer crecer su negocio con un aliado estratégico.
              </p>
              
              <p className="text-gray-700 mb-6">
                <strong>Emprende con confianza sabiendo que nosotros te respaldamos. ¡Tu negocio comienza aquí!</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl text-black font-semibold mb-3 flex items-center">
                    <CreditCard size={20} className="text-yellow-500 mr-2" />
                    Facilidades de pago
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Trabajamos contra boleta</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Cuentas corrientes para emprendedores</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Facilidades de pago flexibles</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl text-black font-semibold mb-3 flex items-center">
                    <DollarSign size={20} className="text-yellow-500 mr-2" />
                    Beneficios económicos
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Precios diferenciados para emprendedores</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Descuentos por volumen de compra</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Promociones especiales para nuevos negocios</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl text-black font-semibold mb-3 flex items-center">
                    <Truck size={20} className="text-yellow-500 mr-2" />
                    Logística y entrega
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Entrega a domicilio</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Seguimiento de pedidos en tiempo real</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Planificación logística personalizada</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-xl text-black font-semibold mb-3 flex items-center">
                    <CheckCircle size={20} className="text-yellow-500 mr-2" />
                    Beneficios adicionales
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Asesoramiento personalizado</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Acceso prioritario a nuevos productos</span>
                    </li>
                    <li className="flex items-start text-black">
                      <CheckCircle size={18} className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Programa de fidelización</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl text-black font-semibold mb-4 text-center">
                  ¿Listo para emprender con nosotros?
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Contacta con nuestro equipo de especialistas y descubre cómo podemos ayudarte a hacer crecer tu negocio.
                </p>
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contacto"
                      className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md transition-colors font-medium"
                    >
                      <Phone size={18} className="mr-2" />
                      Contáctanos ahora
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default EmprendeConAlenort;