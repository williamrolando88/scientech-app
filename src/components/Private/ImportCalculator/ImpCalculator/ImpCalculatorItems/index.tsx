import Button from "@/src/components/Shared/FormComponents/Button";
import { Table, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import { FC } from "react";

const ImpCalculatorItems: FC = () => {
  return (
    <section className="flex items-center justify-between rounded-md border p-4">
      <Table className="w-full">
        <CalculatorInputsTableHeader />
      </Table>
    </section>
  );
};

export default ImpCalculatorItems;

const CalculatorInputsTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell>Cant.</TableHeaderCell>
        <TableHeaderCell className="w-100">Descripción</TableHeaderCell>
        <TableHeaderCell>Peso U.</TableHeaderCell>
        <TableHeaderCell>Costo U.</TableHeaderCell>
        <TableHeaderCell>Arancel</TableHeaderCell>
        <TableHeaderCell>Margen</TableHeaderCell>
        <TableHeaderCell>Precio U.</TableHeaderCell>
        <TableHeaderCell className="p-0">
          <Button variant="success" className="h-full w-full">
            +
          </Button>
        </TableHeaderCell>
      </TableRow>
    </TableHead>
  );
};
