import a1 from "@/assets/student-work/a1.jpeg";
import a2 from "@/assets/student-work/a2.jpeg";
import a3 from "@/assets/student-work/a3.jpeg";
import type { Course } from "@/components/marketing/CourseCard";

export const courses: Course[] = [
  { 
    slug: "intermediate-class", 
    title: "3 Month Intermediate Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Intermediate", 
    price: "₦85,000", 
    image: a1, 
    seats: 20 
  },
  { 
    slug: "advanced-class", 
    title: "3 Month Advanced Class", 
    category: "Professional", 
    duration: "3 Months", 
    level: "Advanced", 
    price: "₦120,000", 
    image: a2, 
    seats: 15 
  },
  { 
    slug: "corsetry-masterclass", 
    title: "1 Month Corsetry Masterclass", 
    category: "Masterclass", 
    duration: "1 Month", 
    level: "All levels", 
    price: "₦45,000", 
    image: a3, 
    seats: 25 
  },
];
