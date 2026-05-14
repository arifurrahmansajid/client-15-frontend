import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { useRef } from "react";

const CARD_W = 360;
const GAP = 24;

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(CARD_W + GAP) : (CARD_W + GAP),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-[70px] md:py-[100px] bg-white overflow-hidden">
      {/* Header */}
      <div className="container-app mb-10">
        <div className="flex items-center justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-[#0A1830]"
          >
            Our <span className="text-[#097DDD]">Blogs</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {/* Nav arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="h-10 w-10 rounded-full bg-[#0A1830] flex items-center justify-center text-white hover:bg-[#097DDD] transition-all duration-300 active:scale-95"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="h-10 w-10 rounded-full bg-[#097DDD] flex items-center justify-center text-white hover:bg-[#0a8ef0] transition-all duration-300 active:scale-95"
                aria-label="Scroll Right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <Link
              to="/blog"
              className="shine-btn h-10 inline-flex items-center gap-2 px-6 rounded-xl bg-[#097DDD] text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_6px_20px_rgb(9,125,221,0.3)] hover:bg-[#0a8ef0] transition-all duration-300"
            >
              View All
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Full-bleed slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pl-5"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {BLOG_POSTS.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{ minWidth: CARD_W, maxWidth: CARD_W }}
            className="flex-shrink-0"
          >
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group block bg-white rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgb(10,24,48,0.06)] hover:shadow-[0_12px_48px_rgb(10,24,48,0.12)] transition-all duration-400 hover:-translate-y-2 border border-slate-100 h-full"
            >
              {/* Card image with title overlay */}
              <div className="relative overflow-hidden bg-[#0A1830]" style={{ height: 210 }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830] via-transparent to-transparent opacity-80" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#097DDD] rounded-full px-3 py-1 z-10">
                  <Tag className="h-3 w-3 text-white" />
                  <span className="text-[10px] font-black uppercase tracking-wide text-white">
                    {post.category}
                  </span>
                </div>

                {/* Title on image */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h3 className="text-white font-black text-lg leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-sm text-[#5a7089] leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[#097DDD] text-sm font-black group-hover:gap-3 transition-all duration-300">
                    Explore More <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#5a7089] font-medium">
                    <Clock className="h-3 w-3" /> {post.readTime} min read
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Right padding sentinel */}
        <div className="shrink-0 w-5" aria-hidden />
      </div>
    </section>
  );
}
