import { ReactNode } from "react";
import IslandHeader from "./IslandHeader";
import Footer from "./Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <IslandHeader />
      <main className="pt-24">{children}</main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden">
        <a href="/enroll" className="w-full btn-luxury-primary py-5 shadow-2xl flex items-center justify-center gap-3 backdrop-blur-md bg-black/90 border border-gold/20">
          Apply Now — 2026 Intake
        </a>
      </div>
    </div>
  );
}
