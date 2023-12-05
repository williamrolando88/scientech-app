import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Calculadora de Importaciones",
};

const ImpCalculator = dynamic(
  () => import("@/src/components/Private/ImportCalculator/ImpCalculator"),
  { ssr: false },
);

const page = () => {
  return (
    <main>
      <ImpCalculator />
    </main>
  );
};

export default page;
