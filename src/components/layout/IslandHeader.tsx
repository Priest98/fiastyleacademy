import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Academy", path: "/courses" },
  { name: "Student Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function IslandHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    
    // Scrolled state for background change
    setScrolled(latest > 20);

    // Hide/Show logic
    if (latest > 100 && direction === "down") {
      setHidden(true);
    } else {
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: hidden ? -120 : 0, 
        opacity: 1 
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-2 py-4 md:px-8 md:py-8 pointer-events-none"
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ease-[0.22,1,0.36,1] px-4 md:px-6 py-3 md:py-4 rounded-full pointer-events-auto border border-black/5 ${
          scrolled 
            ? "bg-white/85 backdrop-blur-xl shadow-luxury md:scale-95" 
            : "bg-transparent border-transparent scale-100"
        }`}
      >
        <Link to="/" className="font-display text-lg md:text-2xl tracking-tighter flex items-center gap-2 group">
          <span className="text-foreground transition-colors group-hover:text-gold">FIATSTYLE</span>
          <span className="text-gold font-light hidden sm:inline">ACADEMY</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="relative group py-2"
            >
              <span className={`label transition-colors duration-500 ${
                location.pathname === link.path ? "text-gold" : "text-foreground/70 group-hover:text-foreground"
              }`}>
                {link.name}
              </span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-500"
                initial={false}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <Link 
            to="/enroll" 
            className="btn-luxury-primary py-2 md:py-2.5 px-6 md:px-8 text-[9px] md:text-[10px] tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2 -mr-1 bg-black/5 rounded-full transition-transform active:scale-90" 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6 md:hidden pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/" onClick={() => setIsOpen(false)} className="font-display text-2xl tracking-tighter">
                FIATSTYLE<span className="text-gold font-light">ACADEMY</span>
              </Link>
              <button 
                className="p-3 -mr-2 text-foreground bg-black/5 rounded-full transition-transform active:scale-90" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-display uppercase tracking-tighter hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span className={location.pathname === link.path ? "text-gold italic" : ""}>
                      {link.name}
                    </span>
                    <ArrowRight className="h-6 w-6 text-gold opacity-30 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 mt-auto"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Start your journey today</p>
                <Link 
                  to="/enroll" 
                  onClick={() => setIsOpen(false)}
                  className="btn-luxury-primary w-full py-6 text-xs shadow-luxury"
                >
                  Apply Now — Secure Your Place
                </Link>
                <p className="mt-6 text-center text-[9px] uppercase tracking-[0.2em] text-gold/60">Limited seats remaining for May intake</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
