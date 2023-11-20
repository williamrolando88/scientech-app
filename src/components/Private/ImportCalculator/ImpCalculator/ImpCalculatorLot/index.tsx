"use client";

import InputField from "@/src/components/Shared/FormComponents/InputField";
import { SETTINGS_STRUCTURE } from "@/src/constants/importCalculator";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { loadLotData } from "@/src/lib/modules/calculator";
import { LotSchema } from "@/src/types/calculator";
import { FC, Fragment } from "react";

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

const LotCard: React.FC<LotSchema> = ({ title, values }) => {
  const { setFieldValue } = useImpCalculatorContext();

  return (
    <div className="w-80">
      <h6 className="rounded-md border border-secondary-light bg-secondary-lighter py-1 text-center font-bold">
        {title}
      </h6>
      <div className="mt-1 grid grid-cols-3 items-center gap-y-1 rounded-md border p-1">
        {values.map((value, index) => (
          <Fragment key={index}>
            <p className="col-span-2 text-base">{value.label}</p>
            <InputField
              className="h-full w-full rounded-none border-none p-0 focus:outline-none focus:ring-0"
              type="number"
              value={value.value}
              name={`settings.${value.name}`}
              onCalculationDone={setFieldValue}
              onFocus={(e) => e.target.select()}
              startAdornment={value.startSymbol}
              endAdornment={value.endSymbol}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
