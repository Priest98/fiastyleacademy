import PublicLayout from "@/components/layout/PublicLayout";
import { motion } from "framer-motion";
import cat1_1 from "@/assets/new/category1/cat1-1.jpg";
import cat1_2 from "@/assets/new/category1/cat1-2.jpg";
import cat1_3 from "@/assets/new/category1/cat1-3.jpg";
import cat1_4 from "@/assets/new/category1/cat1-4.jpg";
import cat2_1 from "@/assets/new/category2/cat2-1.jpg";
import cat2_2 from "@/assets/new/category2/cat2-2.jpg";
import cat3_1 from "@/assets/new/category3/cat3-1.jpg";
import cat3_2 from "@/assets/new/category3/cat3-2.jpg";
import cat4_1 from "@/assets/new/category4/cat4-1.jpg";
import cat5_1 from "@/assets/new/category5/cat5-1.jpg";
import cat5_2 from "@/assets/new/category5/cat5-2.jpg";
import cat5_3 from "@/assets/new/category5/cat5-3.jpg";

import FadeIn from "@/components/animations/FadeIn";

const gallery = [
  { title: "Signature Couture", artist: "Fiatstyle Graduate", image: cat1_1, category: "Advanced" },
  { title: "Structural Precision", artist: "Fiatstyle Graduate", image: cat1_2, category: "Pattern Making" },
  { title: "Master Corsetry", artist: "Fiatstyle Graduate", image: cat2_1, category: "Masterclass" },
  { title: "Traditional Elegance", artist: "Fiatstyle Graduate", image: cat1_3, category: "Traditional" },
  { title: "Design Detailing", artist: "Fiatstyle Graduate", image: cat3_1, category: "Tailoring" },
  { title: "Advanced Tailoring", artist: "Fiatstyle Graduate", image: cat5_1, category: "Couture" },
  { title: "Modern Silhouette", artist: "Fiatstyle Graduate", image: cat4_1, category: "Ready-to-Wear" },
  { title: "Artisan Craft", artist: "Fiatstyle Graduate", image: cat5_2, category: "Artisan" },
  { title: "Bridal Excellence", artist: "Fiatstyle Graduate", image: cat1_4, category: "Bridal" },
  { title: "Evening Glamour", artist: "Fiatstyle Graduate", image: cat2_2, category: "Couture" },
  { title: "Conceptual Design", artist: "Fiatstyle Graduate", image: cat3_2, category: "Portfolio" },
  { title: "Textile Mastery", artist: "Fiatstyle Graduate", image: cat5_3, category: "Fabric" },
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
