import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-app py-16">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to find a local pro?</h3>
            <p className="mt-2 text-primary-foreground/85 max-w-xl">
              Browse trusted Tasmanian businesses or list your own — it only takes a minute.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/businesses" className="rounded-full bg-white text-primary px-6 py-3 font-semibold hover:opacity-90 transition">
              Find a Pro
            </Link>
            <Link to="/list-business" className="rounded-full border border-primary-foreground/30 px-6 py-3 font-semibold hover:bg-white/10 transition">
              List Your Business
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold">M</span>
              <span className="font-semibold">MyLocalPro Australia</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The simple way to find trusted local trades and services across Tasmania.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/businesses" className="hover:text-foreground">Find a Pro</Link></li>
              <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
              <li><Link to="/list-business" className="hover:text-foreground">List Your Business</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@mylocalpro.com.au</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 1300 555 010</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hobart, TAS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow</h4>
            <div className="flex gap-2">
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} MyLocalPro Australia. All rights reserved.</p>
          <p>Proudly Tasmanian owned and operated.</p>
        </div>
      </div>
    </footer>
  );
}
