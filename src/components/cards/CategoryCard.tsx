import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/mock-data";
import { motion } from "framer-motion";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/businesses"
      search={{ category: category.slug } as never}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl"
    >
      {/* Background Image */}
      <motion.img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-1/2">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">
          {category.name}
        </h3>
        <div className="flex items-end justify-between gap-4">
          <p className="text-sm font-medium text-white line-clamp-2 leading-snug">
            {category.blurb}
          </p>
          <div className="shrink-0 h-8 w-8 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
