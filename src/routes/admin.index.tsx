import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Clock,
  CheckCircle2,
  Tags,
  MapPin,
  TrendingUp,
  MessageSquare,
  UserPlus,
  FileCheck,
  Building,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { StatsCard } from "@/components/admin/StatsCard";
import { ChartBox } from "@/components/admin/ChartBox";
import {
  ADMIN_STATS,
  CATEGORY_DISTRIBUTION,
  LOCATION_DISTRIBUTION,
  RECENT_ACTIVITY,
  SIGNUPS_OVER_TIME,
} from "@/lib/admin-mock";

export const Route = createFileRoute("/admin/")({
  component: AdminOverview,
});

const PIE_COLORS = ["#0057E1", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"];

const ACTIVITY_ICONS = {
  listing: Building,
  approval: FileCheck,
  message: MessageSquare,
  user: UserPlus,
} as const;

function AdminOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground">Welcome back — here's what's happening today.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatsCard label="Total Businesses" value={ADMIN_STATS.totalBusinesses.toLocaleString()} icon={Building2} trend={8.2} hint="vs last month" />
        <StatsCard label="Pending Approvals" value={ADMIN_STATS.pendingApprovals} icon={Clock} accent="amber" hint="awaiting review" />
        <StatsCard label="Active Listings" value={ADMIN_STATS.activeListings.toLocaleString()} icon={CheckCircle2} accent="green" trend={4.1} />
        <StatsCard label="Categories" value={ADMIN_STATS.totalCategories} icon={Tags} hint="fixed system" />
        <StatsCard label="Locations" value={ADMIN_STATS.totalLocations} icon={MapPin} hint="across Tasmania" />
        <StatsCard label="Monthly Growth" value={`${ADMIN_STATS.monthlyGrowth}%`} icon={TrendingUp} accent="green" trend={ADMIN_STATS.monthlyGrowth} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartBox title="New business signups" description="Last 7 months">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SIGNUPS_OVER_TIME}>
                  <defs>
                    <linearGradient id="signups" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0057E1" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#0057E1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                  <Area type="monotone" dataKey="signups" stroke="#0057E1" strokeWidth={2.5} fill="url(#signups)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartBox>
        </div>

        <ChartBox title="Recent activity">
          <ul className="space-y-3">
            {RECENT_ACTIVITY.map((a, i) => {
              const Icon = ACTIVITY_ICONS[a.type as keyof typeof ACTIVITY_ICONS];
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-tight">{a.text}</p>
                    <p className="text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ChartBox>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartBox title="Category distribution" description="Top 6 categories">
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={CATEGORY_DISTRIBUTION} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
                  {CATEGORY_DISTRIBUTION.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {CATEGORY_DISTRIBUTION.map((c, i) => (
              <div key={c.name} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                <span className="text-muted-foreground truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </ChartBox>

        <ChartBox title="Location distribution" description="Listings by region">
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={LOCATION_DISTRIBUTION}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Bar dataKey="value" fill="#0057E1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartBox>
      </div>
    </div>
  );
}
