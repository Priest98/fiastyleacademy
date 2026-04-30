import PublicLayout from "@/components/layout/PublicLayout";
import { Check } from "lucide-react";
import { useState } from "react";

const steps = ["Program","Details","Payment"];

export default function Enroll() {
  const [step, setStep] = useState(0);
  return (
    <PublicLayout>
      <section className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Enrollment · Spring cohort</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4">Reserve your seat.</h1>

        <div className="mt-12 flex items-center gap-2">
          {steps.map((s,i)=>(
            <div key={s} className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-full grid place-items-center text-xs font-mono ${i<=step?"bg-foreground text-background":"bg-foreground/10"}`}>{i+1}</div>
              <span className="text-xs uppercase tracking-[0.2em]">{s}</span>
              {i<steps.length-1 && <span className="w-12 h-px bg-border mx-3"/>}
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-10">
          <div className="rounded-2xl border hairline p-8 bg-card min-h-[420px]">
            {step===0 && (
              <div className="space-y-4">
                <h2 className="font-display text-2xl">Choose your program</h2>
                {["Couture · Spring '26 — €1,240","Atelier subscription — €39/mo","Maison — €2,400/season"].map((p,i)=>(
                  <label key={p} className="flex items-center gap-4 p-5 rounded-xl border hairline cursor-pointer hover:bg-surface">
                    <input type="radio" name="prog" defaultChecked={i===0} className="accent-foreground" />
                    <span className="font-display text-lg">{p}</span>
                  </label>
                ))}
              </div>
            )}
            {step===1 && (
              <div className="grid sm:grid-cols-2 gap-5">
                {["First name","Last name","Email","Phone","City","Portfolio link"].map(l=>(
                  <div key={l}>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</label>
                    <input className="mt-2 w-full bg-transparent border-b hairline focus:border-foreground outline-none py-2 text-sm" />
                  </div>
                ))}
              </div>
            )}
            {step===2 && (
              <div className="space-y-5">
                <h2 className="font-display text-2xl">Payment</h2>
                <div className="rounded-xl border hairline p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Card</p>
                  <p className="mt-2 font-mono">•••• •••• •••• 4242</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="rounded-full border hairline py-3 text-xs uppercase tracking-[0.2em]">Apple Pay</button>
                  <button className="rounded-full border hairline py-3 text-xs uppercase tracking-[0.2em]">Klarna · 4x</button>
                </div>
              </div>
            )}

            <div className="mt-10 flex justify-between">
              <button onClick={()=>setStep(s=>Math.max(0,s-1))} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">← Back</button>
              <button onClick={()=>setStep(s=>Math.min(2,s+1))} className="rounded-full bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.2em]">
                {step===2?"Confirm":"Continue"}
              </button>
            </div>
          </div>

          <aside className="rounded-2xl border hairline p-6 bg-surface h-max scanlines">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Order summary</p>
            <div className="mt-4 space-y-3 text-sm">
              <Row l="Couture · Spring '26" v="€1,240"/>
              <Row l="Starter kit shipping" v="€18"/>
              <Row l="Tax" v="€251"/>
            </div>
            <div className="mt-6 pt-6 border-t hairline flex justify-between">
              <span className="text-xs uppercase tracking-[0.2em]">Total</span>
              <span className="font-display text-3xl">€1,509</span>
            </div>
            <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
              {["14-day refund","Lifetime alumni access","Mentor critique included"].map(x=>(
                <li key={x} className="flex gap-2"><Check className="h-3.5 w-3.5 text-gold"/>{x}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
}

function Row({l,v}:{l:string;v:string}){return(
  <div className="flex justify-between"><span className="text-muted-foreground">{l}</span><span>{v}</span></div>
);}
