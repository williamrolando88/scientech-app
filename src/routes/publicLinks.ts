import { PublicLink } from "../types/routes";
import { APP_ROUTES } from "./appRoutes";

export const PUBLIC_LINKS: PublicLink[] = [
  { name: "Inicio", href: APP_ROUTES.public.root },
  { name: "Contacto", href: APP_ROUTES.public.contact },
];

export const socialMediaLinks = [
  {
    icon: "ant-design:facebook-filled",
    href: "https://www.facebook.com/Scientech-ec-115557774894785/",
  },
  {
    icon: "ant-design:instagram-filled",
    href: "https://www.instagram.com/scientech_ecuador/",
  },
  {
    icon: "ant-design:linkedin-filled",
    href: "https://www.linkedin.com/company/scientech-ecuador/",
  },
];

// !This array must contain only 2 elements
export const footerNavigation = [
  {
    title: "Empresa",
    links: [{ name: "Contacto", href: APP_ROUTES.public.contact }],
  },
  {
    title: "Links",
    links: [
      {
        name: "Términos y Condiciones",
        href: APP_ROUTES.public.termsAndConditions,
      },
      { name: "Política de Privacidad", href: APP_ROUTES.public.privacyPolicy },
    ],
  },
];
