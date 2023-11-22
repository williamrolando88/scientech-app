import TestForm from "@/src/components/Private/ImportCalculator/Calculator/TestForm";
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
