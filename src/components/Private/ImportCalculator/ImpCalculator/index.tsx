import { ImpCalculatorProvider } from "@/src/hooks/useImpCalculator";
import { FC } from "react";
import ImpCalculatorControllers from "./ImpCalculatorControllers";

const ImpCalculator: FC = () => {
  return (
    <ImpCalculatorProvider>
      <ImpCalculatorControllers />
    </ImpCalculatorProvider>
  );
};

export default ImpCalculator;
