import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eye, Check, X, Trash2, Plus, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ADMIN_LISTINGS, type ListingStatus } from "@/lib/admin-mock";

export const Route = createFileRoute("/admin/businesses")({
  component: BusinessListings,
});

const statusStyles: Record<ListingStatus, string> = {
  Pending: "bg-amber-500/10 text-amber-700 hover:bg-amber-500/10",
  Approved: "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/10",
  Rejected: "bg-rose-500/10 text-rose-700 hover:bg-rose-500/10",
};

function BusinessListings() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>("all");

  const filtered = useMemo(
    () =>
      ADMIN_LISTINGS.filter((l) => {
        const q = query.toLowerCase();
        const matchesQuery =
          !q ||
          l.name.toLowerCase().includes(q) ||
          l.abn.includes(q) ||
          l.categoryName.toLowerCase().includes(q) ||
          l.location.toLowerCase().includes(q);
        const matchesStatus = status === "all" || l.status === status;
        return matchesQuery && matchesStatus;
      }),
    [query, status],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Business Listings</h1>
          <p className="text-sm text-muted-foreground">Manage every business listed on the platform.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Add Business
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, category, location…"
              className="pl-9"
            />
          </div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead>Business</TableHead>
              <TableHead>ABN</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((l) => (
              <TableRow key={l.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img src={l.image} alt={l.name} className="h-9 w-9 rounded-md object-cover" />
                    <div className="min-w-0">
                      <p className="font-medium leading-tight">{l.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{l.ownerEmail}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-mono font-bold">{l.abn}</TableCell>
                <TableCell className="text-sm">{l.categoryName}</TableCell>
                <TableCell className="text-sm">{l.location}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={statusStyles[l.status]}>
                    {l.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{l.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button asChild size="icon" variant="ghost">
                      <Link to="/businesses/$id" params={{ id: l.id }}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="ghost" className="text-emerald-600 hover:text-emerald-700">
                      <Check className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-amber-600 hover:text-amber-700">
                      <X className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="py-12 text-center text-sm text-muted-foreground">
                  No listings match your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
