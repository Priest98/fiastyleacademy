import PublicLayout from "@/components/layout/PublicLayout";
import { Check } from "lucide-react";
import { useState } from "react";

const steps = ["Program","Details","Payment"];

export default function Enroll() {
  const [step, setStep] = useState(0);
  return (
    <PublicLayout>
      <section className="editorial-container section-padding-lg">
        <p className="label text-muted-foreground">Enrollment · 2026 Intake</p>
        <h1 className="mt-4">Reserve your seat.</h1>
        <p className="mt-4 text-lg text-muted-foreground font-light italic">"Takes less than 1 minute — Secure your future in fashion."</p>

        <div className="mt-8 md:mt-12 flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {steps.map((s,i)=>(
            <div key={s} className="flex items-center gap-2 shrink-0">
              <div className={`h-10 w-10 rounded-full grid place-items-center text-[10px] font-mono ${i<=step?"bg-foreground text-background":"bg-foreground/10"}`}>{i+1}</div>
              <span className="label">{s}</span>
              {i<steps.length-1 && <span className="w-8 md:w-12 h-px bg-border mx-2 md:mx-3"/>}
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 grid lg:grid-cols-[1fr_360px] gap-8 md:gap-10">
          <div className="rounded-xl border border-black/5 p-6 md:p-8 bg-card min-h-[300px]">
            {step===0 && (
              <div className="space-y-4">
                <h2 className="font-display text-xl md:text-2xl">Choose your program</h2>
                {[
                  { n: "3 Month Intermediate Class", p: "₦100,000" },
                  { n: "3 Month Advanced Class", p: "₦100,000" },
                  { n: "1 Month Corsetry Masterclass", p: "₦50,000" }
                ].map((item,i)=>(
                  <label key={i} className="flex items-center gap-4 p-4 md:p-5 rounded-none border border-black/10 cursor-pointer hover:bg-neutral-50 transition-colors">
                    <input type="radio" name="prog" defaultChecked={i===0} className="accent-black" />
                    <div className="flex flex-col">
                      <span className="font-display text-base md:text-lg uppercase tracking-tight">{item.n}</span>
                      <span className="text-xs text-muted-foreground">{item.p}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
            {step===1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {["First name","Last name","Email","Phone","City","Portfolio link"].map(l=>(
                  <div key={l}>
                    <label className="label text-muted-foreground mb-2 block">{l}</label>
                    <input className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" />
                  </div>
                ))}
              </div>
            )}
            {step===2 && (
              <div className="space-y-6 md:space-y-8">
                <h2 className="font-display text-xl md:text-2xl">Payment Selection</h2>
                <div className="rounded-xl border border-black/5 p-8 bg-neutral-50 shadow-soft">
                  <p className="label text-muted-foreground">Bank Transfer (Recommended)</p>
                  <p className="mt-2 font-display text-lg">Guaranty Trust Bank</p>
                  <p className="font-mono text-sm tracking-widest mt-1">0123456789 · Fiatstyle Academy</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="btn-luxury-secondary w-full">Card Payment</button>
                  <button className="btn-luxury-secondary w-full">Paystack Check</button>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between items-center">
              <button onClick={()=>setStep(s=>Math.max(0,s-1))} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors">← Previous</button>
              <button onClick={()=>setStep(s=>Math.min(2,s+1))} className="btn-luxury-primary px-10 py-4 text-[10px]">
                {step===2?"Complete Registration":"Next Step"}
              </button>
            </div>
          </div>

          <aside className="rounded-xl border border-black/5 p-8 bg-neutral-50 h-max shadow-luxury">
            <p className="label text-muted-foreground">Application Details</p>
            <div className="mt-4 space-y-3 text-sm">
              <Row l="Intermediate Class" v="₦100,000"/>
              <Row l="Materials Kit" v="₦15,000"/>
              <Row l="Tax / Fees" v="Included"/>
            </div>
            <div className="mt-8 pt-8 border-t border-black/5 flex justify-between items-end">
              <span className="label">Total</span>
              <span className="font-display text-4xl">₦115,000</span>
            </div>
            <ul className="mt-10 space-y-4 text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              {["Secure SSL Payment","Lifetime Alumni Group","2026 Batch Enrollment", "Join 1,000+ Successful Alumni"].map(x=>(
                <li key={x} className="flex gap-3 items-center"><Check className="h-3 w-3 text-gold"/>{x}</li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-neutral-50 border border-black/5 rounded-lg">
              <p className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground leading-relaxed">
                "Fiatstyle Academy transformed my career. The technical depth is unmatched."
              </p>
              <p className="mt-2 text-[10px] font-bold text-gold uppercase tracking-widest">— Olu Adeyemi, Alumni</p>
            </div>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
}

function Row({l,v}:{l:string;v:string}){return(
  <div className="flex justify-between"><span className="text-muted-foreground">{l}</span><span>{v}</span></div>
);}
