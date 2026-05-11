import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, MapPin, Search, Shield, Sparkles, Star, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A121E]">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="relative h-full w-full flex-shrink-0">
            <img src={heroImg} className="absolute inset-0 h-full w-full object-cover" alt="Background" />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          {/* Slide 2 */}
          <div className="relative h-full w-full flex-shrink-0">
            <div className="absolute inset-0 bg-[#0A121E]" />
            <img src={heroImg} className="absolute inset-0 h-full w-full object-cover opacity-40" alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-app h-full flex flex-col items-center justify-center text-center px-4">
        <div key={currentSlide} className="animate-fade-up space-y-8 max-w-4xl">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg animate-fade-in delay-100">
              <Sparkles className="h-3 w-3" /> Tasmania's #1 Tradie Network
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase animate-fade-up delay-200">
              {currentSlide === 0 ? (
                <>Find a <span className="text-primary">trusted local pro</span> in minutes</>
              ) : (
                <>Your go-to platform for hiring <span className="text-primary">skilled tradies</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-300">
              Plumbers, cleaners, gardeners, sparkies and more — all genuinely local to Tasmania. No accounts. No fuss.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 animate-fade-up delay-500">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/businesses"
                className="group relative inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_15px_40px_rgba(0,87,225,0.3)] hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get Started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/list-business"
                className="inline-flex items-center gap-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-widest text-white hover:bg-white/20 transition-all duration-300"
              >
                Join as a Pro
              </Link>
            </div>

            <div className="w-full max-w-4xl transform">
              <SearchSection />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-white/60 animate-fade-in delay-700">
            <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
              <Shield className="h-4 w-4 text-primary" /> Verified locals
            </div>
            <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
              <Star className="h-4 w-4 text-primary fill-primary" /> Real reviews
            </div>
            <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Free to use
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 container-app flex justify-between pointer-events-none px-4">
        {/* <button
          onClick={prevSlide}
          className="pointer-events-auto h-12 w-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all group shadow-2xl"
        >
          <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto h-12 w-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-primary transition-all group shadow-2xl"
        >
          <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </button> */}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-16 ' : 'w-8 hover:bg-white/40'
              }`}
          />
        ))}
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
    // <div className="relative group max-w-5xl mx-auto">
    //   <div className="absolute -inset-1 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
    //   <section className="relative rounded-[2.5rem] bg-white p-3 md:p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-100">
    //     <form onSubmit={submit} className="grid gap-4 md:grid-cols-[1.2fr_1fr_auto] items-center">
    //       <label className="relative flex items-center gap-4 rounded-3xl bg-slate-50 border border-slate-100 px-8 py-6 focus-within:border-primary/30 transition-all cursor-pointer group/field">
    //         <Search className="h-7 w-7 text-primary shrink-0 transition-transform group-focus-within/field:scale-110" />
    //         <div className="flex flex-col flex-1 items-start">
    //           <span className="text-[10px] font-[1000] uppercase tracking-widest text-slate-400 mb-1">Service</span>
    //           <select
    //             value={category}
    //             onChange={(e) => setCategory(e.target.value)}
    //             className="w-full bg-transparent text-xl font-black outline-none appearance-none pr-8 text-slate-900"
    //           >
    //             <option value="">What do you need?</option>
    //             {CATEGORIES.map((c) => (
    //               <option key={c.slug} value={c.slug}>{c.name}</option>
    //             ))}
    //           </select>
    //         </div>
    //         <ChevronDown className="absolute right-8 h-6 w-6 text-slate-400 pointer-events-none group-hover/field:text-primary transition-colors" />
    //       </label>
    //       <label className="relative flex items-center gap-4 rounded-3xl bg-slate-50 border border-slate-100 px-8 py-6 focus-within:border-primary/30 transition-all cursor-pointer group/field">
    //         <MapPin className="h-7 w-7 text-primary shrink-0 transition-transform group-focus-within/field:scale-110" />
    //         <div className="flex flex-col flex-1 items-start">
    //           <span className="text-[10px] font-[1000] uppercase tracking-widest text-slate-400 mb-1">Location</span>
    //           <select
    //             value={location}
    //             onChange={(e) => setLocation(e.target.value)}
    //             className="w-full bg-transparent text-xl font-black outline-none appearance-none pr-8 text-slate-900"
    //           >
    //             <option value="">Choose location</option>
    //             {LOCATIONS.map((l) => (
    //               <option key={l} value={l}>{l}</option>
    //             ))}
    //           </select>
    //         </div>
    //         <ChevronDown className="absolute right-8 h-6 w-6 text-slate-400 pointer-events-none group-hover/field:text-primary transition-colors" />
    //       </label>
    //       <button
    //         type="submit"
    //         className="rounded-3xl bg-primary text-white font-black px-12 py-7 hover:opacity-95 transition-all active:scale-95 shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 text-xl group/btn"
    //       >
    //         Search <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
    //       </button>
    //     </form>
    //   </section>
    // </div>

    <div className="relative group w-full max-w-5xl mx-auto px-4">
      {/* Glow effect behind the bar */}
      <div className="absolute -inset-1 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

      <section className="relative rounded-2xl md:rounded-full bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">
        <form onSubmit={submit} className="flex flex-col md:flex-row items-stretch md:items-center gap-1">

          {/* Service Selection */}
          <label className="relative flex flex-[1.2] items-center gap-3 rounded-xl md:rounded-full px-6 py-3 hover:bg-slate-50 transition-all cursor-pointer group/field">
            <Search className="h-5 w-5 text-primary shrink-0 transition-transform group-focus-within/field:scale-110" />
            <div className="flex flex-col flex-1 items-start text-left overflow-hidden">
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-0.5">Service</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-transparent text-base font-bold outline-none appearance-none pr-6 text-slate-900 cursor-pointer truncate"
              >
                <option value="">What do you need?</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
            <ChevronDown className="absolute right-5 h-4 w-4 text-slate-300 pointer-events-none group-hover/field:text-primary transition-colors" />
          </label>

          {/* Subtle Desktop Divider */}
          <div className="hidden md:block w-px h-10 bg-slate-100 mx-1" />

          {/* Location Selection */}
          <label className="relative flex flex-1 items-center gap-3 rounded-xl md:rounded-full px-6 py-3 hover:bg-slate-50 transition-all cursor-pointer group/field">
            <MapPin className="h-5 w-5 text-primary shrink-0 transition-transform group-focus-within/field:scale-110" />
            <div className="flex flex-col flex-1 items-start text-left overflow-hidden">
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 mb-0.5">Location</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-base font-bold outline-none appearance-none pr-6 text-slate-900 cursor-pointer truncate"
              >
                <option value="">Choose location</option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <ChevronDown className="absolute right-5 h-4 w-4 text-slate-300 pointer-events-none group-hover/field:text-primary transition-colors" />
          </label>

          {/* Search Button */}
          <button
            type="submit"
            className="md:ml-2 rounded-xl md:rounded-full bg-primary text-white font-black px-10 py-4 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-3 text-base group/btn"
          >
            Search
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

        </form>
      </section>
    </div>
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
