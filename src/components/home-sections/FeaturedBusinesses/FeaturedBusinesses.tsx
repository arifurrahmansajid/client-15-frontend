import { Link } from "@tanstack/react-router";
import { BUSINESSES } from "@/lib/mock-data";
import { BusinessCard } from "@/components/cards/BusinessCard";

export function FeaturedBusinesses() {
  return (
    <section className="container-app py-[70px] md:py-[100px]">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold">Featured local pros</h2>
          <p className="mt-3 text-muted-foreground">Hand-picked Tasmanian businesses our customers love.</p>
        </div>
        <Link to="/businesses" className="text-sm font-semibold text-primary hover:underline">
          View all →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESSES.slice(0, 6).map((b) => (
          <BusinessCard key={b.id} business={b} />
        ))}
      </div>
    </section>
  );
}
