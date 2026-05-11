import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, Search, Shield, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";
import { BUSINESSES, CATEGORIES, LOCATIONS, STATS, TESTIMONIALS } from "@/lib/mock-data";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { BusinessCard } from "@/components/cards/BusinessCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyLocalPro Australia — Find trusted local pros in Tasmania" },
      { name: "description", content: "Search and compare trusted local tradespeople and service providers across Hobart, Launceston, Devonport and Burnie." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <SearchSection />
      <TradeCategories />
      <HowItWorks />
      <FeaturedBusinesses />
      <Statistics />
      <Testimonials />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-app grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Tasmania's local pros directory
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Find a trusted local pro in <span className="text-primary">minutes.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Plumbers, cleaners, gardeners, sparkies and more — all genuinely local to Tasmania. No accounts. No fuss.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/businesses"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-elevated hover:opacity-90 transition"
            >
              Find a Local Pro <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/list-business"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-base font-semibold hover:border-primary hover:text-primary transition"
            >
              List Your Business
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Verified locals</div>
            <div className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-500 fill-current" /> Real reviews</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free to use</div>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Smiling local Australian tradesperson"
            width={1280}
            height={960}
            className="relative w-full h-auto rounded-3xl object-cover shadow-elevated"
          />
          <div className="absolute -bottom-5 -left-5 hidden md:block rounded-2xl bg-card border border-border shadow-card p-4 w-56">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Star className="h-4 w-4 text-amber-500 fill-current" /> 4.9 average rating
            </div>
            <p className="mt-1 text-xs text-muted-foreground">From 12,400+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchSection() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/businesses",
      search: { category: category || undefined, location: location || undefined } as never,
    });
  };

  return (
    <section className="container-app -mt-8 md:-mt-14 relative z-10">
      <form
        onSubmit={submit}
        className="rounded-2xl md:rounded-full bg-card border border-border shadow-card p-3 md:p-2 grid md:grid-cols-[1fr_1fr_auto] gap-2 md:gap-0 md:items-center"
      >
        <label className="flex items-center gap-3 px-4 py-3 md:py-2 md:border-r md:border-border">
          <Search className="h-5 w-5 text-primary shrink-0" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent text-base font-medium outline-none"
          >
            <option value="">What service do you need?</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-3 px-4 py-3 md:py-2">
          <MapPin className="h-5 w-5 text-primary shrink-0" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-base font-medium outline-none"
          >
            <option value="">Choose your location</option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-xl md:rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3.5 hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          <Search className="h-4 w-4" /> Search
        </button>
      </form>
    </section>
  );
}

function TradeCategories() {
  return (
    <section className="container-app py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold">Browse by category</h2>
          <p className="mt-3 text-muted-foreground">19 trades and services. Find exactly who you need.</p>
        </div>
        <Link to="/categories" className="text-sm font-semibold text-primary hover:underline">
          View all categories →
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CATEGORIES.slice(0, 12).map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "1", title: "Search", desc: "Pick a service and your area in seconds." },
    { n: "2", title: "Compare", desc: "Browse profiles, photos and real reviews." },
    { n: "3", title: "Connect", desc: "Contact the pro directly — no middleman." },
  ];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-app">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">So simple, anyone can use it</h2>
          <p className="mt-3 text-muted-foreground">Three steps. No sign-up needed for customers.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-card border border-border p-8 shadow-soft hover:shadow-card transition">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                {s.n}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedBusinesses() {
  return (
    <section className="container-app py-20 md:py-28">
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

function Statistics() {
  return (
    <section className="container-app">
      <div className="rounded-3xl bg-foreground text-background py-12 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold tracking-tight">{s.value}</div>
            <div className="mt-2 text-sm text-background/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-app py-20 md:py-28">
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

function CTASection() {
  return (
    <section className="container-app pb-8">
      <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Are you a local tradie? Get found by more customers.
        </h2>
        <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
          List your business in minutes and reach Tasmanians actively looking for your services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/list-business"
            className="rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:opacity-90 transition"
          >
            List Your Business
          </Link>
          <Link
            to="/businesses"
            className="rounded-full border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            Browse Pros
          </Link>
        </div>
      </div>
    </section>
  );
}
