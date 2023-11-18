"use client";

import Iconify from "@/src/components/Shared/Iconify";
import { DashboardLink } from "@/src/types/routes";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavLinkProps extends DashboardLink {
  collapsed?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  name,
  activeIcon,
  icon,
  collapsed,
}) => {
  const pathName = usePathname();

  const currentPage = pathName === href;

  return (
    <Link
      key={name}
      href={href}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-md bg-terciary-lighter p-3 text-sm font-medium hover:bg-sky-100 hover:text-primary-light md:flex-none md:justify-start md:p-2 md:px-3",
        { "bg-secondary-lighter text-primary-default": currentPage },
      )}
    >
      {currentPage ? (
        <Iconify icon={activeIcon} size="30" />
      ) : (
        <Iconify icon={icon} size="30" />
      )}

      {!collapsed && <p className="hidden md:block">{name}</p>}
    </Link>
  );
};
