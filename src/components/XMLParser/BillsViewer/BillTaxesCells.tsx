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
        <BillContentCell text={tax1.baseImponible} />
        <BillContentCell text={tax2.baseImponible} />
        <BillContentCell text={tax2.valor} />
      </>
    );
  }

  if (data.codigoPorcentaje === "0") {
    return (
      <>
        <BillContentCell text={data.baseImponible} />
        <BillContentCell text={"0"} />
        <BillContentCell text={"0"} />
      </>
    );
  }

  return (
    <>
      <BillContentCell text={"0"} />
      <BillContentCell text={data.baseImponible} />
      <BillContentCell text={data.valor} />
    </>
  );
};
