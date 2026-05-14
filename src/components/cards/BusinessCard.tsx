import { Link } from "@tanstack/react-router";
import { MapPin, Star, ArrowRight } from "lucide-react";
import type { Business } from "@/lib/mock-data";

export function BusinessCard({ business }: { business: Business }) {
  return (
    <Link
      to="/businesses/$id"
      params={{ id: business.id }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#cdd6e3] bg-white shadow-[0_2px_16px_rgb(10,24,48,0.07)] hover:shadow-[0_8px_36px_rgb(10,24,48,0.14)] hover:-translate-y-1 transition-all duration-400"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-[#E4EAF1] relative">
        <img
          src={business.image}
          alt={business.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-107"
        />
        {/* Category pill over image */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0A1830]/80 backdrop-blur-sm px-3 py-1 text-[8px] font-black uppercase tracking-[0.2em] text-white">
            {business.categoryName}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/70 px-2.5 py-1 text-xs">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            <span className="font-bold text-amber-700">{business.rating}</span>
            <span className="text-amber-500/70">({business.reviews})</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-base font-bold text-[#0A1830] leading-tight mb-1.5 group-hover:text-[#097DDD] transition-colors duration-200">
          {business.name}
        </h3>

        {/* Location */}
        <p className="inline-flex items-center gap-1.5 text-xs text-[#5a7089] mb-3">
          <MapPin className="h-3.5 w-3.5 text-[#097DDD]" />
          {business.suburb}, {business.location}
        </p>

        {/* Description */}
        <p className="text-sm text-[#5a7089] line-clamp-2 leading-relaxed flex-1">
          {business.description}
        </p>

        {/* CTA link */}
        <div className="mt-4 pt-4 border-t border-[#E4EAF1] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#097DDD] group-hover:gap-2.5 transition-all duration-300">
            View profile
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <div className="h-7 w-7 rounded-lg bg-[#097DDD]/8 flex items-center justify-center group-hover:bg-[#097DDD] group-hover:shadow-[0_3px_12px_rgb(9,125,221,0.4)] transition-all duration-300">
            <ArrowRight className="h-3.5 w-3.5 text-[#097DDD] group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}
