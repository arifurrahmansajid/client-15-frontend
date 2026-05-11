import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, MapPin, Search, Shield, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-x-0 top-0 h-[400px] bg-primary/10 blur-3xl" aria-hidden />
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1: Classic Design */}
          <div className="w-full flex-shrink-0">
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
          </div>

          {/* Slide 2: Circular Cluster Design */}
          <div className="w-full flex-shrink-0">
            <div className="container-app grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-16 md:py-24">
              <div className="animate-fade-up space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" /> Tasmania's local pros directory
                </span>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.02]">
                    Your go-to platform for hiring <span className="text-primary">skilled tradies</span>
                  </h1>
                  <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
                    Find the right professionals for your projects with ease. Hire skilled tradies in Australia, ensuring quality and confidence every step of the way.
                  </p>
                </div>
                <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-border bg-background p-1 shadow-soft">
                  <button type="button" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm">
                    Find Tradies
                  </button>
                  <button type="button" className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground">
                    Find Jobs
                  </button>
                </div>
                <SearchSection />
                <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Verified locals</div>
                  <div className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-500 fill-current" /> Real reviews</div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free to use</div>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 rounded-[2.5rem] bg-primary/10 shadow-elevated" aria-hidden />
                <div className="relative h-[560px] w-full max-w-[560px]">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560" fill="none" aria-hidden>
                    <path d="M100 80 C180 20 350 20 430 100 S520 210 430 280 S320 380 220 470" stroke="rgba(0,87,225,0.28)" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                  <div className="absolute left-0 top-1/4 w-44 h-44 overflow-hidden rounded-full border-4 border-white bg-white shadow-card">
                    <img src={heroImg} alt="Tradie at work" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute left-12 top-[58%] w-56 h-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-card">
                    <img src={heroImg} alt="Tradie at work" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute right-0 top-0 w-36 h-36 overflow-hidden rounded-full border-4 border-white bg-white shadow-card">
                    <img src={heroImg} alt="Tradie at work" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute right-4 top-[62%] w-40 h-40 overflow-hidden rounded-full border-4 border-white bg-white shadow-card">
                    <img src={heroImg} alt="Tradie at work" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-x-0 top-[30%] mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-card">
                    <img src={heroImg} alt="Tradie at work" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="container-app flex items-center justify-center gap-3 py-6 relative z-20">
        <button
          onClick={prevSlide}
          className="rounded-full bg-background border border-border p-2.5 text-foreground hover:border-primary hover:text-primary transition shadow-card"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 w-8 rounded-full transition ${
                i === currentSlide ? 'bg-primary' : 'bg-border'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="rounded-full bg-background border border-border p-2.5 text-foreground hover:border-primary hover:text-primary transition shadow-card"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
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
    <section className="rounded-[2rem] bg-card border border-border shadow-card p-4 md:p-6 max-w-3xl">
      <form onSubmit={submit} className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:gap-3 items-center">
        <label className="flex items-center gap-3 rounded-3xl border border-border bg-surface px-4 py-3">
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
        <label className="flex items-center gap-3 rounded-3xl border border-border bg-surface px-4 py-3">
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
          className="rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3.5 hover:opacity-90 transition flex items-center justify-center gap-2"
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
