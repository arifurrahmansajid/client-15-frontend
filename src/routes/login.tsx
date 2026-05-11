import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Mail, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const adminEmail = import.meta.env.VITE_SUPER_ADMIN_EMAIL;
    const adminPass = import.meta.env.VITE_SUPER_ADMIN_PASSWORD;

    // Mock login logic with ENV check
    setTimeout(() => {
      if (email === adminEmail && password === adminPass) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", "super_admin");
        setLoading(false);
        navigate({ to: "/admin" });
      } else {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column: Form */}
      <div className="relative flex flex-col bg-white p-8 pt-32 md:p-16 md:pt-36 lg:p-24 lg:pt-40 justify-center">
        <Link 
          to="/" 
          className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors text-[10px] font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-md mx-auto w-full animate-fade-up">
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl shadow-primary/20">
                <span className="text-white font-black text-2xl">M</span>
              </div>
              <span className="text-slate-900 text-xl font-black tracking-widest uppercase">
                MyLocalPro
              </span>
            </Link>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Welcome Back</h1>
            <p className="text-slate-500 mt-2 text-sm font-medium uppercase tracking-widest">Sign in to your account</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-[11px] font-bold uppercase tracking-widest animate-shake text-center">
                {error}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@mylocalpro.au"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/30 focus:bg-white transition-all text-slate-900 font-medium text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Password</label>
                  <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">Forgot?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/30 focus:bg-white transition-all text-slate-900 font-medium text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:opacity-90 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-[11px]"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Sign In <ArrowRight className="h-5 w-5" /></>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-50 text-center">
              <p className="text-sm text-slate-500">
                Don't have an account?{" "}
                <Link to="/register" className="font-bold text-primary hover:underline">Join the network</Link>
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure Login
            </div>
            <div className="h-1 w-1 bg-slate-200 rounded-full" />
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-primary" /> Verified Pro
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="hidden lg:block relative overflow-hidden">
        <img 
          src={heroImg} 
          alt="Tradie working" 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
        
        <div className="absolute bottom-16 left-16 max-w-md animate-fade-up">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem]">
            <p className="text-white text-3xl font-black leading-tight mb-4 tracking-tight">
              Manage your network with confidence.
            </p>
            <p className="text-white/70 text-sm font-medium leading-relaxed">
              Access the Super Admin dashboard to oversee verified tradies, manage analytics, and grow the Tasmanian network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
