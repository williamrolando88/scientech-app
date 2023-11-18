import { DashboardLink } from "../types/routes";
import { APP_ROUTES } from "./appRoutes";

export const DASHBOARD_LINKS: DashboardLink[] = [
  {
    name: "Inicio",
    href: APP_ROUTES.private.root,
    icon: "eva:home-outline",
    activeIcon: "eva:home-fill",
  },
  {
    name: "Analizador XML",
    href: APP_ROUTES.private.xmlParser,
    icon: "eva:file-text-outline",
    activeIcon: "eva:file-text-fill",
  },
];
