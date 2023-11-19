"use client";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";

export const ArticlesTotalWeigth = () => {
  const { values } = useImpCalculatorContext();

  const totalWeigth = values.items.reduce(
    (acc, curr) => acc + curr.unitWeight * curr.quantity,
    0,
  );

  return (
    <p className="text-base">
      Peso total: {totalWeigth} {totalWeigth === 1 ? "libra" : "libras"}
    </p>
  );
};
