import dynamic from "next/dynamic";
import { FC } from "react";

const ItemsSummaryGraph = dynamic(() => import("./ItemsSummaryGraph"), { ssr: false });
const LotReport = dynamic(() => import("./LotReport"), { ssr: false });

export const ImpCalculatorReport: FC = () => {
  return (
    <section className="flex flex-col items-start gap-2 rounded-md border p-4">
      <h2 className="text-lg">Reporte</h2>

      <LotReport />

      <ItemsSummaryGraph />
    </section>
  );
};
