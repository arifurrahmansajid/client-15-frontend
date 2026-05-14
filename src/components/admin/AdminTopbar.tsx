import { Bell, Plus, Search, LogOut, Settings, User, ExternalLink } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";

export function AdminTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-[#E4EAF1] bg-white/80 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="text-[#0A1830] hover:bg-[#E4EAF1]/50 rounded-xl" />
        <div className="h-6 w-[1px] bg-[#E4EAF1] mx-2 hidden md:block" />
      </div>

      <div className="relative hidden flex-1 max-w-md md:block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#5a7089]" />
        <input
          placeholder="Search listings, users or leads..."
          className="w-full h-10 pl-10 pr-4 bg-[#E4EAF1]/30 border border-transparent rounded-xl text-sm font-medium text-[#0A1830] placeholder:text-[#5a7089]/50 focus:border-[#097DDD]/30 focus:bg-white transition-all outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <Link
          to="/admin/businesses"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#097DDD] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_4px_12px_rgb(9,125,221,0.2)] hover:bg-[#0a8ef0] transition-all"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Business
        </Link>

        <button className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-[#E4EAF1]/30 text-[#0A1830] hover:bg-[#E4EAF1]/60 transition-colors">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-[#097DDD] ring-2 ring-white" />
        </button>

        <div className="h-6 w-[1px] bg-[#E4EAF1] mx-1" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 group outline-none">
              <Avatar className="h-10 w-10 border-2 border-[#E4EAF1] group-hover:border-[#097DDD]/30 transition-all">
                <AvatarFallback className="bg-navy-gradient text-white text-[10px] font-black uppercase tracking-widest">
                  AD
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 rounded-2xl border-[#E4EAF1] p-2 shadow-[0_12px_32px_rgb(10,24,48,0.12)]">
            <DropdownMenuLabel className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#5a7089]">
              Account Central
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#E4EAF1]" />
            <DropdownMenuItem className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-[#0A1830] hover:bg-[#097DDD]/5 hover:text-[#097DDD] cursor-pointer">
              <User className="h-4 w-4" /> My Profile
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/settings" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-[#0A1830] hover:bg-[#097DDD]/5 hover:text-[#097DDD] cursor-pointer">
                <Settings className="h-4 w-4" /> Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#E4EAF1]" />
            <DropdownMenuItem asChild>
              <Link to="/" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-[#0A1830] hover:bg-[#097DDD]/5 hover:text-[#097DDD] cursor-pointer">
                <ExternalLink className="h-4 w-4" /> View Live Site
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 cursor-pointer mt-1">
              <LogOut className="h-4 w-4" /> Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
