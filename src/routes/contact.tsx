import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MyLocalPro Australia" },
      { name: "description", content: "Get in touch with the MyLocalPro Australia team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="container-app py-[50px] md:py-[50px] max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold">Contact us</h1>
          <p className="mt-3 text-muted-foreground text-lg">We're here to help — usually replying within a few hours.</p>
        </div>
      </section>
      <section className="container-app py-[50px] md:py-[50px] grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hello@mylocalpro.com.au" },
            { icon: Phone, label: "Phone", value: "1300 555 010" },
            { icon: MapPin, label: "Office", value: "Hobart, Tasmania" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card shadow-soft p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{label}</div>
                <div className="font-semibold mt-0.5">{value}</div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-card border border-border shadow-soft p-6 md:p-10 space-y-6"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="grid h-14 w-14 mx-auto place-items-center rounded-full bg-primary-soft text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">Message sent</h2>
              <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input required type="text" className={inputCls} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input required type="email" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input required type="text" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea required rows={6} className={`${inputCls} resize-y`} />
              </div>
              <button type="submit" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-elevated hover:opacity-90 transition">
                Send message
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
