import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { User, HardHat, ArrowLeft, ChevronRight, Mail, Lock, Phone, Upload, Eye, EyeOff } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"selection" | "user_form" | "tradie_form">("selection");
  const [role, setRole] = useState<"user" | "tradie" | null>(null);
  const [showPass, setShowPass] = useState(false);

  const handleContinue = () => {
    if (role === "user") setStep("user_form");
    if (role === "tradie") setStep("tradie_form");
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", role || "user");
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column: Content */}
      <div className="relative flex flex-col bg-white p-6 pt-32 md:p-12 md:pt-36 lg:p-16 lg:pt-40 overflow-y-auto max-h-screen">
        <button 
          onClick={() => step !== "selection" ? setStep("selection") : navigate({ to: "/" })}
          className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Welcome to <br />
              <span className="text-primary">Trusted Tradie Network</span>
            </h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              {step === "selection" ? "Select your account type" : "Complete your profile details"}
            </p>
          </div>

          {step === "selection" ? (
            <div className="w-full space-y-10">
              <div className="grid grid-cols-2 gap-6 w-full">
                <button
                  onClick={() => setRole("user")}
                  className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all duration-300 ${
                    role === "user" 
                    ? "bg-primary border-primary text-white shadow-2xl shadow-primary/30 scale-[1.02]" 
                    : "bg-white border-slate-100 text-slate-900 hover:border-primary/30"
                  }`}
                >
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    role === "user" ? "bg-white/20" : "bg-slate-50"
                  }`}>
                    <User className={`h-8 w-8 ${role === "user" ? "text-white" : "text-primary"}`} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] mb-2">As User</span>
                  <p className="text-[10px] text-center font-bold leading-relaxed uppercase opacity-60">
                    Find trusted tradies and get your jobs done easily.
                  </p>
                </button>

                <button
                  onClick={() => setRole("tradie")}
                  className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all duration-300 ${
                    role === "tradie" 
                    ? "bg-primary border-primary text-white shadow-2xl shadow-primary/30 scale-[1.02]" 
                    : "bg-white border-slate-100 text-slate-900 hover:border-primary/30"
                  }`}
                >
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    role === "tradie" ? "bg-white/20" : "bg-slate-50"
                  }`}>
                    <HardHat className={`h-8 w-8 ${role === "tradie" ? "text-white" : "text-primary"}`} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] mb-2">As Tradie</span>
                  <p className="text-[10px] text-center font-bold leading-relaxed uppercase opacity-60">
                    Get more jobs and grow your business today.
                  </p>
                </button>
              </div>

              <button
                onClick={handleContinue}
                disabled={!role}
                className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                  role 
                  ? "bg-primary text-white shadow-xl shadow-primary/20 hover:opacity-90 active:scale-[0.98]" 
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                Continue <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ) : step === "user_form" ? (
            <form onSubmit={handleCreateAccount} className="w-full space-y-6">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Fields marked with <span className="text-red-500">*</span> are mandatory.</p>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" required placeholder="Enter full name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" required placeholder="Email" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input type="tel" placeholder="+61" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} required placeholder="Password" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 pr-12 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary">
                      {showPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} required placeholder="Password" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 pr-12 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Profile Picture</label>
                  <label className="flex items-center justify-between w-full bg-slate-50 border border-slate-100 border-dashed rounded-xl py-4 px-5 cursor-pointer hover:bg-slate-100 transition-all">
                    <span className="text-slate-400 text-sm">Upload</span>
                    <Upload className="h-5 w-5 text-slate-400" />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <label className="flex items-start gap-3 group cursor-pointer pt-2">
                <input type="checkbox" required className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  I agree to the <span className="text-primary hover:underline">Terms & Conditions</span> and <span className="text-primary hover:underline">Privacy Policy</span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Create Account
              </button>
            </form>
          ) : (
            <form onSubmit={handleCreateAccount} className="w-full space-y-6">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Fields marked with <span className="text-red-500">*</span> are mandatory.</p>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" required placeholder="Enter full name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Gender <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-6 py-4">
                    {["Male", "Female", "Other"].map((g) => (
                      <label key={g} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="gender" required className="h-4 w-4 border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-xs font-bold text-slate-600 group-hover:text-primary transition-colors uppercase tracking-widest">{g}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" required placeholder="Email" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Professional Experience (Years) <span className="text-red-500">*</span></label>
                  <input type="number" required placeholder="Only numeric allowed" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} required placeholder="Password" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Confirm Password <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} required placeholder="Password" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Add your Service locations <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium text-slate-400">
                    <option value="">Select...</option>
                    <option>Hobart</option>
                    <option>Launceston</option>
                    <option>Devonport</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Select Categories <span className="text-red-500">*</span></label>
                  <select required className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium text-slate-400">
                    <option value="">Select...</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Gardening</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input type="tel" placeholder="+61" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 pl-12 pr-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Business Name (If Available)</label>
                  <input type="text" placeholder="Business name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Website link (If Available)</label>
                  <input type="url" placeholder="Website link" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-4 px-5 outline-none focus:border-primary/30 focus:bg-white transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Profile Picture</label>
                  <label className="flex items-center justify-between w-full bg-slate-50 border border-slate-100 border-dashed rounded-xl py-4 px-5 cursor-pointer hover:bg-slate-100 transition-all">
                    <span className="text-slate-400 text-sm">Upload</span>
                    <Upload className="h-5 w-5 text-slate-400" />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <label className="flex items-start gap-3 group cursor-pointer pt-2">
                <input type="checkbox" required className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  I agree to the <span className="text-primary hover:underline">Terms & Conditions</span> and <span className="text-primary hover:underline">Privacy Policy</span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Next
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Already have an account? <Link to="/login" className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="hidden lg:block relative overflow-hidden h-screen sticky top-0">
        <img 
          src={heroImg} 
          alt="Tradie working" 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
        
        <div className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl animate-fade-up">
          <p className="text-white text-3xl font-black mb-1">2,400+</p>
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Verified Tradies in Tasmania</p>
        </div>
      </div>
    </div>
  );
}
