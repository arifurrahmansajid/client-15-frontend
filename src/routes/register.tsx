import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { User, HardHat, ArrowLeft, ChevronRight, Mail, Lock, Phone, Upload, Eye, EyeOff, MapPin, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/section images/hero-tradie.jpg";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";
import { CATEGORIES, LOCATIONS } from "@/lib/mock-data";

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
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#0A1830]">
      {/* ── Left Column: Form Panel ── */}
      <div className="relative flex flex-col bg-[#0A1830] p-6 pt-24 md:p-12 md:pt-24 lg:p-16 lg:pt-20 overflow-y-auto max-h-screen scrollbar-hide">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#097DDD]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#097DDD]/5 rounded-full blur-[100px] pointer-events-none" />

        <button
          onClick={() => step !== "selection" ? setStep("selection") : navigate({ to: "/" })}
          className="absolute top-6 left-6 flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest z-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {step === "selection" ? "Back to Home" : "Back"}
        </button>

        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group mx-auto">
              <img src={logoImg} alt="MyLocalPro" className="h-12 w-auto object-contain brightness-110" />
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black text-white tracking-tight leading-tight mb-2"
            >
              {role === "tradie" ? "Grow Your Business" : "Join the Network"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em]"
            >
              {step === "selection" ? "Choose your account type" : role === "tradie" ? "Connect with Tasmanian Customers" : "Complete your profile details"}
            </motion.p>
          </motion.div>

          <AnimatePresence mode="wait">
            {step === "selection" ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full space-y-8"
              >
                <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                    <button
                      onClick={() => setRole("user")}
                      className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-400 ${role === "user"
                          ? "bg-[#0A1830] border-[#097DDD] text-white shadow-[0_12px_40px_rgb(0,0,0,0.4)] scale-[1.02]"
                          : "bg-white/5 border-white/10 text-white hover:border-[#097DDD]/30 hover:shadow-[0_4px_24px_rgb(0,0,0,0.2)]"
                        }`}
                    >
                      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-400 ${role === "user" ? "bg-[#097DDD]" : "bg-white/10"
                        }`}>
                        <User className={`h-6 w-6 ${role === "user" ? "text-white" : "text-[#097DDD]"}`} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2">As Customer</span>
                      <p className={`text-[9px] text-center font-bold leading-relaxed uppercase opacity-50 ${role === "user" ? "text-white/80" : "text-white/40"}`}>
                        Find trusted local pros for any job.
                      </p>
                      {role === "user" && <CheckCircle2 className="absolute top-4 right-4 h-4 w-4 text-[#097DDD]" />}
                    </button>

                    <button
                      onClick={() => setRole("tradie")}
                      className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-400 ${role === "tradie"
                          ? "bg-[#0A1830] border-[#097DDD] text-white shadow-[0_12px_40px_rgb(0,0,0,0.4)] scale-[1.02]"
                          : "bg-white/5 border-white/10 text-white hover:border-[#097DDD]/30 hover:shadow-[0_4px_24px_rgb(0,0,0,0.2)]"
                        }`}
                    >
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-400 ${role === "tradie" ? "bg-[#097DDD]" : "bg-white/10"
                      }`}>
                      <HardHat className={`h-6 w-6 ${role === "tradie" ? "text-white" : "text-[#097DDD]"}`} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2">As Tradie</span>
                    <p className={`text-[9px] text-center font-bold leading-relaxed uppercase opacity-50 ${role === "tradie" ? "text-white/80" : "text-white/40"}`}>
                      List your business & get more work.
                    </p>
                    {role === "tradie" && <CheckCircle2 className="absolute top-4 right-4 h-4 w-4 text-[#097DDD]" />}
                  </button>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!role}
                  className={`shine-btn w-full py-4.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2.5 ${role
                      ? "bg-[#097DDD] text-white shadow-[0_4px_24px_rgb(9,125,221,0.4)] hover:bg-[#0a8ef0] active:scale-[0.98]"
                      : "bg-white/5 text-white/20 cursor-not-allowed border border-white/5"
                    }`}
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleCreateAccount}
                className="w-full space-y-6"
              >
                <div className="rounded-3xl bg-white/5 border border-white/10 shadow-[0_24px_80px_rgb(0,0,0,0.4)] p-8 backdrop-blur-xl">
                  {role === "tradie" && (
                    <p className="text-[11px] font-bold text-white/60 mb-6 leading-relaxed">
                      Join Tasmania’s local services platform and connect directly with customers searching for businesses like yours.
                    </p>
                  )}
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6">
                    Mandatory fields are marked with <span className="text-[#097DDD]">*</span>
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Common fields */}
                    <div className="space-y-1.5">
                      <label className={labelCls}>Full Name <span className="text-[#097DDD]">*</span></label>
                      <input type="text" required placeholder="John Smith" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <label className={labelCls}>Email Address <span className="text-[#097DDD]">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#097DDD]/40" />
                        <input type="email" required placeholder="john@example.com" className={inputCls + " pl-11"} />
                      </div>
                    </div>

                    {step === "tradie_form" && (
                      <>
                        <div className="space-y-1.5">
                          <label className={labelCls}>Business Name <span className="text-[#097DDD]">*</span></label>
                          <input type="text" required placeholder="e.g. Smith Plumbing" className={inputCls} />
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelCls}>Primary Category <span className="text-[#097DDD]">*</span></label>
                          <select required className={inputCls}>
                            <option value="">Select Category...</option>
                            {CATEGORIES.map(c => (
                              <option key={c.slug} value={c.slug}>{c.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelCls}>Service Location <span className="text-[#097DDD]">*</span></label>
                          <select required className={inputCls}>
                            <option value="">Select Region...</option>
                            {LOCATIONS.map(loc => (
                              <option key={loc} value={loc}>{loc}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelCls}>ABN <span className="text-[#097DDD]">*</span></label>
                          <input type="text" required placeholder="11 digits" className={inputCls} maxLength={11} />
                        </div>
                      </>
                    )}

                    <div className="space-y-1.5">
                      <label className={labelCls}>Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#097DDD]/40" />
                        <input type="tel" placeholder="+61" className={inputCls + " pl-11"} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className={labelCls}>Password <span className="text-[#097DDD]">*</span></label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#097DDD]/40" />
                        <input type={showPass ? "text" : "password"} required placeholder="••••••••" className={inputCls + " pl-11 pr-12"} />
                        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5a7089]/40 hover:text-[#097DDD]">
                          {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <label className={labelCls}>Profile Picture</label>
                      <label className="flex items-center justify-between w-full bg-[#E4EAF1]/30 border border-[#cdd6e3] border-dashed rounded-xl py-3 px-5 cursor-pointer hover:bg-[#097DDD]/5 hover:border-[#097DDD]/30 transition-all group">
                        <span className="text-[#5a7089]/60 text-xs font-medium">Choose an image...</span>
                        <Upload className="h-4 w-4 text-[#097DDD]/60 group-hover:text-[#097DDD]" />
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  {step === "tradie_form" && (
                    <div className="grid grid-cols-1 gap-5 mt-5">
                      <div className="space-y-1.5">
                        <label className={labelCls}>Business Description <span className="text-[#097DDD]">*</span></label>
                        <textarea rows={3} required placeholder="Describe your business and experience..." className={inputCls + " resize-none py-3"} />
                      </div>
                      <div className="space-y-1.5">
                        <label className={labelCls}>Services Offered (Comma separated) <span className="text-[#097DDD]">*</span></label>
                        <input type="text" required placeholder="e.g. Emergency repairs, Hot water, Gas fitting" className={inputCls} />
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className={labelCls}>Website / Facebook</label>
                          <input type="url" placeholder="https://" className={inputCls} />
                        </div>
                        <div className="space-y-1.5">
                          <label className={labelCls}>Card Details (Stripe integration) <span className="text-[#097DDD]">*</span></label>
                          <input type="text" required placeholder="•••• •••• •••• ••••" className={inputCls} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8">
                    <label className={labelCls}>Images of your work / Logo</label>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
                      <label className="aspect-square rounded-xl border-2 border-dashed border-white/10 hover:border-[#097DDD]/50 hover:bg-[#097DDD]/5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all group">
                        <Upload className="h-5 w-5 text-white/30 group-hover:text-[#097DDD]" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20 group-hover:text-white/40">Upload</span>
                        <input type="file" multiple className="hidden" />
                      </label>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 group cursor-pointer mt-8">
                    <input type="checkbox" required className="mt-0.5 rounded border-[#cdd6e3] text-[#097DDD] focus:ring-[#097DDD]/20 h-4 w-4" />
                    <span className="text-[10px] font-bold text-[#5a7089] uppercase tracking-widest leading-relaxed">
                      I agree to the <Link to="/terms" className="text-[#097DDD] hover:underline">Terms</Link> and <Link to="/privacy-policy" className="text-[#097DDD] hover:underline">Privacy Policy</Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="shine-btn w-full bg-[#097DDD] text-white py-4.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_4px_24px_rgb(9,125,221,0.4)] hover:bg-[#0a8ef0] active:scale-[0.98] transition-all mt-8"
                  >
                    Create Account
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-white/30">
            Already have an account? <Link to="/login" className="text-[#097DDD] hover:text-[#0a8ef0] hover:underline">Sign In</Link>
          </p>
        </div>
      </div>

      {/* ── Right Column: Image Panel ── */}
      <div className="hidden lg:block relative overflow-hidden h-screen sticky top-0">
        <img
          src={heroImg}
          alt="Tradie working"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-10000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A1830]/80 via-[#0A1830]/30 to-transparent" />

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-12 right-12 glass-dark border border-white/15 p-8 rounded-[2.5rem] max-w-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-[#097DDD] flex items-center justify-center">
              {role === "tradie" ? <HardHat className="h-5 w-5 text-white" /> : <CheckCircle2 className="h-5 w-5 text-white" />}
            </div>
            <div>
              <p className="text-white text-3xl font-black tracking-tight leading-none">{role === "tradie" ? "Join 2k+" : "2,400+"}</p>
              <p className="text-[#E4EAF1]/50 text-[8px] font-black uppercase tracking-widest mt-0.5">{role === "tradie" ? "Tasmanian Partners" : "Verified Professionals"}</p>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed font-medium">
            {role === "tradie"
              ? "Connect directly with customers searching for businesses like yours. Showcase your services and receive local enquiries across Hobart, Launceston, Devonport and Burnie."
              : "Join Australia's fastest growing network of trusted local trades and services."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const labelCls = "text-[9px] font-black uppercase tracking-[0.22em] text-white/40 ml-1";
const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 outline-none focus:border-[#097DDD] focus:ring-4 focus:ring-[#097DDD]/10 focus:bg-white/10 transition-all text-white font-medium text-sm placeholder:text-white/20";
