"use client";

import { SETTINGS_STRUCTURE } from "@/src/constants/importCalculator";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { loadLotData } from "@/src/lib/modules/calculator";
import { FC } from "react";
import { LotCard } from "./LotCard";

const ImpCalculatorLot: FC = () => {
  const { values } = useImpCalculatorContext();
  const lotObject = loadLotData(SETTINGS_STRUCTURE, values);

  return (
    <section className="flex flex-col items-start gap-2 rounded-md border p-4">
      <h2 className="text-lg">Detalles de Lote</h2>

      <div className="flex w-full justify-around">
        {lotObject.map((category, index) => (
          <LotCard
            key={index}
            title={category.title}
            values={category.values}
          />
        ))}
      </div>
    </section>
  );
};

export default ImpCalculatorLot;
