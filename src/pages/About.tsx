import PublicLayout from "@/components/layout/PublicLayout";
import galleryImage from "@/assets/gallery.png";
import FadeIn from "@/components/animations/FadeIn";

export default function About() {
  return (
    <PublicLayout>
      <section className="editorial-container section-padding-lg">
        <FadeIn className="max-w-4xl">
          <span className="label text-gold mb-6 block">Our Legacy</span>
          <h1 className="text-balance mb-8 md:mb-12">
            The Pursuit of <br />
            <span className="italic">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 md:mb-16 border-l-2 border-gold pl-6 md:pl-8">
            Fiatstyle Fashion Academy was born from a singular vision: to restore the dignity of craftsmanship in an age of fast fashion. Based in Ilorin, we empower the next generation of global designers.
          </p>
        </FadeIn>
      </section>

      <section className="editorial-container pb-32 md:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="right">
            <div className="aspect-portrait overflow-hidden shadow-luxury">
              <img src={galleryImage} alt="Fashion Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" />
            </div>
          </FadeIn>
          <div className="space-y-16">
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-2xl md:text-3xl uppercase mb-6 italic">The Philosophy</h2>
                <p className="text-muted-foreground font-light leading-loose text-lg">
                  We believe that every stitch tells a story. At Fiatstyle Academy, we don't just teach you how to sew; we teach you how to see. Our online-first approach combines rigorous technical training with conceptual exploration, allowing our students to develop a truly unique creative voice from anywhere in the world.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <div>
                <h2 className="text-2xl md:text-3xl uppercase mb-6 italic">The Vision</h2>
                <p className="text-muted-foreground font-light leading-loose text-lg">
                  Founded with a heartbeat for perfection, Fiatstyle is the standard for modern couture education. Our curriculum, spanning 2026 intake and beyond, personalizes the development of each student, ensuring they are equipped with the precision and passion required for the world stage.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 border-y border-black/5 py-32 md:py-48">
        <div className="editorial-container grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { label: "Online", sub: "Global Training Hub" },
            { label: "2026", sub: "Enrolling New Visionaries" },
            { label: "100%", sub: "Design Mastery Success" }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <span className="font-display text-6xl md:text-8xl block mb-4 italic text-gold">{item.label}</span>
              <p className="label opacity-60">{item.sub}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="editorial-container section-padding-lg text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl uppercase mb-12">Ready to define your signature?</h2>
          <a href="/enroll" className="btn-luxury-primary px-20 py-8 inline-flex">
            Step Into Couture
          </a>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}
