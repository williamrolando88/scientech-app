import { Factura } from "@/src/types/xmlParsers";
import { TableRow } from "@tremor/react";
import { FC } from "react";
import { BillContentCell } from "./BillContentCell";
import { BillTaxesCells } from "./BillTaxesCells";

export const BillTableRow: FC<Factura> = ({ infoTributaria, infoFactura }) => {
  const { razonSocial, estab, ptoEmi, codDoc } = infoTributaria;

  const {
    fechaEmision,
    importeTotal,
    totalConImpuestos: { totalImpuesto },
  } = infoFactura;

  return (
    <TableRow>
      <BillContentCell value={fechaEmision} />
      <BillContentCell type="number" value={estab} />
      <BillContentCell type="number" value={ptoEmi} />
      <BillContentCell type="number" value={codDoc} />
      <BillContentCell value={razonSocial.toUpperCase()} />
      <BillTaxesCells data={totalImpuesto} />
      <BillContentCell type="number" value={importeTotal} />
    </TableRow>
  );
};
