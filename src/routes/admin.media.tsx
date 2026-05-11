import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Trash2, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ADMIN_LISTINGS } from "@/lib/admin-mock";

export const Route = createFileRoute("/admin/media")({
  component: MediaLibrary,
});

type MediaItem = { url: string; business: string };

function MediaLibrary() {
  const [filter, setFilter] = useState<string>("all");

  const items = useMemo<MediaItem[]>(
    () =>
      ADMIN_LISTINGS.flatMap((l) =>
        [l.image, ...l.gallery].map((url) => ({ url, business: l.name })),
      ),
    [],
  );

  const filtered = filter === "all" ? items : items.filter((m) => m.business === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Media Library</h1>
          <p className="text-sm text-muted-foreground">{items.length} images uploaded across all businesses.</p>
        </div>
        <Button>
          <Upload className="h-4 w-4" /> Upload
        </Button>
      </div>

      <Card className="p-4">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[260px]">
            <SelectValue placeholder="Filter by business" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All businesses</SelectItem>
            {ADMIN_LISTINGS.map((l) => (
              <SelectItem key={l.id} value={l.name}>{l.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Card>

      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((m, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg border bg-card">
            <img src={m.url} alt={m.business} className="aspect-square w-full object-cover" />
            <div className="absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="line-clamp-1 text-xs font-medium text-white">{m.business}</span>
              <Button size="icon" variant="destructive" className="h-7 w-7 shrink-0">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
