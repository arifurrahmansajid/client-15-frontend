import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/mock-data";
import { CategoryCard } from "@/components/cards/CategoryCard";

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
      <section className="bg-surface border-b border-border">
        <div className="container-app py-[50px] md:py-[50px]">
          <h1 className="text-3xl md:text-5xl font-bold">All categories</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Pick a category to find trusted local pros across Tasmania.
          </p>
        </div>
      </section>
      <section className="container-app py-[50px] md:py-[50px]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((c) => (<CategoryCard key={c.slug} category={c} />))}
        </div>
      </section>
    </>
  );
}
