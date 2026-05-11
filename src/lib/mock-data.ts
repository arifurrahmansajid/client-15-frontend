export type Location =
  | "Greater Hobart"
  | "Greater Launceston"
  | "Greater Devonport"
  | "Greater Burnie";

export const LOCATIONS: Location[] = [
  "Greater Hobart",
  "Greater Launceston",
  "Greater Devonport",
  "Greater Burnie",
];

export type Category = {
  slug: string;
  name: string;
  icon: string; // lucide icon name
  blurb: string;
};

export const CATEGORIES: Category[] = [
  { slug: "dog-walking", name: "Dog Walking", icon: "Dog", blurb: "Trusted local dog walkers." },
  { slug: "baby-sitting", name: "Baby Sitting", icon: "Baby", blurb: "Caring, vetted sitters." },
  { slug: "ironing-services", name: "Ironing Services", icon: "Shirt", blurb: "Crisp, ready in hours." },
  { slug: "handyman-services", name: "Handyman Services", icon: "Wrench", blurb: "Fixes big and small." },
  { slug: "lawn-mowing-gardening", name: "Lawn Mowing & Gardening", icon: "Trees", blurb: "Lawns and gardens, sorted." },
  { slug: "domestic-cleaning", name: "Domestic Cleaning", icon: "Sparkles", blurb: "A spotless home." },
  { slug: "car-detailing", name: "Car Detailing", icon: "Car", blurb: "Showroom-fresh finish." },
  { slug: "pressure-washing", name: "Pressure Washing", icon: "Droplets", blurb: "Driveways like new." },
  { slug: "carpet-cleaning", name: "Carpet Cleaning", icon: "Brush", blurb: "Deep clean carpets." },
  { slug: "plumbing", name: "Plumbing", icon: "Pipette", blurb: "Licensed local plumbers." },
  { slug: "electrical", name: "Electrical", icon: "Zap", blurb: "Safe and certified." },
  { slug: "builders", name: "Builders", icon: "HardHat", blurb: "Renos and new builds." },
  { slug: "painters", name: "Painters", icon: "PaintRoller", blurb: "Interior and exterior." },
  { slug: "roofers", name: "Roofers", icon: "Home", blurb: "Repair and replace." },
  { slug: "concreters", name: "Concreters", icon: "Square", blurb: "Driveways and slabs." },
  { slug: "plasterers", name: "Plasterers", icon: "Layers", blurb: "Smooth walls and ceilings." },
  { slug: "landscapers", name: "Landscapers", icon: "Flower2", blurb: "Outdoor transformations." },
  { slug: "photographers", name: "Photographers", icon: "Camera", blurb: "Capture your moments." },
  { slug: "fencing-contractors", name: "Fencing Contractors", icon: "Fence", blurb: "Built to last." },
];

export type Business = {
  id: string;
  name: string;
  category: string; // category slug
  categoryName: string;
  location: Location;
  suburb: string;
  rating: number;
  reviews: number;
  description: string;
  about: string;
  services: string[];
  phone: string;
  email: string;
  image: string;
  gallery: string[];
};

const img = (seed: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${seed}?w=${w}&h=${h}&fit=crop&auto=format`;

export const BUSINESSES: Business[] = [
  {
    id: "tassie-plumb-co",
    name: "Tassie Plumb Co.",
    category: "plumbing",
    categoryName: "Plumbing",
    location: "Greater Hobart",
    suburb: "Sandy Bay",
    rating: 4.9,
    reviews: 128,
    description: "Family-run plumbing team serving Hobart for over 15 years. Reliable, on time, and tidy.",
    about: "We're a small, family-owned plumbing business that has proudly served southern Tasmania since 2008. Whether it's a leaking tap or a full bathroom renovation, we treat every job like it's our own home.",
    services: ["Emergency repairs", "Hot water systems", "Bathroom renos", "Blocked drains", "Gas fitting"],
    phone: "0400 123 456",
    email: "hello@tassieplumb.com.au",
    image: img("1581094794329-c8112a89af12"),
    gallery: [img("1558618666-fcd25c85cd64"), img("1585128792020-803d29415281"), img("1556909114-f6e7ad7d3136")],
  },
  {
    id: "north-side-electrical",
    name: "North Side Electrical",
    category: "electrical",
    categoryName: "Electrical",
    location: "Greater Launceston",
    suburb: "Newnham",
    rating: 4.8,
    reviews: 96,
    description: "Fully licensed electricians for homes and small businesses across northern Tasmania.",
    about: "Owned and operated by master electrician Jamie Wilson. We specialise in safe, code-compliant work with clear up-front pricing.",
    services: ["Switchboard upgrades", "Lighting", "Power points", "Safety inspections", "EV chargers"],
    phone: "0411 555 222",
    email: "jamie@northsideelectrical.com.au",
    image: img("1621905251189-08b45d6a269e"),
    gallery: [img("1565793298595-6a879b1d9492"), img("1558002038-1055907df827"), img("1581092918056-0c4c3acd3789")],
  },
  {
    id: "bright-spark-cleaning",
    name: "Bright Spark Cleaning",
    category: "domestic-cleaning",
    categoryName: "Domestic Cleaning",
    location: "Greater Hobart",
    suburb: "Glenorchy",
    rating: 5.0,
    reviews: 211,
    description: "Friendly local cleaners. Weekly, fortnightly or one-off deep cleans.",
    about: "We started Bright Spark to bring genuine care back into home cleaning. Same cleaner, same day, every visit.",
    services: ["Weekly cleans", "End of lease", "Deep cleans", "Oven & BBQ", "Window cleaning"],
    phone: "0422 998 100",
    email: "book@brightsparkclean.com.au",
    image: img("1581578731548-c64695cc6952"),
    gallery: [img("1527515637462-cff94eecc1ac"), img("1584622650111-993a426fbf0a"), img("1556909172-89c4d6dee6ec")],
  },
  {
    id: "coastal-lawns-gardens",
    name: "Coastal Lawns & Gardens",
    category: "lawn-mowing-gardening",
    categoryName: "Lawn Mowing & Gardening",
    location: "Greater Devonport",
    suburb: "East Devonport",
    rating: 4.7,
    reviews: 64,
    description: "Local lawn care, hedging and tidy-ups. Fully insured.",
    about: "From quick fortnightly mows to full garden makeovers, we keep your outdoor spaces looking their best year-round.",
    services: ["Lawn mowing", "Hedge trimming", "Mulching", "Garden tidy-ups", "Green waste removal"],
    phone: "0433 700 811",
    email: "info@coastallawns.com.au",
    image: img("1558904541-efa843a96f01"),
    gallery: [img("1416879595882-3373a0480b5b"), img("1591857177580-dc82b9ac4e1e"), img("1599629954294-14df9ec8bc03")],
  },
  {
    id: "burnie-builders",
    name: "Burnie Builders",
    category: "builders",
    categoryName: "Builders",
    location: "Greater Burnie",
    suburb: "Wivenhoe",
    rating: 4.9,
    reviews: 47,
    description: "Custom homes, extensions and renovations along the north-west coast.",
    about: "Master builders with over 25 years building homes Tasmanians love. Quality craftsmanship, on time and on budget.",
    services: ["New builds", "Extensions", "Kitchen renos", "Bathroom renos", "Decks & pergolas"],
    phone: "0455 200 110",
    email: "build@burniebuilders.com.au",
    image: img("1503387762-592deb58ef4e"),
    gallery: [img("1503594384566-461fe158e797"), img("1505691938895-1758d7feb511"), img("1600585154340-be6161a56a0c")],
  },
  {
    id: "apple-isle-painters",
    name: "Apple Isle Painters",
    category: "painters",
    categoryName: "Painters",
    location: "Greater Hobart",
    suburb: "Bellerive",
    rating: 4.8,
    reviews: 89,
    description: "Premium interior and exterior painting. Free quotes across Hobart.",
    about: "A small crew obsessed with neat lines and tidy job sites. Premium paints, premium finish.",
    services: ["Interior painting", "Exterior painting", "Roof painting", "Feature walls", "Colour consults"],
    phone: "0466 321 540",
    email: "paint@appleisle.com.au",
    image: img("1562259949-e8e7689d7828"),
    gallery: [img("1589939705384-5185137a7f0f"), img("1604147706283-d7119b5b822c"), img("1572297870735-e72b8b3ba4f8")],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Hobart",
    text: "Found a brilliant cleaner in 2 minutes. So easy — even my dad could do it!",
  },
  {
    name: "Liam K.",
    location: "Launceston",
    text: "Booked a sparky for the next morning. Honest pricing and great work.",
  },
  {
    name: "Priya R.",
    location: "Devonport",
    text: "Love that everyone listed is genuinely local. Great way to support our community.",
  },
];

export const STATS = [
  { value: "1,200+", label: "Local pros listed" },
  { value: "18,000+", label: "Jobs connected" },
  { value: "4.9★", label: "Average rating" },
  { value: "100%", label: "Tasmanian owned" },
];
