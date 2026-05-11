import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Building2,
  Clock,
  Tags,
  MapPin,
  Users,
  Image as ImageIcon,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Overview", url: "/admin", icon: LayoutDashboard, exact: true },
  { title: "Business Listings", url: "/admin/businesses", icon: Building2 },
  { title: "Pending Approvals", url: "/admin/approvals", icon: Clock },
  { title: "Categories", url: "/admin/categories", icon: Tags },
  { title: "Locations", url: "/admin/locations", icon: MapPin },
  { title: "Users / Traders", url: "/admin/users", icon: Users },
  { title: "Media Library", url: "/admin/media", icon: ImageIcon },
  { title: "Messages", url: "/admin/messages", icon: MessageSquare },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (url: string, exact?: boolean) =>
    exact ? pathname === url : pathname === url || pathname.startsWith(url + "/");

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b border-sidebar-border/50 p-4">
        <Link to="/admin" className="flex items-center gap-3 px-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            M
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-black uppercase tracking-widest text-slate-900">MyLocalPro</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Super Admin</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url, item.exact)}>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
