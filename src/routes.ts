import { DocumentDuplicateIcon, HomeIcon } from "@heroicons/react/24/outline";

export const APP_ROUTES = {
  public: { root: "/", login: "/login" },
  private: { root: "/dashboard" },
};

export const DASHBOARD_LINKS = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
];
