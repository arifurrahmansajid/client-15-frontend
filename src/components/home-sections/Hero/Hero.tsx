import { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Search, Shield, Sparkles, Star, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";
import { CATEGORIES, LOCATIONS } from "@/lib/mock-data";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="relative group w-full max-w-5xl mx-auto px-4">
      <div className="absolute -inset-1 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

      <section className="relative rounded-2xl md:rounded-full bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100">
        <form onSubmit={submit} className="flex flex-col md:flex-row items-stretch md:items-center gap-1">
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

          <div className="hidden md:block w-px h-10 bg-slate-100 mx-1" />

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
