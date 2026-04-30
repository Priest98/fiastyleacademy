import PublicLayout from "@/components/layout/PublicLayout";
import CourseCard from "@/components/marketing/CourseCard";
import { courses } from "@/data/courses";
import { useState } from "react";

const filters = ["All","Foundation","Atelier","Material","Master","Business"];

export default function Courses() {
  const [f, setF] = useState("All");
  const list = f === "All" ? courses : courses.filter(c => c.category === f);
  return (
    <PublicLayout>
      <section className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Curriculum</p>
        <h1 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl">Every course, every craft.</h1>
        <p className="mt-6 max-w-xl text-muted-foreground">From your first croquis to your debut runway — a complete path through modern fashion design.</p>

        <div className="mt-12 flex flex-wrap gap-2 border-b hairline pb-6">
          {filters.map(x=>(
            <button key={x} onClick={()=>setF(x)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition
              ${f===x?"bg-foreground text-background":"bg-foreground/5 hover:bg-foreground/10"}`}>{x}</button>
          ))}
          <span className="ml-auto text-xs uppercase tracking-[0.18em] text-muted-foreground self-center">{list.length} programs</span>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {list.map(c=> <CourseCard key={c.slug} c={c} />)}
        </div>
      </section>
    </PublicLayout>
  );
}
