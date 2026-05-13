import { Link, useRouterState } from "@tanstack/react-router";
import { MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const links = [
  { to: "/", label: "Home" },
  { to: "/businesses", label: "Find a Pro" },
  { to: "/categories", label: "Categories" },
  { to: "/list-business", label: "List Your Business" },
  { to: "/contact", label: "Contact" },
] as const;

const AUSTRALIA_LOCATIONS = [
  "Australia",
  "Perth",
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Adelaide",
  "Hobart",
  "Northern Rivers",
  "Albury, Wodonga & Surrounds",
  "Tasmania",
  "Townsville",
  "Northern Territory",
  "Illawarra & Surrounds",
  "Gippsland",
  "Dubbo & Surrounds",
  "Portland, Port Fairy, Warrnambool & Surrounds",
  "Sunshine Coast",
  "Melbourne Peninsula",
  "Bendigo, Ballarat, Echuca & Surrounds",
  "Western Suburbs Melbourne",
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Australia");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHomePage = pathname === "/";

  const filteredLocations = AUSTRALIA_LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(locationQuery.toLowerCase()),
  );

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
        !scrolled 
          ? "bg-transparent border-transparent shadow-none" 
          : "bg-white border border-slate-200 shadow-xl"
      }`}>
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <span className={`${!scrolled ? (isHomePage ? "text-white" : "text-black") : "text-slate-900"} text-sm font-black tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300`}>
              MyLocalPro
            </span>
          </div>
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className={`hidden xl:flex items-center gap-3 rounded-full px-4 py-2 border transition-colors ${
                !scrolled
                  ? isHomePage
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-slate-200 bg-white text-slate-900"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              <MapPin className="h-4 w-4" />
              <div className="flex flex-col leading-tight text-left">
                <span className={`text-[9px] uppercase tracking-[0.2em] ${
                  !scrolled ? (isHomePage ? "text-white" : "text-black") : "text-black"
                }`}>
                  Location
                </span>
                <span className="text-sm font-semibold">{selectedLocation}</span>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Choose Location</DialogTitle>
              <DialogDescription>
                All locations are in Australia. Search or pick a region to update the site filter.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <input
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="Write here"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="button"
                onClick={() => setSelectedLocation("Australia")}
                className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition"
              >
                Detect my location
              </button>

              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
                {filteredLocations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setLocationQuery("");
                    }}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-900 hover:border-primary hover:bg-primary/5 transition"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <DialogFooter>
              <DialogClose className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition">
                Done
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <nav className="hidden xl:flex items-center gap-10 shrink-0">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative group whitespace-nowrap ${
                !scrolled 
                  ? isHomePage ? "text-white hover:text-white/80" : "text-black hover:text-black/70"
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
                  !scrolled 
                    ? isHomePage ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
                    : "text-slate-400 hover:text-slate-900"
                }`}
              >
                Super Admin
              </Link>
              <button
                onClick={handleLogout}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition whitespace-nowrap ${
                  !scrolled 
                    ? isHomePage ? "text-red-300 hover:text-red-200" : "text-red-600 hover:text-red-700"
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
                  !scrolled 
                    ? isHomePage ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"
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
                !scrolled 
                  ? isHomePage ? "text-white hover:bg-white/10" : "text-black hover:bg-black/10"
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
