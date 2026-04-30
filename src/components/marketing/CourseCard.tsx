import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/courses/${c.slug}`} className="group block mb-12">
        <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 mb-6">
          <img 
            src={c.image} 
            alt={c.title} 
            loading="lazy" 
            className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" 
          />
          <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 text-[10px] uppercase tracking-[0.3em]">
            {c.category}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <h3 className="font-display text-2xl uppercase leading-tight group-hover:italic transition-all duration-500">
              {c.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex justify-between items-end border-t border-black/10 pt-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              {c.duration} — {c.level}
            </p>
            <span className="font-display text-xl">{c.price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
