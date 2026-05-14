import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Calendar, User, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — MyLocalPro Blog` : "Blog — MyLocalPro" },
        { name: "description", content: post?.excerpt ?? "" },
      ],
    };
  },
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0A1830] mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#097DDD] font-bold hover:underline">← Back to Blogs</Link>
        </div>
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  // Improved markdown-to-HTML renderer for our content
  const renderContent = (md: string) => {
    const lines = md.split("\n");
    let inList = false;
    let inTable = false;

    return lines.map((line, i) => {
      // Headers
      if (line.startsWith("# ")) return <h1 key={i} className="text-3xl md:text-5xl font-black text-[#0A1830] mb-8 mt-10 leading-tight">{line.slice(2)}</h1>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-2xl md:text-3xl font-black text-[#0A1830] mb-5 mt-10 leading-tight">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-black text-[#0A1830] mb-4 mt-8 leading-tight">{line.slice(4)}</h3>;

      // Tables
      if (line.startsWith("|") && line.includes("---")) {
        inTable = true;
        return null;
      }
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(c => c.trim() !== "");
        return (
          <div key={i} className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-[#E4EAF1] rounded-xl overflow-hidden">
              <tbody>
                <tr className={i === lines.findIndex(l => l.startsWith("|")) ? "bg-[#f8fafc]" : ""}>
                  {cells.map((cell, j) => (
                    <td key={j} className="border border-[#E4EAF1] px-4 py-3 text-sm font-medium text-[#0A1830]">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      // Lists
      if (line.startsWith("- ") || line.match(/^\d+\. /)) {
        return (
          <div key={i} className="flex items-start gap-3 ml-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[#097DDD] mt-2.5 shrink-0" />
            <p className="text-[#5a7089] text-base md:text-lg leading-relaxed">
              {line.replace(/^[-\d.]+\s/, "")}
            </p>
          </div>
        );
      }

      // Paragraphs with bold support
      if (line.trim() === "") return <div key={i} className="h-4" />;
      
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-[#5a7089] text-base md:text-lg leading-relaxed mb-6">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-[#0A1830] font-black">{part}</strong> : part)}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] bg-[#0A1830] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1830]/60 via-[#0A1830]/50 to-[#0A1830]" />

        <div className="absolute inset-0 flex flex-col justify-end container-app pb-12 z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blogs
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 bg-[#097DDD] rounded-full px-3 py-1">
                <Tag className="h-3 w-3 text-white" />
                <span className="text-[10px] font-black uppercase tracking-wide text-white">{post.category}</span>
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs">
                <Clock className="h-3.5 w-3.5" /> {post.readTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-5 mt-5 text-white/50 text-xs font-medium">
              <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(post.publishedAt).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article content */}
      <section className="py-16">
        <div className="container-app max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose max-w-none"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 rounded-3xl bg-[#0A1830] text-white text-center"
          >
            <h3 className="text-2xl font-black mb-3">Find a Trusted Tradie Today</h3>
            <p className="text-white/60 text-sm mb-6">Search thousands of verified local professionals across Australia.</p>
            <Link
              to="/businesses"
              className="shine-btn inline-flex items-center gap-2 rounded-xl bg-[#097DDD] px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_rgb(9,125,221,0.4)] hover:bg-[#0a8ef0] transition-all"
            >
              Find a Pro <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container-app">
            <h2 className="text-3xl font-black text-[#0A1830] mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block bg-white rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgb(10,24,48,0.06)] hover:shadow-[0_12px_48px_rgb(10,24,48,0.12)] transition-all duration-400 hover:-translate-y-2 border border-slate-100 h-full"
                >
                  <div className="relative h-[220px] overflow-hidden bg-[#0A1830]">
                    <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-5 left-6 right-6 z-10">
                      <h3 className="text-white font-black text-lg leading-tight line-clamp-2">{p.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[#097DDD] text-sm font-black flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                      Explore More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
