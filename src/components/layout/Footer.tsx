import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";

export function Footer() {
  return (
    <footer className="bg-[#0A1830] relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#097DDD]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#097DDD]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-app relative z-10">
        {/* ── Top CTA Banner ── */}
        <div className="border-b border-white/8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Ready to find a{" "}
                <span className="text-[#097DDD]">local pro?</span>
              </h3>
              <p className="mt-2 text-[#E4EAF1]/50 text-sm max-w-md">
                Browse trusted Australian businesses or list your own — it only takes a minute.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/businesses"
                className="shine-btn inline-flex items-center gap-2 rounded-xl bg-[#097DDD] px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:shadow-[0_6px_28px_rgb(9,125,221,0.55)] hover:bg-[#0a8ef0] transition-all duration-300 group"
              >
                Find a Pro
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/list-business"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/75 hover:bg-white/8 hover:border-white/25 transition-all duration-300"
              >
                List Your Business
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="py-14 grid gap-10 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center group mb-5 w-fit">
              <img src={logoImg} alt="MyLocalPro" className="h-10 w-auto object-contain brightness-110" />
            </Link>
            <p className="text-sm text-[#E4EAF1]/45 leading-relaxed max-w-xs">
              The simple way to find trusted local trades and services across Australia.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-[#E4EAF1]/35 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/businesses", label: "Find a Pro" },
                { to: "/categories", label: "Categories" },
                { to: "/list-business", label: "List Your Business" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#E4EAF1]/55 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-[1px] w-3 bg-[#097DDD]/0 group-hover:bg-[#097DDD]/80 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-[#E4EAF1]/35 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-[#E4EAF1]/55">
                <div className="h-7 w-7 rounded-lg bg-[#097DDD]/12 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 text-[#097DDD]" />
                </div>
                hello@mylocalpro.com.au
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#E4EAF1]/55">
                <div className="h-7 w-7 rounded-lg bg-[#097DDD]/12 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-[#097DDD]" />
                </div>
                1300 555 010
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#E4EAF1]/55">
                <div className="h-7 w-7 rounded-lg bg-[#097DDD]/12 flex items-center justify-center shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-[#097DDD]" />
                </div>
                Hobart, TAS, Australia
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.22em] text-[#E4EAF1]/35 mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E4EAF1]/50 hover:bg-[#097DDD]/15 hover:border-[#097DDD]/40 hover:text-[#097DDD] transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E4EAF1]/50 hover:bg-[#097DDD]/15 hover:border-[#097DDD]/40 hover:text-[#097DDD] transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-xl bg-[#097DDD]/10 border border-[#097DDD]/20 p-4">
              <p className="text-[11px] font-bold text-[#E4EAF1]/60 mb-1 uppercase tracking-widest">Free for 2026</p>
              <p className="text-xs text-[#E4EAF1]/40 leading-relaxed">
                List your business free through 2026 — no credit card required.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-[#E4EAF1]/30">
          <p>© {new Date().getFullYear()} MyLocalPro Australia. All rights reserved.</p>
          <p>Proudly Tasmanian owned and operated.</p>
        </div>
      </div>
    </footer>
  );
}
