import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="container-app py-[50px] md:py-[50px]">
      <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Are you a local tradie? Get found by more customers.
        </h2>
        <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
          List your business in minutes and reach Tasmanians actively looking for your services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/list-business"
            className="rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:opacity-90 transition"
          >
            List Your Business
          </Link>
          <Link
            to="/businesses"
            className="rounded-full border border-white/30 px-7 py-3.5 font-semibold hover:bg-white/10 transition"
          >
            Browse Pros
          </Link>
        </div>
      </div>
    </section>
  );
}
