import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Search } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-[70px] md:py-[90px] bg-white">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-navy-gradient p-10 md:p-16"
        >
          {/* Glow blob */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#097DDD]/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#097DDD]/10 rounded-full blur-[70px] pointer-events-none" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-xl space-y-4">
              <span className="section-label-dark">For Local Tradies</span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Are you a local tradie?
                <br />
                <span className="text-[#097DDD]">Get found by more customers.</span>
              </h2>
              <p className="text-[#E4EAF1]/65 text-base leading-relaxed">
                List your business in minutes and reach Australians actively looking for your
                services. Free to join — no lock-in contracts.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-[#E4EAF1]/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#097DDD]" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2 text-sm text-[#E4EAF1]/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#097DDD]" />
                  Cancel anytime
                </div>
                <div className="flex items-center gap-2 text-sm text-[#E4EAF1]/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#097DDD]" />
                  Instant visibility
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
              <Link
                to="/list-business"
                className="shine-btn inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#097DDD] px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_6px_30px_rgb(9,125,221,0.5)] hover:shadow-[0_8px_40px_rgb(9,125,221,0.65)] hover:bg-[#0a8ef0] transition-all duration-300 group"
              >
                <Building2 className="h-4 w-4" />
                List Your Business
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/businesses"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/7 px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white/85 hover:bg-white/12 hover:border-white/25 transition-all duration-300 backdrop-blur-sm group"
              >
                <Search className="h-4 w-4" />
                Browse Pros
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
