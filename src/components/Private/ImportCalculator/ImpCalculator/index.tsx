import { ImpCalculatorProvider } from "@/src/hooks/useImpCalculator";
import { FC } from "react";

const ImpCalculator: FC = () => {
  return <ImpCalculatorProvider>main</ImpCalculatorProvider>;
};

export default ImpCalculator;
