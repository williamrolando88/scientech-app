import { Factura } from "@/src/types/xmlParsers";
import { TableRow } from "@tremor/react";
import { FC } from "react";
import { BillContentCell } from "./BillContentCell";
import { BillTaxesCells } from "./BillTaxesCells";

export const BillTableRow: FC<Factura> = ({ infoTributaria, infoFactura }) => {
  const { ruc, razonSocial, estab, ptoEmi, codDoc } = infoTributaria;

  const {
    fechaEmision,
    importeTotal,
    totalConImpuestos: { totalImpuesto },
  } = infoFactura;

  return (
    <TableRow>
      <BillContentCell text={estab} />
      <BillContentCell text={ptoEmi} />
      <BillContentCell text={codDoc} />
      <BillContentCell text={ruc} />
      <BillContentCell text={razonSocial} />
      <BillContentCell text={fechaEmision} />
      <BillTaxesCells data={totalImpuesto} />
      <BillContentCell text={importeTotal} />
    </TableRow>
  );
};
