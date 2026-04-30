import { ReactNode } from "react";
import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard, BookOpen, User, Sparkles, LogOut, GraduationCap, CreditCard, Users, Hammer } from "lucide-react";

const studentNav = [
  { to:"/dashboard", label:"Dashboard", icon: LayoutDashboard },
  { to:"/my-courses", label:"My Courses", icon: BookOpen },
  { to:"/profile", label:"Profile", icon: User },
];
const adminNav = [
  { to:"/admin", label:"Overview", icon: LayoutDashboard },
  { to:"/admin/courses", label:"Course Builder", icon: Hammer },
  { to:"/admin/students", label:"Students", icon: Users },
  { to:"/admin/payments", label:"Payments", icon: CreditCard },
];

export default function AppLayout({ children, kind="student" }:{ children: ReactNode; kind?: "student"|"admin" }) {
  const nav = kind==="admin" ? adminNav : studentNav;
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <aside className="w-64 shrink-0 border-r hairline p-6 sticky top-0 h-screen hidden lg:flex flex-col">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full gradient-ink grid place-items-center"><Sparkles className="h-3.5 w-3.5 text-background"/></span>
          <span className="font-display text-lg uppercase">Fiastyle<span className="text-muted-foreground">Academy</span></span>
        </Link>
        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{kind==="admin"?"Admin console":"Student area"}</p>

        <nav className="mt-10 space-y-1">
          {nav.map(n=>(
            <NavLink key={n.to} to={n.to} end className={({isActive})=>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
              ${isActive?"bg-foreground text-background":"text-foreground/70 hover:bg-foreground/5"}`
            }>
              <n.icon className="h-4 w-4"/> {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-xl bg-surface p-4 scanlines border border-black/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Cohort</p>
          <p className="font-display text-xl mt-1 text-gold">2026 Intake</p>
          <p className="text-xs text-muted-foreground mt-2">Ilorin · Online</p>
        </div>
        <button className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><LogOut className="h-3.5 w-3.5"/> Sign out</button>
      </aside>
      <main className="flex-1 min-w-0">
        {/* Mobile top */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b hairline">
          <Link to="/" className="flex items-center gap-2"><span className="font-display uppercase">Fiastyle<span className="text-muted-foreground">Academy</span></span></Link>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{kind==="admin"?"Admin":"Student"}</span>
        </div>
        <div className="p-6 md:p-10">{children}</div>
      </main>
    </div>
  );
}
