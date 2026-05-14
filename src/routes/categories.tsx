import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/mock-data";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { motion } from "framer-motion";
import { Grid3x3 } from "lucide-react";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — MyLocalPro Australia" },
      { name: "description", content: "Browse all 19 trade and service categories on MyLocalPro Australia." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <>
      {/* ── Banner ── */}
      <section className="relative bg-navy-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-1/3 w-[400px] h-[300px] bg-[#097DDD]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="container-app relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label-dark mb-4 block"
          >
            <Grid3x3 className="inline h-2.5 w-2.5 mr-1" />
            {CATEGORIES.length} Service Types
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-3"
          >
            All{" "}
            <span className="text-[#097DDD]">Categories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 max-w-xl text-base"
          >
            Pick a category to find trusted local pros across Australia.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container-app py-14 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((c, idx) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.45 }}
            >
              <CategoryCard category={c} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
