import { DashboardLink } from "../types/routes";
import { APP_ROUTES } from "./appRoutes";

export const DASHBOARD_LINKS: DashboardLink[] = [
  {
    name: "Inicio",
    href: APP_ROUTES.private.home,
    icon: "eva:home-outline",
    activeIcon: "eva:home-fill",
  },
  {
    name: "Calculadora de Importación",
    href: APP_ROUTES.private.calculator.index,
    icon: "eva:keypad-outline",
    activeIcon: "eva:keypad-fill",
  },
  {
    name: "Analizador XML",
    href: APP_ROUTES.private.xmlParser,
    icon: "eva:file-text-outline",
    activeIcon: "eva:file-text-fill",
  },
];
