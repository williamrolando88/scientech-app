import logoArca from "@/src/assets/clientsLogos/Arca_logo.png";
import logoEpn from "@/src/assets/clientsLogos/EPN_logo.png";
import logoNovacero from "@/src/assets/clientsLogos/Logo-novacero-4.png";
import logoPNUD from "@/src/assets/clientsLogos/Logo_PNUD.png";
import logoEcolab from "@/src/assets/clientsLogos/ecolab.png";
import logoMotor1 from "@/src/assets/clientsLogos/motor1.png";
import logoSantaMaria from "@/src/assets/clientsLogos/santa-maria_logo.png";
import logoThoughtworks from "@/src/assets/clientsLogos/thoughtworks_logo.png";
import automation from "@/src/assets/images/automation.webp";
import callCenter from "@/src/assets/images/call-center.webp";
import hero from "@/src/assets/images/hero-picture.webp";
import hvac from "@/src/assets/images/hvac.webp";
import logistic from "@/src/assets/images/logistica.webp";
import logoPosital from "@/src/assets/providersLogos/POSITAL_logo.svg";
import logoElesa from "@/src/assets/providersLogos/elesa-vector-logo.svg";
import logoHedland from "@/src/assets/providersLogos/hedland.png";
import logoPerkins from "@/src/assets/providersLogos/perkins-engines-company-limited-logo-vector.svg";
import logoRoss from "@/src/assets/providersLogos/ross_logo.png";
import logoVivolo from "@/src/assets/providersLogos/vivolo.png";

const PICTURES = {
  homePage: {
    hero,
    cards: {
      logistic,
      hvac,
      automation,
    },
    providers: {
      logoHedland,
      logoElesa,
      logoPerkins,
      logoPosital,
      logoRoss,
      logoVivolo,
    },
    clients: {
      logoArca,
      logoEpn,
      logoNovacero,
      logoPNUD,
      logoEcolab,
      logoMotor1,
      logoSantaMaria,
      logoThoughtworks,
    },
  },
  contactPage: {
    callCenter,
  },
};

export default PICTURES;
