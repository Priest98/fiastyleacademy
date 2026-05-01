import PublicLayout from "@/components/layout/PublicLayout";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Star, Quote } from "lucide-react";
import { useRef, useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import homeHero from "@/assets/new/homepage/home1.jpg";
import cat1_1 from "@/assets/new/category1/cat1-1.jpg";
import cat1_2 from "@/assets/new/category1/cat1-2.jpg";
import cat1_12 from "@/assets/new/category1/cat1-12.jpg";
import cat1_3 from "@/assets/new/category1/cat1-3.jpg";
import cat1_5 from "@/assets/new/category1/cat1-5.jpg";
import cat2_1 from "@/assets/new/category2/cat2-1.jpg";
import cat2_2 from "@/assets/new/category2/cat2-2.jpg";
import cat2_5 from "@/assets/new/category2/cat2-5.jpg";
import cat3_1 from "@/assets/new/category3/cat3-1.jpg";
import cat3_2 from "@/assets/new/category3/cat3-2.jpg";
import cat4_1 from "@/assets/new/category4/cat4-1.jpg";
import cat4_2 from "@/assets/new/category4/cat4-2.jpg";
import cat5_1 from "@/assets/new/category5/cat5-1.jpg";
import cat5_8 from "@/assets/new/category5/cat5-8.jpg";
import fabricImage from "@/assets/fabric.png";

export default function Index() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <PublicLayout>
      <div ref={containerRef} className="relative">
        {/* HERO SECTION: Immersive & Bold */}
        <section className="relative h-screen flex items-center overflow-hidden bg-black">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={homeHero} 
              alt="Fiatstyle Editorial" 
              className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-[2000ms]" 
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>

          <div className="editorial-container relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <span className="label text-gold mb-6 block fade-up" style={{ animationDelay: '0.2s' }}>
                Fiatstyle Fashion Academy · 2026 Intake
              </span>
              <h1 className="text-white text-balance mb-10 fade-up" style={{ animationDelay: '0.4s' }}>
                Master the Art of <br />
                <span className="italic text-gold">High-End Couture</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-xl fade-up" style={{ animationDelay: '0.6s' }}>
                The definitive online academy for the next generation of global fashion designers. Transform your creative vision into a professional career in 90 days.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-6 fade-up" style={{ animationDelay: '0.8s' }}>
                <a href="/enroll" className="btn-luxury-primary px-16 py-6 group">
                  Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </a>
                <a href="/courses" className="btn-luxury-secondary text-white border-white/20 hover:border-white px-16 py-6">
                  Explore Programs
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-px h-20 bg-gradient-to-b from-gold to-transparent animate-pulse" />
          </motion.div>
        </section>

        {/* TRANSFORMATION LOOKBOOK: Editorial Showcase */}
        <section className="bg-black text-white">
          {/* Section Header */}
          <div className="editorial-container section-padding-lg">
            <FadeIn>
              <div className="max-w-4xl">
                <span className="label text-gold mb-6 block tracking-[0.35em]">The Transformation</span>
                <h1 className="text-4xl md:text-6xl uppercase leading-none tracking-tight">
                  Created by our <br />
                  <span className="italic text-gold">Elite Graduates</span>
                </h1>
              </div>
            </FadeIn>
          </div>

          {/* Lookbook Grid */}
          <div className="editorial-container -mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  image: cat1_5,
                  title: "Signature Couture",
                  student: "By Adebimbo A.",
                  description: "Master-level construction with precision-cut panels and hand-applied embellishment.",
                  program: "Advanced Class '25"
                },
                {
                  image: cat4_2,
                  title: "Structural Precision",
                  student: "By Chiamaka E.",
                  description: "Geometric mastery in tailored suiting — where every seam is a design decision.",
                  program: "Intermediate Class '25"
                },
                {
                  image: cat2_5,
                  title: "Master Corsetry",
                  student: "By Fatima O.",
                  description: "Heritage boning techniques reimagined in a sculptural, modern silhouette.",
                  program: "Corsetry Masterclass '25"
                },
                {
                  image: cat3_1,
                  title: "Luxury Finishing",
                  student: "By Ngozi E.",
                  description: "Intricate surface detailing that elevates tailoring into wearable art.",
                  program: "Advanced Class '25"
                },
                {
                  image: cat4_1,
                  title: "Modern Silhouette",
                  student: "By Adaora N.",
                  description: "Clean, confident, and contemporary — designed for the global stage.",
                  program: "Intermediate Class '25"
                },
                {
                  image: cat5_1,
                  title: "Fabric Mastery",
                  student: "By Funke A.",
                  description: "Advanced textile manipulation and surface manipulation techniques.",
                  program: "Professional Class '25"
                },
                {
                  image: cat1_12,
                  title: "Bridal Excellence",
                  student: "By Bolatito D.",
                  description: "Structured grandeur with ethereal grace — bridal couture at its finest.",
                  program: "Advanced Class '25"
                },
                {
                  image: cat3_2,
                  title: "Design Mastery",
                  student: "By Ifeoma K.",
                  description: "Concept-led exploration of form, identity, and craft in contemporary fashion.",
                  program: "Portfolio Development '25"
                },
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.06}>
                  <LookbookItem item={item} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND POSITIONING: Core Pillars */}
        <section className="section-padding-lg bg-black text-white relative texture-grain">
          <div className="absolute inset-0 opacity-10">
            <img src={fabricImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="editorial-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn direction="right">
                <h2 className="text-white text-balance leading-tight">
                  The Gold Standard <br />
                  <span className="italic text-gold">in Fashion Education</span>
                </h2>
                <p className="mt-8 text-neutral-400 text-lg font-light leading-relaxed max-w-lg">
                  Fiatstyle Academy was born to restore the dignity of craftsmanship. We don't just teach you how to sew; we teach you how to see.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-12">
                  <Pillar title="Skill" desc="Master technical precision" />
                  <Pillar title="Vision" desc="Cultivate creative voice" />
                  <Pillar title="Prestige" desc="Join elite alum community" />
                  <Pillar title="Results" desc="Global career readiness" />
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.2}>
                <div className="aspect-portrait relative overflow-hidden group">
                  <img src={cat5_8} alt="Workshop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PROGRAMS: Premium Offerings */}
        <section className="section-padding-lg bg-neutral-50">
          <div className="editorial-container">
            <FadeIn>
              <div className="text-center mb-24">
                <span className="label text-gold mb-4 block">Our Curriculum</span>
                <h2 className="text-balance uppercase tracking-tight">Elite <span className="italic">Programs</span></h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 shadow-luxury">
              <ProgramCard 
                image={cat1_1}
                title="Intermediate"
                duration="90 Days"
                level="Level 01"
                outcome="Professional Foundation"
                price="₦85,000"
              />
              <ProgramCard 
                image={cat2_2}
                title="Advanced Couture"
                duration="90 Days"
                level="Level 02"
                outcome="Master Tailoring"
                price="₦120,000"
              />
              <ProgramCard 
                image={cat3_1}
                title="Corsetry Mastery"
                duration="30 Days"
                level="Specialist"
                outcome="Bespoke Skills"
                price="₦45,000"
              />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS: Minimal & Elegant */}
        <section className="section-padding-lg bg-white border-y border-black/5">
          <div className="editorial-container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <FadeIn>
                <span className="label text-gold mb-4 block">Testimonials</span>
                <h2 className="text-balance">Success <span className="italic">Stories</span></h2>
              </FadeIn>
              <div className="flex gap-4">
                <div className="h-14 w-14 rounded-full border border-black/5 flex items-center justify-center bg-neutral-50">
                  <Quote className="h-6 w-6 text-gold opacity-40" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TestimonialCard 
                quote="The technical depth is unmatched. I left with a runway-ready collection." 
                author="Olu Adeyemi" 
                location="Lagos · '23"
              />
              <TestimonialCard 
                quote="Six months in and I had already secured my first global concept store listing." 
                author="Amina Kessler" 
                location="Berlin · '24"
              />
              <TestimonialCard 
                quote="The textile module rewired how I source and see fabric. Simply game-changing." 
                author="Priya Shah" 
                location="Mumbai · '24"
              />
              <TestimonialCard 
                quote="Best money I've spent on my career. The mentors are world-class." 
                author="Mira Hoffman" 
                location="NYC · '24"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA: High Impact */}
        <section className="section-padding-xl bg-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-black/10 to-transparent" />
          
          <div className="editorial-container relative z-10">
            <FadeIn>
              <span className="label text-gold mb-10 block font-bold">+234 813 204 9363</span>
              <h2 className="text-5xl md:text-[8rem] uppercase leading-[0.9] tracking-tighter mb-12">
                Transform Your <br />
                <span className="italic text-gold">Signature</span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-16 text-xl font-light">
                Join the elite cohort of designers redefining modern couture. Limited seats remaining for the 2026 intake.
              </p>
              <div className="flex flex-col items-center gap-8">
                <a href="/enroll" className="btn-luxury-primary px-24 py-8 text-sm group hover:scale-105 transition-transform">
                  Apply Now — Secure Your Spot
                </a>
                <p className="label text-muted-foreground flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
                  Only 4 Slots Remaining for May
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}

function Pillar({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-gold font-display text-2xl italic">{title}</h4>
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">{desc}</p>
    </div>
  );
}

function ProgramCard({ image, title, duration, level, outcome, price }: { image: string, title: string, duration: string, level: string, outcome: string, price: string }) {
  return (
    <FadeIn direction="none">
      <div className="bg-white p-12 group relative h-full flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-700">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">{level}</span>
            <span className="font-mono text-xs text-gold">{price}</span>
          </div>
          <h3 className="text-3xl lg:text-4xl uppercase mb-8 group-hover:italic transition-all duration-700 leading-tight">
            {title}
          </h3>
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] opacity-60">
              <div className="h-1 w-1 rounded-full bg-gold" /> {duration} Professional Training
            </li>
            <li className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] opacity-60">
              <div className="h-1 w-1 rounded-full bg-gold" /> {outcome}
            </li>
          </ul>
        </div>
        <a href="/enroll" className="relative z-10 group-hover:text-gold flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 group-hover:border-gold pb-2 transition-all">
          Enquire <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
        </a>
      </div>
    </FadeIn>
  );
}

// ── Lookbook Item (Transformation Showcase) ───────────────────────────────────
function LookbookItem({ item }: { 
  item: {
    image: string;
    title: string;
    student: string;
    description: string;
    program: string;
  }
}) {
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
      {/* Full-bleed image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isRevealed ? 1.08 : 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none transition-opacity duration-500"
           style={{ opacity: isRevealed ? 1 : 0.5 }} />

      {/* Default label */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 right-6"
          >
            <p className="label text-white/40 text-[8px] tracking-[0.3em] uppercase mb-2">
              {item.program}
            </p>
            <h3 className="font-display text-white text-xl md:text-2xl uppercase leading-tight">
              {item.title}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Revealed overlay content */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
          >
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              {/* Title */}
              <motion.h3
                key="title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                className="font-display text-white text-2xl md:text-3xl uppercase leading-tight mb-2"
              >
                {item.title}
              </motion.h3>

              {/* Student */}
              <motion.p
                key="student"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="text-white/60 text-sm uppercase tracking-widest mb-4"
              >
                {item.student}
              </motion.p>

              {/* Description */}
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                className="text-white/80 font-light text-sm leading-relaxed mb-6 max-w-sm line-clamp-2"
              >
                {item.description}
              </motion.p>

              {/* CTA */}
              <motion.a
                key="cta"
                href="/work"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                className="group/lookup inline-flex items-center gap-3 text-white/90 text-[11px] uppercase tracking-[0.25em] hover:text-gold transition-colors w-fit"
              >
                View Details
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, location }: { quote: string, author: string, location: string }) {
  return (
    <FadeIn direction="up">
      <div className="p-8 border border-black/5 hover:border-gold/30 transition-all duration-500 group h-full flex flex-col justify-between">
        <div>
          <div className="flex gap-1 text-gold mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-2 w-2 fill-current" />)}
          </div>
          <p className="font-display text-xl mb-10 leading-snug text-balance">"{quote}"</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest">{author}</p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-gold mt-1">{location}</p>
        </div>
      </div>
    </FadeIn>
  );
}
