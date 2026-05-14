import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";
import { LOCATIONS } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="bg-[#0A1830] relative overflow-visible mt-12">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-[#097DDD]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#E4EAF1]/3 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #E4EAF1 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-app relative z-10 pt-16">
        {/* ── Top Floating CTA Banner ── */}
        <div className="relative -mt-28 mb-16 rounded-[2rem] bg-gradient-to-r from-[#0A1830] to-[#0d2244] border border-[#097DDD]/30 shadow-[0_20px_60px_rgb(9,125,221,0.15)] p-8 md:p-12 overflow-hidden group">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#097DDD]/10 rounded-full blur-[60px] group-hover:bg-[#097DDD]/20 transition-all duration-700" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                Grow your business in <span className="text-[#097DDD]">Tasmania</span>
              </h3>
              <p className="text-[#E4EAF1]/70 text-sm md:text-base leading-relaxed">
                Join Tasmania’s premium local services platform. Connect directly with customers searching for businesses like yours across Hobart, Launceston, Devonport, and Burnie.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/list-business"
                className="shine-btn flex items-center justify-center gap-2 rounded-xl bg-[#097DDD] px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_8px_32px_rgb(9,125,221,0.4)] hover:bg-[#0a8ef0] hover:-translate-y-1 transition-all duration-300"
              >
                List For Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/businesses"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Find a Pro
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="grid gap-12 md:gap-8 lg:grid-cols-12 pb-16">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link to="/" className="inline-block mb-6">
              <img src={logoImg} alt="MyLocalPro" className="h-12 w-auto object-contain brightness-110 drop-shadow-lg" />
            </Link>
            <p className="text-sm text-[#E4EAF1]/50 leading-relaxed mb-8">
              MyLocalPro is Tasmania's trusted directory connecting local residents with verified professionals. No middlemen, no hidden fees.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-[#097DDD]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Verified Pros</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <Star className="h-4 w-4 text-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Real Reviews</span>
              </div>
            </div>
          </div>

          {/* Links Grid (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Regions */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-6">Regions</h4>
              <ul className="space-y-4">
                {LOCATIONS.map((loc) => (
                  <li key={loc}>
                    <Link
                      to="/businesses"
                      search={{ location: loc }}
                      className="text-sm text-[#E4EAF1]/60 hover:text-[#097DDD] transition-colors duration-200"
                    >
                      {loc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {[
                  { to: "/", label: "Home" },
                  { to: "/categories", label: "All Categories" },
                  { to: "/list-business", label: "For Businesses" },
                  { to: "/terms", label: "Terms of Service" },
                  { to: "/privacy-policy", label: "Privacy Policy" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#E4EAF1]/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white mb-6">Get in Touch</h4>
              <ul className="space-y-4 mb-8">
                <li>
                  <a href="mailto:hello@mylocalpro.com.au" className="flex items-center gap-3 text-sm text-[#E4EAF1]/60 hover:text-white transition-colors group">
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#097DDD]/20 transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    hello@mylocalpro.com.au
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#E4EAF1]/60">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  Tasmania, Australia
                </li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-[#E4EAF1]/60 hover:bg-[#097DDD] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-[#E4EAF1]/60 hover:bg-[#097DDD] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium tracking-wide text-[#E4EAF1]/40">
            © {new Date().getFullYear()} MyLocalPro Australia. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#E4EAF1]/30">
            <MapPin className="h-3 w-3" />
            Proudly Tasmanian
          </div>
        </div>
      </div>
    </footer>
  );
}
