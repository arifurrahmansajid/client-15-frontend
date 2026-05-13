import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/businesses", label: "Find a Pro" },
  { to: "/categories", label: "Categories" },
  { to: "/list-business", label: "List Your Business" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Check login state
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <div className={`rounded-2xl md:rounded-[2rem] px-10 md:px-14 py-5 md:py-6 flex items-center justify-between gap-8 transition-all duration-300 ${
        isHomePage && !scrolled 
          ? "bg-transparent border-transparent shadow-none" 
          : "bg-white border border-slate-200 shadow-xl"
      }`}>
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <span className={`${isHomePage && !scrolled ? "text-white" : "text-slate-900"} text-sm font-black tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300`}>
              MyLocalPro
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-10 shrink-0">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative group whitespace-nowrap ${
                isHomePage && !scrolled 
                  ? "text-white hover:text-white/80" 
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-8 shrink-0">
          {isLoggedIn ? (
            <>
              <Link
                to="/admin"
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition whitespace-nowrap ${
                  isHomePage && !scrolled 
                    ? "text-white/80 hover:text-white" 
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                Super Admin
              </Link>
              <button
                onClick={handleLogout}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition whitespace-nowrap ${
                  isHomePage && !scrolled 
                    ? "text-red-300 hover:text-red-200" 
                    : "text-red-500 hover:text-red-600"
                }`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition whitespace-nowrap ${
                  isHomePage && !scrolled 
                    ? "text-white/80 hover:text-white" 
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-xl bg-primary px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95 whitespace-nowrap"
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                isHomePage && !scrolled 
                  ? "text-white hover:bg-white/10" 
                  : "text-slate-900 hover:bg-slate-100"
              }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mt-3 lg:hidden rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-fade-in">
          <nav className="flex flex-col p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/5" }}
                className="rounded-xl px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            {isLoggedIn ? (
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5"
              >
                Super Admin
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
