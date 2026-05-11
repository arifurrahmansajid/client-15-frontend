import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Forward, MailOpen, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ADMIN_MESSAGES } from "@/lib/admin-mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/messages")({
  component: MessagesAdmin,
});

function MessagesAdmin() {
  const [active, setActive] = useState(ADMIN_MESSAGES[0].id);
  const selected = ADMIN_MESSAGES.find((m) => m.id === active) ?? ADMIN_MESSAGES[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Messages & Enquiries</h1>
        <p className="text-sm text-muted-foreground">Customer enquiries directed to listed businesses.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[380px_1fr]">
        <Card className="overflow-hidden">
          <ul className="divide-y">
            {ADMIN_MESSAGES.map((m) => (
              <li key={m.id}>
                <button
                  onClick={() => setActive(m.id)}
                  className={cn(
                    "w-full text-left p-4 transition-colors hover:bg-muted/50",
                    active === m.id && "bg-primary/5",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {m.customer.split(" ").map((s) => s[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className={cn("text-sm truncate", !m.read && "font-semibold")}>{m.customer}</p>
                        {!m.read && <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{m.service}</p>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{m.message}</p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{selected.customer}</h3>
                <p className="text-sm text-muted-foreground">
                  {selected.service} · {selected.location}
                </p>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="outline"><MailOpen className="h-4 w-4" /> Mark read</Button>
                <Button size="sm" variant="outline"><Forward className="h-4 w-4" /> Forward</Button>
                <Button size="sm" variant="ghost" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary">To: {selected.business}</Badge>
              <Badge variant="outline">{selected.date}</Badge>
            </div>

            <div className="mt-6 rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed">
              {selected.message}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
