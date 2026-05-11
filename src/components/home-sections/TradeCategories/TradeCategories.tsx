import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="container-app py-24 md:py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Explore Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
          >
            Find the <span className="text-primary">Right Jobs</span> <br />
            As Per Your Needs
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="h-14 w-14 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xl shadow-slate-200/50 group"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-6 w-6 group-active:scale-90 transition-transform" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-14 w-14 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xl shadow-slate-200/50 group"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-6 w-6 group-active:scale-90 transition-transform" />
            </button>
          </div>

          <Link
            to="/categories"
            className="group relative h-14 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-10 text-xs font-black uppercase tracking-widest text-white hover:bg-primary transition-all duration-300 shadow-2xl shadow-slate-900/20 overflow-hidden"
          >
            <span className="relative z-10">View All</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      <div
        id="category-scroll-container"
        className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CATEGORIES.map((c, idx) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="min-w-[320px] md:min-w-[420px] snap-start"
          >
            <CategoryCard category={c} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
