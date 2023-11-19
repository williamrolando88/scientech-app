import CalculatorTable from "@/src/components/Private/ImportCalculator/CalculatorIndex/CalculatorTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora",
};

const page = () => {
  return (
    <main>
      <h1>Calculator</h1>
      <CalculatorTable />
    </main>
  );
};

export default page;
