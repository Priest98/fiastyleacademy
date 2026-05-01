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
  { title: "Signature Couture", artist: "Fiatstyle Graduate", image: a1, category: "Advanced" },
  { title: "Structural Precision", artist: "Fiatstyle Graduate", image: a2, category: "Pattern Making" },
  { title: "Master Corsetry", artist: "Fiatstyle Graduate", image: a3, category: "Masterclass" },
  { title: "Asoebi Mastery", artist: "Fiatstyle Graduate", image: w1, category: "Traditional" },
  { title: "Design Detailing", artist: "Fiatstyle Graduate", image: w2, category: "Tailoring" },
  { title: "Advanced Tailoring", artist: "Fiatstyle Graduate", image: w3, category: "Couture" },
  { title: "The Modern Silhouette", artist: "Fiatstyle Graduate", image: w4, category: "Ready-to-Wear" },
  { title: "Couture Craftsmanship", artist: "Fiatstyle Graduate", image: w5, category: "Artisan" },
  { title: "Bridal Excellence", artist: "Fiatstyle Graduate", image: w6, category: "Bridal" },
];

export default function Work() {
  return (
    <PublicLayout>
      <section className="editorial-container section-padding-lg">
        <FadeIn className="text-center">
          <span className="label text-gold mb-6 block">Student Showcase</span>
          <h1 className="text-balance mb-10">
            The <span className="italic text-gold">Gallery</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed text-lg">
            A curation of exceptional works from our graduating designers. 
            Each piece represents months of technical mastery and creative vision.
          </p>
        </FadeIn>
      </section>

      <section className="editorial-container pb-32 md:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {gallery.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} direction="up">
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="aspect-portrait overflow-hidden mb-6 relative bg-neutral-100 shadow-soft">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="label text-[9px] text-gold mb-2 block">{item.category}</span>
                    <h3 className="text-xl uppercase mb-1 group-hover:italic transition-all">{item.title}</h3>
                    <p className="label opacity-40 text-[10px]">{item.artist}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 text-gold" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="editorial-container section-padding-lg border-t border-black/5 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl uppercase mb-12">Inspired by our students?</h2>
          <a href="/enroll" className="btn-luxury-primary px-20 py-8 inline-flex">
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
