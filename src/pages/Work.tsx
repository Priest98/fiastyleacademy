import PublicLayout from "@/components/layout/PublicLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
import white1 from "@/assets/new/student-work/white.jpeg";
import barryWhite from "@/assets/new/student-work/barry-white.jpeg";
import jerryWhite from "@/assets/new/student-work/jerry-white.jpeg";
import FadeIn from "@/components/animations/FadeIn";

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: 8  },
  transition: { duration: 0.5, ease: easing, delay },
});

const categories = ["All", "Advanced", "Bridal", "Couture", "Tailoring", "Traditional", "Artisan", "Portfolio"];

const gallery = [
  { title: "Signature Couture",    artist: "Fiatstyle Graduate", image: cat1_1, category: "Advanced",      description: "A commanding silhouette engineered with precision-cut panels and bespoke embellishment." },
  { title: "Structural Precision", artist: "Fiatstyle Graduate", image: cat1_2, category: "Tailoring",     description: "A study in geometry and form — where every seam is a design decision." },
  { title: "Master Corsetry",      artist: "Fiatstyle Graduate", image: cat2_1, category: "Advanced",      description: "Heritage boning techniques reimagined in a sculptural, modern silhouette." },
  { title: "Traditional Elegance", artist: "Fiatstyle Graduate", image: cat1_3, category: "Traditional",   description: "A celebration of cultural identity woven into contemporary couture construction." },
  { title: "Design Detailing",     artist: "Fiatstyle Graduate", image: cat3_1, category: "Tailoring",     description: "Intricate surface detailing that elevates everyday tailoring into wearable art." },
  { title: "Advanced Tailoring",   artist: "Fiatstyle Graduate", image: cat5_1, category: "Couture",       description: "A full-length couture piece demonstrating mastery of drape, fit, and finish." },
  { title: "Modern Silhouette",    artist: "Fiatstyle Graduate", image: cat4_1, category: "Advanced",      description: "Clean, confident, and contemporary — designed for the global stage." },
  { title: "Artisan Craft",        artist: "Fiatstyle Graduate", image: cat5_2, category: "Artisan",       description: "Handcrafted detail work that reflects the patience and precision of true artisanship." },
  { title: "Bridal Excellence",    artist: "Fiatstyle Graduate", image: cat1_4, category: "Bridal",        description: "A breathtaking bridal creation — structured grandeur with ethereal grace." },
  { title: "Evening Glamour",      artist: "Fiatstyle Graduate", image: cat2_2, category: "Couture",       description: "Red-carpet-ready drama in every seam, designed for maximum visual impact." },
  { title: "Conceptual Design",    artist: "Fiatstyle Graduate", image: cat3_2, category: "Portfolio",     description: "A concept-led piece exploring the dialogue between form, identity, and craft." },
  { title: "Textile Mastery",      artist: "Fiatstyle Graduate", image: cat5_3, category: "Artisan",       description: "An exploration of fabric manipulation, texture, and tactile luxury." },
  { title: "White Collection",    artist: "Fiatstyle Graduate", image: white1, category: "Bridal",        description: "A masterclass in bridal elegance — where heritage craft meets modern vision." },
  { title: "Barry White Signature", artist: "Fiatstyle Graduate", image: barryWhite, category: "Bridal",  description: "Grandeur redefined. A breathtaking ball gown featuring intricate hand-beading." },
  { title: "Jerry White Couture",  artist: "Fiatstyle Graduate", image: jerryWhite, category: "Bridal",   description: "Couture precision meets ethereal grace in this signature bridal creation." },
];

// ── Individual Gallery Card ───────────────────────────────────────────────────
function GalleryCard({ item }: { item: typeof gallery[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const isRevealed = isHovered || isTapped;

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTap={() => setIsTapped(v => !v)}
    >
      {/* ── Image ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isRevealed ? 1.08 : 1 }}
        transition={{ duration: 0.9, ease: easing }}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Permanent bottom gradient for legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

      {/* ── Default Label (always visible, hides on reveal) ── */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            key="default"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-7 left-7 right-7"
          >
            <span className="label text-white/55 text-[9px] tracking-[0.35em] mb-2 block">
              {item.category}
            </span>
            <h3 className="font-display text-white text-xl md:text-2xl uppercase leading-tight">
              {item.title}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hover Reveal ── */}
      <AnimatePresence>
        {isRevealed && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/50"
            />

            {/* Staggered content */}
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
              {/* Category */}
              <motion.span key="cat" {...fadeUp(0)} className="label text-gold text-[9px] tracking-[0.4em] mb-3 block">
                {item.category}
              </motion.span>

              {/* Title */}
              <motion.h3 key="title" {...fadeUp(0.05)} className="font-display text-white text-2xl md:text-3xl uppercase leading-tight mb-3">
                {item.title}
              </motion.h3>

              {/* Artist */}
              <motion.p key="artist" {...fadeUp(0.12)} className="text-white/60 text-xs uppercase tracking-widest mb-4">
                {item.artist}
              </motion.p>

              {/* Description */}
              <motion.p key="desc" {...fadeUp(0.18)} className="text-white/70 font-light text-sm leading-relaxed mb-6 max-w-xs line-clamp-2">
                {item.description}
              </motion.p>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Work() {
  return (
    <PublicLayout>
      <div className="pt-24 md:pt-32">
        {/* ── Editorial Header ── */}
        <section className="editorial-container section-padding-lg">
          <FadeIn>
            <span className="label text-gold mb-6 block tracking-[0.35em]">Atelier</span>
            <h1 className="text-balance max-w-4xl">
              Student <span className="italic">Masterpieces</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-loose max-w-2xl">
              Each piece represents countless hours of dedication, precision, and creative vision. 
              Hover to explore the craftsmanship.
            </p>
          </FadeIn>
        </section>

        {/* ── Filter Bar ── */}
        <section className="editorial-container pb-12">
          <FadeIn direction="none">
            <div className="flex items-center gap-12 border-b border-black/8 pb-8">
              <div className="flex gap-10 overflow-x-auto no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`label text-[11px] tracking-[0.25em] uppercase pb-2 border-b-2 whitespace-nowrap transition-all duration-300
                      ${cat === "All"
                        ? "border-black text-black"
                        : "border-transparent text-muted-foreground hover:text-black hover:border-black/20"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Masonry Grid ── */}
        <section className="editorial-container pb-48">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.06}>
                <GalleryCard item={item} />
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
