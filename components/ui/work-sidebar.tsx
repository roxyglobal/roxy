"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/work/dashboard", label: "Dashboard" },
  { href: "/work/materials", label: "Materials" },
  { href: "/work/quotes", label: "Quotes" },
  { href: "/work/team", label: "Team" },
];

export default function WorkSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r h-full bg-background/80 backdrop-blur-md p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold mb-4">Work</h2>

      {routes.map((route) => {
        const active = pathname.startsWith(route.href);
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
              active ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </aside>
  );
}
