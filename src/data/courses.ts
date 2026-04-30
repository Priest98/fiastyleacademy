import sketching from "@/assets/course-sketching.jpg";
import draping from "@/assets/course-draping.jpg";
import textiles from "@/assets/course-textiles.jpg";
import type { Course } from "@/components/marketing/CourseCard";

export const courses: Course[] = [
  { slug: "fashion-illustration", title: "Fashion Illustration", category: "Foundation", duration: "8 weeks", level: "Beginner", price: "€480", image: sketching, seats: 8 },
  { slug: "draping-and-form", title: "Draping & Form", category: "Atelier", duration: "12 weeks", level: "Intermediate", price: "€1,240", image: draping, seats: 24 },
  { slug: "textile-science", title: "Textile Science", category: "Material", duration: "6 weeks", level: "All levels", price: "€620", image: textiles, seats: 18 },
  { slug: "couture-construction", title: "Couture Construction", category: "Master", duration: "16 weeks", level: "Advanced", price: "€2,180", image: draping, seats: 6 },
  { slug: "brand-as-language", title: "Brand as Language", category: "Business", duration: "5 weeks", level: "All levels", price: "€390", image: sketching, seats: 40 },
  { slug: "sustainable-design", title: "Sustainable Design", category: "Material", duration: "10 weeks", level: "Intermediate", price: "€880", image: textiles, seats: 12 },
];
