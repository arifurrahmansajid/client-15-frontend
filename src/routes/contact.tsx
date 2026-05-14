import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MyLocalPro Australia" },
      { name: "description", content: "Get in touch with the MyLocalPro Australia team." },
    ],
  }),
  component: ContactPage,
});

const contactItems = [
  { icon: Mail, label: "Email", value: "hello@mylocalpro.com.au", color: "#097DDD" },
  { icon: Phone, label: "Phone", value: "1300 555 010", color: "#097DDD" },
  { icon: MapPin, label: "Office", value: "Hobart, Tasmania", color: "#097DDD" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* ── Banner ── */}
      <section className="relative bg-navy-gradient pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#097DDD]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="container-app relative z-10 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label-dark mb-4 block"
          >
            We're here to help
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-3"
          >
            Contact{" "}
            <span className="text-[#097DDD]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 text-base"
          >
            We're here to help — usually replying within a few hours.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="container-app py-16 grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-[#0A1830] mb-6">Get In Touch</h2>
          {contactItems.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 rounded-2xl border border-[#cdd6e3] bg-white shadow-[0_2px_12px_rgb(10,24,48,0.06)] p-5 hover:border-[#097DDD]/30 hover:shadow-[0_4px_20px_rgb(10,24,48,0.10)] transition-all duration-300 group"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-[#097DDD]/10 flex items-center justify-center group-hover:bg-[#097DDD] transition-colors duration-300">
                <Icon className="h-5 w-5 text-[#097DDD] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-[0.22em] text-[#5a7089] font-black mb-0.5">{label}</div>
                <div className="font-bold text-[#0A1830]">{value}</div>
              </div>
            </motion.div>
          ))}

          {/* Decorative info card */}
          <div className="rounded-2xl bg-navy-gradient p-6 border border-white/10 mt-6">
            <div className="text-[9px] uppercase tracking-[0.22em] text-[#E4EAF1]/40 font-black mb-2">Response time</div>
            <div className="text-white font-black text-xl mb-1">Within 2–4 hours</div>
            <div className="text-[#E4EAF1]/50 text-sm">Mon–Fri, 8am–6pm AEST</div>
          </div>
        </div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-white border border-[#cdd6e3] shadow-[0_4px_32px_rgb(10,24,48,0.09)] p-8 md:p-10 space-y-6"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-[#097DDD]/10 flex items-center justify-center mb-5">
                <CheckCircle2 className="h-8 w-8 text-[#097DDD]" />
              </div>
              <h2 className="text-2xl font-black text-[#0A1830] mb-2">Message sent!</h2>
              <p className="text-[#5a7089]">We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-1">Send us a message</h2>
                <p className="text-sm text-[#5a7089]">Fill out the form and we'll be in touch.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-2">Name</label>
                  <input required type="text" placeholder="John Smith" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-2">Email</label>
                  <input required type="email" placeholder="john@example.com" className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-2">Subject</label>
                <input required type="text" placeholder="How can we help?" className={inputCls} />
              </div>

              <div>
                <label className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#5a7089] mb-2">Message</label>
                <textarea required rows={5} placeholder="Tell us more..." className={`${inputCls} resize-y`} />
              </div>

              <button
                type="submit"
                className="shine-btn w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#097DDD] py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:shadow-[0_6px_28px_rgb(9,125,221,0.55)] hover:bg-[#0a8ef0] transition-all duration-300 group"
              >
                Send Message
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </motion.form>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-[#cdd6e3] bg-[#E4EAF1]/40 px-4 py-3 text-sm text-[#0A1830] font-medium outline-none focus:border-[#097DDD] focus:ring-2 focus:ring-[#097DDD]/15 focus:bg-white transition-all placeholder:text-[#5a7089]/50";
