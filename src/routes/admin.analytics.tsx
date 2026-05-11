import { createFileRoute } from "@tanstack/react-router";
import { Eye, Search, TrendingUp, MapPin } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { StatsCard } from "@/components/admin/StatsCard";
import { ChartBox } from "@/components/admin/ChartBox";
import { Card, CardContent } from "@/components/ui/card";
import { LOCATION_DISTRIBUTION, SIGNUPS_OVER_TIME } from "@/lib/admin-mock";

export const Route = createFileRoute("/admin/analytics")({
  component: AnalyticsAdmin,
});

const TOP_SEARCHES = [
  { term: "plumber hobart", count: 1240 },
  { term: "cleaner near me", count: 980 },
  { term: "lawn mowing devonport", count: 612 },
  { term: "electrician launceston", count: 540 },
  { term: "painter bellerive", count: 388 },
];

const TOP_CATEGORIES = [
  { name: "Plumbing", value: 320 },
  { name: "Cleaning", value: 290 },
  { name: "Electrical", value: 240 },
  { name: "Gardening", value: 210 },
  { name: "Builders", value: 170 },
  { name: "Painters", value: 140 },
];

function AnalyticsAdmin() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
        <p className="text-sm text-muted-foreground">High-level platform performance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard label="Total Visitors" value="42,318" icon={Eye} trend={9.4} hint="this month" />
        <StatsCard label="Unique Searches" value="11,204" icon={Search} trend={3.1} accent="amber" />
        <StatsCard label="Avg. Session" value="3m 42s" icon={TrendingUp} trend={1.8} accent="green" />
        <StatsCard label="Top Region" value="Hobart" icon={MapPin} hint="420 listings" />
      </div>

      <ChartBox title="Visitors over time" description="Daily visitors, last 7 months">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={SIGNUPS_OVER_TIME.map((d) => ({ ...d, visitors: d.signups * 60 }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Line type="monotone" dataKey="visitors" stroke="#0057E1" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ChartBox>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartBox title="Top searched services">
          <ul className="divide-y">
            {TOP_SEARCHES.map((s, i) => (
              <li key={s.term} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-xs font-medium text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm">{s.term}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{s.count.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </ChartBox>

        <ChartBox title="Most popular categories">
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_CATEGORIES} layout="vertical" margin={{ left: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Bar dataKey="value" fill="#0057E1" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartBox>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold">Location activity</h3>
          <p className="text-sm text-muted-foreground">Listings activity by region (heatmap coming soon).</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {LOCATION_DISTRIBUTION.map((l) => (
              <div key={l.name} className="rounded-lg border bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground">{l.name}</p>
                <p className="mt-1 text-2xl font-semibold">{l.value}</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-primary" style={{ width: `${(l.value / 420) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
