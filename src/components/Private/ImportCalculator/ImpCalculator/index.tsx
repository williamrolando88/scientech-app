import { ImpCalculatorProvider } from "@/src/hooks/useImpCalculator";
import { FC } from "react";
import ImpCalculatorControllers from "./ImpCalculatorControllers";
import ImpCalculatorItems from "./ImpCalculatorItems";

const ImpCalculator: FC = () => {
  return (
    <ImpCalculatorProvider>
      <div className="flex flex-col gap-6">
        <ImpCalculatorControllers />
        <ImpCalculatorItems />
      </div>
    </ImpCalculatorProvider>
  );
};

export default ImpCalculator;
