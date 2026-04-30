import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Programs", path: "/courses" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function IslandHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tighter">
          FIASTYLE<span className="text-gold">ACADEMY</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`label hover:text-gold transition-colors ${
                location.pathname === link.path ? "text-gold" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/enroll" 
            className="btn-luxury-primary py-3"
          >
            Join the House
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <button 
              className="absolute top-8 right-6 text-foreground" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display uppercase tracking-[0.2em]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-6"
              >
                <Link 
                  to="/enroll" 
                  onClick={() => setIsOpen(false)}
                  className="btn-luxury-primary px-16 py-6 text-xs"
                >
                  Join the House
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
