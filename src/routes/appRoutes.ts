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
    home: pathCreator(DASHBOARD, "/home"),
    xmlParser: pathCreator(DASHBOARD, "/xml-parser"),
    calculator: {
      index: pathCreator(DASHBOARD, CALCULATOR),
      create: pathCreator(DASHBOARD, CALCULATOR, "/create"),
    },
  },
};
