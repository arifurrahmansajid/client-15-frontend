import blog1 from "@/assets/section images/imgi_16_professional_tradie.png";
import blog2 from "@/assets/section images/electrician-installing-laying-electrical-cables-ceiling-inside-house.jpg";
import blog3 from "@/assets/section images/handsome-woodworker-posing-photography.jpg";
import blog4 from "@/assets/section images/hero-tradie.jpg";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: any;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "how-much-does-plumbing-cost",
    title: "How Much Does Plumbing Cost in Australia?",
    excerpt: "Learn how much plumbing costs in Australia. Explore pricing factors, common jobs, hourly rates, and tips to save money on your next plumbing project.",
    content: `# How Much Does Plumbing Cost in Australia?

Plumbing is one of the most essential services for any home or business. Whether it's a leaking tap, a blocked drain, or a full bathroom renovation, understanding the costs involved can help you budget effectively.

## Average Plumbing Costs

The average plumber in Australia charges between **$80–$150 per hour**, with most jobs costing between **$150–$500** depending on complexity.

### Common Plumbing Jobs & Costs

| Job Type | Estimated Cost |
|----------|----------------|
| Leaking tap repair | $80–$200 |
| Blocked drain | $150–$400 |
| Hot water system install | $900–$2,500 |
| Bathroom renovation | $5,000–$20,000 |
| Emergency call-out | $200–$500 |

## Factors Affecting Cost

1. **Location** — Capital cities tend to be more expensive than regional areas
2. **Time of day** — After-hours and emergency calls attract higher rates
3. **Complexity** — Simple repairs cost less than full installations
4. **Materials** — The quality and type of parts used can vary pricing significantly

## Tips to Save Money

- Get **at least 3 quotes** before committing
- Bundle multiple small jobs into a single visit
- Ask if they charge a flat rate or hourly
- Check if the tradesperson is licensed and insured via ABN lookup

## How to Find a Reliable Plumber

Use MyLocalPro to search for verified, reviewed plumbers in your area. All tradies on our platform are verified and reviewed by real customers.`,
    image: blog1,
    category: "Plumbing",
    author: "MyLocalPro Team",
    publishedAt: "2026-05-10",
    readTime: 4,
  },
  {
    id: "2",
    slug: "how-much-does-electrical-work-cost",
    title: "How Much Does Electrical Work Cost in Australia?",
    excerpt: "Discover the cost of electrical work in Australia. Learn average prices per job, key cost factors, and tips to save on installation and repairs.",
    content: `# How Much Does Electrical Work Cost in Australia?

Electrical work is not a DIY project — it requires a licensed electrician for safety and compliance. Here's what you can expect to pay.

## Average Electrical Costs

Electricians in Australia typically charge between **$80–$120 per hour**. Most standard jobs range from **$100–$800**.

### Common Electrical Jobs & Costs

| Job Type | Estimated Cost |
|----------|----------------|
| Power point installation | $100–$200 |
| Switchboard upgrade | $800–$2,500 |
| Lighting installation | $150–$500 |
| Safety inspection | $150–$300 |
| EV charger installation | $800–$2,000 |

## Why Use a Licensed Electrician?

Unlicensed electrical work is illegal in Australia and can void your home insurance. Always verify your electrician's license number before work begins.

## Finding a Trusted Electrician

Search MyLocalPro for licensed electricians in your area with verified reviews and transparent pricing.`,
    image: blog2,
    category: "Electrical",
    author: "MyLocalPro Team",
    publishedAt: "2026-05-08",
    readTime: 3,
  },
  {
    id: "3",
    slug: "how-much-does-building-renovation-cost",
    title: "How Much Does a Home Renovation Cost in Australia?",
    excerpt: "Planning a home renovation? Explore average costs for kitchen, bathroom, and full-home renovations, plus tips to stay on budget.",
    content: `# How Much Does a Home Renovation Cost in Australia?

Home renovations can significantly increase your property value, but costs can vary widely. Here's a comprehensive guide to renovation costs in Australia.

## Average Renovation Costs

| Renovation Type | Cost Range |
|-----------------|------------|
| Kitchen renovation | $15,000–$45,000 |
| Bathroom renovation | $10,000–$35,000 |
| Full home renovation | $80,000–$300,000+ |
| Room extension | $20,000–$80,000 |
| Deck or pergola | $5,000–$25,000 |

## Key Cost Factors

1. **Size of the project** — Larger renovations require more materials and labour
2. **Materials chosen** — Premium finishes significantly increase costs
3. **Location** — Metropolitan areas are generally more expensive
4. **Structural changes** — Moving walls or plumbing adds significant cost

## How to Budget Effectively

- Set aside a **10–15% contingency buffer** for unexpected costs
- Get detailed quotes from multiple builders
- Prioritise renovations that add the most value

Start by finding trusted builders on MyLocalPro.`,
    image: blog3,
    category: "Building",
    author: "MyLocalPro Team",
    publishedAt: "2026-05-05",
    readTime: 5,
  },
  {
    id: "4",
    slug: "how-to-find-trusted-tradies",
    title: "How to Find Trusted Tradies in Australia",
    excerpt: "Finding a reliable tradie doesn't have to be hard. Here are the best tips for finding verified, trusted tradespeople for any job.",
    content: `# How to Find Trusted Tradies in Australia

Finding a reliable tradie can be stressful, but with the right approach, you can hire with confidence.

## Key Steps to Finding a Good Tradie

### 1. Check Their License and Insurance
All tradespeople in Australia must be licensed for their trade. Always verify:
- License number with your state authority
- Public liability insurance
- ABN registration

### 2. Read Reviews
Look for tradies with multiple verified reviews across different platforms. Be wary of businesses with only a handful of 5-star reviews.

### 3. Get Multiple Quotes
Never accept the first quote. Get at least 3 quotes to understand the market rate and spot any outliers.

### 4. Ask the Right Questions
- How long have you been in business?
- Can you provide references?
- What is your warranty on the work?

## Use MyLocalPro

MyLocalPro makes it easy to find verified tradies in your area with transparent pricing and genuine reviews from real customers.`,
    image: blog4,
    category: "Tips",
    author: "MyLocalPro Team",
    publishedAt: "2026-05-01",
    readTime: 4,
  },
  {
    id: "5",
    slug: "maintaining-your-home-garden",
    title: "Essential Tips for Maintaining Your Home Garden",
    excerpt: "Keep your garden thriving all year round with these expert maintenance tips from local Tasmanian landscapers.",
    content: `# Essential Tips for Maintaining Your Home Garden

Maintaining a beautiful garden in Australia's varying climate can be a challenge. Whether you're in the lush south or the drier north, these tips will help you keep your outdoor space in top shape.

## Seasonal Garden Maintenance

### Spring: The Growing Season
Spring is the time to prepare your soil and start planting.
- Apply a high-quality mulch to retain moisture.
- Prune any winter-damaged branches.
- Fertilise your lawn and garden beds.

### Summer: Heat Protection
The Australian summer can be brutal on plants.
- Water early in the morning or late in the evening.
- Check for pests like aphids or spider mites.
- Keep the lawn a bit longer to shade the roots.

## When to Hire a Professional
If your garden has grown out of control or you're planning a major redesign, hiring a professional landscaper or gardener is the best way to ensure quality results.

Search MyLocalPro to find verified landscapers and lawn mowing experts in your local area.`,
    image: blog3,
    category: "Gardening",
    author: "MyLocalPro Team",
    publishedAt: "2026-05-12",
    readTime: 6,
  },
];
