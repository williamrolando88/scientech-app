import { OutlineIcons, SolidIcons } from "../lib/utils/icons";
import { DashboardLink } from "../types/routes";
import { APP_ROUTES } from "./appRoutes";

export const DASHBOARD_LINKS: DashboardLink[] = [
  {
    name: "Inicio",
    href: APP_ROUTES.private.root,
    icon: OutlineIcons.HomeIcon,
    selected: SolidIcons.HomeIcon,
  },
  {
    name: "Analizador XML",
    href: APP_ROUTES.private.xmlParser,
    icon: OutlineIcons.DocumentMagnifyingGlassIcon,
    selected: SolidIcons.DocumentMagnifyingGlassIcon,
  },
];
