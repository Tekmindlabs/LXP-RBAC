"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Permissions } from "@/utils/permissions";

const navItems = [
  {
    title: "Overview",
    href: "/dashboard",
    permission: null,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    permission: Permissions.USER_READ,
  },
  {
    title: "Roles",
    href: "/dashboard/roles",
    permission: Permissions.ROLE_READ,
  },
  {
    title: "Permissions",
    href: "/dashboard/permissions",
    permission: Permissions.PERMISSION_MANAGE,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    permission: Permissions.SETTINGS_MANAGE,
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems
        .filter(
          (item) =>
            !item.permission ||
            session?.user.permissions.includes(item.permission)
        )
        .map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        ))}
    </nav>
  );
}