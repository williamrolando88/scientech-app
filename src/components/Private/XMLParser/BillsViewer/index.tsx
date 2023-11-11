import { Factura } from "@/src/types/xmlParsers";
import {
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { FC } from "react";
import { BillTableRow } from "./BillTableRow";

interface BillsViewerProps {
  bills: Factura[];
}

const BillsViewer: FC<BillsViewerProps> = ({ bills }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>F. Emi</TableHeaderCell>
          <TableHeaderCell>Est.</TableHeaderCell>
          <TableHeaderCell>Emi.</TableHeaderCell>
          <TableHeaderCell>Doc.</TableHeaderCell>
          <TableHeaderCell>Razón Social</TableHeaderCell>
          <TableHeaderCell>Subtotal 0%</TableHeaderCell>
          <TableHeaderCell>Subtotal 12%</TableHeaderCell>
          <TableHeaderCell>IVA 12%</TableHeaderCell>
          <TableHeaderCell>Total</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {bills.map((bill) => (
          <BillTableRow key={bill.infoTributaria.claveAcceso} {...bill} />
        ))}
      </TableBody>
    </Table>
  );
};

export default BillsViewer;
