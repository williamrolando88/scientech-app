"use client";

import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";

const LotReport: FC = () => {
  const { totalCost, totalWeight } = useImpCalculatorContext();

  return (
    <div>
      <h4>
        Peso total:
        <span>
          <strong> {totalWeight} </strong>
        </span>
        libras
      </h4>

      <h4>
        Costo total: $
        <span>
          <strong> {totalCost}</strong>
        </span>
      </h4>
    </div>
  );
};

export default LotReport;
