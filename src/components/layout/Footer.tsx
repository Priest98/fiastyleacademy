import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32 border-t hairline">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-tight">Atelier<span className="text-gold">.</span></div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            A digital institute for the next generation of fashion designers. Learn the craft. Build the brand. Walk the runway.
          </p>
          <div className="mt-6 flex gap-2">
            {["IG","TT","YT","PIN"].map(s=>(
              <span key={s} className="h-9 w-9 rounded-full border hairline grid place-items-center text-[10px] tracking-widest">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="hover:text-gold">All courses</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/enroll">Enrollment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">House</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blog">Journal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="container py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Atelier Institute. Made in Paris.</span>
          <span className="font-mono">v1.0 — Spring/Summer collection</span>
        </div>
      </div>
    </footer>
  );
}
