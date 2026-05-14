import { createFileRoute } from "@tanstack/react-router";
import { Check, X, MessageSquareWarning, MapPin, Phone, Star, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ADMIN_LISTINGS } from "@/lib/admin-mock";

export const Route = createFileRoute("/admin/approvals")({
  component: Approvals,
});

function Approvals() {
  const pending = ADMIN_LISTINGS.filter((l) => l.status === "Pending");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Pending Approvals</h1>
        <p className="text-sm text-muted-foreground">{pending.length} businesses awaiting moderation.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pending.map((l) => (
          <Card key={l.id} className="overflow-hidden">
            <div className="flex">
              <img src={l.image} alt={l.name} className="h-36 w-36 object-cover" />
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-tight">{l.name}</h3>
                    <p className="text-xs text-muted-foreground">{l.categoryName}</p>
                  </div>
                  <Badge variant="secondary" className="bg-amber-500/10 text-amber-700">
                    Pending
                  </Badge>
                </div>
                <div className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#097DDD]" /> {l.location}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="flex items-center gap-1.5 font-bold text-slate-700">
                      ABN: {l.abn}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Mail className="h-3 w-3" /> {l.ownerEmail}
                    </p>
                  </div>
                  <p className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3" /> {l.phone}
                  </p>
                </div>
                <p className="mt-3 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground bg-slate-50 p-2 rounded-lg border border-slate-100">
                  {l.description}
                </p>
              </div>
            </div>
            <CardContent className="flex flex-wrap gap-2 border-t bg-muted/30 p-3">
              <Button size="sm" className="flex-1">
                <Check className="h-4 w-4" /> Approve
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <MessageSquareWarning className="h-4 w-4" /> Request changes
              </Button>
              <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                <X className="h-4 w-4" /> Reject
              </Button>
            </CardContent>
          </Card>
        ))}
        {pending.length === 0 && (
          <Card className="md:col-span-2">
            <CardHeader>
              <p className="text-center text-sm text-muted-foreground py-12">No pending approvals.</p>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
}
