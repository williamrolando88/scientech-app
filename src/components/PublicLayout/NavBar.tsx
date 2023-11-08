"use client";

import { APP_ROUTES } from "@/src/routes/appRoutes";
import { PUBLIC_LINKS } from "@/src/routes/publicLinks";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import ScientechLogo from "../Shared/ScientechLogo";

/**
 * NavBar component used on the public Scientech page for navigation purposes
 */
const NavBar: FC = () => {
  const pathName = usePathname();

  return (
    <section className="z-50 md:sticky md:left-0 md:top-0">
      <div className="bg-scientech-secondary">
        <div className="mx-auto flex max-w-7xl justify-end px-2 sm:px-6 lg:px-8">
          <Link href={APP_ROUTES.public.login} target="_blank">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full p-1 text-gray-300 hover:text-white"
            >
              <UserCircleIcon className="h-5" />
              <span className="mr-1 text-sm">Iniciar Sesión</span>
            </button>
          </Link>
        </div>
      </div>
      <Disclosure as="nav" className="bg-scientech-primary">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex shrink-0 items-center">
                    <ScientechLogo
                      className="h-5 w-auto sm:block sm:h-6 lg:h-8"
                      variant="white"
                    />
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {PUBLIC_LINKS.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            "rounded-md px-3 py-2 text-sm font-medium uppercase",
                            {
                              "bg-sky-800 text-white": item.href === pathName,
                              "text-gray-200 hover:bg-sky-700 hover:text-white":
                                item.href !== pathName,
                            },
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {PUBLIC_LINKS.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={
                      (pathName === item.href
                        ? "bg-light-blue-800 text-white"
                        : "hover:bg-light-blue-700 text-gray-300 hover:text-white") +
                      " block rounded-md px-3 py-2 text-base font-medium"
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
};

export default NavBar;
