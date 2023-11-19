"use client";
import AutoCalculateInput from "@/src/components/Shared/FormComponents/AutoCalculateInput";
import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { articlesHeader } from "@/src/constants/importCalculator";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import { ImportCalculatorQuotedItem } from "@/src/types/calculator";
import clsx from "clsx";

interface ArticleRowProps {
  article: ImportCalculatorQuotedItem;
  index: number;
}
export const ArticleRow: React.FC<ArticleRowProps> = ({ article, index }) => {
  const { deleteRow, setFieldValue, handleChange } = useImpCalculatorContext();

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

            {column.type === "number" ? (
              <AutoCalculateInput
                className="h-full w-full rounded-none border-none focus:outline-none focus:ring-0"
                value={article[column.name]}
                name={`items[${index}].${column.name}`}
                onChange={setFieldValue}
              />
            ) : (
              <input
                className="h-full w-full rounded-none border-none focus:outline-none focus:ring-0"
                type={column.type}
                value={article[column.name]}
                name={`items[${index}].${column.name}`}
                onChange={handleChange}
              />
            )}
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
        onClick={() => deleteRow(index)}
        variant="error"
      >
        <Iconify icon="eva:trash-2-fill" />
      </Button>
    </>
  );
};