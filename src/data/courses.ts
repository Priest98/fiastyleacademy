import cat1_1 from "@/assets/new/category1/cat1-1.jpg";
import cat1_5 from "@/assets/new/category1/cat1-5.jpg";
import cat1_11 from "@/assets/new/category1/cat1-11.jpg";
import cat5_3 from "@/assets/new/category5/cat5-3.jpg";
import cat5_7 from "@/assets/new/category5/cat5-7.jpg";
import type { Course } from "@/components/marketing/CourseCard";

export const courses: Course[] = [
  { 
    slug: "beginner-to-advance", 
    title: "Beginner to Advance Class", 
    category: "Professional", 
    duration: "6 Months", 
    level: "Beginner to Advanced", 
    price: "₦350,000", 
    image: cat1_1, 
    seats: 15,
    description: "Our most comprehensive roadmap: start from total beginner and finish as a high-end couture fashion designer.",
  },
  { 
    slug: "intermediate-to-advance", 
    title: "Intermediate to Advance Class", 
    category: "Professional", 
    duration: "5 Months", 
    level: "Intermediate to Advanced", 
    price: "₦250,000", 
    image: cat1_5, 
    seats: 15,
    description: "Accelerate your couture journey: bridge intermediate construction knowledge into advanced editorial silhouette design.",
  },
  { 
    slug: "intermediate-class", 
    title: "Intermediate Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Intermediate", 
    price: "₦120,000", 
    image: cat1_11, 
    seats: 20,
    description: "Master bespoke garment construction, precision tailoring, and the fundamentals of luxury finishing.",
  },
  { 
    slug: "advanced-class", 
    title: "Advanced Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Advanced", 
    price: "₦150,000", 
    image: cat5_3, 
    seats: 15,
    description: "Elevate your craft into couture-level silhouette design, advanced draping, and editorial portfolio development.",
  },
  { 
    slug: "corsetry-masterclass", 
    title: "1 Month Corsetry Masterclass", 
    category: "Masterclass", 
    duration: "1 Month", 
    level: "All levels", 
    price: "₦50,000", 
    image: cat5_7, 
    seats: 25,
    description: "An intensive deep-dive into the art of structured corsetry—from heritage boning techniques to modern sculptural design.",
  },
];
