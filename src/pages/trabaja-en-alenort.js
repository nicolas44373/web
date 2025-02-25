import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Upload, Send, X } from "lucide-react";
import Head from "next/head";
import Navbar from "./components/Navbar"; // Ajusta la ruta según tu estructura de carpetas

const TrabajaEnAlenort = () => {
  const [fileName, setFileName] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Preparamos los datos para enviar al endpoint
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    
    // Verificamos que hay un archivo antes de agregarlo
    const fileInput = document.getElementById("cv");
    if (fileInput.files && fileInput.files[0]) {
      formData.append("cv", fileInput.files[0]);
    }
    
    try {
      // Usamos el nuevo endpoint para el formulario de trabajo
      const response = await fetch("/api/enviar-curriculum", {
        method: "POST",
        body: formData,
        // No incluir headers Content-Type cuando se envía FormData con archivos
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        // Limpiamos el formulario después de un envío exitoso
        setFileName("");
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
        // También hay que resetear el input de archivo
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        const errorData = await response.json();
        console.error("Error en la respuesta del servidor:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Trabaja en Alenort | Oportunidades Laborales</title>
        <meta
          name="description"
          content="Únete a nuestro equipo. En Alenort buscamos constantemente profesionales talentosos."
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
            Trabaja en <span className="text-yellow-500">ALE</span>NORT
          </h1>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl text-black font-semibold mb-4">
              Forma parte de nuestro equipo
            </h2>
            <p className="text-black mb-6">
              En Alenort estamos en constante crecimiento y siempre buscamos
              personas talentosas que quieran crecer profesionalmente con
              nosotros. Buscamos personal comprometido, innovador y con ganas de
              desarrollarse en un ambiente dinámico y colaborativo.
            </p>

            <div className="mb-8">
              <h3 className="text-xl text-black font-semibold mb-3">¿Por qué Alenort?</h3>
              <ul className="space-y-2 text-black">
                {[
                  "Ambiente laboral positivo y colaborativo",
                  "Oportunidades de crecimiento y desarrollo profesional",
                  "Beneficios competitivos",
                  "Proyectos desafiantes e innovadores"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-black">
                    <CheckCircle
                      size={20}
                      className="text-yellow-500 mt-1 mr-2 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-xl text-black font-semibold mb-4">
                Envía tu CV
              </h3>
              <p className="text-black mb-6">
                Completa el siguiente formulario y adjunta tu CV. Nos pondremos en contacto contigo 
                si tu perfil coincide con nuestras búsquedas actuales.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 text-black">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                    placeholder="Cuéntanos más sobre tu experiencia y por qué te gustaría unirte a nuestro equipo"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="cv" className="block text-gray-700 mb-1 font-medium">
                    Adjunta tu CV (PDF, DOCX) *
                  </label>
                  <div className="relative border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">
                      {fileName ? fileName : "Arrastra tu archivo o haz clic para seleccionarlo"}
                    </span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-md transition-colors font-medium w-full md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar solicitud
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 mt-0.5" />
                      <p className="text-green-700">
                        ¡Gracias por tu interés! Hemos recibido tu CV y nos pondremos en contacto contigo si tu perfil coincide con nuestras necesidades.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
                    <div className="flex items-start">
                      <X size={20} className="text-red-500 mr-2 mt-0.5" />
                      <p className="text-red-700">
                        Ha ocurrido un error al enviar tu solicitud. Por favor, intenta de nuevo o envía tu CV directamente a rrhh@alenort.com.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <h3 className="text-lg text-black font-semibold mb-2 flex items-center">
                <FileText size={18} className="mr-2 text-yellow-300" />
                Importante:
              </h3>
              <p className="text-gray-700 text-sm">
                Todos los CV recibidos serán almacenados en nuestra base de
                datos por un período de 6 meses. Nos pondremos en contacto
                contigo si tu perfil coincide con alguna de nuestras búsquedas
                actuales o futuras.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TrabajaEnAlenort;