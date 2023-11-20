"use client";
import Button from "@/src/components/Shared/FormComponents/Button";
import Iconify from "@/src/components/Shared/Iconify";
import { ITEMS_STRUCTURE } from "@/src/constants/importCalculator";
import { useImpCalculatorContext } from "@/src/hooks/useImpCalculator";
import clsx from "clsx";

export const ItemsTableHeader = () => {
  const { addRow } = useImpCalculatorContext();

  return (
    <>
      {ITEMS_STRUCTURE.map((column) => (
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
        onClick={addRow}
      >
        <Iconify icon="eva:plus-fill" />
      </Button>
    </>
  );
};
