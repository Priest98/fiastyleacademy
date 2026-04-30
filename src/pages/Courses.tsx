import PublicLayout from "@/components/layout/PublicLayout";
import { motion } from "framer-motion";
import CourseCard from "@/components/marketing/CourseCard";
import { courses } from "@/data/courses";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

const filters = ["All", "Professional", "Masterclass"];

export default function Courses() {
  const [f, setF] = useState("All");
  const list = f === "All" ? courses : courses.filter(c => c.category === f);

  return (
    <PublicLayout>
      <section className="container pt-24 md:pt-40 pb-16 md:pb-24">
        <FadeIn className="text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-6 block font-medium">Our Curriculum</span>
          <h1 className="font-display text-4xl md:text-8xl uppercase tracking-tighter mb-8 md:mb-10">
            Academy <span className="italic">Programs</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Structured skill development from professional tailoring to advanced corsetry mastery. Select your path into the world of Fiastyle.
          </p>
        </FadeIn>
      </section>

      <section className="container pb-24 md:pb-32">
        <FadeIn direction="none">
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 overflow-x-auto w-full no-scrollbar px-4">
              {filters.map(x => (
                <button 
                  key={x} 
                  onClick={() => setF(x)}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-all pb-2 border-b-2 whitespace-nowrap px-2 font-medium
                  ${f === x ? "border-gold text-black" : "border-transparent text-muted-foreground hover:text-black"}`}
                >
                  {x}
                </button>
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">{list.length} Exclusive Programs</span>
          </div>
        </FadeIn>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {list.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.1} direction="up">
              <CourseCard c={c} />
            </FadeIn>
          ))}
        </motion.div>
      </section>
    </PublicLayout>
  );
}
