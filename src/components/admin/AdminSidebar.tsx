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
  FileText,
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
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";

const items = [
  { title: "Overview", url: "/admin", icon: LayoutDashboard, exact: true },
  { title: "Business Listings", url: "/admin/businesses", icon: Building2 },
  { title: "Pending Approvals", url: "/admin/approvals", icon: Clock },
  { title: "Blog Manager", url: "/admin/blogs", icon: FileText },
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
    <Sidebar collapsible="icon" className="border-r border-[#E4EAF1] bg-[#0A1830] text-white">
      <SidebarHeader className="border-b border-white/10 p-4">
        <Link to="/admin" className="flex items-center gap-3 px-2 group">
          <img src={logoImg} alt="MyLocalPro" className={`h-8 w-auto object-contain ${collapsed ? "mx-auto" : ""}`} />
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#097DDD]">Super Admin</span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="bg-[#0A1830]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/40 text-[9px] font-black uppercase tracking-[0.22em] px-4 py-2">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2 space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url, item.exact)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300
                      ${isActive(item.url, item.exact)
                        ? "bg-[#097DDD] text-white shadow-[0_4px_16px_rgb(9,125,221,0.3)]"
                        : "text-white/60 hover:text-white hover:bg-white/5"}
                    `}
                  >
                    <Link to={item.url}>
                      <item.icon className={`h-4.5 w-4.5 ${isActive(item.url, item.exact) ? "text-white" : "text-[#097DDD]/70"}`} />
                      {!collapsed && <span className="text-sm font-bold tracking-tight">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-white/10 bg-[#0A1830]">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Cloud Status</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-white/80">All Systems Operational</span>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
}
