import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/courses", label: "Courses" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export default function IslandHeader() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  // hide on lesson player fullscreen-ish routes? Keep visible for skeleton.
  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto glass rounded-full transition-all duration-500 ease-out
          ${open ? "w-full max-w-3xl px-3 py-2" : "px-3 py-2"}`}
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 pl-2 pr-3 py-1">
            <span className="h-7 w-7 rounded-full gradient-ink grid place-items-center">
              <Sparkles className="h-3.5 w-3.5 text-background" />
            </span>
            <span className="font-display text-base tracking-tight">Atelier<span className="text-gold">.</span></span>
          </Link>

          <div
            className={`hidden md:flex items-center gap-1 overflow-hidden transition-all duration-500
              ${open ? "max-w-[640px] opacity-100 ml-2" : "max-w-0 opacity-0"}`}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] px-3 py-1.5 rounded-full transition-colors
                  ${isActive ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5">
            <Link
              to="/enroll"
              className={`text-[11px] uppercase tracking-[0.2em] rounded-full bg-foreground text-background
                transition-all hover:shadow-gold ${open ? "px-5 py-2.5" : "px-4 py-2"}`}
            >
              Enroll{open ? " Now" : ""}
            </Link>
            <button
              aria-label="menu"
              onClick={() => setOpen((v) => !v)}
              className="h-9 w-9 grid place-items-center rounded-full bg-foreground/5 hover:bg-foreground/10"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 pb-2 px-2 grid grid-cols-2 gap-1 fade-up">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.18em] px-3 py-2 rounded-full text-center
                  ${isActive ? "bg-foreground text-background" : "bg-foreground/5"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/dashboard" onClick={()=>setOpen(false)} className="col-span-2 text-xs uppercase tracking-[0.18em] px-3 py-2 rounded-full bg-foreground/5 text-center">Student area</NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
