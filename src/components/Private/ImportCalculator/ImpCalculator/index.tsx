import { ImpCalculatorProvider } from "@/src/hooks/useImpCalculator";
import { FC } from "react";
import ImpCalculatorControllers from "./ImpCalculatorControllers";
import ImpCalculatorItems from "./ImpCalculatorItems";
import ImpCalculatorLot from "./ImpCalculatorLot";
import ImpCalculatorNotes from "./ImpCalculatorNotes";
import { ImpCalculatorReport } from "./ImpCalculatorReport";

const ImpCalculator: FC = () => {
  return (
    <ImpCalculatorProvider>
      <div className="flex flex-col gap-6">
        <ImpCalculatorControllers />
        <ImpCalculatorItems />
        <ImpCalculatorLot />
        <ImpCalculatorNotes />
        <ImpCalculatorReport />
      </div>
    </ImpCalculatorProvider>
  );
};

export default ImpCalculator;
