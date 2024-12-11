"use client";

import { useAuth } from "@clerk/nextjs";
import { SidebarItem } from "./SidebarItems";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import { Separator } from "@/components/ui/separator";
import { isAdministrator } from "@/lib/isAdministrator";

export function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        {isAdministrator(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500">ADMINISTRADOR</p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto">
        <Separator />

        <footer className="p-3 text-center">2024. Reservados todos los derechos.</footer>
      </div>
    </div>
  );
}
