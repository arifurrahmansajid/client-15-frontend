import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, Mail, ArrowRight, ArrowLeft, ShieldCheck, MapPin } from "lucide-react";
import heroImg from "@/assets/section images/hero-tradie.jpg";
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";
import { motion } from "framer-motion";

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
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0A1830]">
      {/* ── Left: Form Panel ── */}
      <div className="relative flex flex-col bg-[#0A1830] p-8 pt-24 md:p-12 md:pt-24 lg:p-16 lg:pt-20 justify-center overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#097DDD]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#097DDD]/5 rounded-full blur-[100px] pointer-events-none" />
        <Link
          to="/"
          className="absolute top-6 left-6 flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest z-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-md mx-auto w-full"
        >
          {/* Logo */}
          <Link to="/" className="inline-flex items-center mb-10 group">
            <img src={logoImg} alt="MyLocalPro" className="h-12 w-auto object-contain brightness-110" />
          </Link>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Welcome Back</h1>
          <p className="text-white/50 text-sm mb-8">Sign in to your account to continue.</p>

          <div className="rounded-3xl bg-white/5 border border-white/10 shadow-[0_24px_80px_rgb(0,0,0,0.4)] p-8 backdrop-blur-xl">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-[11px] font-bold uppercase tracking-widest text-center animate-fade-in">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase tracking-[0.22em] text-white/40 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#097DDD]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@mylocalpro.au"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-[#097DDD] focus:ring-4 focus:ring-[#097DDD]/10 focus:bg-white/10 transition-all text-white font-medium text-sm placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[9px] font-black uppercase tracking-[0.22em] text-white/40 ml-1">
                    Password
                  </label>
                  <Link to="/" className="text-[9px] font-black uppercase tracking-widest text-[#097DDD] hover:text-[#0a8ef0] hover:underline">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#097DDD]" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-[#097DDD] focus:ring-4 focus:ring-[#097DDD]/10 focus:bg-white/10 transition-all text-white font-medium text-sm placeholder:text-white/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="shine-btn w-full bg-[#097DDD] hover:bg-[#0a8ef0] text-white font-black uppercase tracking-[0.18em] py-4 rounded-xl shadow-[0_4px_24px_rgb(9,125,221,0.4)] hover:shadow-[0_6px_32px_rgb(9,125,221,0.55)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 text-[11px]"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Sign In <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#097DDD] hover:text-[#0a8ef0] hover:underline">
                  Join the network
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3 w-3 text-white" />
              <span className="text-[8px] font-black uppercase tracking-widest text-white">Secure Login</span>
            </div>
            <div className="h-3 w-[1px] bg-white/20" />
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-white" />
              <span className="text-[8px] font-black uppercase tracking-widest text-white">Verified Pro Network</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Right: Image Panel ── */}
      <div className="hidden lg:block relative overflow-hidden">
        <img
          src={heroImg}
          alt="Tradie working"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A1830]/85 via-[#0A1830]/50 to-transparent" />

        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Floating badge */}
        <div className="absolute top-10 right-10">
          <div className="glass-dark rounded-2xl px-5 py-3 border border-white/15">
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">Platform</div>
            <div className="text-white font-black text-sm">Super Admin Portal</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="absolute bottom-14 left-10 right-10 max-w-sm"
        >
          <div className="glass-dark rounded-3xl p-8 border border-white/15">
            <div className="h-10 w-10 rounded-xl bg-[#097DDD] flex items-center justify-center mb-5">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <p className="text-white text-2xl font-black leading-tight mb-3 tracking-tight">
              Manage your network with confidence.
            </p>
            <p className="text-white/55 text-sm leading-relaxed">
              Access the Super Admin dashboard to oversee verified tradies, manage analytics, and grow the Australian network.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
