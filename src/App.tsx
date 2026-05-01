import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Courses from "./pages/Courses.tsx";
import CourseDetail from "./pages/CourseDetail.tsx";
import Pricing from "./pages/Pricing.tsx";
import About from "./pages/About.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Blog from "./pages/Blog.tsx";
import Work from "./pages/Work.tsx";
import Contact from "./pages/Contact.tsx";
import Enroll from "./pages/Enroll.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import MyCourses from "./pages/MyCourses.tsx";
import LessonPlayer from "./pages/LessonPlayer.tsx";
import Profile from "./pages/Profile.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import CourseBuilder from "./pages/admin/CourseBuilder.tsx";
import Students from "./pages/admin/Students.tsx";
import Payments from "./pages/admin/Payments.tsx";

import SmoothScroll from "@/components/layout/SmoothScroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/lesson/:slug/:n" element={<LessonPlayer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/courses" element={<CourseBuilder />} />
            <Route path="/admin/students" element={<Students />} />
            <Route path="/admin/payments" element={<Payments />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SmoothScroll>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
