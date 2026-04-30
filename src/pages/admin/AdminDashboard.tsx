import AppLayout from "@/components/layout/AppLayout";
import { TrendingUp, Users, BookOpen, CircleDollarSign } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AppLayout kind="admin">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Overview</p>
          <h1 className="font-display text-4xl md:text-5xl mt-2">Atelier — Spring '26</h1>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Last 30 days</span>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { i:CircleDollarSign, l:"Revenue", v:"€184,260", d:"+18%" },
          { i:Users,            l:"New students", v:"312", d:"+9%" },
          { i:BookOpen,         l:"Active courses", v:"24", d:"+2" },
          { i:TrendingUp,       l:"Completion", v:"94%", d:"+1.2%" },
        ].map(({i:Icon,l,v,d})=>(
          <div key={l} className="rounded-2xl border hairline p-6 bg-card">
            <Icon className="h-4 w-4 text-gold"/>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
            <p className="font-display text-3xl mt-1">{v}</p>
            <p className="text-xs text-gold mt-1">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border hairline p-6 bg-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-2xl">Enrollment trend</h3>
            <div className="flex gap-1 text-[10px] uppercase tracking-[0.2em]">
              {["7d","30d","90d"].map((t,i)=><span key={t} className={`px-3 py-1 rounded-full ${i===1?"bg-foreground text-background":"bg-foreground/5"}`}>{t}</span>)}
            </div>
          </div>
          <div className="h-56 flex items-end gap-2">
            {[40,55,38,72,68,90,82,95,76,88,100,86].map((h,i)=>(
              <div key={i} className="flex-1 rounded-t-md bg-foreground/10 relative">
                <div className="absolute inset-x-0 bottom-0 rounded-t-md bg-foreground" style={{height:`${h}%`}}/>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border hairline p-6 bg-card">
          <h3 className="font-display text-2xl mb-4">Recent activity</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Eva R.","enrolled in Couture"],
              ["Yuki T.","completed Draping"],
              ["Léo M.","submitted muslin"],
              ["Mira H.","joined Maison"],
            ].map(([n,a])=>(
              <li key={n as string} className="flex justify-between border-b hairline pb-2">
                <span><b>{n}</b> <span className="text-muted-foreground">{a}</span></span>
                <span className="text-[10px] text-muted-foreground">2h</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}
