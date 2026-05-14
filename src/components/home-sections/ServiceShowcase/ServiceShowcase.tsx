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
    <section className="bg-[#f0f4ff] py-[50px] md:py-[50px] px-4">
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
            className="group flex items-center gap-3 rounded-full border border-violet-200 bg-white px-6 py-3 transition-all duration-300 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-200/50"
          >
            <Icon className="h-5 w-5 text-slate-900" strokeWidth={2.5} />
            <span className="text-[15px] font-medium text-slate-800">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}