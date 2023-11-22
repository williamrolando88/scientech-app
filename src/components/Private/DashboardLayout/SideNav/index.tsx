"use client";

import Iconify from "@/src/components/Shared/Iconify";
import ScientechIco from "@/src/components/Shared/ScientechIco";
import ScientechLogo from "@/src/components/Shared/ScientechLogo";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import { DASHBOARD_LINKS } from "@/src/routes/dashboardLinks";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import { NavLink } from "./NavLink";

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  const toogleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={clsx("relative flex-none border-r bg-gray-50 transition-all", {
        "w-64": !collapsed,
        "w-20": collapsed,
      })}
    >
      <div
        className={clsx("flex h-full flex-col p-2", {
          "items-center": collapsed,
        })}
      >
        <Link
          className="flex items-end justify-start rounded-md p-2"
          href={APP_ROUTES.public.root}
        >
          {collapsed ? <ScientechIco /> : <ScientechLogo className="w-full" />}
        </Link>

        <button
          className="absolute right-[-13px] top-16 rounded-full border bg-gray-50"
          onClick={toogleCollapsed}
        >
          {collapsed ? (
            <Iconify icon="eva:chevron-right-fill" size="25" />
          ) : (
            <Iconify icon="eva:chevron-left-fill" size="25" />
          )}
        </button>

        <div className="mt-4 flex grow flex-col justify-between gap-2 font-medium">
          {DASHBOARD_LINKS.map((link) => (
            <NavLink key={link.href} collapsed={collapsed} {...link} />
          ))}

          <div className="block h-auto w-full grow rounded-md bg-gray-50" />

          <LogoutButton collapsed={collapsed} />
        </div>
      </div>
    </div>
  );
}
