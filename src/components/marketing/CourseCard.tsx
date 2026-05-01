import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CourseModal from "./CourseModal";

export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  seats?: number;
};

export default function CourseCard({ c }: { c: Course }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 mb-8 shadow-soft group-hover:shadow-luxury transition-all duration-700">
          <img 
            src={c.image} 
            alt={c.title} 
            loading="lazy" 
            className="h-full w-full object-cover transition-all duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0" 
          />
          <div className="absolute top-0 left-0 bg-black text-white px-6 py-3 text-[10px] uppercase tracking-[0.4em]">
            {c.category}
          </div>
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700 flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 0 }}
              className="group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4 bg-white/90 backdrop-blur-md text-black px-10 py-5 rounded-full flex items-center gap-4 transition-all duration-500 shadow-luxury border border-white/50"
            >
              <span className="label text-[11px] tracking-[0.2em]">View Details</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight group-hover:italic transition-all duration-500">
              {c.title}
            </h3>
          </div>
          
          <div className="flex justify-between items-end pt-6 border-t border-black/5">
            <div className="space-y-1">
              <p className="label opacity-40 text-[9px] tracking-[0.3em] uppercase">
                Program Path
              </p>
              <p className="text-[12px] font-light tracking-wide uppercase">
                {c.duration} — {c.level}
              </p>
            </div>
            <div className="text-right">
              <p className="label opacity-40 text-[9px] tracking-[0.3em] uppercase mb-1">
                Investment
              </p>
              <span className="font-display text-2xl text-gold">{c.price}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <CourseModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        course={c} 
      />
    </>
  );
}
