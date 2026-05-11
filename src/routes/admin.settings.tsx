import { createFileRoute } from "@tanstack/react-router";
import { Save, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsAdmin,
});

function Row({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 sm:max-w-md">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function SettingsAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
          <p className="text-sm text-muted-foreground">Platform-wide configuration.</p>
        </div>
        <Button>
          <Save className="h-4 w-4" /> Save changes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Branding</CardTitle>
          <CardDescription>How MyLocalPro appears across the platform.</CardDescription>
        </CardHeader>
        <CardContent className="divide-y">
          <Row title="Platform name" description="Shown in the navigation and emails.">
            <Input defaultValue="MyLocalPro Australia" className="w-72" />
          </Row>
          <Row title="Logo" description="PNG or SVG, transparent background recommended.">
            <Button variant="outline"><Upload className="h-4 w-4" /> Upload logo</Button>
          </Row>
          <Row title="Primary color" description="Used for buttons, links and highlights.">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-md border" style={{ background: "#0057E1" }} />
              <Input defaultValue="#0057E1" className="w-32 font-mono" />
            </div>
          </Row>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Email</CardTitle>
          <CardDescription>Notifications sent to users and admins.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="from">From address</Label>
              <Input id="from" defaultValue="hello@mylocalpro.com.au" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reply">Reply-to</Label>
              <Input id="reply" defaultValue="support@mylocalpro.com.au" />
            </div>
          </div>
          <Separator />
          <Row title="Send approval emails" description="Email business owners when their listing is approved.">
            <Switch defaultChecked />
          </Row>
          <Row title="Weekly admin digest" description="Get a summary every Monday morning.">
            <Switch defaultChecked />
          </Row>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Platform</CardTitle>
          <CardDescription>Toggle modules and platform-wide modes.</CardDescription>
        </CardHeader>
        <CardContent className="divide-y">
          <Row title="Maintenance mode" description="Temporarily take the public site offline.">
            <Switch />
          </Row>
          <Row title="Public business signups" description="Allow new traders to register listings.">
            <Switch defaultChecked />
          </Row>
          <Row title="Customer enquiry module" description="Show contact forms on business profiles.">
            <Switch defaultChecked />
          </Row>
          <Row title="Reviews module" description="Allow customers to leave reviews.">
            <Switch defaultChecked />
          </Row>
        </CardContent>
      </Card>
    </div>
  );
}
