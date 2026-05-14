import { Link, useRouterState } from "@tanstack/react-router";
import { MapPin, Menu, X, ChevronDown, Home, Briefcase, Grid, PlusCircle, PhoneCall } from "lucide-react";
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
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/businesses", label: "Find a Pro" },
  { to: "/categories", label: "Categories" },
  { to: "/list-business", label: "List Your Business" },
  { to: "/contact", label: "Contact" },
] as const;

const AUSTRALIA_LOCATIONS = [
  "Hobart Region",
  "Launceston Region",
  "Devonport Region",
  "Burnie Region",
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? "bg-[#0A1830]/96 backdrop-blur-xl shadow-[0_4px_32px_rgb(0,0,0,0.3)] border-b border-white/8"
          : isHomePage
            ? "bg-transparent"
            : "bg-[#0A1830]/95 backdrop-blur-md border-b border-white/10"
        }`}
    >
      <div className="container-app">
        <div className="flex items-center justify-between h-[72px] gap-6">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center group shrink-0">
            <img src={logoImg} alt="MyLocalPro" className="h-10 md:h-12 w-auto object-contain brightness-110" />
          </Link>

          {/* ── Location Picker ── */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="hidden xl:flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-white/80 hover:text-white hover:border-[#097DDD]/40 transition-all duration-200 group border border-white/10"
              >
                <MapPin className="h-3.5 w-3.5 text-[#097DDD]" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">Location</span>
                  <span className="text-xs font-semibold text-white">{selectedLocation}</span>
                </div>
                <ChevronDown className="h-3 w-3 text-white/40 group-hover:text-[#097DDD] transition-colors" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-[#0A1830] border border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-white text-xl font-bold">Choose Location</DialogTitle>
                <DialogDescription className="text-white/50">
                  All locations are in Australia. Search or pick a region.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <input
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Search location..."
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedLocation("Australia")}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#097DDD]/30 bg-[#097DDD]/10 px-4 py-2 text-sm font-semibold text-[#097DDD] hover:bg-[#097DDD]/20 transition"
                >
                  <MapPin className="h-3.5 w-3.5" />
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
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white/80 hover:border-[#097DDD]/40 hover:bg-[#097DDD]/10 hover:text-white transition"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              <DialogFooter>
                <DialogClose className="rounded-xl bg-[#097DDD] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#097DDD]/90 transition">
                  Done
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* ── Nav Links ── */}
          <nav className="hidden xl:flex items-center gap-8 shrink-0">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-[#097DDD]" }}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65 hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#097DDD] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* ── Auth Buttons ── */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {isLoggedIn ? (
              <>
                <Link
                  to="/admin"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  Super Admin
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors whitespace-nowrap"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="shine-btn rounded-xl bg-[#097DDD] px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:shadow-[0_6px_28px_rgb(9,125,221,0.55)] hover:bg-[#0a8ef0] transition-all duration-300 whitespace-nowrap"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {open && (
        <div className="lg:hidden border-t border-white/8 bg-[#0A1830]/98 backdrop-blur-xl animate-fade-in">
          <nav className="container-app py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-[#097DDD] bg-[#097DDD]/10" }}
                className="rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-white/65 hover:bg-white/5 hover:text-white transition-all"
              >
                {l.label}
              </Link>
            ))}
            <div className="h-px bg-white/8 my-2" />
            {isLoggedIn ? (
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-[#097DDD] hover:bg-[#097DDD]/10"
              >
                Super Admin
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-white/65 hover:bg-white/5 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-[#097DDD] px-4 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white"
                >
                  Join Now
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
