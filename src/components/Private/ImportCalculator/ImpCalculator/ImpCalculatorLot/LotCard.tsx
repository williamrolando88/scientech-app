"use client";
import InputField from "@/src/components/Shared/FormComponents/InputField";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { LotSchema } from "@/src/types/calculator";
import { Fragment } from "react";

export const LotCard: React.FC<LotSchema> = ({ title, values }) => {
  const { setFieldValue, errors, touched } = useImpCalculatorContext();

  return (
    <div className="w-80">
      <p className="rounded-md border border-secondary-light bg-secondary-lighter py-1 text-center text-base font-bold">
        {title}
      </p>

      <div className="mt-1 grid grid-cols-3 items-center gap-y-1 rounded-md border p-1">
        {values.map((value, index) => (
          <Fragment key={index}>
            <p className="col-span-2 pl-1 text-base">{value.label}</p>
            <InputField
              className="h-full w-full rounded-none border-none p-0 focus:outline-none focus:ring-0"
              type="number"
              value={value.value}
              name={`settings.${value.name}`}
              onCalculationDone={setFieldValue}
              onFocus={(e) => e.target.select()}
              startAdornment={value.startSymbol}
              endAdornment={value.endSymbol}
              error={
                // @ts-ignore
                touched.settings?.[value.name] &&
                // @ts-ignore
                !!errors.settings?.[value.name]
              }
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
