import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";
import { BUSINESSES, CATEGORIES, LOCATIONS } from "@/lib/mock-data";
import { BusinessCard } from "@/components/cards/BusinessCard";
import { motion } from "framer-motion";

type Search = { category?: string; location?: string };

export const Route = createFileRoute("/businesses")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: typeof s.category === "string" ? s.category : undefined,
    location: typeof s.location === "string" ? s.location : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Find a Local Pro — MyLocalPro Australia" },
      { name: "description", content: "Browse trusted local tradespeople and service providers across Australia." },
    ],
  }),
  component: BusinessesPage,
});

function BusinessesPage() {
  const initial = Route.useSearch();
  const [category, setCategory] = useState(initial.category ?? "");
  const [location, setLocation] = useState(initial.location ?? "");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return BUSINESSES.filter((b) => {
      if (category && b.category !== category) return false;
      if (location && b.location !== location) return false;
      return true;
    });
  }, [category, location]);

  const hasFilters = category || location;

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-navy-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#097DDD]/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="container-app relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label-dark mb-4 block"
          >
            {BUSINESSES.length}+ Verified Tasmanian Professionals
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-3"
          >
            Find Trusted <br />
            <span className="text-[#097DDD]">Local Services</span> in Tasmania
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 max-w-xl text-base leading-relaxed"
          >
            Choose a service and your region to connect directly with local businesses ready to help.
          </motion.p>
        </div>

      </section>

      {/* ── Search / Filter Bar ── */}
      <section className="container-app -mt-8 relative z-10 py-6">
        <div className="rounded-2xl bg-white border border-[#cdd6e3] shadow-[0_12px_48px_rgb(10,24,48,0.12)] p-4 grid md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-4 items-center">
          <label className="flex flex-col gap-1 px-4 py-2 bg-[#E4EAF1]/30 rounded-xl hover:bg-[#E4EAF1]/50 transition-colors border border-transparent hover:border-[#097DDD]/20">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#097DDD] font-black">Type of Business</span>
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-[#097DDD] shrink-0" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent py-1.5 outline-none text-sm text-[#0A1830] font-black cursor-pointer appearance-none"
              >
                <option value="">Select Service...</option>
                {CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </div>
          </label>

          <label className="flex flex-col gap-1 px-4 py-2 bg-[#E4EAF1]/30 rounded-xl hover:bg-[#E4EAF1]/50 transition-colors border border-transparent hover:border-[#097DDD]/20">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#097DDD] font-black">Location</span>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#097DDD] shrink-0" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent py-1.5 outline-none text-sm text-[#0A1830] font-black cursor-pointer appearance-none"
              >
                <option value="">Select Region...</option>
                {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </label>

          <div className="flex items-center gap-3">
            <button
              className="shine-btn flex items-center justify-center gap-2 rounded-xl bg-[#097DDD] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:bg-[#0a8ef0] transition-all"
            >
              <Search className="h-3.5 w-3.5" />
              Search
            </button>
            <button
              disabled={!hasFilters}
              onClick={() => { setCategory(""); setLocation(""); }}
              className="flex items-center gap-2 px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-[#5a7089] hover:text-[#0A1830] disabled:opacity-30 transition-colors"
            >
              Reset
            </button>
            <div className="h-10 w-[1px] bg-[#cdd6e3] hidden lg:block" />
            <div className="px-6 py-4 hidden lg:flex flex-col">
              <span className="text-[10px] font-black text-[#0A1830] leading-none">{results.length}</span>
              <span className="text-[8px] font-black uppercase tracking-widest text-[#5a7089]">Found</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="container-app pb-20">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-[#5a7089]">
            <span className="text-[#0A1830] font-black">{results.length}</span>{" "}
            {results.length === 1 ? "result" : "results"} found
          </p>
          {hasFilters && (
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#097DDD] bg-[#097DDD]/8 rounded-full px-3 py-1">
              Filtered
            </span>
          )}
        </div>

        {results.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-[#cdd6e3] bg-[#E4EAF1]/40 p-16 text-center">
            <div className="h-16 w-16 rounded-2xl bg-[#097DDD]/10 flex items-center justify-center mx-auto mb-4">
              <Search className="h-7 w-7 text-[#097DDD]" />
            </div>
            <h3 className="text-xl font-black text-[#0A1830] mb-2">No matches found</h3>
            <p className="text-sm text-[#5a7089] mb-6">Try clearing your filters or browse all categories.</p>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-xl bg-[#097DDD] px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-[#0a8ef0] transition-colors"
            >
              Browse all categories
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <BusinessCard business={b} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
