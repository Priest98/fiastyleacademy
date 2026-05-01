import PublicLayout from "@/components/layout/PublicLayout";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/marketing/CourseCard";
import { courses } from "@/data/courses";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

const filters = ["All", "Professional", "Masterclass"];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Courses() {
  const [f, setF] = useState("All");
  const list = f === "All" ? courses : courses.filter(c => c.category === f);

  return (
    <PublicLayout>
      {/* ── Editorial Hero Header ── */}
      <section className="editorial-container section-padding-lg">
        <FadeIn>
          <div className="max-w-2xl">
            <span className="label text-gold mb-6 block tracking-[0.35em]">
              The Collection
            </span>
            <h1 className="text-balance mb-8 md:mb-10 leading-none">
              Academy <br />
              <span className="italic">Programs</span>
            </h1>
            <p className="text-muted-foreground font-light leading-loose text-lg max-w-lg">
              Each program is a journey into precision, artistry, and creative mastery. 
              Hover to explore. Click to begin.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Filter Bar ── */}
      <section className="editorial-container pb-12">
        <FadeIn direction="none">
          <div className="flex items-center gap-12 border-b border-black/8 pb-8 mb-2">
            <div className="flex gap-10 overflow-x-auto no-scrollbar">
              {filters.map(x => (
                <button
                  key={x}
                  onClick={() => setF(x)}
                  className={`label text-[11px] tracking-[0.25em] uppercase pb-2 border-b-2 whitespace-nowrap transition-all duration-300
                    ${f === x
                      ? "border-black text-black"
                      : "border-transparent text-muted-foreground hover:text-black hover:border-black/20"
                    }`}
                >
                  {x}
                </button>
              ))}
            </div>
            <span className="label text-[10px] opacity-30 ml-auto shrink-0">
              {list.length} Program{list.length !== 1 ? "s" : ""}
            </span>
          </div>
        </FadeIn>
      </section>

      {/* ── Lookbook Grid ── */}
      <section className="editorial-container pb-48">
        <motion.div
          layout
          className={`grid gap-4 md:gap-6 ${
            list.length === 1
              ? "grid-cols-1 max-w-2xl"
              : list.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {list.map((c, i) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.6, ease: easing, delay: i * 0.08 }}
              >
                <CourseCard c={c} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Bottom Editorial CTA ── */}
      <section className="bg-black text-white py-32 md:py-48">
        <FadeIn className="editorial-container text-center">
          <span className="label text-gold mb-6 block tracking-[0.35em]">
            2026 Intake · Ilorin · Online
          </span>
          <h2 className="text-3xl md:text-6xl uppercase mb-8 md:mb-12 font-display leading-none">
            Your journey <br />
            <span className="italic">begins here</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-md mx-auto mb-16 leading-loose">
            Limited seats available for our next cohort. Secure your place today.
          </p>
          <motion.a
            href="/enroll"
            className="inline-flex items-center gap-4 border border-white/30 rounded-full px-12 py-6 text-[12px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Apply Now →
          </motion.a>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}
