import { TotalImpuesto } from "@/src/types/xmlParsers";
import { TableCell, Text } from "@tremor/react";
import { FC } from "react";

interface BillContentCellProps {
  value: string | number;
  type?: "string" | "number";
}
export const BillContentCell: FC<BillContentCellProps> = ({
  value,
  type = "string",
}) => {
  return (
    <TableCell>
      <Text>{type === "number" ? parseFloat(String(value)) : value}</Text>
    </TableCell>
  );
};
export interface BillTaxesCellsProps {
  data: TotalImpuesto;
}
