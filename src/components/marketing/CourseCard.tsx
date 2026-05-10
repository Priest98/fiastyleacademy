import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  description?: string;
};

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: 0.5, ease: easing, delay },
});

export default function CourseCard({ c }: { c: Course }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // On mobile: tap to toggle reveal; on desktop: hover
  const isRevealed = isHovered || isTapped;

  return (
    <>
      <motion.div
        className="relative group cursor-pointer overflow-hidden"
        style={{ aspectRatio: "3/4" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTap={() => setIsTapped((v) => !v)}
        onClick={() => {
          if (isHovered) setIsModalOpen(true);
          else if (isTapped) setIsModalOpen(true);
        }}
        whileHover={{ scale: 1.0 }}
      >
        {/* ── Image ── */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isRevealed ? 1.07 : 1 }}
          transition={{ duration: 0.9, ease: easing }}
        >
          <img
            src={c.image}
            alt={c.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ── Permanent gradient at bottom for legibility ── */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        {/* ── Default label (always visible) ── */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              key="default"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <span className="label text-white/60 text-[9px] tracking-[0.35em] mb-3 block">
                {c.category}
              </span>
              <h3 className="font-display text-white text-2xl md:text-3xl uppercase leading-tight">
                {c.title}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hover overlay ── */}
        <AnimatePresence>
          {isRevealed && (
            <>
              {/* Soft dark overlay */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black/40"
              />

              {/* Staggered content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                {/* Category label */}
                <motion.span
                  key="cat"
                  {...fadeUp(0)}
                  className="label text-gold text-[10px] tracking-[0.4em] mb-4 block"
                >
                  {c.category}
                </motion.span>

                {/* Title */}
                <motion.h3
                  key="title"
                  {...fadeUp(0.05)}
                  className="font-display text-white text-3xl md:text-4xl uppercase leading-tight mb-3"
                >
                  {c.title}
                </motion.h3>

                {/* One-line description */}
                <motion.p
                  key="desc"
                  {...fadeUp(0.12)}
                  className="text-white/70 font-light text-sm md:text-base leading-relaxed mb-6 max-w-xs line-clamp-1"
                >
                  {c.description || `A ${c.duration} immersive program for ${c.level.toLowerCase()} designers.`}
                </motion.p>

                {/* Meta row */}
                <motion.div
                  key="meta"
                  {...fadeUp(0.18)}
                  className="flex items-center justify-between mb-6"
                >
                  <span className="text-white/50 text-[11px] uppercase tracking-widest">
                    {c.duration} · {c.level}
                  </span>
                  <span className="font-display text-gold text-xl">
                    {c.price}
                  </span>
                </motion.div>

                {/* CTA button */}
                <motion.button
                  key="cta"
                  {...fadeUp(0.24)}
                  onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                  className="group/btn flex items-center gap-3 text-white border border-white/30 rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500 w-fit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Details
                  <motion.span
                    animate={{ x: isRevealed ? 0 : -4 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={c}
      />
    </>
  );
}
