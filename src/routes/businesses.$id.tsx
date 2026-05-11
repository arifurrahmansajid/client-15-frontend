import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone, Star } from "lucide-react";
import { BUSINESSES } from "@/lib/mock-data";

export const Route = createFileRoute("/businesses/$id")({
  loader: ({ params }) => {
    const business = BUSINESSES.find((b) => b.id === params.id);
    if (!business) throw notFound();
    return { business };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.business.name} — MyLocalPro Australia` },
          { name: "description", content: loaderData.business.description },
          { property: "og:title", content: loaderData.business.name },
          { property: "og:description", content: loaderData.business.description },
          { property: "og:image", content: loaderData.business.image },
        ]
      : [],
  }),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="container-app py-24 text-center">
        <h1 className="text-2xl font-semibold">Couldn't load this profile</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Try again
        </button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="container-app py-24 text-center">
      <h1 className="text-2xl font-semibold">Business not found</h1>
      <Link to="/businesses" className="mt-4 inline-block text-primary font-semibold hover:underline">
        Back to all businesses
      </Link>
    </div>
  ),
  component: ProfilePage,
});

function ProfilePage() {
  const { business: b } = Route.useLoaderData();

  return (
    <>
      <section className="relative">
        <div className="h-56 md:h-80 w-full overflow-hidden bg-muted">
          <img src={b.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="container-app -mt-20 relative z-10">
          <Link to="/businesses" className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground bg-background/80 backdrop-blur rounded-full px-3 py-1.5 mb-4">
            <ArrowLeft className="h-4 w-4" /> All businesses
          </Link>
          <div className="rounded-3xl bg-card border border-border shadow-card p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
            <div>
              <span className="rounded-full bg-primary-soft text-primary px-2.5 py-1 text-xs font-semibold">{b.categoryName}</span>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold">{b.name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {b.suburb}, {b.location}</span>
                <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-current text-amber-500" /> <span className="text-foreground font-semibold">{b.rating}</span> ({b.reviews} reviews)</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
                <Phone className="h-4 w-4" /> {b.phone}
              </a>
              <a href={`mailto:${b.email}`} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-12 md:py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{b.about}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Services</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {b.services.map((s: string) => (
                <li key={s} className="flex items-center gap-2 rounded-xl bg-surface px-4 py-3 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Recent work</h2>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {b.gallery.map((src: string, i: number) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Reviews</h2>
            <div className="mt-4 rounded-2xl border border-dashed border-border p-8 text-center">
              <div className="flex justify-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-current" />))}
              </div>
              <p className="mt-3 font-semibold text-lg">{b.rating} · {b.reviews} reviews</p>
              <p className="mt-1 text-sm text-muted-foreground">Detailed reviews coming soon.</p>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl border border-border bg-card shadow-soft p-6">
            <h3 className="font-semibold text-lg">Get in touch</h3>
            <p className="mt-1 text-sm text-muted-foreground">Reach out directly — no middleman, no fees.</p>
            <div className="mt-5 space-y-3 text-sm">
              <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 hover:bg-primary-soft transition">
                <Phone className="h-4 w-4 text-primary" /> <span className="font-medium">{b.phone}</span>
              </a>
              <a href={`mailto:${b.email}`} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 hover:bg-primary-soft transition">
                <Mail className="h-4 w-4 text-primary" /> <span className="font-medium">{b.email}</span>
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3">
                <MapPin className="h-4 w-4 text-primary" /> <span className="font-medium">{b.suburb}, {b.location}</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
