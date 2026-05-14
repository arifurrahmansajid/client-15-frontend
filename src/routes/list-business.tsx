import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Upload, X, Building2, ArrowRight } from "lucide-react";
import { CATEGORIES, LOCATIONS } from "@/lib/mock-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/list-business")({
  head: () => ({
    meta: [
      { title: "List Your Business — MyLocalPro Australia" },
      { name: "description", content: "List your local Australian business on MyLocalPro and get found by more customers." },
    ],
  }),
  component: ListBusinessPage,
});

const perks = [
  { title: "Free to List", desc: "No setup fees through 2026" },
  { title: "Instant Visibility", desc: "Live within 1 business day" },
  { title: "Direct Enquiries", desc: "Customers contact you directly" },
  { title: "No Lock-In", desc: "Cancel anytime, no contracts" },
];

function ListBusinessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const urls = Array.from(files).slice(0, 6 - images.length).map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...urls].slice(0, 6));
  };

  const remove = (i: number) => setImages((prev) => prev.filter((_, idx) => idx !== i));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-gradient">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-lg w-full mx-4 text-center glass-dark rounded-3xl border border-white/15 p-12"
        >
          <div className="h-16 w-16 mx-auto rounded-2xl bg-[#097DDD]/20 border border-[#097DDD]/30 flex items-center justify-center mb-5">
            <CheckCircle2 className="h-8 w-8 text-[#097DDD]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-3">
            Listing submitted!
          </h1>
          <p className="text-[#E4EAF1]/60 leading-relaxed">
            We'll email you within 1 business day once your business is live on MyLocalPro Australia.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* ── Banner ── */}
      <section className="relative bg-navy-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#097DDD]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="container-app relative z-10 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label-dark mb-4 block"
          >
            <Building2 className="inline h-2.5 w-2.5 mr-1" />
            For Tradies & Local Businesses
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-3"
          >
            List Your{" "}
            <span className="text-[#097DDD]">Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 text-base max-w-xl"
          >
            Reach Australians actively looking for your services. Free to get started — no credit card required.
          </motion.p>
        </div>

      </section>

      <section className="container-app py-12 pb-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">

          {/* ── Left: Perks ── */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <h2 className="text-lg font-black text-[#0A1830] mb-5">Why list with us?</h2>
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex items-start gap-3 rounded-2xl border border-[#cdd6e3] bg-white p-4 shadow-[0_2px_10px_rgb(10,24,48,0.05)]"
              >
                <div className="h-9 w-9 shrink-0 rounded-xl bg-[#097DDD]/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#097DDD]" />
                </div>
                <div>
                  <div className="font-bold text-[#0A1830] text-sm">{perk.title}</div>
                  <div className="text-xs text-[#5a7089]">{perk.desc}</div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-navy-gradient p-6 border border-white/10 mt-4">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[#E4EAF1]/40 font-black mb-1">Free through</div>
              <div className="text-white font-black text-2xl">2026</div>
              <div className="text-[#E4EAF1]/45 text-xs mt-1">No hidden fees, ever.</div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={submit}
            className="space-y-6 rounded-3xl bg-white border border-[#cdd6e3] shadow-[0_4px_32px_rgb(10,24,48,0.09)] p-8 md:p-10"
          >
            <div>
              <h2 className="text-xl font-black text-[#0A1830] mb-1">Business Details</h2>
              <p className="text-sm text-[#5a7089]">Fill in your business information below.</p>
            </div>

            <Field label="Business name" required>
              <input required type="text" placeholder="e.g. Tassie Plumb Co." className={inputCls} />
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Service category" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Choose a category</option>
                  {CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>
              </Field>
              <Field label="Location" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Choose a location</option>
                  {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </Field>
            </div>

            <Field label="Suburb">
              <input type="text" placeholder="e.g. Sandy Bay" className={inputCls} />
            </Field>

            <Field label="Business description" required>
              <textarea required rows={4} placeholder="Tell customers what you do and why they should choose you." className={`${inputCls} resize-y`} />
            </Field>

            <Field label="Services Offered (Comma separated)" required>
              <input required type="text" placeholder="e.g. Emergency repairs, Hot water, Gas fitting" className={inputCls} />
            </Field>

            <Field label="ABN (Australian Business Number)" required>
              <input required type="text" placeholder="11 digits" maxLength={11} className={inputCls} />
            </Field>

            {/* Image upload */}
            <div>
              <label className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-2">
                Photos of your work
              </label>
              <p className="text-xs text-[#5a7089]/70 mb-3">Up to 6 images. JPG or PNG.</p>
              <label className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#cdd6e3] bg-[#E4EAF1]/30 p-8 cursor-pointer hover:border-[#097DDD] hover:bg-[#097DDD]/5 transition-all group">
                <div className="h-10 w-10 rounded-xl bg-[#097DDD]/10 group-hover:bg-[#097DDD]/15 flex items-center justify-center transition-colors">
                  <Upload className="h-5 w-5 text-[#097DDD]" />
                </div>
                <span className="font-bold text-[#0A1830] text-sm">Click to upload</span>
                <span className="text-xs text-[#5a7089]">or drag and drop</span>
                <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
              </label>
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {images.map((src, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-[#E4EAF1]">
                      <img src={src} alt="" className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => remove(i)}
                        className="absolute top-1.5 right-1.5 h-6 w-6 rounded-full bg-[#0A1830]/80 flex items-center justify-center hover:bg-[#0A1830] transition-colors"
                        aria-label="Remove image"
                      >
                        <X className="h-3 w-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#E4EAF1]">
              <h3 className="text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-4">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field label="Contact name" required>
                  <input required type="text" placeholder="Your name" className={inputCls} />
                </Field>
                <Field label="Phone" required>
                  <input required type="tel" placeholder="0400 000 000" className={inputCls} />
                </Field>
              </div>
              <Field label="Email" required>
                <input required type="email" placeholder="you@business.com.au" className={inputCls} />
              </Field>
            </div>

            <div className="pt-4 border-t border-[#E4EAF1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-[#5a7089]">By submitting you agree to our listing terms.</p>
              <button
                type="submit"
                className="shine-btn inline-flex items-center gap-2.5 rounded-xl bg-[#097DDD] px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:shadow-[0_6px_28px_rgb(9,125,221,0.55)] hover:bg-[#0a8ef0] transition-all duration-300 group whitespace-nowrap"
              >
                Submit Listing
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-[#cdd6e3] bg-[#E4EAF1]/40 px-4 py-3 text-sm text-[#0A1830] font-medium outline-none focus:border-[#097DDD] focus:ring-2 focus:ring-[#097DDD]/15 focus:bg-white transition-all placeholder:text-[#5a7089]/50";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-2">
        {label} {required && <span className="text-[#097DDD]">*</span>}
      </label>
      {children}
    </div>
  );
}
