import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Image as ImageIcon, Upload, X } from "lucide-react";
import { CATEGORIES, LOCATIONS } from "@/lib/mock-data";

export const Route = createFileRoute("/list-business")({
  head: () => ({
    meta: [
      { title: "List Your Business — MyLocalPro Australia" },
      { name: "description", content: "List your local Tasmanian business on MyLocalPro Australia and get found by more customers." },
    ],
  }),
  component: ListBusinessPage,
});

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
      <section className="container-app py-[50px] md:py-[50px] max-w-2xl text-center">
        <div className="grid h-16 w-16 mx-auto place-items-center rounded-full bg-primary-soft text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">Thanks — your listing is in review</h1>
        <p className="mt-4 text-muted-foreground">
          We'll email you within 1 business day once your business is live on MyLocalPro Australia.
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="container-app py-[50px] md:py-[50px] max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-semibold">For tradies</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold">List your business</h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Reach Tasmanians actively looking for your services. Free to get started.
          </p>
        </div>
      </section>

      <section className="container-app py-[50px] md:py-[50px] max-w-3xl">
        <form onSubmit={submit} className="space-y-8 rounded-3xl bg-card border border-border shadow-soft p-6 md:p-10">
          <Field label="Business name" required>
            <input required type="text" placeholder="e.g. Tassie Plumb Co." className={inputCls} />
          </Field>

          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Service category" required>
              <select required className={inputCls} defaultValue="">
                <option value="" disabled>Choose a category</option>
                {CATEGORIES.map((c) => (<option key={c.slug} value={c.slug}>{c.name}</option>))}
              </select>
            </Field>
            <Field label="Location" required>
              <select required className={inputCls} defaultValue="">
                <option value="" disabled>Choose a location</option>
                {LOCATIONS.map((l) => (<option key={l} value={l}>{l}</option>))}
              </select>
            </Field>
          </div>

          <Field label="Suburb">
            <input type="text" placeholder="e.g. Sandy Bay" className={inputCls} />
          </Field>

          <Field label="Business description" required>
            <textarea required rows={5} placeholder="Tell customers what you do and why they should choose you." className={`${inputCls} resize-y`} />
          </Field>

          <div>
            <label className="block text-sm font-semibold mb-2">Upload photos of your work</label>
            <p className="text-xs text-muted-foreground mb-3">Up to 6 images. JPG or PNG.</p>
            <label className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-surface p-8 cursor-pointer hover:border-primary hover:bg-primary-soft/40 transition">
              <Upload className="h-6 w-6 text-primary" />
              <span className="font-medium">Click to upload</span>
              <span className="text-xs text-muted-foreground">or drag and drop</span>
              <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
            </label>
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {images.map((src, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => remove(i)}
                      className="absolute top-1.5 right-1.5 grid h-7 w-7 place-items-center rounded-full bg-background/90 hover:bg-background"
                      aria-label="Remove image"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
                {images.length === 0 && (
                  <div className="col-span-3 flex items-center justify-center text-sm text-muted-foreground gap-2">
                    <ImageIcon className="h-4 w-4" /> No images yet
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Contact name" required>
              <input required type="text" className={inputCls} />
            </Field>
            <Field label="Phone" required>
              <input required type="tel" placeholder="0400 000 000" className={inputCls} />
            </Field>
          </div>
          <Field label="Email" required>
            <input required type="email" placeholder="you@business.com.au" className={inputCls} />
          </Field>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">By submitting you agree to our listing terms.</p>
            <button type="submit" className="rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-elevated hover:opacity-90 transition">
              Submit Listing
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}
