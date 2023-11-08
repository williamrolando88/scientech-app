import { PublicLink } from "../types/routes";
import { APP_ROUTES } from "./appRoutes";

export const PUBLIC_LINKS: PublicLink[] = [
  { name: "Inicio", href: APP_ROUTES.public.root },
  { name: "Contacto", href: APP_ROUTES.public.contact },
];
