import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import Marquee from "@/components/marketing/Marquee";
import CourseCard from "@/components/marketing/CourseCard";
import { courses } from "@/data/courses";
import hero from "@/assets/hero-fashion.jpg";

export default function Index() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 items-end pt-6 lg:pt-12">
          <div className="lg:col-span-7 fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Est. 2019 — Paris · Milan · Online
            </p>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tighter">
              The new<br/>
              <em className="not-italic text-gold">school</em> of<br/>
              fashion.
            </h1>
            <p className="mt-8 max-w-md text-base text-muted-foreground">
              An on-demand digital institute for designers who refuse the ordinary.
              Learn from couture houses, build your first collection, launch a label.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/enroll" className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-4 text-sm uppercase tracking-[0.2em]">
                Enroll now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/courses" className="inline-flex items-center gap-3 rounded-full border hairline px-6 py-4 text-sm uppercase tracking-[0.2em]">
                Browse courses
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span><b className="font-display text-2xl text-foreground block">12k+</b> Students</span>
              <span className="h-8 w-px bg-border" />
              <span><b className="font-display text-2xl text-foreground block">94%</b> Completion</span>
              <span className="h-8 w-px bg-border" />
              <span><b className="font-display text-2xl text-foreground block">38</b> Couture mentors</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] scanlines shadow-soft">
              <img src={hero} alt="Atelier mannequin" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Now enrolling</p>
                <p className="font-display text-xl mt-1">Spring Cohort · Only 24 seats</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 hidden lg:block glass rounded-2xl p-4 w-48 fade-up">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">"Felt like an apprenticeship at Margiela." — Yuki, Tokyo</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-24"><Marquee /></div>

      {/* PROGRAMS */}
      <section className="container mt-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">01 — Programs</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Curriculum, refined.</h2>
          </div>
          <Link to="/courses" className="text-xs uppercase tracking-[0.2em] underline-offset-4 hover:underline">All courses →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0,3).map(c => <CourseCard key={c.slug} c={c} />)}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 — Method</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl">Three seasons. One designer. You.</h2>
        <div className="grid md:grid-cols-3 gap-px mt-12 bg-border rounded-2xl overflow-hidden">
          {[
            { n:"I", t:"Foundation", d:"Master illustration, anatomy, color theory and the language of cloth." },
            { n:"II", t:"Atelier", d:"Drape, cut, sew. Build a 6-piece capsule under couture mentorship." },
            { n:"III", t:"Runway", d:"Brand, photograph, present. Launch your label to a juried audience." },
          ].map(s=>(
            <div key={s.n} className="bg-background p-8 md:p-10">
              <div className="font-display text-6xl text-gold">{s.n}</div>
              <h3 className="font-display text-2xl mt-6">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container mt-32">
        <div className="relative rounded-3xl gradient-ink text-background p-10 md:p-20 overflow-hidden grain">
          <Quote className="h-10 w-10 text-gold mb-6" />
          <blockquote className="font-display text-3xl md:text-5xl leading-tight max-w-4xl">
            "Atelier rebuilt how I think about clothes. Six months in I had a capsule
            stocked at a Paris concept store."
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gold/40" />
            <div>
              <p className="text-sm">Amina Kessler</p>
              <p className="text-xs uppercase tracking-[0.2em] text-background/60">Founder, MAISON-K · Class of '24</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="container mt-32">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">03 — Investment</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Choose your house.</h2>
          </div>
          <Link to="/pricing" className="text-xs uppercase tracking-[0.2em]">Compare plans →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t:"Atelier", p:"€39", per:"/mo", f:["3 courses/mo","Community","Resource library"], cta:"Start" },
            { t:"Couture", p:"€129", per:"/mo", f:["All courses","Mentor reviews","Live workshops","Capsule build"], cta:"Most chosen", featured:true },
            { t:"Maison", p:"€2,400", per:"/season", f:["1:1 mentorship","Showroom access","Press introductions","Runway slot"], cta:"Apply" },
          ].map(p=>(
            <div key={p.t} className={`rounded-2xl p-8 border ${p.featured?"bg-foreground text-background border-foreground":"bg-card hairline"}`}>
              <p className={`text-xs uppercase tracking-[0.25em] ${p.featured?"text-gold":"text-muted-foreground"}`}>{p.t}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl">{p.p}</span>
                <span className={`text-sm pb-2 ${p.featured?"text-background/60":"text-muted-foreground"}`}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {p.f.map(x=><li key={x} className="flex gap-2"><span className="text-gold">—</span>{x}</li>)}
              </ul>
              <button className={`mt-8 w-full rounded-full py-3 text-xs uppercase tracking-[0.2em] ${p.featured?"bg-gold text-foreground":"border hairline"}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mt-32">
        <div className="rounded-3xl border hairline p-10 md:p-20 text-center bg-surface scanlines relative">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Spring cohort closes April 30</p>
          <h2 className="font-display text-5xl md:text-7xl mt-4">Your collection,<br/><em className="not-italic text-gold">this year.</em></h2>
          <Link to="/enroll" className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.2em]">
            Reserve your seat <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
