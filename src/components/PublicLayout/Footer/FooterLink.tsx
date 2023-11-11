import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FC } from "react";

interface Props {
  /** Name of the link to show */
  name: string;
  /** Target route */
  href: string;
}

/** Component used to navigate from the footer section */
const FooterLink: FC<Props> = ({ name, href }) => {
  return (
    <Link href={href} className="flex w-fit items-center hover:underline">
      <span>{name}</span>
      <ChevronRightIcon className="h-5" />
    </Link>
  );
};

export default FooterLink;
