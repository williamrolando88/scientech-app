import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type LinkIcon = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

export type DashboardLink = {
  name: string;
  href: string;
  icon?: LinkIcon;
  selected?: LinkIcon;
};

export type PublicLink = {
  name: string;
  href: string;
};
