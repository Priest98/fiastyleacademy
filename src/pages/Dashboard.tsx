import AppLayout from "@/components/layout/AppLayout";
import { Link } from "react-router-dom";
import { Play, TrendingUp, Calendar, Award } from "lucide-react";
import sketch from "@/assets/course-sketching.jpg";
import drape from "@/assets/course-draping.jpg";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Bonjour</p>
          <h1 className="font-display text-4xl md:text-5xl mt-2">Welcome back, Eva.</h1>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:block">Spring '26 · Week 3</span>
      </div>

      {/* Resume */}
      <div className="mt-10 rounded-2xl overflow-hidden grid md:grid-cols-[1fr_300px] bg-foreground text-background">
        <div className="p-8 md:p-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Continue</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Draping & Form — Lesson 07</h2>
          <p className="mt-2 text-background/60 text-sm">The bias cut: theory and the first muslin.</p>
          <div className="mt-6 flex items-center gap-4">
            <Link to="/lesson/draping-and-form/7" className="rounded-full bg-gold text-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2"><Play className="h-3.5 w-3.5"/> Resume</Link>
            <span className="text-xs text-background/60">28 min remaining</span>
          </div>
          <div className="mt-6 h-1 rounded-full bg-background/20 overflow-hidden">
            <div className="h-full w-[58%] bg-gold"/>
          </div>
        </div>
        <div className="relative scanlines hidden md:block">
          <img src={drape} alt="" className="h-full w-full object-cover"/>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {[
          { i:TrendingUp, l:"Progress", v:"58%", s:"Couture path" },
          { i:Calendar,  l:"Streak",   v:"12 days", s:"Keep going" },
          { i:Award,     l:"Badges",   v:"4 / 12", s:"Drape, color, sketch…" },
        ].map(({i:Icon,l,v,s})=>(
          <div key={l} className="rounded-2xl border hairline p-6 bg-card">
            <Icon className="h-4 w-4 text-gold"/>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
            <p className="font-display text-3xl mt-1">{v}</p>
            <p className="text-xs text-muted-foreground mt-1">{s}</p>
          </div>
        ))}
      </div>

      {/* Active courses */}
      <div className="mt-12">
        <h3 className="font-display text-2xl mb-4">Active courses</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t:"Draping & Form", p:58, img:drape, n:"Next: Bias cut" },
            { t:"Fashion Illustration", p:84, img:sketch, n:"Next: Final critique" },
          ].map(c=>(
            <div key={c.t} className="rounded-2xl border hairline p-4 flex gap-4 bg-card">
              <img src={c.img} alt="" className="h-24 w-24 rounded-xl object-cover scanlines" />
              <div className="flex-1">
                <h4 className="font-display text-xl">{c.t}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.n}</p>
                <div className="mt-3 h-1 rounded-full bg-foreground/10 overflow-hidden"><div className="h-full bg-foreground" style={{width:`${c.p}%`}}/></div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.p}% complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
