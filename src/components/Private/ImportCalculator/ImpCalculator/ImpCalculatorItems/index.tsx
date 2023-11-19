"use client";

import Button from "@/src/components/Shared/FormComponents/Button";
import { articlesHeader } from "@/src/constants/importCalculator";
import { ArticleData } from "@/src/types/calculator";
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

      <div className="mt-2 grid grid-cols-24 gap-1">
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
          className="col-span-2"
          color="green"
          onClick={() => alert("click")}
        >
          +
        </Button>

        {[].map((article, idx) => (
          <ArticleRow article={article} index={idx} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default ImpCalculatorItems;

interface Props {
  article: ArticleData;
  index: number;
}

const ArticleRow: React.FC<Props> = ({ article, index }) => {
  // const { deleteRow } = useCalculator();

  return (
    <>
      {articlesHeader.map((column) =>
        column.field === "input" ? (
          <div
            key={column.name}
            className={`flex items-center justify-between gap-1 rounded-md  border px-2 ${
              column.name === "name" ? "col-span-6" : "col-span-2"
            }`}
          >
            <span className="text-xs text-gray-600">{column.startSymbol}</span>
            <input
              className="h-full w-full rounded-none border-none focus:outline-none"
              type={column.type}
              value={article[column.name]}
              name={`articles.${index}.${column.name}`}
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
      <Button className="col-span-2" onClick={() => alert("index")} color="red">
        Borrar
      </Button>
    </>
  );
};
