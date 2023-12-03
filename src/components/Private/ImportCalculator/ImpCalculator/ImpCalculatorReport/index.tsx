import { FC } from "react";
import { ItemsSummaryGraph } from "./ItemsSummaryGraph";

export const ImpCalculatorReport: FC = () => {
  return (
    <section className="flex flex-col items-start gap-2 rounded-md border p-4">
      <h2 className="text-lg">Reporte</h2>

      <ItemsSummaryGraph />
    </section>
  );
};
