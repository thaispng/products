"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  PanelLeftOpen,
  PanelLeftClose,
  LayoutDashboard,
  Package,
  LogOut,
  Settings,
} from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sidebar
      collapsible={isCollapsed ? "icon" : "none"}
      className="transition-all duration-300 h-screen"
    >
      <SidebarHeader className="p-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="p-0 h-auto w-full flex justify-start items-center gap-3"
            >
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="User Avatar"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-col overflow-hidden text-left">
                  <span className="font-semibold truncate">John Doe</span>
                  <span className="text-sm text-muted-foreground truncate">
                    john.doe@example.com
                  </span>
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <div className="flex flex-col">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={isCollapsed ? "Dashboard" : undefined}
            >
              <a href="/dashboard" className="flex items-center gap-2 w-full">
                <LayoutDashboard size={20} />
                {!isCollapsed && <span>Dashboard</span>}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={isCollapsed ? "Produtos" : undefined}
              className="flex w-full items-center"
            >
              <a href="/products" className="flex items-center gap-2 w-full">
                <Package size={20} />
                {!isCollapsed && <span>Produtos</span>}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="mt-auto p-4">
        <SidebarTrigger
          onClick={toggleSidebar}
          className="w-full flex justify-center items-center"
        >
          {isCollapsed ? (
            <PanelLeftOpen
              className="cursor-pointer"
              aria-label="Expandir menu"
            />
          ) : (
            <PanelLeftClose
              className="cursor-pointer"
              aria-label="Retrair menu"
            />
          )}
        </SidebarTrigger>
      </SidebarFooter>
    </Sidebar>
  );
}
