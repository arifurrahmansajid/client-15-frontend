import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MapPin, Star, Users } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Local Pros" },
  { value: "19", label: "Service Types" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "Free", label: "For Customers" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
      {/* Background image with dark overlay */}
      <img
        src={heroImg}
        alt="Local tradie at work"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      {/* Layered gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1830] via-[#0A1830]/90 to-[#0A1830]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830] via-transparent to-transparent" />

      {/* Decorative blue glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#097DDD]/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#097DDD]/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #097DDD 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container-app pt-32 pb-20 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">

          {/* ── Left Content ── */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Label pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="section-label-dark">
                <MapPin className="h-2.5 w-2.5" />
                Trusted Local Services — Australia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-black leading-[1.08] text-white"
            >
              Find Trusted{" "}
              <span className="relative inline-block">
                <span className="text-[#097DDD]">Local Pros</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#097DDD] to-[#097DDD]/0 rounded-full" />
              </span>
              <br />
              Near You — Fast.
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#E4EAF1]/70 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Search by service and location, connect directly with verified
              tradies, and get the job done. Free for customers — always.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                "Verified Professionals",
                "No Hidden Fees",
                "Instant Contact",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E4EAF1]/80"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-[#097DDD]" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/businesses"
                className="shine-btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#097DDD] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_6px_30px_rgb(9,125,221,0.45)] hover:shadow-[0_8px_40px_rgb(9,125,221,0.6)] hover:bg-[#0a8ef0] transition-all duration-300 group"
              >
                Find a Local Pro
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/list-business"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/6 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white/90 hover:bg-white/12 hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              >
                List Your Business
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Hero Image Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Glowing border frame */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#097DDD]/50 to-transparent rounded-[2.5rem] blur-xl" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/12 shadow-[0_30px_80px_rgb(0,0,0,0.5)]">
              <img
                src={heroImg}
                alt="Tradie at work"
                className="h-[520px] w-full object-cover"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830]/60 to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#097DDD] flex items-center justify-center shrink-0">
                  <Star className="h-5 w-5 text-white fill-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Top-Rated Pros</div>
                  <div className="text-white/50 text-xs">Verified & reviewed by real customers</div>
                </div>
                <div className="ml-auto flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-[#0A1830] bg-gradient-to-br from-[#097DDD] to-[#0a8ef0] flex items-center justify-center text-[9px] font-bold text-white"
                    >
                      {["J", "S", "M", "A"][i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
