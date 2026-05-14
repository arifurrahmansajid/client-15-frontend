import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { useState } from "react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — MyLocalPro | Trade Tips & Guides" },
      { name: "description", content: "Read the latest tips, cost guides, and advice for finding trusted local tradespeople in Australia." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [search, setSearch] = useState("");
  const filtered = BLOG_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0A1830] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #097DDD 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#097DDD]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-app relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label-dark mb-6 inline-flex"
          >
            Knowledge Hub
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our <span className="text-[#097DDD]">Blogs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto mb-10"
          >
            Cost guides, how-to articles, and trade tips to help Australians hire smarter.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs..."
              className="w-full bg-white/10 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-white/40 text-sm font-medium outline-none focus:border-[#097DDD] transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          {filtered.length === 0 ? (
            <p className="text-center text-[#5a7089] py-16">No blogs found for "{search}".</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group block bg-white rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgb(10,24,48,0.06)] hover:shadow-[0_12px_48px_rgb(10,24,48,0.12)] transition-all duration-400 hover:-translate-y-2 border border-slate-100 h-full"
                  >
                    <div className="relative h-[220px] overflow-hidden bg-[#0A1830]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#097DDD] rounded-full px-3 py-1 z-10">
                        <Tag className="h-3 w-3 text-white" />
                        <span className="text-[10px] font-black uppercase tracking-wide text-white">{post.category}</span>
                      </div>
                      <div className="absolute bottom-5 left-6 right-6 z-10">
                        <h2 className="text-white font-black text-lg leading-tight line-clamp-2">{post.title}</h2>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-sm text-[#5a7089] leading-relaxed line-clamp-3 mb-5 flex-1">{post.excerpt}</p>
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
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
