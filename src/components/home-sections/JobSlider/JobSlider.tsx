import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/mock-data";

export function JobSlider() {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('job-scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // We'll use a subset or just a few specific ones to match the "trade" feel of the image
  const featuredTrades = CATEGORIES.filter(c => 
    ["plumbers", "electricians", "builders", "painters", "roofers", "concreters", "plasterers", "landscapers"].includes(c.slug)
  );

  return (
    <section className="py-[70px] md:py-[100px] overflow-hidden bg-white">
      <div className="container-app">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0A1830] leading-tight"
          >
            Find the <span className="text-[#097DDD]">Right Jobs</span> <br className="hidden md:block" />
            As Per Your Needs
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="h-12 w-12 rounded-full border border-[#cdd6e3] flex items-center justify-center text-[#0A1830] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] transition-all duration-300"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="h-12 w-12 rounded-full border border-[#cdd6e3] flex items-center justify-center text-[#0A1830] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] transition-all duration-300"
                aria-label="Scroll Right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <Link
              to="/categories"
              className="shine-btn h-12 inline-flex items-center justify-center px-8 rounded-xl bg-[#097DDD] text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_8px_32px_rgb(9,125,221,0.3)] hover:bg-[#0a8ef0] transition-all duration-300"
            >
              View All
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full">
        <div
          id="job-scroll-container"
          className="flex gap-5 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory px-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredTrades.map((trade, idx) => (
            <motion.div
              key={trade.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[80vw] sm:min-w-[45vw] md:min-w-[32vw] lg:min-w-[23vw] aspect-[4/5] snap-start flex-shrink-0"
            >
              <Link
                to="/businesses"
                search={{ category: trade.slug } as any}
                className="group relative block h-full w-full overflow-hidden rounded-[2rem] shadow-[0_8px_32px_rgb(10,24,48,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgb(10,24,48,0.2)]"
              >
                {/* Background Image */}
                <img
                  src={trade.image}
                  alt={trade.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830] via-[#0A1830]/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Blue Tint */}
                <div className="absolute inset-0 bg-[#097DDD]/0 group-hover:bg-[#097DDD]/5 transition-colors duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mb-1">
                      {trade.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/70 font-medium line-clamp-2 max-w-[85%]">
                      {trade.blurb}
                    </p>
                  </div>
                  
                  {/* Floating Arrow Icon */}
                  <div className="absolute bottom-8 right-8 h-11 w-11 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
