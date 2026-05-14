import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/mock-data";
import { CategoryCard } from "@/components/cards/CategoryCard";

export function TradeCategories() {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-[70px] md:py-[100px] overflow-hidden bg-white">
      <div className="container-app">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              All Trades Available
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#0A1830] leading-[1.1] max-w-xl"
            >
              Browse{" "}
              <span className="text-[#097DDD]">19 local services</span>{" "}
              and find the right pro.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="h-12 w-12 rounded-full bg-[#E4EAF1] border border-[#cdd6e3] flex items-center justify-center text-[#0A1830] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] hover:shadow-[0_4px_20px_rgb(9,125,221,0.35)] transition-all duration-300 group"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="h-5 w-5 group-active:scale-90 transition-transform" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="h-12 w-12 rounded-full bg-[#E4EAF1] border border-[#cdd6e3] flex items-center justify-center text-[#0A1830] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] hover:shadow-[0_4px_20px_rgb(9,125,221,0.35)] transition-all duration-300 group"
                aria-label="Scroll Right"
              >
                <ChevronRight className="h-5 w-5 group-active:scale-90 transition-transform" />
              </button>
            </div>

            <Link
              to="/categories"
              className="shine-btn inline-flex items-center gap-2 h-12 rounded-xl bg-[#0A1830] px-7 text-[10px] font-black uppercase tracking-widest text-white hover:bg-[#097DDD] hover:shadow-[0_4px_24px_rgb(9,125,221,0.4)] transition-all duration-300 group"
            >
              View All
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container-app">
        <div
          id="category-scroll-container"
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES.map((c, idx) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * idx, duration: 0.5 }}
              className="min-w-[290px] md:min-w-[380px] snap-start"
            >
              <CategoryCard category={c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
