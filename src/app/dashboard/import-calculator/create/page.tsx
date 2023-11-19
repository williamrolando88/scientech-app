import ImpCalculator from "@/src/components/Private/ImportCalculator/ImpCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora",
};

const page = () => {
  return (
    <main>
      <ImpCalculator />
    </main>
  );
};

export default page;
