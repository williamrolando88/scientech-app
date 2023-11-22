"use client";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { ArticleRow } from "./ArticleRow";

export const QuotedItems = () => {
  const { values } = useImpCalculatorContext();

  return values.items.map((article, idx) => (
    <ArticleRow article={article} index={idx} key={idx} />
  ));
};
