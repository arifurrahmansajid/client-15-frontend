import { 
  Baby, Brush, Dog, Droplet, HardHat, Hammer, Home as HomeIcon, 
  Leaf, Paintbrush, Sparkles, Shirt, Wrench, Zap, type LucideIcon 
} from "lucide-react";

const SERVICE_FEATURES: { label: string; Icon: LucideIcon }[] = [
  { label: "Builders", Icon: HomeIcon },
  { label: "Plumbing", Icon: Droplet },
  { label: "Domestic Cleaning", Icon: Sparkles },
  { label: "Painters", Icon: Paintbrush },
  { label: "Electrical", Icon: Zap },
  { label: "Lawn Mowing & Gardening", Icon: Leaf },
  { label: "Handyman Services", Icon: Wrench },
  { label: "Bricklayer", Icon: HardHat },
  { label: "Cabinet Maker", Icon: Hammer },
  { label: "Carpenter", Icon: Brush },
  { label: "Dog Walking", Icon: Dog },
  { label: "Baby Sitting", Icon: Baby },
  { label: "Ironing Services", Icon: Shirt },
];

export function ServiceShowcase() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
          Popular Services
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
          Select the right trade from our top service categories — clean, modern and easy to scan.
        </p>
      </div>

      {/* This container replicates the flex-wrap pill layout from image_58557b.png */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {SERVICE_FEATURES.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 px-6 py-3 text-white shadow-[0_18px_50px_rgba(249,115,22,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(249,115,22,0.24)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white shadow-sm shadow-orange-500/20">
              <Icon className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-white">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}