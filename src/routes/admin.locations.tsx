import { createFileRoute } from "@tanstack/react-router";
import { Edit2, ImagePlus, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { LOCATIONS } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/admin/locations")({
  component: LocationsAdmin,
});

const COVERS: Record<string, string> = {
  "Greater Hobart": "https://images.unsplash.com/photo-1589137790832-69d6c8783fef?w=600&h=400&fit=crop&auto=format",
  "Greater Launceston": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&auto=format",
  "Greater Devonport": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&auto=format",
  "Greater Burnie": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&auto=format",
};

function LocationsAdmin() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(LOCATIONS.map((l) => [l, true])),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Locations</h1>
        <p className="text-sm text-muted-foreground">
          {LOCATIONS.length} regions across Tasmania — manage cover images and visibility.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LOCATIONS.map((loc) => (
          <Card key={loc} className="overflow-hidden">
            <div className="relative h-32">
              <img src={COVERS[loc]} alt={loc} className="h-full w-full object-cover" />
              <Button size="sm" variant="secondary" className="absolute right-2 top-2 h-8 shadow">
                <ImagePlus className="h-3.5 w-3.5" /> Replace
              </Button>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="h-4 w-4 text-primary" />
                    {loc}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">Tasmania</p>
                </div>
                <Button size="icon" variant="ghost">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-3 flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                <span>Visible to public</span>
                <Switch
                  checked={enabled[loc]}
                  onCheckedChange={(v) => setEnabled((p) => ({ ...p, [loc]: v }))}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
