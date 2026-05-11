import { STATS } from "@/lib/mock-data";

export function Statistics() {
  return (
    <section className="container-app py-24 md:py-32">
      <div className="rounded-3xl bg-foreground text-background py-12 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold tracking-tight">{s.value}</div>
            <div className="mt-2 text-sm text-background/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
