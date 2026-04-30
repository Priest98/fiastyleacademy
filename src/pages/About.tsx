import PublicLayout from "@/components/layout/PublicLayout";
import galleryImage from "@/assets/gallery.png";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <PublicLayout>
      <section className="container pt-24 md:pt-40 pb-16 md:pb-24">
        <FadeIn className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-6 block font-medium">Our Legacy</span>
          <h1 className="font-display text-4xl md:text-8xl uppercase tracking-tighter mb-8 md:mb-12">
            The Pursuit of <br />
            <span className="italic">Excellence</span>
          </h1>
          <p className="text-lg md:text-2xl font-light leading-relaxed mb-12 md:mb-16 border-l-2 border-gold pl-6 md:pl-8">
            Fiastyle Fashion Academy was born from a singular vision: to restore the dignity of craftsmanship in an age of fast fashion. Based in Ilorin, we empower the next generation of global designers.
          </p>
        </FadeIn>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn direction="right">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={galleryImage} alt="Fashion Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" />
            </div>
          </FadeIn>
          <div className="space-y-10 md:space-y-12">
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl uppercase mb-6 italic">The Philosophy</h2>
                <p className="text-muted-foreground font-light leading-loose text-base md:text-lg">
                  We believe that every stitch tells a story. At Fiastyle Academy, we don't just teach you how to sew; we teach you how to see. Our online-first approach combines rigorous technical training with conceptual exploration, allowing our students to develop a truly unique creative voice from anywhere in the world.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl uppercase mb-6 italic">The Vision</h2>
                <p className="text-muted-foreground font-light leading-loose text-base md:text-lg">
                  Founded with a heartbeat for perfection, Fiastyle is the standard for modern couture education. Our curriculum, spanning 2026 intake and beyond, personalizes the development of each student, ensuring they are equipped with the precision and passion required for the world stage.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
          {[
            { label: "Online", sub: "Global Training Hub" },
            { label: "2026", sub: "Enrolling New Visionaries" },
            { label: "100%", sub: "Design Mastery Success" }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <span className="font-display text-5xl md:text-6xl block mb-4 italic">{item.label}</span>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-medium">{item.sub}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container py-24 md:py-40 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl uppercase mb-8">Ready to define your signature?</h2>
          <a href="/enroll" className="text-[10px] uppercase tracking-[0.5em] border-b-2 border-gold pb-2 hover:text-gold transition-all font-bold">
            Step Into Couture
          </a>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}
