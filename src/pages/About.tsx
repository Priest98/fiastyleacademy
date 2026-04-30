import PublicLayout from "@/components/layout/PublicLayout";
import draping from "@/assets/course-draping.jpg";

export default function About() {
  return (
    <PublicLayout>
      <section className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The House</p>
        <h1 className="font-display text-5xl md:text-8xl mt-4 max-w-4xl leading-[0.95]">A school built by designers, for designers.</h1>
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <img src={draping} alt="Atelier" className="rounded-2xl scanlines" loading="lazy" />
          <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
            <p>Atelier was founded in 2019 in a small studio in the 3rd arrondissement, frustrated by the gap between fashion school theory and the realities of a working atelier.</p>
            <p>Today we are a global, cohort-based institute pairing the discipline of haute couture with the access of digital learning. Our mentors come from Lemaire, Margiela, Loewe, The Row.</p>
            <p>We don't teach trends. We teach the craft underneath them.</p>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-4 gap-8">
          {[["12k+","Alumni"],["38","Mentors"],["6","Cities"],["94%","Completion"]].map(([n,l])=>(
            <div key={l} className="border-t hairline pt-6">
              <p className="font-display text-5xl">{n}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
