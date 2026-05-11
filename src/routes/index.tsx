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
      <MostRequestedServices />
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
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="container-app py-24 md:py-32 overflow-hidden ">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Explore Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-900  leading-[1.1]"
          >
            Find the <span className="text-primary">Right Jobs</span> <br />
            As Per Your Needs
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="h-14 w-14 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xl shadow-slate-200/50 group"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-6 w-6 group-active:scale-90 transition-transform" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="h-14 w-14 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xl shadow-slate-200/50 group"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-6 w-6 group-active:scale-90 transition-transform" />
            </button>
          </div>

          <Link
            to="/categories"
            className="group relative h-14 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-10 text-xs font-black uppercase tracking-widest text-white hover:bg-primary transition-all duration-300 shadow-2xl shadow-slate-900/20 overflow-hidden"
          >
            <span className="relative z-10">View All</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

      <div
        id="category-scroll-container"
        className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CATEGORIES.map((c, idx) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="min-w-[320px] md:min-w-[420px] snap-start"
          >
            <CategoryCard category={c} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MostRequestedServices() {
  const services = [
    { name: "Electrician", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", featured: true },
    { name: "Electrician", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80" },
    { name: "Fencing", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" },
    { name: "Locksmith", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  ];

  return (
    <section className="bg-[#FFF0E5] py-24 md:py-32">
      <div className="container-app">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Our Most Requested <br /> House Services
          </h2>
          <Link
            to="/list-business"
            className="inline-flex items-center justify-center rounded-full bg-[#4A5568] px-10 py-5 text-sm font-black text-white hover:bg-slate-700 transition-all shadow-xl"
          >
            Post a Job
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] aspect-[16/10] lg:aspect-auto lg:h-[600px] shadow-2xl"
          >
            <img
              src={services[0].image}
              alt={services[0].name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                {services[0].name}
              </span>
            </div>
          </motion.div>

          {/* Side Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {services.slice(1).map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded-[2rem] flex-1 min-h-[180px] shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
                    {service.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Enter your location and find skilled experts near you.",
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      color: "bg-[#FFF8F0]",
      rotation: "-rotate-2"
    },
    {
      title: "Browse verified profiles, read reviews, and compare options.",
      icon: <Search className="h-10 w-10 text-blue-500" />,
      color: "bg-[#F0F7FF]",
      rotation: "rotate-2",
      offset: "mt-12"
    },
    {
      title: "Connect directly and get the job done with confidence.",
      icon: <CheckCircle2 className="h-10 w-10 text-emerald-500" />,
      color: "bg-[#F0FFF4]",
      rotation: "-rotate-1"
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="container-app relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How It Works</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Trusted Tradie Network connects users with skilled trades in Australia, making it easy to find a tradie,
            book a tradie, or hire tradies for any job. For tradies, it's a platform to secure quality tradie
            jobs and grow their business. Simple, reliable, and efficient!
          </p>
        </div>

        {/* Dashed Path (Desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 200" fill="none">
            <path
              d="M0,100 C150,100 250,180 400,180 C550,180 650,20 800,20 C900,20 1000,100 1000,100"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-[dash_20s_linear_infinite]"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`flex flex-col items-center text-center ${step.offset || ''}`}
            >
              <div className={`relative w-full max-w-[320px] p-10 rounded-[2.5rem] ${step.color} ${step.rotation} border border-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-default`}>
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-20 w-20 bg-white rounded-3xl shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 leading-snug">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
}

function FeaturedBusinesses() {
  return (
    <section className="container-app py-24 md:py-32">
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
    <section className="container-app py-24 md:py-32">
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
    <section className="container-app py-24 md:py-32">
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
    <section className="container-app py-24 md:py-32">
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
