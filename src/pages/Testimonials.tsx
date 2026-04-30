import PublicLayout from "@/components/layout/PublicLayout";
import { Quote, Star } from "lucide-react";

const items = [
  { n:"Yuki Tanaka", c:"Tokyo · '24", q:"Felt like an apprenticeship at Margiela. The critique was brutal, generous, real." },
  { n:"Amina Kessler", c:"Berlin · '24", q:"Six months in I had a capsule stocked at a Paris concept store." },
  { n:"Léo Marchetti", c:"Milan · '23", q:"The Maison tier paid for itself the day I met my first showroom." },
  { n:"Priya Shah", c:"Mumbai · '24", q:"I came in sketching jeans. I left with a runway-ready collection." },
  { n:"Olu Adeyemi", c:"Lagos · '23", q:"The textile module rewired how I sourced fabric. Game over." },
  { n:"Mira Hoffman", c:"NYC · '24", q:"Best money I've spent on education, full stop." },
];

export default function Testimonials() {
  return (
    <PublicLayout>
      <section className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">In their words</p>
        <h1 className="font-display text-5xl md:text-7xl mt-4">Voices of the house.</h1>

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map(t=>(
            <div key={t.n} className="break-inside-avoid mb-6 rounded-2xl border hairline p-6 bg-card glitch-hover" data-text={t.q}>
              <Quote className="h-5 w-5 text-gold" />
              <p className="font-display text-xl mt-4 leading-snug">{t.q}</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm">{t.n}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.c}</p>
                </div>
                <div className="flex gap-0.5 text-gold">{[...Array(5)].map((_,i)=><Star key={i} className="h-3 w-3 fill-current"/>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
