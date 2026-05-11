import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import type { Category } from "@/lib/mock-data";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Wrench;
  return (
    <Link
      to="/businesses"
      search={{ category: category.slug } as never}
      className="group rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card hover:border-primary/30 hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-base leading-tight">{category.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{category.blurb}</p>
        </div>
      </div>
    </Link>
  );
}
