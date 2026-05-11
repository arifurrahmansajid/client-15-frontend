import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Edit2, GripVertical, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CATEGORIES } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/admin/categories")({
  component: CategoriesAdmin,
});

function CategoriesAdmin() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(CATEGORIES.map((c) => [c.slug, true])),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Categories</h1>
          <p className="text-sm text-muted-foreground">
            {CATEGORIES.length} fixed categories — drag to reorder, toggle to enable.
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" /> Add Category
        </Button>
      </div>

      <Card className="divide-y">
        {CATEGORIES.map((c) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[c.icon] ?? Icons.Tag;
          return (
            <div key={c.slug} className="flex items-center gap-3 p-3 sm:p-4">
              <button className="text-muted-foreground hover:text-foreground cursor-grab">
                <GripVertical className="h-4 w-4" />
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-tight">{c.name}</p>
                <p className="text-xs text-muted-foreground truncate">{c.blurb}</p>
              </div>
              <div className="flex items-center gap-3">
                <Switch
                  checked={enabled[c.slug]}
                  onCheckedChange={(v) => setEnabled((p) => ({ ...p, [c.slug]: v }))}
                />
                <Button size="icon" variant="ghost">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
