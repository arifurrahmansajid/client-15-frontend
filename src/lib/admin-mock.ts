import { BUSINESSES, CATEGORIES, LOCATIONS, type Business } from "./mock-data";

export type ListingStatus = "Pending" | "Approved" | "Rejected";

export type AdminListing = Business & {
  status: ListingStatus;
  dateAdded: string;
  ownerName: string;
  ownerEmail: string;
};

const statuses: ListingStatus[] = ["Approved", "Approved", "Pending", "Approved", "Rejected", "Pending"];
const owners = [
  { name: "Mark Stevens", email: "mark@tassieplumb.com.au" },
  { name: "Jamie Wilson", email: "jamie@northsideelectrical.com.au" },
  { name: "Anna Tyler", email: "anna@brightsparkclean.com.au" },
  { name: "Chris Doyle", email: "chris@coastallawns.com.au" },
  { name: "Robert Hill", email: "rob@burniebuilders.com.au" },
  { name: "Sophie Lane", email: "sophie@appleisle.com.au" },
];

export const ADMIN_LISTINGS: AdminListing[] = BUSINESSES.map((b, i) => ({
  ...b,
  status: statuses[i % statuses.length],
  dateAdded: new Date(2025, 9, 28 - i * 3).toISOString().split("T")[0],
  ownerName: owners[i % owners.length].name,
  ownerEmail: owners[i % owners.length].email,
}));

export const ADMIN_USERS = owners.map((o, i) => ({
  id: `u-${i + 1}`,
  name: o.name,
  email: o.email,
  businessCount: 1 + (i % 2),
  subscription: i % 3 === 0 ? "Pro" : "Free",
  joined: `2025-${String(((i * 2) % 11) + 1).padStart(2, "0")}-15`,
  status: i === 4 ? "Suspended" : "Active",
}));

export const ADMIN_MESSAGES = [
  { id: "m1", customer: "Olivia Brown", service: "Emergency leak repair", location: "Greater Hobart", message: "Burst pipe under kitchen sink, need help today!", business: "Tassie Plumb Co.", date: "2025-05-10", read: false },
  { id: "m2", customer: "Noah Williams", service: "Switchboard upgrade quote", location: "Greater Launceston", message: "Looking for a quote on a full switchboard upgrade for a 4 bedroom home.", business: "North Side Electrical", date: "2025-05-09", read: false },
  { id: "m3", customer: "Mia Johnson", service: "Weekly cleaning", location: "Greater Hobart", message: "Hi! Looking for a regular cleaner Tuesdays.", business: "Bright Spark Cleaning", date: "2025-05-08", read: true },
  { id: "m4", customer: "Ethan Davies", service: "Garden tidy-up", location: "Greater Devonport", message: "Need a one-off tidy-up before selling our place.", business: "Coastal Lawns & Gardens", date: "2025-05-07", read: true },
  { id: "m5", customer: "Ava Martin", service: "Kitchen renovation", location: "Greater Burnie", message: "Looking to fully renovate our kitchen, please call to arrange a site visit.", business: "Burnie Builders", date: "2025-05-06", read: true },
];

export const ADMIN_STATS = {
  totalBusinesses: ADMIN_LISTINGS.length * 200,
  pendingApprovals: ADMIN_LISTINGS.filter((l) => l.status === "Pending").length * 4,
  activeListings: ADMIN_LISTINGS.filter((l) => l.status === "Approved").length * 195,
  totalCategories: CATEGORIES.length,
  totalLocations: LOCATIONS.length,
  monthlyGrowth: 12.4,
};

export const SIGNUPS_OVER_TIME = [
  { month: "Nov", signups: 32 },
  { month: "Dec", signups: 41 },
  { month: "Jan", signups: 58 },
  { month: "Feb", signups: 64 },
  { month: "Mar", signups: 79 },
  { month: "Apr", signups: 88 },
  { month: "May", signups: 104 },
];

export const CATEGORY_DISTRIBUTION = CATEGORIES.slice(0, 6).map((c, i) => ({
  name: c.name,
  value: 20 + ((i * 17) % 60),
}));

export const LOCATION_DISTRIBUTION = LOCATIONS.map((loc, i) => ({
  name: loc.replace("Greater ", ""),
  value: [420, 310, 180, 140][i],
}));

export const RECENT_ACTIVITY = [
  { type: "listing", text: "New business added: Apple Isle Painters", time: "2m ago" },
  { type: "approval", text: "Listing approved: Bright Spark Cleaning", time: "1h ago" },
  { type: "message", text: "New enquiry from Olivia Brown", time: "3h ago" },
  { type: "user", text: "New trader registered: Sophie Lane", time: "5h ago" },
  { type: "listing", text: "New business added: Coastal Lawns & Gardens", time: "Yesterday" },
];
