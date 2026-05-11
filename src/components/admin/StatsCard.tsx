import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

type Props = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  hint?: string;
  accent?: "primary" | "amber" | "green" | "rose";
};

const accents = {
  primary: "bg-primary/10 text-primary",
  amber: "bg-amber-500/10 text-amber-600",
  green: "bg-emerald-500/10 text-emerald-600",
  rose: "bg-rose-500/10 text-rose-600",
};

export function StatsCard({ label, value, icon: Icon, trend, hint, accent = "primary" }: Props) {
  const TrendIcon = (trend ?? 0) >= 0 ? TrendingUp : TrendingDown;
  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
            {(trend !== undefined || hint) && (
              <div className="mt-2 flex items-center gap-1 text-xs">
                {trend !== undefined && (
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 font-medium",
                      trend >= 0 ? "text-emerald-600" : "text-rose-600",
                    )}
                  >
                    <TrendIcon className="h-3 w-3" />
                    {Math.abs(trend)}%
                  </span>
                )}
                {hint && <span className="text-muted-foreground">{hint}</span>}
              </div>
            )}
          </div>
          <div className={cn("rounded-lg p-2.5", accents[accent])}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
