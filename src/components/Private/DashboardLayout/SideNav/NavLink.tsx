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

  const currentPage = pathName.includes(href) && href !== "/";

  return (
    <Link
      key={name}
      href={href}
      className={clsx(
        "flex items-center justify-start gap-2 rounded-md bg-terciary-lighter px-3 py-2  transition-all hover:bg-sky-100 hover:text-primary-light",
        { "bg-secondary-lighter text-primary-default": currentPage },
      )}
    >
      {currentPage ? (
        <Iconify icon={activeIcon} size="30" />
      ) : (
        <Iconify icon={icon} size="30" />
      )}

      {!collapsed && <p className="text-base">{name}</p>}
    </Link>
  );
};
