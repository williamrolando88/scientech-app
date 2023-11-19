import { APP_ROUTES } from "@/src/routes/appRoutes";
import Link from "next/link";
import { FC } from "react";

const CalculatorTable: FC = () => {
  return (
    <div>
      <Link href={APP_ROUTES.private.calculator.create}>Create</Link>
    </div>
  );
};

export default CalculatorTable;
