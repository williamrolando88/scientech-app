"use client";

import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";
import { CalculatorEditableField } from "./CalculatorEditableField";

const CalculatorNotesTable: FC = () => {
  const { values } = useImpCalculatorContext();
  return (
    <div className="flex w-full flex-col gap-2">
      {values.notes.map((_, index) => (
        <CalculatorEditableField key={index} index={index} />
      ))}
    </div>
  );
};

export default CalculatorNotesTable;
