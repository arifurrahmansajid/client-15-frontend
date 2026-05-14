import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { BUSINESSES, CATEGORIES, LOCATIONS } from "@/lib/mock-data";
import { BusinessCard } from "@/components/cards/BusinessCard";

type Search = { category?: string; location?: string };

export const Route = createFileRoute("/businesses")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    category: typeof s.category === "string" ? s.category : undefined,
    location: typeof s.location === "string" ? s.location : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Find a Local Pro — MyLocalPro Australia" },
      { name: "description", content: "Browse trusted local tradespeople and service providers across Tasmania." },
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
      if (query && !`${b.name} ${b.description} ${b.suburb}`.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [category, location, query]);

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="container-app py-[50px] md:py-[50px]">
          <h1 className="text-3xl md:text-5xl font-bold">Find a local pro</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Browse {BUSINESSES.length}+ trusted Tasmanian businesses. Filter by service or location.
          </p>
        </div>
      </section>

      <section className="container-app -mt-6 relative z-10">
        <div className="rounded-2xl bg-card border border-border shadow-card p-3 grid md:grid-cols-[1fr_1fr_1fr_auto] gap-2 items-center">
          <label className="flex items-center gap-2 px-3">
            <Search className="h-4 w-4 text-primary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or keyword"
              className="w-full bg-transparent py-2.5 outline-none text-sm"
            />
          </label>
          <label className="flex items-center gap-2 px-3 md:border-l md:border-border">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-transparent py-2.5 outline-none text-sm">
              <option value="">All services</option>
              {CATEGORIES.map((c) => (<option key={c.slug} value={c.slug}>{c.name}</option>))}
            </select>
          </label>
          <label className="flex items-center gap-2 px-3 md:border-l md:border-border">
            <MapPin className="h-4 w-4 text-primary" />
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-transparent py-2.5 outline-none text-sm">
              <option value="">All locations</option>
              {LOCATIONS.map((l) => (<option key={l} value={l}>{l}</option>))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => { setCategory(""); setLocation(""); setQuery(""); }}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        </div>
      </section>

      <section className="container-app py-[50px]">
        <p className="text-sm text-muted-foreground mb-6">{results.length} {results.length === 1 ? "result" : "results"}</p>
        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <h3 className="text-lg font-semibold">No matches found</h3>
            <p className="mt-2 text-sm text-muted-foreground">Try clearing your filters or browse all categories.</p>
            <Link to="/categories" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
              Browse all categories
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((b) => (<BusinessCard key={b.id} business={b} />))}
          </div>
        )}
      </section>
    </>
  );
}
