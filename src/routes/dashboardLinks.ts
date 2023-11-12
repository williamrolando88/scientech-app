import { DashboardLink } from "../types/routes";
import { APP_ROUTES } from "./appRoutes";

export const DASHBOARD_LINKS: DashboardLink[] = [
  {
    name: "Inicio",
    href: APP_ROUTES.private.root,
  },
  {
    name: "Analizador XML",
    href: APP_ROUTES.private.xmlParser,
  },
];
