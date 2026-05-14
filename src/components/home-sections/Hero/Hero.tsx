import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MapPin, Star, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, LOCATIONS } from "@/lib/mock-data";
import { useState, useEffect } from "react";

const stats = [
  { value: "500+", label: "Local Pros" },
  { value: "19", label: "Service Types" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "Free", label: "For Customers" },
];

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=520&fit=crop",
    alt: "Electrician at work",
  },
  {
    src: "https://images.unsplash.com/photo-1504148455328-4adc7f820df4?w=800&h=520&fit=crop",
    alt: "Plumber working",
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=520&fit=crop",
    alt: "Lawn mowing and gardening",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?w=800&h=520&fit=crop",
    alt: "Professional painter",
  },
  {
    src: "https://images.unsplash.com/photo-1541888941259-792739460572?w=800&h=520&fit=crop",
    alt: "Builder at construction site",
  },
];

export function Hero() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [slideIdx, setSlideIdx] = useState(0);

  // Auto-advance every 3.5 s
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
      {/* Background image with dark overlay */}
      <AnimatePresence mode="sync">
        <motion.img
          key={slideIdx + "-bg"}
          src={heroSlides[slideIdx].src}
          alt="background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

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

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl"
            >
              <div className="grid md:grid-cols-[1fr_1fr_auto] gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#097DDD] px-1">Service Type</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#0A1830]/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-bold outline-none focus:border-[#097DDD] transition-all cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-[#0A1830]">What do you need?</option>
                    {CATEGORIES.map(c => <option key={c.slug} value={c.slug} className="bg-[#0A1830]">{c.name}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#097DDD] px-1">Location</label>
                  <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#0A1830]/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white font-bold outline-none focus:border-[#097DDD] transition-all cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-[#0A1830]">Where?</option>
                    {LOCATIONS.map(l => <option key={l} value={l} className="bg-[#0A1830]">{l}</option>)}
                  </select>
                </div>
                <div className="flex items-end">
                  <Link
                    to="/businesses"
                    search={{ category: category || undefined, location: location || undefined }}
                    className="shine-btn w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#097DDD] px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_rgb(9,125,221,0.4)] hover:shadow-[0_8px_32px_rgb(9,125,221,0.55)] transition-all"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Hero Image Slider Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Glowing border frame */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#097DDD]/50 to-transparent rounded-[2.5rem] blur-xl" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/12 shadow-[0_30px_80px_rgb(0,0,0,0.5)]">

              {/* Sliding images */}
              <div className="relative h-[520px] w-full">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={slideIdx}
                    src={heroSlides[slideIdx].src}
                    alt={heroSlides[slideIdx].alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830]/70 via-transparent to-transparent" />

                {/* Slide dots */}
                <div className="absolute top-5 right-5 flex gap-1.5 z-20">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIdx(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === slideIdx
                          ? "w-6 h-2 bg-[#097DDD]"
                          : "w-2 h-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4 flex items-center gap-4 z-20">
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
