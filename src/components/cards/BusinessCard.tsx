import { Link } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";
import type { Business } from "@/lib/mock-data";

export function BusinessCard({ business }: { business: Business }) {
  return (
    <Link
      to="/businesses/$id"
      params={{ id: business.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={business.image}
          alt={business.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-primary-soft text-primary px-2.5 py-1 font-medium">
            {business.categoryName}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-current text-amber-500" />
            <span className="font-medium text-foreground">{business.rating}</span>
            <span>({business.reviews})</span>
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-tight">{business.name}</h3>
        <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {business.suburb}, {business.location}
        </p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{business.description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View profile →
        </span>
      </div>
    </Link>
  );
}
