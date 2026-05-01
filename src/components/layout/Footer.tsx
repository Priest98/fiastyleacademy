import { Link } from "react-router-dom";

export default function Footer() {
  const socials = [
    { name: "TikTok", label: "Fiatstyles of Ilorin" },
    { name: "Instagram", label: "Fiatstyles_premium_xlusive" }
  ];

  return (
    <footer className="bg-white border-t border-black/5">
      <div className="container">
        <div className="h-px w-full bg-gold opacity-30" />
        <div className="py-24 grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl tracking-tight">
              FIATSTYLE<span className="text-gold">ACADEMY</span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm font-light leading-loose">
              Premium online fashion training for the next generation of couture designers. 
              Based in Ilorin, Nigeria.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {socials.map(s => (
                <div key={s.name} className="flex flex-col gap-1">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">{s.name}</span>
                  <span className="label border-b border-black/0 hover:border-gold cursor-pointer transition-all hover:text-gold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">Navigation</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em]">
              <li><Link to="/about" className="hover:text-gold transition-colors">About the Academy</Link></li>
              <li><Link to="/courses" className="hover:text-gold transition-colors">Programs of Study</Link></li>
              <li><Link to="/work" className="hover:text-gold transition-colors">Student Showcase</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Inquiries</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8">Academy</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em]">
              <li><span className="opacity-50">Ilorin, Nigeria</span></li>
              <li><span className="opacity-50">+234 813 204 9363</span></li>
              <li><Link to="/enroll" className="text-gold font-bold hover:brightness-110 transition-all">Secure Your Spot</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/5 py-10 flex flex-col md:flex-row gap-4 justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-light">
          <span>© 2026 Fiatstyle Fashion Academy.</span>
          <span>Mastering the Art — Ilorin</span>
        </div>
      </div>
    </footer>
  );
}
