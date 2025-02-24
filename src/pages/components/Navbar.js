import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Phone, Users, Rocket } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo o nombre del sitio con animación */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: [-3, 6] }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <span className="text-yellow-500">ALE</span>NORT
          </Link>
        </motion.div>

        {/* Menú para pantallas grandes */}
        <ul className="hidden md:flex space-x-8">
          {[
            "Inicio",
            "Servicios",
            "Trabaja en Alenort",
            "Emprende con Alenort",
            "Contacto"
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={
                  item === "Inicio"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`
                }
                className="text-gray-800 hover:text-yellow-500 transition-colors flex items-center gap-2"
              >
                {item === "Inicio" && <Home size={18} />}
                {item === "Servicios" && <Briefcase size={18} />}
                {item === "Trabaja en Alenort" && <Users size={18} />}
                {item === "Emprende con Alenort" && <Rocket size={18} />}
                {item === "Contacto" && <Phone size={18} />}
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Botón del menú hamburguesa para móviles */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Menú desplegable para móviles */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md"
          >
            <ul className="flex flex-col space-y-4 p-4">
              {[
                "Inicio",
                "Servicios",
                "Trabaja en Alenort",
                "Emprende con Alenort",
                "Contacto"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Link
                    href={
                      item === "Inicio"
                        ? "/"
                        : `/${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    className="text-gray-800 hover:text-yellow-500 transition-colors flex items-center gap-2"
                  >
                    {item === "Inicio" && <Home size={18} />}
                    {item === "Servicios" && <Briefcase size={18} />}
                    {item === "Trabaja en Alenort" && <Users size={18} />}
                    {item === "Emprende con Alenort" && <Rocket size={18} />}
                    {item === "Contacto" && <Phone size={18} />}
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;