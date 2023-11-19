import TestForm from "@/src/components/Private/Calculator/CalculatorCreate/TestForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora",
};

const page = () => {
  return (
    <div>
      <TestForm />
    </div>
  );
};

export default page;
