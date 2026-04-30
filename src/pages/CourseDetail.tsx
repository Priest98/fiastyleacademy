import PublicLayout from "@/components/layout/PublicLayout";
import { Link, useParams } from "react-router-dom";
import { courses } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Award, Users } from "lucide-react";

export default function CourseDetail() {
  const { slug } = useParams();
  const c = courses.find(x=>x.slug===slug) ?? courses[0];

  const curriculum = [
    { w:"Week 01", t:"Language of Cloth", l:["Material taxonomy","Hand vs. machine","Sketchbook ritual"] },
    { w:"Week 02", t:"The Croquis", l:["Anatomy proportion","Gesture lines","Three-quarter view"] },
    { w:"Week 03", t:"Color & Mood", l:["Seasonal palettes","Mood boarding","Pantone discipline"] },
    { w:"Week 04", t:"Pattern foundations", l:["Block drafting","Seam allowances","Notation"] },
    { w:"Week 05", t:"First muslin", l:["Fitting","Critique","Iteration"] },
    { w:"Week 06", t:"Final look", l:["Presentation","Look book","Self-review"] },
  ];

  return (
    <PublicLayout>
      <section className="container">
        <Link to="/courses" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">← All courses</Link>
        <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{c.category}</p>
            <h1 className="font-display text-5xl md:text-6xl mt-4">{c.title}</h1>
            <p className="mt-6 text-muted-foreground max-w-lg">A studio-led journey through {c.title.toLowerCase()}. Cohort-based, mentor-reviewed, portfolio-ready.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { i:Clock, t:c.duration, l:"Duration" },
                { i:Award, t:c.level, l:"Level" },
                { i:Users, t:`${c.seats ?? 20}`, l:"Seats left" },
              ].map(({i:Icon,t,l})=>(
                <div key={l} className="rounded-xl border hairline p-4">
                  <Icon className="h-4 w-4 text-gold" />
                  <p className="mt-3 font-display text-xl">{t}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Link to="/enroll" className="rounded-full bg-foreground text-background px-6 py-3.5 text-xs uppercase tracking-[0.2em]">Enroll — {c.price}</Link>
              <button className="rounded-full border hairline px-6 py-3.5 text-xs uppercase tracking-[0.2em]">Syllabus PDF</button>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden scanlines shadow-soft">
            <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-32">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What you'll leave with</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl">Six tangible outcomes.</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Personal design vocabulary","Portfolio of 6 looks","Technical pattern library","Mentor critique recordings","Atelier certificate","Alumni introductions"].map(o=>(
              <div key={o} className="rounded-xl border hairline p-6">
                <Check className="h-4 w-4 text-gold" />
                <p className="mt-3 font-display text-xl">{o}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mt-32 grid lg:grid-cols-3 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Curriculum</p>
            <h2 className="font-display text-4xl mt-3">Six weeks, eighteen lessons, one collection.</h2>
          </div>
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="border-t hairline">
              {curriculum.map((w,i)=>(
                <AccordionItem key={i} value={`w${i}`} className="border-b hairline">
                  <AccordionTrigger className="py-6">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-muted-foreground">{w.w}</span>
                      <span className="font-display text-2xl">{w.t}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-20 space-y-2 text-sm text-muted-foreground pb-4">
                      {w.l.map(x=><li key={x}>— {x}</li>)}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Instructor */}
        <div className="mt-32 rounded-3xl bg-surface p-10 md:p-16 grid md:grid-cols-[200px_1fr] gap-10 items-center scanlines">
          <div className="aspect-square rounded-full bg-foreground/10 grid place-items-center font-display text-5xl">CL</div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Lead instructor</p>
            <h3 className="font-display text-4xl mt-2">Claire Lavigne</h3>
            <p className="mt-4 text-muted-foreground max-w-xl">Former senior designer at Lemaire and Lanvin. Fifteen years in the Paris ateliers, now teaching the next generation.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-32">
          <h2 className="font-display text-4xl md:text-5xl">Questions, answered.</h2>
          <Accordion type="single" collapsible className="mt-10 border-t hairline">
            {[
              ["Do I need prior experience?","No. Foundation courses assume zero background — only curiosity."],
              ["Is there a physical component?","Yes. We ship a starter kit (paper, muslin, marker) to your door."],
              ["What's the time commitment?","Plan 6–10 hours per week, including live critique."],
              ["Refund policy?","Full refund within 14 days, no questions."],
            ].map(([q,a],i)=>(
              <AccordionItem key={i} value={`f${i}`} className="border-b hairline">
                <AccordionTrigger className="py-5 text-left font-display text-xl">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PublicLayout>
  );
}
