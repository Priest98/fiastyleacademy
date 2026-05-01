import PublicLayout from "@/components/layout/PublicLayout";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef, useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import a1 from "@/assets/student-work/a1.jpeg";
import a2 from "@/assets/student-work/a2.jpeg";
import a3 from "@/assets/student-work/a3.jpeg";
import w1 from "@/assets/student-work/IMG_4927.JPG.jpeg";
import w2 from "@/assets/student-work/IMG_4928.JPG.jpeg";
import w3 from "@/assets/student-work/IMG_4933.JPG.jpeg";
import fabricImage from "@/assets/fabric.png";
import { Quote, Star } from "lucide-react";

export default function Index() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const curriculum = [
    "Body Measurements",
    "Introduction to Pattern Making",
    "Sewing Techniques",
    "Corsetry (All Types)",
    "Ready-to-Wear Fashion Design",
    "Asoebi Styling",
    "Hip Padding Techniques",
    "Waist Snatching Techniques",
    "Advanced tailoring methods"
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden texture-fabric">
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <img src={a1} alt="Couture Detail" className="w-full h-full object-cover opacity-60" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
        </motion.div>

        <div className="container relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: textY }}
            className="max-w-4xl"
          >
            <span className="label text-muted-foreground mb-8 block">2026 Intake · Online Academy · Ilorin</span>
            <h1 className="mb-12">
              Become a Professional <br className="hidden sm:block" />
              <span className="italic">Fashion Designer in 90 Days</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-12 text-muted-foreground max-w-2xl">
              Premium online fashion training for the next generation of couture designers. Join our 2026 intake and transform your creative vision into a professional career.
            </p>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
              <a href="/enroll" className="btn-luxury-primary px-12 py-6">
                Apply for 2026 Cohort
              </a>
              <a href="/courses" className="btn-luxury-secondary px-12 py-6">
                Explore Programs
              </a>
            </div>
            <p className="mt-8 label text-gold animate-pulse">
              Limited seats remaining for May intake
            </p>
          </motion.div>
        </div>
      </section>

       {/* TRANSFORMATION LOOKBOOK: Editorial Showcase */}
       <section className="bg-black text-white">
         {/* Section Header */}
         <div className="container section-padding-lg">
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
         <div className="container -mt-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
             {[
               {
                 image: a1,
                 title: "Signature Couture",
                 description: "Master-level construction with precision-cut panels and hand-applied embellishment.",
                 program: "Advanced Class '25"
               },
               {
                 image: w1,
                 title: "Asoebi Mastery",
                 description: "Traditional elegance meets modern tailoring in communal celebration wear.",
                 program: "Professional Class '25"
               },
               {
                 image: a3,
                 title: "Master Corsetry",
                 description: "Heritage boning techniques reimagined in a sculptural, modern silhouette.",
                 program: "Corsetry Masterclass '25"
               },
               {
                 image: w2,
                 title: "Structural Tailoring",
                 description: "Geometric mastery in tailored suiting — where every seam is a design decision.",
                 program: "Intermediate Class '25"
               },
               {
                 image: a2,
                 title: "Modern Silhouette",
                 description: "Clean, confident, and contemporary — designed for the global stage.",
                 program: "Intermediate Class '25"
               },
               {
                 image: w3,
                 title: "Fabric Innovation",
                 description: "Advanced textile manipulation and Surface manipulation techniques.",
                 program: "Professional Class '25"
               },
             ].map((item, i) => (
               <FadeIn key={i} direction="up" delay={i * 0.06}>
                 <LookbookItem item={item} />
               </FadeIn>
             ))}
           </div>
         </div>
       </section>

      {/* Brand Introduction Section */}
      <section className="py-40 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a2} alt="Fiastyle Academy" className="w-full h-full object-cover hover:scale-105 transition-all duration-1000" loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-10 lg:pl-12">
                <span className="label text-gold">The Delivery</span>
                <h2 className="leading-tight">
                  Global Learning <br />
                  <span className="italic">Local Mastery</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light">
                  All classes are conducted online via WhatsApp and Telegram, allowing flexible learning access from anywhere. We provide structured professional fashion training and skill development directly to your device.
                </p>
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-6">
                  <div>
                    <p className="label text-gold mb-2">Registration Start</p>
                    <h3 className="uppercase">April 5</h3>
                  </div>
                  <div>
                    <p className="label text-gold mb-2">Class Commences</p>
                    <h3 className="uppercase">May 4</h3>
                  </div>
                </div>
                <a href="/about" className="group inline-flex items-center gap-4 label border-b border-gold pb-2 hover:text-gold transition-colors">
                  Our Heritage — Meet the House <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Curriculum Grid Section */}
      <section className="relative section-spacing overflow-hidden texture-grain bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={fabricImage} alt="Fabric Texture" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <div className="text-left mb-16 md:mb-24">
              <span className="label text-gold mb-8 block">The Curriculum</span>
              <h2 className="italic md:not-italic md:uppercase">Structured <span className="md:italic">Excellence</span></h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 element-spacing">
            {curriculum.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 group">
                  <div className="h-6 w-6 rounded-full border border-gold/30 flex items-center justify-center mt-1 group-hover:bg-gold transition-all duration-500">
                    <Check className="h-3 w-3 text-gold group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm uppercase tracking-[0.2em] font-light leading-relaxed group-hover:text-gold transition-colors duration-500">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Student Work Showcase */}
      <section className="section-spacing bg-neutral-50">
        <div className="container">
          <FadeIn>
            <div className="text-left mb-24">
              <span className="label text-gold mb-6 block">The Transformation</span>
              <h2 className="tracking-tighter">
                Student <span className="italic">Excellence</span>
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: a1, title: "Signature Couture", desc: "Advanced pattern making and structural design." },
              { img: w1, title: "Asoebi Mastery", desc: "Traditional elegance meets modern tailoring." },
              { img: a3, title: "Master Corsetry", desc: "Technical precision in bespoke corsetry." }
            ].map((work, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-200 mb-6">
                    <img src={work.img} alt={work.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display text-2xl uppercase mb-2">{work.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{work.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a href="/work" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] border-b border-gold pb-2 hover:text-gold transition-colors font-medium">
              View Full Gallery <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-black text-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-24 items-center">
            <div>
              <span className="label text-gold mb-8 block">Success Stories</span>
              <h2 className="mb-8">
                In Their <br />
                <span className="italic text-gold">Own Words</span>
              </h2>
              <p className="text-lg text-neutral-400 font-light mb-12">
                Join a community of designers who have transformed their passion into a professional career.
              </p>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full border border-gold/30 flex items-center justify-center">
                  <Quote className="h-5 w-5 text-gold" />
                </div>
                <div className="flex -space-x-4">
                  {[a1, a2, a3].map((img, i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-black overflow-hidden bg-neutral-800">
                      <img src={img} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { n: "Olu Adeyemi", c: "Lagos · '23", q: "The textile module rewired how I sourced fabric. Game over." },
                { n: "Amina Kessler", c: "Berlin · '24", q: "Six months in I had a capsule stocked at a Paris concept store." },
                { n: "Priya Shah", c: "Mumbai · '24", q: "I came in sketching jeans. I left with a runway-ready collection." },
                { n: "Mira Hoffman", c: "NYC · '24", q: "Best money I've spent on education, full stop." }
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex gap-1 text-gold mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                    </div>
                    <p className="font-display text-xl mb-6 leading-snug">"{t.q}"</p>
                    <div>
                      <p className="text-sm font-medium">{t.n}</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{t.c}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information Grid Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-left mb-24">
            <span className="label text-gold mb-6 block">Our Programs</span>
            <h2 className="tracking-tighter">
              Elite <span className="italic">Curriculum</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
            <InfoCard 
              image={w1}
              title="3 Month Intermediate"
              subtitle="Professional training"
              link="/courses"
              delay={0}
            />
            <InfoCard 
              image={a3}
              title="3 Month Advanced"
              subtitle="Couture mastery"
              link="/courses"
              delay={0.1}
            />
            <InfoCard 
              image={a1}
              title="Corsetry"
              subtitle="1 Month Masterclass"
              link="/courses"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 md:py-60 bg-white text-left border-t border-black/5">
        <div className="container">
          <FadeIn>
            <span className="label text-gold mb-8 block">+234 813 204 9363</span>
            <h2 className="tracking-tighter mb-8 md:mb-12">
              Transform Your <br />
              <span className="italic text-gold">Creative Future</span>
            </h2>
            <p className="max-w-xl text-muted-foreground mb-16 font-light text-lg">
              Don't wait for permission to be great. Join the next cohort of elite designers and master the art of couture in 90 days.
            </p>
            <div className="flex flex-col items-start gap-6">
              <a href="/enroll" className="btn-luxury-primary px-20 py-8">
                Apply Now — Limited Slots
              </a>
              <p className="label text-muted-foreground">
                Final intake for 2026 starting soon
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PublicLayout>
   );
 }

// ── Lookbook Item (Transformation Showcase) ───────────────────────────────────
function LookbookItem({ item }: { 
  item: {
    image: string;
    title: string;
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

              {/* Description */}
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
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

function InfoCard({ image, title, subtitle, link, delay }: { image: string, title: string, subtitle: string, link: string, delay: number }) {
  return (
    <FadeIn delay={delay} direction="none" className="h-full">
      <motion.a 
        href={link}
        className="group relative aspect-[4/5] overflow-hidden bg-white p-10 flex flex-col justify-end h-full"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 z-0">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-20 group-hover:opacity-40" loading="lazy" />
        </div>
        <div className="absolute inset-0 border-0 group-hover:border-[12px] border-gold/20 transition-all duration-500" />
        <div className="relative z-10 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">{subtitle}</span>
          <h3 className="font-display text-2xl lg:text-3xl uppercase group-hover:italic transition-all duration-500">{title}</h3>
          <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 text-gold" />
        </div>
      </motion.a>
    </FadeIn>
  );
}
