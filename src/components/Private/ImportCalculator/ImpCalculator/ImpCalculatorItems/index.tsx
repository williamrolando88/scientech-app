"use client";

import { FC } from "react";
import { ArticlesTotalWeigth } from "./ArticlesTotalWeigth";
import { ItemsTableHeader } from "./ItemsTableHeader";
import { QuotedItems } from "./QuotedItems";

const ImpCalculatorItems: FC = () => {
  return (
    <section className="w-full rounded-md border p-4">
      <div className="flex justify-between">
        <h2 className="text-lg">Detalle de Artículos</h2>
        <ArticlesTotalWeigth />
      </div>

      <div className="mt-2 grid grid-cols-23 gap-1">
        <ItemsTableHeader />
        <QuotedItems />
      </div>
    </section>
  );
};

export default ImpCalculatorItems;