import tradie1 from "@/assets/section images/tradie-1.png";
import tradie2 from "@/assets/section images/tradie-2.png";
import tradie3 from "@/assets/section images/tradie-3.png";
import electricianImg from "@/assets/section images/electrician-installing-laying-electrical-cables-ceiling-inside-house.jpg";
import builderImg from "@/assets/section images/handsome-woodworker-posing-photography.jpg";
import gardeningImg from "@/assets/section images/emma-houghton-EixJzIdl4bc-unsplash.jpg";
import cleaningImg from "@/assets/section images/marco-xu-ToUPBCO62Lw-unsplash.jpg";
import plumberImg from "@/assets/section images/imgi_6_carpentor.png";
import painterImg from "@/assets/section images/imgi_57_image-1738135596812.png";
import rooferImg from "@/assets/section images/ailbhe-flynn-jkZs3Oi9pq0-unsplash.jpg";
import concreterImg from "@/assets/section images/imgi_52_image-1737711390735.jpg";
import plastererImg from "@/assets/section images/imgi_62_image-1738134768994.png";
import landscaperImg from "@/assets/section images/kiros-amin-IrtBO4xp6NI-unsplash.jpg";
import photographerImg from "@/assets/section images/david-clode-h7D3RSePhnc-unsplash.jpg";
import fencingImg from "@/assets/section images/jamie-street-qWYvQMIJyfE-unsplash.jpg";
import carDetailingImg from "@/assets/section images/imgi_5_fecar.png";
import dogWalkingImg from "@/assets/section images/imgi_58_image-1738134664644.png";
import babysittingImg from "@/assets/section images/hero-tradie.jpg";

export type Location =
  | "Hobart Region"
  | "Launceston Region"
  | "Devonport Region"
  | "Burnie Region";

const img = (seed: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${seed}?w=${w}&h=${h}&fit=crop&auto=format`;

export const LOCATIONS: Location[] = [
  "Hobart Region",
  "Launceston Region",
  "Devonport Region",
  "Burnie Region",
];

export type Category = {
  slug: string;
  name: string;
  icon: string; // lucide icon name
  blurb: string;
  image: string;
  tier: 10 | 20 | 40;
};

export const CATEGORIES: Category[] = [
  { slug: "dog-walking", name: "Dog Walking", icon: "Dog", blurb: "Trusted local dog walkers.", image: dogWalkingImg, tier: 10 },
  { slug: "baby-sitting", name: "Babysitting", icon: "Baby", blurb: "Caring, vetted sitters.", image: babysittingImg, tier: 10 },
  { slug: "ironing-services", name: "Ironing Services", icon: "Shirt", blurb: "Crisp, ready in hours.", image: cleaningImg, tier: 10 },
  { slug: "handyman-services", name: "Handyman Services", icon: "Wrench", blurb: "Fixes big and small.", image: tradie1, tier: 20 },
  { slug: "lawn-mowing-gardening", name: "Lawn Mowing and Gardening", icon: "Trees", blurb: "Lawns and gardens, sorted.", image: gardeningImg, tier: 20 },
  { slug: "domestic-cleaning", name: "Domestic Cleaning", icon: "Sparkles", blurb: "A spotless home.", image: cleaningImg, tier: 20 },
  { slug: "car-detailing", name: "Car Detailing", icon: "Car", blurb: "Showroom shine for every vehicle.", image: carDetailingImg, tier: 20 },
  { slug: "pressure-washing", name: "Pressure Washing", icon: "Droplet", blurb: "Clean driveways, decks and walls.", image: rooferImg, tier: 20 },
  { slug: "carpet-cleaning", name: "Carpet Cleaning", icon: "Sparkle", blurb: "Fresh carpets, fast turnaround.", image: cleaningImg, tier: 20 },
  { slug: "plumbers", name: "Plumbers", icon: "Pipette", blurb: "Licensed local plumbers.", image: plumberImg, tier: 40 },
  { slug: "electricians", name: "Electricians", icon: "Zap", blurb: "Safe and certified.", image: electricianImg, tier: 40 },
  { slug: "builders", name: "Builders", icon: "HardHat", blurb: "Renos and new builds.", image: builderImg, tier: 40 },
  { slug: "painters", name: "Painters", icon: "PaintRoller", blurb: "Interior and exterior.", image: painterImg, tier: 40 },
  { slug: "roofers", name: "Roofers", icon: "Home", blurb: "Roof repairs and replacements.", image: rooferImg, tier: 40 },
  { slug: "concreters", name: "Concreters", icon: "Square", blurb: "Strong slabs, paths and driveways.", image: concreterImg, tier: 40 },
  { slug: "plasterers", name: "Plasterers", icon: "Layers", blurb: "Smooth walls and ceilings.", image: plastererImg, tier: 40 },
  { slug: "landscapers", name: "Landscapers", icon: "Leaf", blurb: "Beautiful outdoor spaces.", image: landscaperImg, tier: 40 },
  { slug: "photographers", name: "Photographers", icon: "Camera", blurb: "Great photos for every job.", image: photographerImg, tier: 40 },
  { slug: "fencing-contractors", name: "Fencing Contractors", icon: "Shield", blurb: "Secure and smart fencing.", image: fencingImg, tier: 40 },
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
  abn: string;
  logo?: string;
  image: string;
  gallery: string[];
};


export const BUSINESSES: Business[] = [
  {
    id: "tassie-plumb-co",
    name: "Tassie Plumb Co.",
    category: "plumbers",
    categoryName: "Plumbers",
    location: "Hobart Region",
    suburb: "Sandy Bay",
    rating: 4.9,
    reviews: 128,
    description: "Family-run plumbing team serving Hobart for over 15 years. Reliable, on time, and tidy.",
    about: "We're a small, family-owned plumbing business that has proudly served southern Tasmania since 2008. Whether it's a leaking tap or a full bathroom renovation, we treat every job like it's our own home.",
    services: ["Emergency repairs", "Hot water systems", "Bathroom renos", "Blocked drains", "Gas fitting"],
    phone: "0400 123 456",
    email: "hello@tassieplumb.com.au",
    abn: "12345678901",
    image: tradie2,
    gallery: [img("1558618666-fcd25c85cd64"), img("1585128792020-803d29415281"), img("1556909114-f6e7ad7d3136")],
  },
  {
    id: "north-side-electrical",
    name: "North Side Electrical",
    category: "electricians",
    categoryName: "Electricians",
    location: "Launceston Region",
    suburb: "Newnham",
    rating: 4.8,
    reviews: 96,
    description: "Fully licensed electricians for homes and small businesses across northern Tasmania.",
    about: "Owned and operated by master electrician Jamie Wilson. We specialise in safe, code-compliant work with clear up-front pricing.",
    services: ["Switchboard upgrades", "Lighting", "Power points", "Safety inspections", "EV chargers"],
    phone: "0411 555 222",
    email: "jamie@northsideelectrical.com.au",
    abn: "23456789012",
    image: electricianImg,
    gallery: [img("1565793298595-6a879b1d9492"), img("1558002038-1055907df827"), img("1581092918056-0c4c3acd3789")],
  },
  {
    id: "bright-spark-cleaning",
    name: "Bright Spark Cleaning",
    category: "domestic-cleaning",
    categoryName: "Domestic Cleaning",
    location: "Hobart Region",
    suburb: "Glenorchy",
    rating: 5.0,
    reviews: 211,
    description: "Friendly local cleaners. Weekly, fortnightly or one-off deep cleans.",
    about: "We started Bright Spark to bring genuine care back into home cleaning. Same cleaner, same day, every visit.",
    services: ["Weekly cleans", "End of lease", "Deep cleans", "Oven & BBQ", "Window cleaning"],
    phone: "0422 998 100",
    email: "book@brightsparkclean.com.au",
    abn: "34567890123",
    image: cleaningImg,
    gallery: [img("1527515637462-cff94eecc1ac"), img("1584622650111-993a426fbf0a"), img("1556909172-89c4d6dee6ec")],
  },
  {
    id: "coastal-lawns-gardens",
    name: "Coastal Lawns & Gardens",
    category: "lawn-mowing-gardening",
    categoryName: "Lawn Mowing & Gardening",
    location: "Devonport Region",
    suburb: "East Devonport",
    rating: 4.7,
    reviews: 64,
    description: "Local lawn care, hedging and tidy-ups. Fully insured.",
    about: "From quick fortnightly mows to full garden makeovers, we keep your outdoor spaces looking their best year-round.",
    services: ["Lawn mowing", "Hedge trimming", "Mulching", "Garden tidy-ups", "Green waste removal"],
    phone: "0433 700 811",
    email: "info@coastallawns.com.au",
    abn: "45678901234",
    image: gardeningImg,
    gallery: [img("1416879595882-3373a0480b5b"), img("1591857177580-dc82b9ac4e1e"), img("1599629954294-14df9ec8bc03")],
  },
  {
    id: "burnie-builders",
    name: "Burnie Builders",
    category: "builders",
    categoryName: "Builders",
    location: "Burnie Region",
    suburb: "Wivenhoe",
    rating: 4.9,
    reviews: 47,
    description: "Custom homes, extensions and renovations along the north-west coast.",
    about: "Master builders with over 25 years building homes Tasmanians love. Quality craftsmanship, on time and on budget.",
    services: ["New builds", "Extensions", "Kitchen renos", "Bathroom renos", "Decks & pergolas"],
    phone: "0455 200 110",
    email: "build@burniebuilders.com.au",
    abn: "56789012345",
    image: builderImg,
    gallery: [img("1503594384566-461fe158e797"), img("1505691938895-1758d7feb511"), img("1600585154340-be6161a56a0c")],
  },
  {
    id: "apple-isle-painters",
    name: "Apple Isle Painters",
    category: "painters",
    categoryName: "Painters",
    location: "Hobart Region",
    suburb: "Bellerive",
    rating: 4.8,
    reviews: 89,
    description: "Premium interior and exterior painting. Free quotes across Hobart.",
    about: "A small crew obsessed with neat lines and tidy job sites. Premium paints, premium finish.",
    services: ["Interior painting", "Exterior painting", "Roof painting", "Feature walls", "Colour consults"],
    phone: "0466 321 540",
    email: "paint@appleisle.com.au",
    abn: "67890123456",
    image: tradie3,
    gallery: [img("1589939705384-5185137a7f0f"), img("1604147706283-d7119b5b822c"), img("1572297870735-e72b8b3ba4f8")],
  },
  {
    id: "hobart-hound-walkers",
    name: "Hobart Hound Walkers",
    category: "dog-walking",
    categoryName: "Dog Walking",
    location: "Hobart Region",
    suburb: "Sandy Bay",
    rating: 4.9,
    reviews: 142,
    description: "Professional dog walking and pet sitting services. Fully insured and pet first-aid certified.",
    about: "We love dogs! Our team provides energetic walks and reliable pet sitting across Hobart. Your furry friends are in safe hands with us.",
    services: ["Dog walking", "Pet sitting", "Puppy visits", "Overnight stays"],
    phone: "0477 123 789",
    email: "woof@hobarthounds.com.au",
    abn: "78901234567",
    image: dogWalkingImg,
    gallery: [img("1516733725897-1aa73b87c8e8")],
  },
  {
    id: "trusted-babysitting",
    name: "Trusted Babysitting Tasmania",
    category: "baby-sitting",
    categoryName: "Babysitting",
    location: "Launceston Region",
    suburb: "East Launceston",
    rating: 4.7,
    reviews: 58,
    description: "Vetted, experienced babysitters with valid Working with Children Checks.",
    about: "Giving parents peace of mind with reliable, caring sitters. Available for one-off evenings or regular daytime help.",
    services: ["Evening sitting", "Daytime care", "After school help"],
    phone: "0488 456 123",
    email: "care@trustedcare.com.au",
    abn: "89012345678",
    image: babysittingImg,
    gallery: [img("1581578731548-c64695cc6952")],
  },
  {
    id: "island-ironing",
    name: "Island Ironing Services",
    category: "ironing-services",
    categoryName: "Ironing Services",
    location: "Hobart Region",
    suburb: "Moonah",
    rating: 4.8,
    reviews: 35,
    description: "Professional ironing with pick-up and delivery. Smoke-free environment.",
    about: "Hate ironing? We love it! Quick turnaround times and crisp results for all your garments and linens.",
    services: ["Shirt ironing", "Bedding", "Pick-up & Delivery"],
    phone: "0499 789 456",
    email: "crisp@islandironing.com.au",
    abn: "90123456789",
    image: cleaningImg,
    gallery: [img("1489274495757-95c7c837b101")],
  },
  {
    id: "handy-dan",
    name: "Handy Dan",
    category: "handyman-services",
    categoryName: "Handyman Services",
    location: "Devonport Region",
    suburb: "Latrobe",
    rating: 4.9,
    reviews: 72,
    description: "No job too small! General repairs, maintenance and assembly.",
    about: "Friendly local handyman ready to tackle your to-do list. From leaky taps to flat-pack assembly, Dan can do it.",
    services: ["General repairs", "Furniture assembly", "Picture hanging", "Deck maintenance"],
    phone: "0412 111 222",
    email: "dan@handydan.com.au",
    abn: "01234567890",
    image: tradie1,
    gallery: [img("1581092918056-0c4c3acd3789")],
  },
  {
    id: "showroom-shine",
    name: "Showroom Shine Detailing",
    category: "car-detailing",
    categoryName: "Car Detailing",
    location: "Burnie Region",
    suburb: "Burnie",
    rating: 4.8,
    reviews: 44,
    description: "Premium mobile car detailing. We come to your home or office.",
    about: "Giving your car that new-car feel again. Professional products and obsessive attention to detail.",
    services: ["Full detail", "Interior deep clean", "Paint protection", "Ceramic coating"],
    phone: "0423 333 444",
    email: "shine@showroomshine.com.au",
    abn: "12345678902",
    image: carDetailingImg,
    gallery: [img("1542362567-69f5cf8649ca")],
  },
  {
    id: "jet-stream-wash",
    name: "Jet Stream Pressure Washing",
    category: "pressure-washing",
    categoryName: "Pressure Washing",
    location: "Hobart Region",
    suburb: "Rosny",
    rating: 4.7,
    reviews: 29,
    description: "Commercial and residential pressure cleaning services.",
    about: "Transform your outdoor areas. We clean driveways, roofs, decks, and walls using eco-friendly solutions.",
    services: ["Driveway cleaning", "Roof wash", "Deck restoration", "Wall cleaning"],
    phone: "0434 555 666",
    email: "wash@jetstream.com.au",
    abn: "23456789013",
    image: rooferImg,
    gallery: [img("1584622650-18759f048b51")],
  },
  {
    id: "pro-carpet-clean",
    name: "Pro Carpet Clean",
    category: "carpet-cleaning",
    categoryName: "Carpet Cleaning",
    location: "Launceston Region",
    suburb: "Riverside",
    rating: 4.9,
    reviews: 83,
    description: "Deep steam cleaning for carpets, rugs, and upholstery.",
    about: "Removing stains and allergens to keep your home healthy. Fast drying times and satisfaction guaranteed.",
    services: ["Carpet steam cleaning", "Rug cleaning", "Upholstery", "Stain removal"],
    phone: "0445 777 888",
    email: "clean@procarpet.com.au",
    abn: "34567890124",
    image: cleaningImg,
    gallery: [img("1558618666-fcd25c85cd64")],
  },
  {
    id: "top-tier-roofing",
    name: "Top Tier Roofing",
    category: "roofers",
    categoryName: "Roofers",
    location: "Hobart Region",
    suburb: "Glenorchy",
    rating: 4.8,
    reviews: 51,
    description: "Roof repairs, re-roofing, and gutter services.",
    about: "Specialising in iron and tile roofs. Quality workmanship to protect your home from the Tasmanian elements.",
    services: ["Roof leaks", "Re-roofing", "Gutter cleaning", "Roof restoration"],
    phone: "0456 999 000",
    email: "roofing@toptier.com.au",
    abn: "45678901235",
    image: rooferImg,
    gallery: [img("1632759162414-239648a9277b")],
  },
  {
    id: "solid-slab-concrete",
    name: "Solid Slab Concrete",
    category: "concreters",
    categoryName: "Concreters",
    location: "Devonport Region",
    suburb: "Ulverstone",
    rating: 4.7,
    reviews: 38,
    description: "Driveways, shed slabs, and decorative concrete finishes.",
    about: "Reliable concreting services for residential and small commercial projects. Professional finish every time.",
    services: ["Driveways", "Shed slabs", "Exposed aggregate", "Pathways"],
    phone: "0467 123 321",
    email: "slabs@solidslab.com.au",
    abn: "56789012346",
    image: concreterImg,
    gallery: [img("1517646272420-4749f1a20a46")],
  },
  {
    id: "smooth-finish-plastering",
    name: "Smooth Finish Plastering",
    category: "plasterers",
    categoryName: "Plasterers",
    location: "Launceston Region",
    suburb: "Mowbray",
    rating: 4.9,
    reviews: 42,
    description: "Internal plastering for new builds and renovations.",
    about: "Expert plasterers providing high-quality finishes. From small repairs to full house lots, we do it all.",
    services: ["Plaster repairs", "New walls", "Cornice work", "Ceiling repairs"],
    phone: "0478 987 654",
    email: "smooth@plastering.com.au",
    abn: "67890123457",
    image: plastererImg,
    gallery: [img("1504917595217-d4dc5ebe6122")],
  },
  {
    id: "green-horizon-landscapes",
    name: "Green Horizon Landscapes",
    category: "landscapers",
    categoryName: "Landscapers",
    location: "Hobart Region",
    suburb: "Kingston",
    rating: 4.8,
    reviews: 67,
    description: "Professional landscape design and construction.",
    about: "Creating beautiful outdoor living spaces tailored to your lifestyle. Specialising in paving, retaining walls, and soft-scaping.",
    services: ["Paving", "Retaining walls", "Planting", "Landscape design"],
    phone: "0489 333 999",
    email: "design@greenhorizon.com.au",
    abn: "78901234568",
    image: landscaperImg,
    gallery: [img("1558904541-efa843a96f01")],
  },
  {
    id: "tas-pro-photography",
    name: "Tas Pro Photography",
    category: "photographers",
    categoryName: "Photographers",
    location: "Hobart Region",
    suburb: "Hobart City",
    rating: 5.0,
    reviews: 28,
    description: "Real estate, commercial, and event photography.",
    about: "Capturing high-quality images for your business or project. Professional equipment and fast turnaround times.",
    services: ["Real estate photos", "Commercial shoots", "Event photography"],
    phone: "0490 555 111",
    email: "pics@taspro.com.au",
    abn: "89012345679",
    image: photographerImg,
    gallery: [img("1493863641943-9b689da23b63")],
  },
  {
    id: "secure-fence-co",
    name: "Secure Fence Co.",
    category: "fencing-contractors",
    categoryName: "Fencing Contractors",
    location: "Burnie Region",
    suburb: "Wynyard",
    rating: 4.7,
    reviews: 49,
    description: "Colorbond, timber, and pool fencing specialists.",
    about: "Supplying and installing quality fencing solutions. Durable, stylish, and built to last.",
    services: ["Colorbond fencing", "Timber paling", "Pool fences", "Gates"],
    phone: "0401 222 333",
    email: "sales@securefence.com.au",
    abn: "90123456780",
    image: fencingImg,
    gallery: [img("1500322969170-1e991e4fdf52")],
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
