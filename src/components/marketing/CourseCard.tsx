import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
    <Link to={`/courses/${c.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/5] scanlines">
        <img src={c.image} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]">{c.category}</div>
        {c.seats !== undefined && c.seats <= 12 && (
          <div className="absolute top-3 right-3 rounded-full bg-foreground text-background px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
            {c.seats} seats left
          </div>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.duration} · {c.level}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="font-display text-xl">{c.price}</div>
          <ArrowUpRight className="ml-auto mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
