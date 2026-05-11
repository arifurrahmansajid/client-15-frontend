import { Link } from "@tanstack/react-router";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <div className="bg-white border border-slate-200 rounded-2xl md:rounded-[2rem] shadow-xl px-8 md:px-12 py-5 md:py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <span className="text-slate-900 text-sm font-black tracking-[0.2em] uppercase">
              MyLocalPro
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/admin"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-900 transition"
          >
            Admin
          </Link>
          <Link
            to="/list-business"
            className="rounded-xl bg-primary px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
          >
            List Business
          </Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-900 hover:bg-slate-100"
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
          </nav>
        </div>
      )}
    </header>
  );
}
