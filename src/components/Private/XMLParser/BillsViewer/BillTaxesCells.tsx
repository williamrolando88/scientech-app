import { FC } from "react";
import { BillContentCell, BillTaxesCellsProps } from "./BillContentCell";

export const BillTaxesCells: FC<BillTaxesCellsProps> = ({ data }) => {
  if (Array.isArray(data)) {
    let [tax1, tax2] = data;

    if (tax2.codigoPorcentaje === "0") {
      [tax1, tax2] = [tax2, tax1];
    }

    return (
      <>
        <BillContentCell type="number" value={tax1.baseImponible} />
        <BillContentCell type="number" value={tax2.baseImponible} />
        <BillContentCell type="number" value={tax2.valor} />
      </>
    );
  }

  if (data.codigoPorcentaje === "0") {
    return (
      <>
        <BillContentCell type="number" value={data.baseImponible} />
        <BillContentCell type="number" value={"0"} />
        <BillContentCell type="number" value={"0"} />
      </>
    );
  }

  return (
    <>
      <BillContentCell type="number" value={"0"} />
      <BillContentCell type="number" value={data.baseImponible} />
      <BillContentCell type="number" value={data.valor} />
    </>
  );
};
