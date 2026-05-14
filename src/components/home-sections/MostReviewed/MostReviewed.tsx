import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, Star, MapPin } from "lucide-react";
import { BUSINESSES } from "@/lib/mock-data";
import { useRef } from "react";

const CARD_W = 240; // px — card width
const GAP = 16;     // px — gap between cards

export function MostReviewed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(CARD_W + GAP) * 2 : (CARD_W + GAP) * 2,
        behavior: "smooth",
      });
    }
  };

  const topTradies = [...BUSINESSES].sort((a, b) => b.reviews - a.reviews);

  return (
    <section className="py-[70px] md:py-[100px] bg-[#f8fafc] overflow-hidden">
      {/* Header stays in container */}
      <div className="container-app mb-10">
        <div className="flex items-center justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-[#0A1830]"
          >
            Most Reviewed <span className="text-[#097DDD]">Tradies</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => scroll("left")}
              className="h-11 w-11 rounded-full border border-[#cdd6e3] flex items-center justify-center text-[#0A1830] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] transition-all duration-300 active:scale-95"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-11 w-11 rounded-full border border-[#cdd6e3] flex items-center justify-center text-[#0A1830] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] transition-all duration-300 active:scale-95"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Full-bleed slider — no container wrapper */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 pl-5"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {topTradies.map((business, idx) => (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            style={{ minWidth: CARD_W, maxWidth: CARD_W }}
            className="flex-shrink-0"
          >
            <Link
              to="/businesses/$id"
              params={{ id: business.id }}
              className="group block rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(10,24,48,0.09)] hover:shadow-[0_10px_36px_rgb(10,24,48,0.16)] transition-all duration-300 hover:-translate-y-1.5 bg-white h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <img
                  src={business.image}
                  alt={business.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Top gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

                {/* ✓ Premium Verified badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-emerald-500 rounded-full px-2.5 py-1 z-10 shadow-md">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                  <span className="text-[9px] font-black uppercase tracking-wide text-white leading-none">
                    Premium Verified
                  </span>
                </div>

                {/* Star rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/45 backdrop-blur-sm rounded-full px-2 py-1 z-10">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-[10px] font-bold text-white">{business.rating}</span>
                </div>
              </div>

              {/* Footer info */}
              <div className="bg-white px-4 py-3.5 border-t border-slate-100">
                <p className="text-sm font-black text-[#0A1830] truncate leading-tight mb-1">
                  {business.name}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 min-w-0">
                    <MapPin className="h-3 w-3 text-[#097DDD] shrink-0" />
                    <p className="text-[11px] text-[#5a7089] truncate font-medium">{business.suburb}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1">
                    <span className="text-[11px] text-[#097DDD] font-black">{business.reviews}</span>
                    <span className="text-[10px] text-[#5a7089] font-semibold">reviews</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Right padding sentinel — fills the gap at the end */}
        <div className="shrink-0 w-5" aria-hidden />
      </div>
    </section>
  );
}
