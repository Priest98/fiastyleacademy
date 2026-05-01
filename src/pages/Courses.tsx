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
      <section className="editorial-container section-padding-lg">
        <FadeIn className="text-center">
          <span className="label text-gold mb-6 block">Our Curriculum</span>
          <h1 className="text-balance mb-8 md:mb-10">
            Academy <span className="italic">Programs</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed text-lg">
            Structured skill development from professional tailoring to advanced corsetry mastery. Select your path into the world of Fiatstyle.
          </p>
        </FadeIn>
      </section>

      <section className="editorial-container pb-32 md:pb-48">
        <FadeIn direction="none">
          <div className="flex flex-col items-center justify-center gap-12 mb-20">
            <div className="flex flex-wrap justify-center gap-8 overflow-x-auto w-full no-scrollbar px-4">
              {filters.map(x => (
                <button 
                  key={x} 
                  onClick={() => setF(x)}
                  className={`label transition-all pb-2 border-b-2 whitespace-nowrap px-2
                  ${f === x ? "border-gold text-black" : "border-transparent text-muted-foreground hover:text-black"}`}
                >
                  {x}
                </button>
              ))}
            </div>
            <span className="label opacity-40">{list.length} Exclusive Programs</span>
          </div>
        </FadeIn>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
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
