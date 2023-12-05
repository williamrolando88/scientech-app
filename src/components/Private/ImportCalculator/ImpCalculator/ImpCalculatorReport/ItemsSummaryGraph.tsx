"use client";

import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { FC } from "react";
import Chart from "react-apexcharts";

const ItemsSummaryGraph: FC = () => {
  const { calculatorReport, values } = useImpCalculatorContext();

  if (!values.items.length) return null;

  return (
    <div className="w-full">
      <Chart
        height={values.items.length * 50 + 100}
        type="bar"
        series={calculatorReport}
        options={{
          chart: {
            type: "bar",
            stacked: true,
            stackType: "100%",
            height: "20px",
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          title: {
            text: "Summary",
          },
          xaxis: {
            categories: values.items.map((item) => item.name),
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return `$ ${val}`;
              },
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
          },
        }}
      />
    </div>
  );
};

export default ItemsSummaryGraph;
