import PublicLayout from "@/components/layout/PublicLayout";
import { Check, Minus } from "lucide-react";

const tiers = [
  { t:"Studio", p:"€39", per:"/month", desc:"For the curious. Sample the craft.", cta:"Start", featured:false },
  { t:"Academy", p:"€129", per:"/month", desc:"For the serious. Build your capsule.", cta:"Most chosen", featured:true },
  { t:"Master", p:"€2,400", per:"/season", desc:"For the founders. Launch your label.", cta:"Apply", featured:false },
];

const features = [
  ["Course library access","Limited","All","All"],
  ["Live workshops","—","Weekly","Weekly + private"],
  ["Mentor critique","—","Monthly","Unlimited"],
  ["Capsule build review","—","✓","✓"],
  ["1:1 mentorship hours","—","2/mo","Unlimited"],
  ["Showroom + press intro","—","—","✓"],
  ["Runway slot","—","—","✓"],
];

export default function Pricing() {
  return (
    <PublicLayout>
      <section className="container text-center pt-24">
        <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">Investment</p>
        <h1 className="font-display text-5xl md:text-7xl mt-4 uppercase">Choose your <span className="italic">Path</span></h1>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground font-light">Three paths into the academy. Move between them at any time. Cancel whenever.</p>
      </section>

      <section className="container mt-16 grid md:grid-cols-3 gap-6">
        {tiers.map(p=>(
          <div key={p.t} className={`rounded-2xl p-8 border ${p.featured?"bg-foreground text-background border-foreground shadow-gold":"bg-card hairline"}`}>
            <p className={`text-xs uppercase tracking-[0.25em] ${p.featured?"text-gold":"text-muted-foreground"}`}>{p.t}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="font-display text-6xl">{p.p}</span>
              <span className={`pb-3 text-sm ${p.featured?"text-background/60":"text-muted-foreground"}`}>{p.per}</span>
            </div>
            <p className={`mt-3 text-sm ${p.featured?"text-background/70":"text-muted-foreground"}`}>{p.desc}</p>
            <button className={`mt-8 w-full rounded-full py-3.5 text-xs uppercase tracking-[0.2em] ${p.featured?"bg-gold text-foreground":"bg-foreground text-background"}`}>{p.cta}</button>
          </div>
        ))}
      </section>

      <section className="container mt-24">
        <h2 className="font-display text-3xl mb-6">Compare in detail.</h2>
        <div className="overflow-x-auto rounded-2xl border hairline">
          <table className="w-full text-sm">
            <thead className="bg-surface">
              <tr className="text-left">
                <th className="p-5 font-medium text-xs uppercase tracking-[0.2em] text-muted-foreground">Feature</th>
                {tiers.map(t=><th key={t.t} className="p-5 font-display text-lg">{t.t}</th>)}
              </tr>
            </thead>
            <tbody>
              {features.map((row,i)=>(
                <tr key={i} className="border-t hairline">
                  <td className="p-5">{row[0]}</td>
                  {row.slice(1).map((c,j)=>(
                    <td key={j} className="p-5 text-muted-foreground">
                      {c==="—" ? <Minus className="h-4 w-4 opacity-40"/> : c==="✓" ? <Check className="h-4 w-4 text-gold"/> : c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PublicLayout>
  );
}
