import cat1_11 from "@/assets/new/category1/cat1-11.jpg";
import cat5_3 from "@/assets/new/category5/cat5-3.jpg";
import cat5_7 from "@/assets/new/category5/cat5-7.jpg";
import type { Course } from "@/components/marketing/CourseCard";

export const courses: Course[] = [
  { 
    slug: "intermediate-class", 
    title: "3 Month Intermediate Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Intermediate", 
    price: "₦85,000", 
    image: cat1_11, 
    seats: 20 
  },
  { 
    slug: "advanced-class", 
    title: "3 Month Advanced Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Advanced", 
    price: "₦120,000", 
    image: cat5_3, 
    seats: 15 
  },
  { 
    slug: "corsetry-masterclass", 
    title: "1 Month Corsetry Masterclass", 
    category: "Masterclass", 
    duration: "1 Month", 
    level: "All levels", 
    price: "₦45,000", 
    image: cat5_7, 
    seats: 25 
  },
];
