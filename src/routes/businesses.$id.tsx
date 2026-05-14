import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Mail, MapPin, Phone, Star, Building2 } from "lucide-react";
import { BUSINESSES } from "@/lib/mock-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/businesses/$id")({
  loader: ({ params }) => {
    const business = BUSINESSES.find((b) => b.id === params.id);
    if (!business) throw notFound();
    return { business };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.business.name} — MyLocalPro Australia` },
          { name: "description", content: loaderData.business.description },
          { property: "og:title", content: loaderData.business.name },
          { property: "og:description", content: loaderData.business.description },
          { property: "og:image", content: loaderData.business.image },
        ]
      : [],
  }),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#0A1830]">Couldn't load this profile</h1>
          <p className="mt-2 text-[#5a7089]">{error.message}</p>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="mt-6 inline-flex rounded-xl bg-[#097DDD] px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white hover:bg-[#0a8ef0] transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-black text-[#0A1830]">Business not found</h1>
        <Link to="/businesses" className="mt-4 inline-block text-[#097DDD] font-bold hover:underline">
          Back to all businesses
        </Link>
      </div>
    </div>
  ),
  component: ProfilePage,
});

function ProfilePage() {
  const { business: b } = Route.useLoaderData();

  return (
    <>
      {/* ── Hero / Header ── */}
      <section className="relative">
        {/* Cover image */}
        <div className="h-56 md:h-[320px] w-full overflow-hidden bg-[#E4EAF1] relative">
          <img src={b.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1830]/70 via-[#0A1830]/20 to-transparent" />
        </div>

        {/* Info card overlapping the cover */}
        <div className="container-app">
          <div className="-mt-16 md:-mt-20 relative z-10">
            <Link
              to="/businesses"
              className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white/80 glass-dark border border-white/15 hover:border-white/30 rounded-full px-3.5 py-2 mb-4 hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Businesses
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border border-[#cdd6e3] shadow-[0_8px_48px_rgb(10,24,48,0.14)] p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:justify-between"
            >
              <div className="flex items-start gap-6">
                {/* Logo Placeholder */}
                <div className="h-20 w-20 rounded-2xl bg-[#E4EAF1] border border-[#cdd6e3] flex items-center justify-center shrink-0">
                  <Building2 className="h-10 w-10 text-[#097DDD]/30" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#097DDD]/10 text-[#097DDD] px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
                      {b.categoryName}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#5a7089] bg-[#E4EAF1]/50 px-3 py-1 rounded-full border border-[#cdd6e3]/50">
                      ABN: {b.abn}
                    </span>
                  </div>
                  <h1 className="mt-3 text-2xl md:text-3xl font-black text-[#0A1830]">{b.name}</h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#5a7089]">
                      <MapPin className="h-4 w-4 text-[#097DDD]" />
                      {b.suburb ? `${b.suburb}, ` : ""}{b.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#5a7089]">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <span className="text-[#0A1830] font-bold">{b.rating}</span>
                      <span>({b.reviews} reviews)</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  className="shine-btn inline-flex items-center gap-2 rounded-xl bg-[#097DDD] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:shadow-[0_6px_28px_rgb(9,125,221,0.55)] hover:bg-[#0a8ef0] transition-all"
                >
                  <Phone className="h-4 w-4" /> {b.phone}
                </a>
                <a
                  href={`mailto:${b.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#cdd6e3] bg-white px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#0A1830] hover:border-[#097DDD]/40 hover:bg-[#097DDD]/5 hover:text-[#097DDD] transition-all"
                >
                  <Mail className="h-4 w-4" /> Email Enquiry
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="container-app py-10 pb-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">

          {/* About */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-1 rounded-full bg-[#097DDD]" />
              <h2 className="text-xl font-black text-[#0A1830]">About</h2>
            </div>
            <p className="text-[#5a7089] leading-relaxed">{b.about}</p>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-6 w-1 rounded-full bg-[#097DDD]" />
              <h2 className="text-xl font-black text-[#0A1830]">Services</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {b.services.map((s: string) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-[#cdd6e3] bg-white px-4 py-3 text-sm font-semibold text-[#0A1830] shadow-[0_1px_8px_rgb(10,24,48,0.05)] hover:border-[#097DDD]/30 hover:shadow-[0_2px_12px_rgb(10,24,48,0.09)] transition-all"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#097DDD] shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Gallery */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-6 w-1 rounded-full bg-[#097DDD]" />
              <h2 className="text-xl font-black text-[#0A1830]">Recent Work</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {b.gallery.map((src: string, i: number) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-[#E4EAF1] border border-[#cdd6e3]">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-6 w-1 rounded-full bg-[#097DDD]" />
              <h2 className="text-xl font-black text-[#0A1830]">Reviews</h2>
            </div>
            <div className="rounded-2xl border-2 border-dashed border-[#cdd6e3] bg-[#E4EAF1]/40 p-10 text-center">
              <div className="flex justify-center gap-1 text-amber-500 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="font-black text-[#0A1830] text-lg">{b.rating} · {b.reviews} reviews</p>
              <p className="mt-1 text-sm text-[#5a7089]">Detailed reviews coming soon.</p>
            </div>
          </motion.div>
        </div>

        {/* ── Sidebar ── */}
        <aside className="lg:sticky lg:top-24 self-start space-y-5">
          {/* Contact card */}
          <div className="rounded-2xl border border-[#cdd6e3] bg-white shadow-[0_4px_24px_rgb(10,24,48,0.08)] p-6">
            <h3 className="font-black text-[#0A1830] text-base mb-1">Get in touch</h3>
            <p className="text-xs text-[#5a7089] mb-5">No middlemen. No fees. Direct contact.</p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${b.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl bg-[#E4EAF1]/60 border border-[#cdd6e3] px-4 py-3 font-semibold text-[#0A1830] hover:border-[#097DDD]/40 hover:bg-[#097DDD]/5 transition-all group"
              >
                <Phone className="h-4 w-4 text-[#097DDD]" />
                {b.phone}
              </a>
              <a
                href={`mailto:${b.email}`}
                className="flex items-center gap-3 rounded-xl bg-[#E4EAF1]/60 border border-[#cdd6e3] px-4 py-3 font-semibold text-[#0A1830] hover:border-[#097DDD]/40 hover:bg-[#097DDD]/5 transition-all group"
              >
                <Mail className="h-4 w-4 text-[#097DDD]" />
                {b.email}
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-[#E4EAF1]/60 border border-[#cdd6e3] px-4 py-3 text-[#5a7089]">
                <MapPin className="h-4 w-4 text-[#097DDD]" />
                {b.suburb}, {b.location}
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="rounded-2xl bg-navy-gradient border border-white/10 p-6">
            <div className="h-9 w-9 rounded-xl bg-[#097DDD]/20 flex items-center justify-center mb-4">
              <Building2 className="h-4.5 w-4.5 text-[#097DDD]" />
            </div>
            <h4 className="text-white font-black text-sm mb-1">Are you a tradie?</h4>
            <p className="text-[#E4EAF1]/50 text-xs mb-4 leading-relaxed">List your business free and reach more customers across Australia.</p>
            <Link
              to="/list-business"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#097DDD] px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white hover:bg-[#0a8ef0] transition-colors"
            >
              List Your Business
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
