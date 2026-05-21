import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "Instagram", label: "@fiatstyles_premium_xlusive", url: "https://instagram.com" },
    { name: "TikTok", label: "@fiatstyles_of_ilorin", url: "https://tiktok.com" }
  ];

  return (
    <footer className="bg-black text-white border-t border-white/5 relative overflow-hidden texture-grain">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-12">
        <div className="grid gap-16 md:grid-cols-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-8">
            <Link to="/" className="font-display text-3xl tracking-tight text-white inline-block">
              FIATSTYLE<span className="text-gold font-light">ACADEMY</span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
              An elite fashion training ground dedicated to restoring the dignity of craftsmanship. Empowering the next wave of global couture designers from Ilorin, Nigeria.
            </p>
            <div className="flex gap-10 pt-4">
              {socials.map(s => (
                <a 
                  key={s.name} 
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-1 cursor-pointer"
                >
                  <span className="text-[8px] uppercase tracking-[0.25em] text-neutral-500 group-hover:text-gold transition-colors">{s.name}</span>
                  <span className="text-xs font-light text-neutral-300 border-b border-white/0 group-hover:border-gold group-hover:text-gold transition-all pb-1 flex items-center gap-1">
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-semibold">Navigations</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] font-light">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-gold group-hover:w-3 transition-all duration-300" />
                  About the Academy
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-neutral-300 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-gold group-hover:w-3 transition-all duration-300" />
                  Programs of Study
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-neutral-300 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-gold group-hover:w-3 transition-all duration-300" />
                  Student Showcase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                  <span className="h-[1px] w-0 bg-gold group-hover:w-3 transition-all duration-300" />
                  Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-semibold">Admissions</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] font-light">
              <li className="text-neutral-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                Ilorin, Nigeria
              </li>
              <li className="text-neutral-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                +234 810 507 3034
              </li>
              <li>
                <Link to="/enroll" className="text-gold font-bold hover:text-gold/80 transition-colors flex items-center gap-2 group">
                  <span className="h-[1px] w-3 bg-gold group-hover:w-5 transition-all duration-300" />
                  Secure Your Place
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Gigantic Premium Background Text */}
        <div className="select-none pointer-events-none text-center border-t border-white/5 pt-10 mt-10">
          <h2 className="font-display text-[9vw] leading-none text-neutral-900/60 uppercase tracking-widest font-bold">
            FIATSTYLE
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row gap-4 justify-between text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-light">
          <span>© 2026 Fiatstyle Fashion Academy. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Terms of Service</span>
            <span>Mastering the Art</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
