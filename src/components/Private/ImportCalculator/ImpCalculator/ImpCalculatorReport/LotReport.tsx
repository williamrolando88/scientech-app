"use client";

import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";

const LotReport: FC = () => {
  const { totalCost, totalWeight } = useImpCalculatorContext();

  return (
    <div className="flex gap-8 self-end">
      <p className="text-sm">
        Peso total:
        <span>
          <strong> {totalWeight} </strong>
        </span>
        libras
      </p>

      <p className="text-sm">
        Costo total: $
        <span>
          <strong> {totalCost} </strong>
        </span>
        USD
      </p>
    </div>
  );
};

export default LotReport;
