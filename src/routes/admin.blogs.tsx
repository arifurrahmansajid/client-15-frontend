import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  PlusCircle, Pencil, Trash2, Eye, Clock, Tag, Save, X, ArrowLeft,
} from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";

export const Route = createFileRoute("/admin/blogs")({
  head: () => ({
    meta: [{ title: "Blog Manager — Admin" }, { name: "robots", content: "noindex,nofollow" }],
  }),
  component: AdminBlogsPage,
});

type FormState = Omit<BlogPost, "id">;

const EMPTY_FORM: FormState = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  image: "",
  category: "",
  author: "MyLocalPro Team",
  publishedAt: new Date().toISOString().split("T")[0],
  readTime: 3,
};

function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setEditing(null);
    setCreating(true);
  };

  const openEdit = (post: BlogPost) => {
    const { id, ...rest } = post;
    setForm(rest);
    setEditing(post);
    setCreating(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this blog post?")) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleSave = () => {
    if (!form.title || !form.slug) return alert("Title and slug are required.");
    if (editing) {
      setPosts((prev) => prev.map((p) => (p.id === editing.id ? { ...form, id: editing.id } : p)));
    } else {
      const newPost: BlogPost = { ...form, id: Date.now().toString() };
      setPosts((prev) => [newPost, ...prev]);
    }
    setCreating(false);
    setEditing(null);
  };

  const field = (key: keyof FormState) => ({
    value: form[key] as string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: key === "readTime" ? Number(e.target.value) : e.target.value })),
  });

  if (creating) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setCreating(false)} className="h-9 w-9 rounded-xl border border-[#E4EAF1] flex items-center justify-center hover:bg-[#E4EAF1] transition-all">
            <ArrowLeft className="h-4 w-4 text-[#0A1830]" />
          </button>
          <h1 className="text-2xl font-black text-[#0A1830]">{editing ? "Edit Blog Post" : "New Blog Post"}</h1>
        </div>

        <div className="bg-white rounded-2xl border border-[#E4EAF1] shadow-sm p-8 space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Title *</label>
              <input {...field("title")} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all" placeholder="Blog post title" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Slug *</label>
              <input {...field("slug")} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all" placeholder="url-friendly-slug" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Category</label>
              <input {...field("category")} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all" placeholder="e.g. Plumbing" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Author</label>
              <input {...field("author")} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Read Time (mins)</label>
              <input type="number" {...field("readTime")} min={1} max={60} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all" />
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Cover Image URL</label>
            <input {...field("image")} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all" placeholder="https://images.unsplash.com/..." />
            {form.image && (
              <div className="mt-2 h-32 w-full rounded-xl overflow-hidden border border-[#E4EAF1]">
                <img src={form.image} alt="Preview" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            )}
          </div>

          {/* Excerpt */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Excerpt</label>
            <textarea {...field("excerpt")} rows={3} className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-medium text-[#0A1830] outline-none focus:border-[#097DDD] transition-all resize-none" placeholder="Short description shown on the blog card..." />
          </div>

          {/* Full content */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-[#097DDD]">Content (Markdown)</label>
            <textarea
              {...field("content")}
              rows={18}
              className="w-full border border-[#E4EAF1] rounded-xl px-4 py-3 text-sm font-mono text-[#0A1830] outline-none focus:border-[#097DDD] transition-all resize-y"
              placeholder="# Blog Title&#10;&#10;Write your content in markdown..."
            />
            <p className="text-[11px] text-[#5a7089]">Supports Markdown: # Heading, ## Subheading, **bold**, - list items</p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#E4EAF1]">
            <button
              onClick={() => setCreating(false)}
              className="h-11 px-6 rounded-xl border border-[#E4EAF1] text-sm font-bold text-[#5a7089] hover:bg-[#f8fafc] transition-all flex items-center gap-2"
            >
              <X className="h-4 w-4" /> Cancel
            </button>
            <button
              onClick={handleSave}
              className="h-11 px-8 rounded-xl bg-[#097DDD] text-sm font-black text-white hover:bg-[#0a8ef0] transition-all shadow-[0_4px_16px_rgb(9,125,221,0.3)] flex items-center gap-2"
            >
              <Save className="h-4 w-4" /> {editing ? "Save Changes" : "Publish Post"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-[#0A1830]">Blog Manager</h1>
          <p className="text-sm text-[#5a7089] mt-1">{posts.length} published post{posts.length !== 1 ? "s" : ""}</p>
        </div>
        <button
          onClick={openCreate}
          className="h-11 px-6 rounded-xl bg-[#097DDD] text-sm font-black text-white hover:bg-[#0a8ef0] transition-all shadow-[0_4px_16px_rgb(9,125,221,0.3)] flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" /> New Post
        </button>
      </div>

      {/* Blog list */}
      <div className="grid grid-cols-1 gap-5">
        {posts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-2xl border border-[#E4EAF1] shadow-sm p-6 flex gap-5 items-start hover:shadow-md transition-all"
          >
            {/* Thumbnail */}
            <div className="shrink-0 h-20 w-28 rounded-xl overflow-hidden bg-[#E4EAF1]">
              {post.image && (
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="flex items-center gap-1 bg-[#097DDD]/10 text-[#097DDD] rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide">
                  <Tag className="h-2.5 w-2.5" /> {post.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-[#5a7089]">
                  <Clock className="h-3 w-3" /> {post.readTime} min
                </span>
              </div>
              <h3 className="text-base font-black text-[#0A1830] leading-snug truncate">{post.title}</h3>
              <p className="text-xs text-[#5a7089] mt-1 line-clamp-2">{post.excerpt}</p>
              <p className="text-[11px] text-[#5a7089]/60 mt-2">by {post.author} · {new Date(post.publishedAt).toLocaleDateString("en-AU")}</p>
            </div>

            {/* Actions */}
            <div className="shrink-0 flex items-center gap-2">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                target="_blank"
                className="h-9 w-9 rounded-xl border border-[#E4EAF1] flex items-center justify-center text-[#5a7089] hover:bg-[#097DDD] hover:text-white hover:border-[#097DDD] transition-all"
              >
                <Eye className="h-4 w-4" />
              </Link>
              <button
                onClick={() => openEdit(post)}
                className="h-9 w-9 rounded-xl border border-[#E4EAF1] flex items-center justify-center text-[#5a7089] hover:bg-[#0A1830] hover:text-white hover:border-[#0A1830] transition-all"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="h-9 w-9 rounded-xl border border-[#E4EAF1] flex items-center justify-center text-[#5a7089] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
