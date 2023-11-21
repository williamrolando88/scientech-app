"use client";

import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";
import { CalculatorEditableField } from "./CalculatorEditableField";

const CalculatorNotesTable: FC = () => {
  const { values } = useImpCalculatorContext();
  return (
    <div className="flex flex-col gap-4">
      {values.notes.map((_, index) => (
        <CalculatorEditableField key={index} index={index} />
      ))}
    </div>
  );
};

export default CalculatorNotesTable;
