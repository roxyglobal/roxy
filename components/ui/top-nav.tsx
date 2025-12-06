"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Global" },
  { href: "/work/dashboard", label: "Work" },
  { href: "/social/home", label: "Social" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-background/70 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link href="/" className="font-semibold text-lg">
          Roxy
        </Link>

        {/* CENTER: Nav Tabs */}
        <div className="flex gap-6">
          {routes.map((route) => {
            const active = pathname.startsWith(route.href);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm hover:text-primary transition-colors",
                  active ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Settings / Profile */}
        <Link
          href="/settings"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          ⚙️
        </Link>

      </div>
    </nav>
  );
}
