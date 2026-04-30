import { Link, useParams } from "react-router-dom";
import { Play, Pause, Maximize, Volume2, ArrowLeft, Download, MessageSquare, FileText, Bookmark } from "lucide-react";
import { useState } from "react";
import drape from "@/assets/course-draping.jpg";

const lessons = [
  "01 · Tools of the trade",
  "02 · Anatomy of cloth",
  "03 · The straight grain",
  "04 · The cross grain",
  "05 · Pinning ritual",
  "06 · Volume study",
  "07 · The bias cut",
  "08 · Asymmetry",
  "09 · Final muslin",
];

export default function LessonPlayer() {
  const { slug, n="7" } = useParams();
  const [tab,setTab]=useState<"notes"|"resources"|"comments">("notes");
  return (
    <div className="min-h-screen bg-background text-foreground grid lg:grid-cols-[1fr_360px]">
      <main className="p-4 md:p-8">
        <Link to="/my-courses" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"><ArrowLeft className="h-3.5 w-3.5"/> My courses</Link>
        <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold">Draping & Form · Lesson {n}</p>
        <h1 className="font-display text-3xl md:text-5xl mt-2">The bias cut</h1>

        <div className="mt-6 relative aspect-video rounded-2xl overflow-hidden bg-foreground scanlines">
          <img src={drape} alt="" className="h-full w-full object-cover opacity-80"/>
          <div className="absolute inset-0 grid place-items-center">
            <button className="h-20 w-20 rounded-full glass grid place-items-center"><Play className="h-7 w-7 text-foreground"/></button>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-4 flex items-center gap-4 glass-dark text-background">
            <Pause className="h-4 w-4"/>
            <div className="flex-1 h-1 rounded-full bg-background/20"><div className="h-full w-[42%] bg-gold rounded-full"/></div>
            <span className="font-mono text-xs">12:04 / 28:51</span>
            <Volume2 className="h-4 w-4"/>
            <Maximize className="h-4 w-4"/>
          </div>
        </div>

        <div className="mt-8 flex gap-2 border-b hairline">
          {([
            ["notes","Notes",FileText],
            ["resources","Resources",Download],
            ["comments","Comments",MessageSquare],
          ] as const).map(([k,l,Icon])=>(
            <button key={k} onClick={()=>setTab(k)} className={`px-4 py-3 text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 border-b-2 -mb-px
              ${tab===k?"border-foreground":"border-transparent text-muted-foreground"}`}>
              <Icon className="h-3.5 w-3.5"/>{l}
            </button>
          ))}
        </div>

        <div className="mt-6 max-w-2xl text-sm leading-relaxed">
          {tab==="notes" && <textarea placeholder="Take notes during the lesson…" className="w-full h-64 rounded-xl border hairline p-4 bg-card outline-none focus:border-foreground"/>}
          {tab==="resources" && (
            <ul className="space-y-2">
              {["Bias cut diagrams.pdf","Pattern templates.zip","Reference look book.pdf"].map(r=>(
                <li key={r} className="flex items-center justify-between rounded-xl border hairline p-4 bg-card">
                  <span>{r}</span><Download className="h-4 w-4 text-muted-foreground"/>
                </li>
              ))}
            </ul>
          )}
          {tab==="comments" && (
            <div className="space-y-4">
              {[["Eva R.","Could we get a closer look at the dart at 14:00?"],["Mentor — Claire","Pinned. We'll cover that in next live."]].map(([n,c])=>(
                <div key={n} className="rounded-xl border hairline p-4 bg-card">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">{n}</p>
                  <p className="mt-2">{c}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <aside className="border-l hairline bg-surface p-6 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Module · Draping & Form</p>
        <h3 className="font-display text-xl mt-1">Lessons</h3>
        <ul className="mt-6 space-y-1">
          {lessons.map((l,i)=>{
            const active = String(i+1)===n;
            return (
              <li key={l}>
                <Link to={`/lesson/${slug}/${i+1}`} className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm
                  ${active?"bg-foreground text-background":"hover:bg-foreground/5"}`}>
                  <span className={`font-mono text-[10px] ${active?"text-gold":"text-muted-foreground"}`}>{String(i+1).padStart(2,"0")}</span>
                  <span className="truncate">{l.replace(/^\d+ · /,"")}</span>
                  {i<3 && <Bookmark className="h-3 w-3 ml-auto text-gold fill-current"/>}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
