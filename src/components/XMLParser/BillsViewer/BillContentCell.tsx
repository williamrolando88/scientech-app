import { TotalImpuesto } from "@/src/types/xmlParsers";
import { TableCell, Text } from "@tremor/react";
import { FC } from "react";

interface BillContentCellProps {
  text?: string;
}
export const BillContentCell: FC<BillContentCellProps> = ({ text }) => {
  return (
    <TableCell>
      <Text>{text || ""}</Text>
    </TableCell>
  );
};
export interface BillTaxesCellsProps {
  data: TotalImpuesto;
}
