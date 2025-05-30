import { useState } from "react";
import { BookOpen, Gamepad2, BarChart3, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navigationItems = [
  { title: "\ud83d\udcd8 Lessons", url: "/lessons", icon: BookOpen },
  { title: "\ud83c\udfae Games", url: "/games", icon: Gamepad2 },
  { title: "\ud83d\udcca Progress", url: "/progress", icon: BarChart3 },
  { title: "\ud83d\udc64 Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const isActive = (path: string) =>
    currentPath === path || (currentPath === "/" && path === "/lessons");

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 w-full p-3 rounded-2xl text-left font-semibold transition-all duration-300 outline-none focus:outline-none active:outline-none ${
      isActive
        ? "bg-gradient-to-r from-kid-purple to-kid-pink text-white shadow-lg scale-105"
        : "text-purple-700 bg-transparent hover:bg-kid-blue-strong hover:text-white hover:shadow-md hover:scale-105"
    }`;

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutDialog(false);
  };

  return (
    <Sidebar
      className={`${!open ? "w-20" : "w-72"} bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] border-r-4 border-kid-purple/20`}
    >
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 text-center">
          {open ? (
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-purple-700 animate-bounce-slow">
                Fraction Fast Pack
              </h1>
              <p className="text-sm text-purple-500 font-medium">
                Learn fractions the fun way!
              </p>
            </div>
          ) : (
            <div className="text-3xl animate-wiggle">\ud83e\uddc2</div>
          )}
        </div>

        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavCls({ isActive: isActive(item.url) })}
                    >
                      <item.icon className={`h-6 w-6 ${open ? "mr-2" : ""}`} />
                      {open && <span className="text-lg">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <div className="mt-auto pt-8">
          <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                className={`w-full bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold text-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  !open ? "px-2" : "px-4"
                }`}
              >
               {open && "Logout"}
              </Button>
            </DialogTrigger>
            <DialogContent className="kid-card max-w-md">
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-bold text-purple-700 mb-4">
                  \ud83e\udd14 Are you sure you want to leave?
                </DialogTitle>
                <DialogDescription className="text-lg text-purple-600">
                  You're doing amazing! Your progress will be saved.
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-4 mt-6">
                <Button onClick={() => setShowLogoutDialog(false)} className="flex-1 kid-button">
                  Stay & Learn! \ud83d\udcda
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="flex-1 border-2 border-red-300 text-red-600 hover:bg-red-50 rounded-2xl font-bold"
                >
                  Yes, Logout \ud83d\udc4b
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
