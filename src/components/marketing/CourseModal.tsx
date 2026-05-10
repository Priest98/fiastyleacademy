import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import type { Course } from "./CourseCard";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}

export default function CourseModal({ isOpen, onClose, course }: CourseModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-xl bg-white shadow-2xl z-[101] overflow-y-auto"
          >
            <div className="p-8 md:p-12 relative h-full flex flex-col">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-12">
                <span className="label text-gold mb-4 block">{course.category}</span>
                <h2 className="text-4xl md:text-5xl uppercase leading-tight italic mb-8">
                  {course.title}
                </h2>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-neutral-100">
                  <div>
                    <p className="label opacity-40 text-[10px] mb-2">Duration</p>
                    <p className="text-lg font-light">{course.duration}</p>
                  </div>
                  <div>
                    <p className="label opacity-40 text-[10px] mb-2">Level</p>
                    <p className="text-lg font-light">{course.level}</p>
                  </div>
                  <div>
                    <p className="label opacity-40 text-[10px] mb-2">Investment</p>
                    <p className="text-lg font-display text-gold">{course.price}</p>
                  </div>
                  <div>
                    <p className="label opacity-40 text-[10px] mb-2">Capacity</p>
                    <p className="text-lg font-light">{course.seats || 15} Students</p>
                  </div>
                </div>
              </div>

              <div className="space-y-12 flex-grow">
                <div>
                  <h3 className="text-xl uppercase mb-6 italic">Program Overview</h3>
                  <p className="text-muted-foreground font-light leading-loose text-lg">
                    This comprehensive program is designed to take you from foundational concepts to advanced technical mastery. 
                    Our curriculum focuses on precision tailoring, creative silhouette development, and the artistry of luxury fashion.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl uppercase mb-6 italic">What You'll Master</h3>
                  <ul className="space-y-4">
                    {[
                      "Advanced Pattern Manipulation",
                      "Bespoke Construction Techniques",
                      "Luxury Finishing & Artistry",
                      "Portfolio Development",
                      "Industry Design Standards"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-neutral-600 font-light">
                        <Check className="h-4 w-4 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-neutral-100">
                <a 
                  href="/enroll" 
                  className="btn-luxury-primary w-full py-8 text-center flex items-center justify-center gap-4 group"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
