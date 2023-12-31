import { pathCreator } from "../lib/utils/routes";

const DASHBOARD = "/dashboard";
const CALCULATOR = "/import-calculator";

export const APP_ROUTES = {
  public: {
    root: "/",
    login: "https://app.scientech-ec.com/",
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
      new: pathCreator(DASHBOARD, CALCULATOR, "/new"),
    },
  },
};
