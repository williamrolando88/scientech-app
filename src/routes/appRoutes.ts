import { pathCreator } from "../lib/utils/routes";

const DASHBOARD = "/dashboard";
const CALCULATOR = "/calculator";

export const APP_ROUTES = {
  public: {
    root: "/",
    login:
      process.env.NODE_ENV === "development"
        ? "/login"
        : "https://app.scientech-ec.com/login",
    products: "/products",
    contact: "/contact",
    termsAndConditions: "/terminos-y-condiciones",
    privacyPolicy: "/politica-de-privacidad",
  },
  private: {
    root: "/dashboard",
    xmlParser: "/dashboard/xml-parser",
    calculator: { root: pathCreator(DASHBOARD, CALCULATOR, "/index") },
  },
};
