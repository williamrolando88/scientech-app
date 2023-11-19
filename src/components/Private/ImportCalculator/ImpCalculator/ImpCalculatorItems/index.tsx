"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { articlesHeader } from "@/src/constants/importCalculator";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { ImportCalculatorQuotedItem } from "@/src/types/calculator";
import clsx from "clsx";
import { FC } from "react";

const ImpCalculatorItems: FC = () => {
  return (
    <section className="w-full rounded-md border p-4">
      <div className="flex justify-between">
        <h2 className="text-lg">Detalle de Artículos</h2>

        <p className="text-base">
          Peso total: {10} {1 === 1 ? "libra" : "libras"}
        </p>
      </div>

      <div className="mt-2 grid grid-cols-23 gap-1">
        <ItemsTableHeader />
        <QuotedItems />
      </div>
    </section>
  );
};

export default ImpCalculatorItems;

const ItemsTableHeader = () => {
  const { addArticle } = useImpCalculatorContext();

  return (
    <>
      {articlesHeader.map((column) => (
        <p
          className={clsx(
            "flex items-center justify-center rounded-md border border-secondary-light bg-secondary-lighter px-2 py-1 text-center text-base font-bold",
            {
              "col-span-8": column.name === "name",
              "col-span-2": column.name !== "name",
            },
          )}
          key={column.name}
        >
          {column.title}
        </p>
      ))}

      <Button
        type="button"
        className="col-span-1"
        variant="success"
        onClick={addArticle}
      >
        <Iconify icon="eva:plus-fill" />
      </Button>
    </>
  );
};

const QuotedItems = () => {
  const { calculatorInputs } = useImpCalculatorContext();

  // eslint-disable-next-line no-console
  console.log(calculatorInputs.items);

  return calculatorInputs.items.map((article, idx) => (
    <ArticleRow article={article} index={idx} key={idx} />
  ));
};

interface Props {
  article: ImportCalculatorQuotedItem;
  index: number;
}

const ArticleRow: React.FC<Props> = ({ article, index }) => {
  const { removeArticle } = useImpCalculatorContext();

  return (
    <>
      {articlesHeader.map((column) =>
        column.field === "input" ? (
          <div
            key={column.name}
            className={clsx(
              "flex items-center justify-between gap-1 rounded-md border px-2 focus-within:ring-2",
              {
                "col-span-8": column.name === "name",
                "col-span-2": column.name !== "name",
              },
            )}
          >
            <span className="text-xs text-gray-600">{column.startSymbol}</span>
            <input
              className="h-full w-full rounded-none border-none focus:outline-none focus:ring-0"
              type={column.type}
              value={article[column.name]}
              name={`items.${index}.${column.name}`}
            />
            <span className="text-xs text-gray-600">{column.endSymbol}</span>
          </div>
        ) : (
          <div
            key={column.name}
            className="col-span-2 flex items-center justify-between gap-1 rounded-md border bg-gray-100 px-2"
          >
            <span className="text-xs text-gray-600">{column.startSymbol}</span>
            <span className="grow">{article[column.name]}</span>
            <span className="text-xs text-gray-600">{column.endSymbol}</span>
          </div>
        ),
      )}

      <Button
        type="button"
        className="col-span-1"
        onClick={() => removeArticle(article.id)}
        variant="error"
      >
        <Iconify icon="eva:trash-2-fill" />
      </Button>
    </>
  );
};
