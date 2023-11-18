"use client";
import Iconify from "@/src/components/Shared/Iconify";
import { logOut } from "@/src/lib/actions/auth";
import clsx from "clsx";
import { FC } from "react";

interface LogoutButtonProps {
  collapsed?: boolean;
}
export const LogoutButton: FC<LogoutButtonProps> = ({ collapsed }) => {
  return (
    <form action={logOut} className={clsx({ "w-full": !collapsed })}>
      <button
        className={clsx(
          "flex items-center gap-2 rounded-md bg-gray-50 px-3 py-2 text-left transition-all hover:bg-sky-100 hover:text-primary-light",
        )}
      >
        <Iconify icon="ic:round-logout" size="30" />

        {!collapsed && <span>Sign Out</span>}
      </button>
    </form>
  );
};
