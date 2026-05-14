import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/mock-data";

export function Testimonials() {
  return (
    <section className="container-app py-[50px] md:py-[50px]">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Loved by locals</h2>
        <p className="mt-3 text-muted-foreground">What Tasmanians are saying about MyLocalPro.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl bg-card border border-border p-8 shadow-soft">
            <div className="flex gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-5 text-sm font-semibold">
              {t.name} <span className="text-muted-foreground font-normal">— {t.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
