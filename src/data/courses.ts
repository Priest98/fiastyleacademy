import cat1_1 from "@/assets/new/category1/cat1-1.jpg";
import cat2_2 from "@/assets/new/category2/cat2-2.jpg";
import cat3_1 from "@/assets/new/category3/cat3-1.jpg";
import type { Course } from "@/components/marketing/CourseCard";

export const courses: Course[] = [
  { 
    slug: "intermediate-class", 
    title: "3 Month Intermediate Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Intermediate", 
    price: "₦85,000", 
    image: cat1_1, 
    seats: 20 
  },
  { 
    slug: "advanced-class", 
    title: "3 Month Advanced Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Advanced", 
    price: "₦120,000", 
    image: cat2_2, 
    seats: 15 
  },
  { 
    slug: "corsetry-masterclass", 
    title: "1 Month Corsetry Masterclass", 
    category: "Masterclass", 
    duration: "1 Month", 
    level: "All levels", 
    price: "₦45,000", 
    image: cat3_1, 
    seats: 25 
  },
];
