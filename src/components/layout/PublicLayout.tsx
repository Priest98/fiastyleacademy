import { ReactNode } from "react";
import IslandHeader from "./IslandHeader";
import Footer from "./Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <IslandHeader />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
