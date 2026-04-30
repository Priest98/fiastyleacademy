import AppLayout from "@/components/layout/AppLayout";
import { courses } from "@/data/courses";
import { Link } from "react-router-dom";

export default function MyCourses() {
  const enrolled = courses.slice(0,4).map((c,i)=>({...c, p:[58,84,12,0][i]}));
  return (
    <AppLayout>
      <h1 className="font-display text-4xl md:text-5xl">My Courses</h1>
      <div className="mt-4 flex gap-2">
        {["In progress","Completed","Saved"].map((t,i)=>(
          <button key={t} className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full ${i===0?"bg-foreground text-background":"bg-foreground/5"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-10 space-y-3">
        {enrolled.map(c=>(
          <Link to={`/lesson/${c.slug}/1`} key={c.slug} className="flex items-center gap-5 rounded-2xl border hairline p-4 bg-card hover:bg-surface transition">
            <img src={c.image} className="h-20 w-20 rounded-xl object-cover scanlines" alt="" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.category}</p>
              <h3 className="font-display text-xl truncate">{c.title}</h3>
              <div className="mt-2 h-1 rounded-full bg-foreground/10 overflow-hidden max-w-md"><div className="h-full bg-foreground" style={{width:`${c.p}%`}}/></div>
            </div>
            <span className="font-mono text-sm text-muted-foreground">{c.p}%</span>
          </Link>
        ))}
      </div>
    </AppLayout>
  );
}
