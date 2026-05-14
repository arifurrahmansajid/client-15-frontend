import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/mock-data";
import { motion } from "framer-motion";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/businesses"
      search={{ category: category.slug } as never}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_4px_24px_rgb(10,24,48,0.12)] hover:shadow-[0_12px_48px_rgb(10,24,48,0.22)] transition-all duration-500 hover:-translate-y-1"
    >
      {/* Background Image */}
      <motion.img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
      />

      {/* Gradient overlay — richer dark navy */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830]/95 via-[#0A1830]/30 to-transparent" />

      {/* Blue accent glow on hover */}
      <div className="absolute inset-0 bg-[#097DDD]/0 group-hover:bg-[#097DDD]/12 transition-all duration-500" />

      {/* Top badge */}
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-[#097DDD]/20 backdrop-blur-sm border border-[#097DDD]/30 px-3 py-1 text-[8px] font-black uppercase tracking-[0.22em] text-white/90">
          {category.name}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        {/* Blue accent line */}
        <div className="w-8 h-[2px] bg-[#097DDD] rounded-full mb-3 group-hover:w-12 transition-all duration-400" />

        <div className="flex items-end justify-between gap-4">
          <p className="text-sm font-semibold text-white leading-snug line-clamp-2 max-w-[200px]">
            {category.blurb}
          </p>
          <div className="shrink-0 h-9 w-9 rounded-xl border border-white/20 bg-white/8 flex items-center justify-center text-white group-hover:bg-[#097DDD] group-hover:border-[#097DDD] group-hover:shadow-[0_4px_16px_rgb(9,125,221,0.5)] transition-all duration-400">
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
