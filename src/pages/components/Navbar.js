import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Briefcase, Phone, Users, Rocket, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const PRICE_LIST_URL = 'https://qr-six-alpha.vercel.app/';

const navItems = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Servicios", href: "/servicios", icon: Briefcase },
  { label: "Trabaja", href: "/trabaja-en-alenort", icon: Users },
  { label: "Emprende", href: "/emprende-con-alenort", icon: Rocket },
  { label: "Contacto", href: "/contacto", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-amber-900/10"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* ── LOGO ─────────────────────────────────────── */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-2xl font-bold text-stone-800 tracking-tight"
            >
              <span className="text-yellow-500">ALE</span>NORT
            </motion.div>
          </Link>

          {/* ── NAV DESKTOP ──────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "text-yellow-600 bg-amber-50"
                        : "text-stone-600 hover:text-yellow-600 hover:bg-amber-50"
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-amber-100 rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA DESKTOP ──────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href={PRICE_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(234,179,8,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-sm py-2.5 px-5 rounded-xl shadow-md transition-colors"
            >
              📋 Lista de Precios
              <ExternalLink size={13} />
            </motion.a>
          </div>

          {/* ── HAMBURGER ────────────────────────────────── */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-stone-700 hover:bg-amber-50 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── MENÚ MÓVIL ───────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-amber-100 bg-white/98 backdrop-blur-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                        active
                          ? "bg-amber-100 text-yellow-700"
                          : "text-stone-700 hover:bg-amber-50 hover:text-yellow-600"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${active ? "bg-yellow-500" : "bg-amber-100"}`}>
                        <Icon size={16} className={active ? "text-white" : "text-amber-700"} />
                      </div>
                      {item.label}
                      {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-500" />}
                    </Link>
                  </motion.div>
                );
              })}

              {/* CTA móvil */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 + 0.05, type: "spring", stiffness: 300 }}
                className="pt-2 pb-1"
              >
                <a
                  href={PRICE_LIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3.5 px-4 rounded-xl transition-colors text-sm shadow-md shadow-yellow-400/20"
                >
                  📋 Ver Lista de Precios
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
