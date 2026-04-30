import PublicLayout from "@/components/layout/PublicLayout";
import { motion } from "framer-motion";
import a1 from "@/assets/student-work/a1.jpeg";
import a2 from "@/assets/student-work/a2.jpeg";
import a3 from "@/assets/student-work/a3.jpeg";
import w1 from "@/assets/student-work/IMG_4927.JPG.jpeg";
import w2 from "@/assets/student-work/IMG_4928.JPG.jpeg";
import w3 from "@/assets/student-work/IMG_4933.JPG.jpeg";
import w4 from "@/assets/student-work/IMG_4934.JPG.jpeg";
import w5 from "@/assets/student-work/IMG_4935.JPG.jpeg";
import w6 from "@/assets/student-work/IMG_4936.JPG.jpeg";

import FadeIn from "@/components/animations/FadeIn";

const gallery = [
  { title: "Signature Couture", artist: "Fiastyle Graduate", image: a1 },
  { title: "Structural Precision", artist: "Fiastyle Graduate", image: a2 },
  { title: "Master Corsetry", artist: "Fiastyle Graduate", image: a3 },
  { title: "Asoebi Mastery", artist: "Fiastyle Graduate", image: w1 },
  { title: "Design Detailing", artist: "Fiastyle Graduate", image: w2 },
  { title: "Advanced Tailoring", artist: "Fiastyle Graduate", image: w3 },
  { title: "The Modern Silhouette", artist: "Fiastyle Graduate", image: w4 },
  { title: "Couture Craftsmanship", artist: "Fiastyle Graduate", image: w5 },
  { title: "Bridal Excellence", artist: "Fiastyle Graduate", image: w6 },
];

export default function Work() {
  return (
    <PublicLayout>
      <section className="container pt-40 pb-24 text-center">
        <FadeIn>
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6 block font-bold">Student Showcase</span>
          <h1 className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-10">
            The <span className="italic">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            A curation of exceptional works from our graduating designers. 
            Each piece represents months of technical mastery and creative vision.
          </p>
        </FadeIn>
      </section>

      <section className="container pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5">
          {gallery.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} direction="up">
              <motion.div
                className="bg-white p-8 group relative overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-neutral-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-display text-xl uppercase mb-1">{item.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{item.artist}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 text-gold" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container py-40 border-t border-black/5 text-center">
        <FadeIn>
          <h2 className="font-display text-4xl uppercase mb-8">Inspired by our students?</h2>
          <a href="/enroll" className="btn-luxury-primary inline-flex">
            Step Into Couture
          </a>
        </FadeIn>
      </section>
    </PublicLayout>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
