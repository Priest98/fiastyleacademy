import PublicLayout from "@/components/layout/PublicLayout";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Star, Quote, Scissors, Eye, Award, Globe, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/animations/FadeIn";
import CourseModal from "@/components/marketing/CourseModal";
import { courses } from "@/data/courses";
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
import greenImage from "@/assets/new/category2/green.jpeg";
import redImage from "@/assets/new/category5/red.jpeg";
import blackImage from "@/assets/new/category4/black.jpeg";
import brownImage from "@/assets/new/student-work/brown.jpeg";

export default function Index() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const [activeIndex, setActiveIndex] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (nextFn: () => void, prevFn: () => void) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextFn();
    } else if (isRightSwipe) {
      prevFn();
    }
  };

  const graduates = [
    {
      image: cat1_5,
      title: "Signature Couture",
      category: "Advanced Couture",
      description: "A masterclass in bespoke draping and technical precision."
    },
    {
      image: cat4_2,
      title: "Structural Detail",
      category: "Pattern Making",
      description: "Exploring geometric silhouettes through advanced manipulation."
    },
    {
      image: greenImage,
      title: "Bespoke Corsetry",
      category: "Corsetry Masterclass",
      description: "Precision boning and heritage construction techniques."
    },
    {
      image: cat3_1,
      title: "Luxury Finishing",
      category: "Tailoring Excellence",
      description: "The art of the invisible seam and high-end detailing."
    },
    {
      image: blackImage,
      title: "Modern Silhouette",
      category: "Ready-to-Wear",
      description: "Minimalist aesthetics meets functional fashion design."
    },
    {
      image: redImage,
      title: "Fabric Manipulation",
      category: "Artisan Textile",
      description: "Transforming textiles into sculptural works of art."
    },
    {
      image: cat1_12,
      title: "Bridal Excellence",
      category: "Bridal Couture",
      description: "Grandeur and grace in every hand-stitched layer."
    },
    {
      image: brownImage,
      title: "Design Mastery",
      category: "Creative Portfolio",
      description: "A comprehensive showcase of industry-ready creative vision."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % graduates.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + graduates.length) % graduates.length);
  };

  const getDistance = (index: number) => {
    const total = graduates.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const getCardStyle = (index: number) => {
    const diff = getDistance(index);
    const absDiff = Math.abs(diff);
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let blur = 0;
    
    if (diff === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 10;
      blur = 0;
    } else if (absDiff === 1) {
      scale = 0.82;
      opacity = 0.6;
      zIndex = 5;
      blur = 2;
    } else {
      scale = 0.6;
      opacity = 0;
      zIndex = 0;
      blur = 4;
    }
    
    return {
      transform: `translate(-50%, -50%) translateX(calc(${diff} * (var(--carousel-card-width) * 0.85 + var(--carousel-gap)))) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      filter: blur ? `blur(${blur}px)` : 'none',
      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  const [activeProgramIndex, setActiveProgramIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      image: cat1_1,
      title: "Beginner to Advance",
      duration: "180 Days",
      level: "Level 01-03",
      outcome: "Full Professional Designer",
      price: "₦350,000"
    },
    {
      image: cat1_5,
      title: "Intermediate to Advance",
      duration: "150 Days",
      level: "Level 02-03",
      outcome: "Bridge to Haute Couture",
      price: "₦250,000"
    },
    {
      image: cat1_12,
      title: "Intermediate",
      duration: "90 Days",
      level: "Level 01",
      outcome: "Professional Foundation",
      price: "₦120,000"
    },
    {
      image: cat2_2,
      title: "Advanced Couture",
      duration: "90 Days",
      level: "Level 02",
      outcome: "Master Tailoring",
      price: "₦150,000"
    },
    {
      image: cat3_1,
      title: "Corsetry Mastery",
      duration: "30 Days",
      level: "Specialist",
      outcome: "Bespoke Skills",
      price: "₦50,000"
    }
  ];

  const nextProgram = () => {
    setActiveProgramIndex((prev) => (prev + 1) % programs.length);
  };

  const prevProgram = () => {
    setActiveProgramIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const getProgramDistance = (index: number) => {
    const total = programs.length;
    let diff = index - activeProgramIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const getProgramCardStyle = (index: number) => {
    const diff = getProgramDistance(index);
    const absDiff = Math.abs(diff);
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;
    let blur = 0;
    
    if (diff === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 10;
      blur = 0;
    } else if (absDiff === 1) {
      scale = 0.85;
      opacity = 0.6;
      zIndex = 5;
      blur = 2;
    } else {
      scale = 0.7;
      opacity = 0;
      zIndex = 0;
      blur = 4;
    }
    
    return {
      transform: `translate(-50%, -50%) translateX(calc(${diff} * (var(--program-card-width) * 0.9 + var(--program-gap)))) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      filter: blur ? `blur(${blur}px)` : 'none',
      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "Oga thank u so much 😭🤭Omoh I don’t really know how to appreciate u ooo Walloy cox u did a lot for me😭may almighty Allah make every best things easy for u in every ways inshallah 🤲🫂you’re such a rare boss Walloy😔u took us as your sisters, playmate Walloy u did a lot for us may d almighty God reward nd protect u in every way🤲.",
      author: "Fatima Bello",
      role: "Elite Couture Graduate",
      location: "Ilorin",
      avatar: "FB"
    },
    {
      quote: "Good evening boss🤭I wanted to take a moment to express my sincere appreciation for your guidance and support. Your leadership has been instrumental in my growth and motivation at work. Thank you for always inspiring us to do our best.",
      author: "Zainab Ibrahim",
      role: "Pattern Engineering Graduate",
      location: "Ilorin",
      avatar: "ZI"
    },
    {
      quote: "Good evening ma❤️ Thank u so much for your guidance and support, you are an amazing boss and mentor, thank u for believing in me. I appreciate the flexibility and encouragement you've shown me. Thanks for being a great leader. I love you so much ma 💓",
      author: "Hadiza Yusuf",
      role: "Bespoke Corsetry Graduate",
      location: "Ilorin",
      avatar: "HY"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonialDistance = (index: number) => {
    const total = testimonials.length;
    let diff = index - activeTestimonialIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const getTestimonialCardStyle = (index: number) => {
    const diff = getTestimonialDistance(index);
    const absDiff = Math.abs(diff);
    
    let scale = 0.9;
    let opacity = 0;
    let zIndex = 0;
    let rotate = 0;
    let translateY = 0;
    let translateX = 0;
    
    if (diff === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 30;
      rotate = 0;
      translateY = 0;
      translateX = 0;
    } else if (diff === 1 || (diff === -3 && testimonials.length === 4)) {
      scale = 0.98;
      opacity = 0.9;
      zIndex = 20;
      rotate = -2;
      translateY = 8;
      translateX = 4;
    } else if (diff === 2 || diff === -2) {
      scale = 0.95;
      opacity = 0.8;
      zIndex = 10;
      rotate = 3;
      translateY = 16;
      translateX = -6;
    } else {
      scale = 0.9;
      opacity = 0;
      zIndex = 0;
      rotate = 0;
      translateY = 0;
      translateX = 0;
    }
    
    return {
      transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), z-index 0.8s'
    };
  };

  return (
    <PublicLayout>
      <div ref={containerRef} className="relative">
        {/* HERO SECTION: Immersive & Bold */}
        <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden bg-black">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={homeHero} 
              alt="Fiatstyle Editorial" 
              className="w-full h-full object-cover opacity-50 md:opacity-70 grayscale hover:grayscale-0 transition-all duration-[2000ms]" 
              loading="eager" 
            />
            <div className="absolute inset-0 bg-black/45 z-[1] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent z-[2]" />
          </motion.div>

          <div className="editorial-container relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <span className="label text-gold mb-3 md:mb-6 block fade-up" style={{ animationDelay: '0.2s' }}>
                Fiatstyle Fashion Academy · 2026 Intake
              </span>
              <h1 className="text-white text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.15] mb-6 md:mb-10 fade-up" style={{ animationDelay: '0.4s' }}>
                Master the Art of <br />
                <span className="italic text-gold">High-End Couture</span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8 md:mb-12 max-w-xl leading-relaxed fade-up" style={{ animationDelay: '0.6s' }}>
                The definitive online academy for the next generation of global fashion designers. Transform your creative vision into a professional career in 90 days.
              </p>
              <div className="flex flex-row items-center gap-4 fade-up" style={{ animationDelay: '0.8s' }}>
                <Link to="/enroll" className="btn-luxury-primary px-5 sm:px-8 py-3.5 group text-[9px] sm:text-[10px] whitespace-nowrap">
                  Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
                <Link to="/courses" className="btn-luxury-secondary text-white border-white/20 hover:border-white px-5 sm:px-8 py-3.5 text-[9px] sm:text-[10px] whitespace-nowrap">
                  Explore Programs
                </Link>
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

        {/* SOCIAL PROOF: Custom Looping Carousel */}
        <section className="section-padding-lg bg-white overflow-hidden relative">
          <style dangerouslySetInnerHTML={{__html: `
            :root {
              --carousel-card-width: 310px;
              --carousel-gap: 12px;
            }
            @media (min-width: 768px) {
              :root {
                --carousel-card-width: 340px;
                --carousel-gap: 24px;
              }
            }
            @media (min-width: 1024px) {
              :root {
                --carousel-card-width: 420px;
                --carousel-gap: 40px;
              }
            }
          `}} />

          <div className="editorial-container">
            {/* Header section with category and number counter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <div>
                <span className="label text-gold mb-4 block">The Transformation</span>
                <h2 className="text-balance uppercase tracking-tight leading-none">
                  Created by our <br />
                  <span className="italic">Elite Graduates</span>
                </h2>
              </div>
              <div className="font-mono text-xl md:text-2xl text-neutral-400 font-light tracking-widest mt-4 md:mt-0">
                <span className="text-black font-semibold">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-neutral-300">/</span>
                {String(graduates.length).padStart(2, '0')}
              </div>
            </div>

            {/* Horizontal line divider */}
            <div className="w-full h-px bg-neutral-200 mb-12 md:mb-16" />

            {/* Carousel Container */}
            <div 
              className="relative h-[480px] md:h-[550px] lg:h-[650px] w-full flex flex-col md:flex-row items-center justify-center py-6 select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd(nextSlide, prevSlide)}
            >
              {/* Carousel Slides Track */}
              <div className="relative w-full h-[400px] md:h-full overflow-visible">
                {graduates.map((grad, index) => {
                  const diff = getDistance(index);
                  const isActive = diff === 0;
                  
                  return (
                    <div 
                      key={index}
                      style={getCardStyle(index)}
                      onClick={() => {
                        if (diff !== 0) {
                          setActiveIndex(index);
                        }
                      }}
                      className="absolute top-1/2 left-1/2 w-[var(--carousel-card-width)] aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-luxury cursor-pointer group"
                    >
                      {/* Image background */}
                      <img 
                        src={grad.image} 
                        alt={grad.title} 
                        className={`w-full h-full object-cover select-none transition-all duration-[2000ms] ease-luxury 
                          ${isActive ? "grayscale-0" : "grayscale"}`} 
                      />
                      
                      {/* Overlays */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                      {/* Card Content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white">
                        {/* Top Category Tag */}
                        <div className={`transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                          <span className="label text-gold text-[9px] tracking-[0.3em] font-semibold">{grad.category}</span>
                        </div>

                        {/* Center Title */}
                        <div className="text-center w-full my-auto">
                          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight leading-tight text-white mb-2 max-w-xs mx-auto">
                            {grad.title}
                          </h3>
                        </div>

                        {/* Bottom Description */}
                        <div className={`text-center w-full transition-all duration-700 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                          <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed max-w-[280px] mx-auto mb-2">
                            {grad.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls Row (below the track on mobile, floating on desktop) */}
              <div className="flex md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:justify-between items-center gap-6 mt-6 md:mt-0 z-20">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer md:ml-8"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer md:mr-8"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Bottom slide indicators */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {graduates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? "w-8 bg-black" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* BRAND POSITIONING: Core Pillars */}
        <section className="section-padding-lg bg-neutral-50 text-black border-y border-black/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img src={fabricImage} alt="" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="editorial-container relative z-10">
            {/* Header block with split title */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
              <FadeIn direction="right">
                <span className="label text-gold block tracking-[0.2em] font-medium">
                  \\ The Gold Standard \\
                </span>
              </FadeIn>
              <FadeIn direction="left" delay={0.1}>
                <h2 className="text-black text-balance leading-tight text-left md:text-right md:max-w-xl">
                  The Gold Standard <br />
                  <span className="italic text-gold">in Fashion Education</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
              <FadeIn direction="right" delay={0.2} className="h-full">
                <div className="relative aspect-[4/3] sm:aspect-portrait overflow-hidden rounded-[2.5rem] shadow-luxury group h-full">
                  <img 
                    src={cat5_8} 
                    alt="Workshop" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]" 
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  
                  {/* Top-left decorative logo badge */}
                  <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-gold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  
                  {/* Bottom overlay info */}
                  <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start z-10">
                    <h3 className="text-white text-3xl md:text-4xl font-display leading-tight mb-6 text-balance">
                      Restoring the dignity <br />
                      <span className="italic text-gold">of craftsmanship.</span>
                    </h3>
                    <div className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs font-mono tracking-wider text-white uppercase">
                      Fiatstyle Academy
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <div className="bg-white border border-black/5 rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-luxury flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="mb-10">
                    <h3 className="text-2xl md:text-3xl font-display text-black mb-6">Fiatstyle Academy</h3>
                    <p className="text-neutral-700 text-base md:text-lg font-light leading-relaxed mb-6">
                      was born to restore the dignity of craftsmanship. We don't just teach you how to sew; we teach you how to see.
                    </p>
                    <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
                      Through hands-on mentorship, rigorous technical training, and creative cultivation, we empower designers to define their own voice and launch global careers.
                    </p>
                  </div>

                  {/* Circular icon badges row */}
                  <div className="flex gap-4 mb-10">
                    <div className="h-12 w-12 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center text-gold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" title="Skill">
                      <Scissors className="h-5 w-5" />
                    </div>
                    <div className="h-12 w-12 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center text-gold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" title="Vision">
                      <Eye className="h-5 w-5" />
                    </div>
                    <div className="h-12 w-12 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center text-gold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer" title="Prestige">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="h-12 w-12 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer" title="Results">
                      <Globe className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Why Choose Section with Pillars */}
                  <div className="border-t border-black/5 pt-8 mt-auto">
                    <h4 className="text-black font-display text-lg mb-6 tracking-wide">
                      Why Choose Our Programs?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          <span className="text-gold font-display text-base font-semibold">Skill</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed pl-3">
                          Master technical precision in couture draping and tailoring.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          <span className="text-gold font-display text-base font-semibold">Vision</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed pl-3">
                          Cultivate your unique and authentic creative voice.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          <span className="text-gold font-display text-base font-semibold">Prestige</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed pl-3">
                          Join our elite alumni network of active fashion houses.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          <span className="text-gold font-display text-base font-semibold">Results</span>
                        </div>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed pl-3">
                          Acquire the tools for global market and career readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PROGRAMS: Custom Looping Carousel */}
        <section className="section-padding-lg bg-neutral-50 overflow-hidden relative">
          <style dangerouslySetInnerHTML={{__html: `
            :root {
              --program-card-width: 310px;
              --program-gap: 12px;
            }
            @media (min-width: 768px) {
              :root {
                --program-card-width: 320px;
                --program-gap: 24px;
              }
            }
            @media (min-width: 1024px) {
              :root {
                --program-card-width: 380px;
                --program-gap: 40px;
              }
            }
          `}} />

          <div className="editorial-container">
            {/* Header section with category and number counter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <div>
                <span className="label text-gold mb-4 block">Our Curriculum</span>
                <h2 className="text-balance uppercase tracking-tight leading-none text-black">
                  Elite <span className="italic">Programs</span>
                </h2>
              </div>
              <div className="font-mono text-xl md:text-2xl text-neutral-400 font-light tracking-widest mt-4 md:mt-0">
                <span className="text-black font-semibold">
                  {String(activeProgramIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-neutral-300">/</span>
                {String(programs.length).padStart(2, '0')}
              </div>
            </div>

            {/* Horizontal line divider */}
            <div className="w-full h-px bg-neutral-200 mb-12 md:mb-16" />

            {/* Carousel Container */}
            <div 
              className="relative h-[510px] md:h-[580px] lg:h-[680px] w-full flex flex-col md:flex-row items-center justify-center py-6 select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd(nextProgram, prevProgram)}
            >
              {/* Carousel Slides Track */}
              <div className="relative w-full h-[430px] md:h-full overflow-visible">
                {programs.map((prog, index) => {
                  const diff = getProgramDistance(index);
                  const isActive = diff === 0;
                  
                  return (
                    <div 
                      key={index}
                      style={getProgramCardStyle(index)}
                      onClick={() => {
                        if (diff !== 0) {
                          setActiveProgramIndex(index);
                        } else {
                          const slugs = [
                             "beginner-to-advance",
                             "intermediate-to-advance",
                             "intermediate-class",
                             "advanced-class",
                             "corsetry-masterclass"
                           ];
                          const matchedCourse = courses.find(c => c.slug === slugs[index]);
                          if (matchedCourse) {
                             setSelectedCourse(matchedCourse);
                             setIsModalOpen(true);
                          }
                        }
                      }}
                      className="absolute top-1/2 left-1/2 w-[var(--program-card-width)] aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-luxury cursor-pointer bg-white transition-all duration-700 border border-neutral-100 flex flex-col justify-between p-8 sm:p-10 md:p-12 group hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                    >
                      {/* Background Image overlay (visible on hover) */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 overflow-hidden rounded-[2.5rem]">
                        <img src={prog.image} alt="" className="w-full h-full object-cover grayscale" />
                      </div>

                      <div className="relative z-10 flex flex-col justify-between h-full w-full">
                        {/* Top: Level & Price */}
                        <div>
                          <div className="flex justify-between items-start mb-6 md:mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 group-hover:text-neutral-400">{prog.level}</span>
                            <span className="font-mono text-sm text-gold font-semibold">{prog.price}</span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-6 font-display group-hover:italic transition-all duration-700 leading-tight text-black group-hover:text-gold">
                            {prog.title}
                          </h3>

                          {/* Details */}
                          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            <li className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-700">
                              <div className="h-1 w-1 rounded-full bg-gold" /> {prog.duration} Professional Training
                            </li>
                            <li className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-700">
                              <div className="h-1 w-1 rounded-full bg-gold" /> {prog.outcome}
                            </li>
                          </ul>
                        </div>

                        {/* Bottom Link CTA */}
                        <div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              const slugs = [
                                 "beginner-to-advance",
                                 "intermediate-to-advance",
                                 "intermediate-class",
                                 "advanced-class",
                                 "corsetry-masterclass"
                               ];
                              const matchedCourse = courses.find(c => c.slug === slugs[index]);
                              if (matchedCourse) {
                                setSelectedCourse(matchedCourse);
                                setIsModalOpen(true);
                              }
                            }}
                            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 group-hover:border-gold pb-2 transition-all text-black group-hover:text-gold bg-transparent border-0 outline-none cursor-pointer p-0"
                          >
                            Enquire <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls Row (below the track on mobile, floating on desktop) */}
              <div className="flex md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:justify-between items-center gap-6 mt-6 md:mt-0 z-20">
                <button 
                  onClick={prevProgram}
                  className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer md:ml-8"
                  aria-label="Previous program"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextProgram}
                  className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer md:mr-8"
                  aria-label="Next program"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Bottom slide indicators */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProgramIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === activeProgramIndex ? "w-8 bg-black" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
                  aria-label={`Go to program slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

         {/* TESTIMONIALS: Stacked Deck Slider */}
        <section className="section-padding-lg bg-neutral-50 overflow-hidden relative border-y border-black/5">
          <style dangerouslySetInnerHTML={{__html: `
            :root {
              --testimonial-card-width: 325px;
              --testimonial-card-height: 380px;
            }
            @media (min-width: 640px) {
              :root {
                --testimonial-card-width: 440px;
                --testimonial-card-height: 280px;
              }
            }
            @media (min-width: 768px) {
              :root {
                --testimonial-card-width: 580px;
                --testimonial-card-height: 280px;
              }
            }
            @media (min-width: 1024px) {
              :root {
                --testimonial-card-width: 680px;
                --testimonial-card-height: 320px;
              }
            }
          `}} />

          <div className="editorial-container flex flex-col items-center text-center">
            {/* Top Pill Badge */}
            <div className="mb-6">
              <span className="inline-block border border-gold/30 rounded-full px-6 py-2 text-[10px] tracking-[0.2em] font-medium text-gold uppercase bg-white shadow-soft">
                Testimonials
              </span>
            </div>

            {/* Titles */}
            <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-tight text-black mb-4">
              Loved by our <span className="italic">graduates</span> worldwide.
            </h2>
            
            <p className="max-w-2xl mx-auto text-neutral-500 font-light text-sm md:text-base leading-relaxed mb-16">
              Real feedback from our creative designers who built their careers and launched global labels under our guidance.
            </p>

            {/* Stack Slider Container */}
            <div 
              className="relative w-full h-[470px] md:h-[350px] lg:h-[390px] flex flex-col md:flex-row items-center justify-center py-6 select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd(nextTestimonial, prevTestimonial)}
            >
              {/* Cards Stack Track */}
              <div className="relative w-[var(--testimonial-card-width)] h-[var(--testimonial-card-height)] overflow-visible mb-6 md:mb-0">
                {testimonials.map((test, index) => {
                  const diff = getTestimonialDistance(index);
                  const isActive = diff === 0;

                  return (
                    <div
                      key={index}
                      style={getTestimonialCardStyle(index)}
                      onClick={() => {
                        if (diff !== 0) {
                          setActiveTestimonialIndex(index);
                        }
                      }}
                      className="absolute top-1/2 left-1/2 w-full h-full bg-white rounded-3xl border border-neutral-200/80 shadow-luxury p-6 sm:p-10 md:p-12 flex flex-col justify-between text-left cursor-pointer group select-none"
                    >
                      {/* Quote text */}
                      <p className="font-display text-sm sm:text-base md:text-xl lg:text-2xl text-black leading-relaxed mb-4 md:mb-6 font-light">
                        "{test.quote}"
                      </p>

                      {/* Author profile info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar initials badge */}
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black font-semibold text-xs md:text-sm shadow-soft">
                          {test.avatar}
                        </div>
                        <div>
                          <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-black mb-0.5">
                            {test.author}
                          </h4>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-gold font-medium mb-0">
                            {test.role} &middot; {test.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls Row (below the track on mobile, floating on desktop) */}
              <div className="flex md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:justify-between items-center gap-6 mt-6 md:mt-0 z-40">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer md:ml-12 lg:ml-24"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer md:mr-12 lg:mr-24"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Bottom CTA Block */}
            <div className="flex flex-col items-center gap-6">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-400 font-light font-mono">
                Join 500+ alumni who have launched their fashion labels globally.
              </p>
              <Link 
                to="/enroll" 
                className="btn-luxury-primary px-8 py-3.5 text-[10px] tracking-[0.3em] font-bold uppercase bg-black text-white hover:bg-neutral-900 transition-all rounded-full hover:scale-105 shadow-md"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA: High Impact */}
        <section className="section-padding-xl bg-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-black/10 to-transparent" />
          
          <div className="editorial-container relative z-10">
            <FadeIn>
              <span className="label text-gold mb-10 block font-bold">+234 810 507 3034</span>
              <h2 className="text-5xl md:text-[8rem] uppercase leading-[0.9] tracking-tighter mb-12">
                Transform Your <br />
                <span className="italic text-gold">Signature</span>
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-16 text-xl font-light">
                Join the elite cohort of designers redefining modern couture. Limited seats remaining for the 2026 intake.
              </p>
              <div className="flex flex-col items-center gap-8">
                <Link to="/enroll" className="btn-luxury-primary px-12 py-4 text-xs group hover:scale-105 transition-transform">
                  Apply Now — Secure Your Spot
                </Link>
                <p className="label text-muted-foreground flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
                  Only 4 Slots Remaining for May
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>

      {selectedCourse && (
        <CourseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          course={selectedCourse}
        />
      )}
    </PublicLayout>
  );
}



function PortfolioItem({ image, title, category, isAlwaysGrayscale = false }: { image: string, title: string, category: string, isAlwaysGrayscale?: boolean }) {
  return (
    <FadeIn direction="up">
      <div className="group cursor-pointer">
        <div className="aspect-portrait overflow-hidden bg-neutral-100 mb-6 shadow-soft hover-lift">
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 
              ${isAlwaysGrayscale ? "grayscale" : "grayscale group-hover:grayscale-0"}`} 
          />
        </div>
        <span className="label text-[9px] text-gold mb-2 block">{category}</span>
        <h3 className="font-display text-xl uppercase tracking-tight group-hover:italic transition-all">{title}</h3>
      </div>
    </FadeIn>
  );
}






