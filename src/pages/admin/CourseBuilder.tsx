import AppLayout from "@/components/layout/AppLayout";
import { Plus, GripVertical, Image as ImageIcon, Video, FileText } from "lucide-react";

export default function CourseBuilder() {
  return (
    <AppLayout kind="admin">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Course builder</p>
          <h1 className="font-display text-4xl md:text-5xl mt-2">Draping & Form</h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border hairline px-4 py-2 text-xs uppercase tracking-[0.2em]">Preview</button>
          <button className="rounded-full bg-foreground text-background px-4 py-2 text-xs uppercase tracking-[0.2em]">Publish</button>
        </div>
      </div>

      <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="rounded-2xl border hairline p-6 bg-card">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl">Modules</h3>
            <button className="text-xs uppercase tracking-[0.2em] inline-flex items-center gap-1"><Plus className="h-3.5 w-3.5"/> Add module</button>
          </div>
          <ol className="mt-4 space-y-2">
            {["Foundations of cloth","The straight grain","The bias cut","Final muslin"].map((m,i)=>(
              <li key={m} className="flex items-center gap-3 rounded-xl border hairline p-4 bg-background">
                <GripVertical className="h-4 w-4 text-muted-foreground"/>
                <span className="font-mono text-xs text-muted-foreground">{String(i+1).padStart(2,"0")}</span>
                <span className="font-display text-lg">{m}</span>
                <span className="ml-auto text-xs text-muted-foreground">3 lessons</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-xl bg-surface p-6 scanlines">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Editing lesson</p>
            <h4 className="font-display text-2xl mt-1">07 — The bias cut</h4>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[Video,ImageIcon,FileText].map((Icon,i)=>(
                <button key={i} className="rounded-xl border hairline p-4 grid place-items-center bg-background hover:bg-foreground/5">
                  <Icon className="h-5 w-5"/>
                </button>
              ))}
            </div>
            <textarea placeholder="Lesson description…" className="mt-4 w-full h-28 rounded-xl border hairline bg-background p-3 text-sm outline-none focus:border-foreground"/>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border hairline p-6 bg-card">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Settings</p>
            <div className="mt-4 space-y-3 text-sm">
              <Setting l="Status" v="Draft"/>
              <Setting l="Tier" v="Couture"/>
              <Setting l="Price" v="€1,240"/>
              <Setting l="Seats" v="24"/>
            </div>
          </div>
          <div className="rounded-2xl border hairline p-6 bg-card">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cover</p>
            <div className="mt-4 aspect-[4/5] rounded-xl bg-surface grid place-items-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Drop image</div>
          </div>
        </aside>
      </div>
    </AppLayout>
  );
}
function Setting({l,v}:{l:string;v:string}){return(
  <div className="flex justify-between border-b hairline pb-2"><span className="text-muted-foreground">{l}</span><span>{v}</span></div>
);}
