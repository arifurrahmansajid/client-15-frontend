import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  hint?: string;
  accent?: "primary" | "amber" | "green" | "rose";
};

const accents = {
  primary: "bg-[#097DDD]/10 text-[#097DDD] ring-[#097DDD]/20",
  amber: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
  green: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
  rose: "bg-rose-500/10 text-rose-600 ring-rose-500/20",
};

export function StatsCard({ label, value, icon: Icon, trend, hint, accent = "primary" }: Props) {
  const TrendIcon = (trend ?? 0) >= 0 ? TrendingUp : TrendingDown;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="border-[#E4EAF1] shadow-[0_2px_12px_rgb(10,24,48,0.05)] rounded-2xl hover:border-[#097DDD]/30 hover:shadow-[0_8px_24px_rgb(10,24,48,0.08)] transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#5a7089] mb-1">{label}</p>
              <p className="text-2xl font-black text-[#0A1830] tracking-tight">{value}</p>
              {(trend !== undefined || hint) && (
                <div className="mt-2.5 flex items-center gap-2 text-[10px] font-bold">
                  {trend !== undefined && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5",
                        trend >= 0 ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600",
                      )}
                    >
                      <TrendIcon className="h-3 w-3" />
                      {Math.abs(trend)}%
                    </span>
                  )}
                  {hint && <span className="text-[#5a7089]/60 uppercase tracking-widest">{hint}</span>}
                </div>
              )}
            </div>
            <div className={cn("rounded-xl p-3 ring-1 shrink-0", accents[accent])}>
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
